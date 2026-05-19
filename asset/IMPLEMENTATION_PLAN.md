# Mancakata — Implementation Plan
## Pure Laravel MVC (Blade + Tailwind + Alpine.js)

Prototype HTML ini adalah **representasi visual** dari arsitektur data-driven yang akan dibangun. Setiap section yang Anda lihat pada `Mancakata.html` adalah komponen Blade yang akan diregister sebagai `component_name` di tabel `page_sections`.

---

## Fase 1 — Skema Database

### 1.1 `site_settings` (key-value)
```
id, key (unique), value (text/json), type (string|text|image|json), updated_at
```
Contoh row: `logo_header`, `contact_email`, `social_links`, `office_addresses`.

### 1.2 `menus` & `menu_items`
```
menus:       id, name (unique), location (navbar_primary|footer_main)
menu_items:  id, menu_id, parent_id (nullable), label, url, icon, order
```
`parent_id` mendukung dropdown / mega-menu. `order` untuk sorting.

### 1.3 `pages` & `page_sections` — **jantung sistem**
```
pages:          id, title, slug (unique), meta_title, meta_description, is_active
page_sections:  id, page_id, component_name, content (json), order
```
**`component_name`** = nama file Blade (mis. `hero-enterprise`, `service-grid`).
**`content`** = JSON dengan props untuk komponen tersebut.

### 1.4 `posts` (Blog) & `services`
```
posts:    id, title, slug, excerpt, content (HTML/WYSIWYG), image, category, status, published_at
services: id, num, title, slug, excerpt, content, image, tags (json), is_active, order
```
Template **fixed**, hanya konten dari DB.

---

## Fase 2 — Struktur Modul

```
Modules/
├── Cms/                                 (Admin Panel - prefix /admin)
│   ├── Http/Controllers/
│   │   ├── DashboardController.php
│   │   ├── PageController.php           (CRUD pages + sections repeater)
│   │   ├── PostController.php           (CRUD posts)
│   │   ├── ServiceController.php        (CRUD services)
│   │   ├── MenuController.php           (CRUD menus + drag-drop order)
│   │   └── SettingController.php        (key-value editor)
│   ├── Resources/views/
│   │   ├── layouts/admin.blade.php
│   │   └── pages/{index,create,edit}.blade.php
│   └── Routes/web.php
│
└── Web/                                 (Public Site)
    ├── Http/Controllers/
    │   ├── PageController.php           (dynamic page resolver by slug)
    │   ├── BlogController.php
    │   └── ServiceController.php
    ├── Providers/WebServiceProvider.php (View::composer untuk navigasi & settings, di-Cache)
    ├── Resources/views/
    │   ├── layouts/master.blade.php
    │   ├── components/
    │   │   ├── navbar.blade.php
    │   │   ├── footer.blade.php
    │   │   └── sections/
    │   │       ├── hero-enterprise.blade.php
    │   │       ├── hero-split.blade.php
    │   │       ├── hero-editorial.blade.php
    │   │       ├── logo-cloud.blade.php
    │   │       ├── service-grid.blade.php
    │   │       ├── stats-band.blade.php
    │   │       ├── process-steps.blade.php
    │   │       ├── feature-split.blade.php
    │   │       ├── industries.blade.php
    │   │       ├── testimonial.blade.php
    │   │       └── cta-banner.blade.php
    │   └── pages/{show,blog-index,blog-show,service-show}.blade.php
    └── Routes/web.php
```

---

## Fase 3 — Logika Web (Frontend)

### 3.1 Inject global data via View Composer
`Modules\Web\Providers\WebServiceProvider`:
```php
View::composer('web::layouts.master', function ($view) {
    $view->with([
        'navbar'   => Cache::remember('menu.navbar_primary', 3600, fn() =>
                        Menu::with('items')->where('location', 'navbar_primary')->first()),
        'footer'   => Cache::remember('menu.footer_main', 3600, fn() =>
                        Menu::with('items')->where('location', 'footer_main')->first()),
        'settings' => Cache::remember('site_settings', 3600, fn() =>
                        SiteSetting::pluck('value', 'key')),
    ]);
});
```

### 3.2 Dynamic Page Controller
```php
public function show($slug = 'home') {
    $page = Page::with(['sections' => fn($q) => $q->orderBy('order')])
        ->where('slug', $slug)->where('is_active', true)->firstOrFail();
    return view('web::pages.show', compact('page'));
}
```

### 3.3 Dynamic Component Rendering
`pages/show.blade.php`:
```blade
@extends('web::layouts.master')
@section('content')
    @foreach($page->sections as $section)
        <x-dynamic-component
            :component="'web::sections.' . $section->component_name"
            :data="$section->content" />
    @endforeach
@endsection
```

Setiap component Blade menerima `$data` array:
```blade
{{-- web::sections.hero-enterprise --}}
@props(['data' => []])
<section class="hero-enterprise">
    <span class="eyebrow">{{ $data['eyebrow'] ?? 'Penerjemahan & Lokalisasi' }}</span>
    <h1>{!! $data['title'] ?? 'Bahasa yang membuat <em>maksud</em> tetap utuh.' !!}</h1>
    {{-- ... --}}
</section>
```

---

## Fase 4 — Logika CMS (Backend Input)

### 4.1 Form Repeater untuk Page Sections (Alpine.js)
Lihat preview di tab **CMS Admin → Pages → Edit Beranda** pada prototype.
- Drag & drop untuk reorder
- Pilih `component_name` dari dropdown (pre-defined list)
- Edit `content` sebagai JSON textarea (atau form generated per component schema)
- Live preview menampilkan code Blade yang akan dirender

### 4.2 Controller pattern (CMS PageController@update)
```php
public function update(Request $request, Page $page) {
    DB::transaction(function () use ($request, $page) {
        $page->update($request->only(['title','slug','meta_title','meta_description']));
        $page->sections()->delete();
        foreach ($request->sections ?? [] as $i => $sec) {
            $page->sections()->create([
                'component_name' => $sec['component_name'],
                'content'        => is_string($sec['content']) ? json_decode($sec['content'], true) : $sec['content'],
                'order'          => $i,
            ]);
        }
    });
    Cache::forget("page.{$page->slug}");
    return back()->with('ok', 'Page diperbarui.');
}
```

### 4.3 Caching strategy
- `site_settings`, navbar, footer → cache 1 jam, invalidate on save.
- Per-page → cache by slug, invalidate on save.
- Posts list → cache by category & page, invalidate on publish.

---

## Fase 5 — Component Library (Section Catalog)

| component_name        | Used on        | Content keys                            |
|-----------------------|----------------|------------------------------------------|
| `hero-enterprise`     | Home           | eyebrow, title, subtitle                 |
| `hero-split`          | Home (variant) | eyebrow, title, subtitle, image          |
| `hero-editorial`      | Home (variant) | eyebrow, title, subtitle                 |
| `logo-cloud`          | Home, About    | label, logos[]                           |
| `service-grid`        | Home, Services | eyebrow, title, subtitle, services[]     |
| `stats-band`          | Home, About    | eyebrow, title, subtitle, stats[]        |
| `process-steps`       | Home, Services | eyebrow, title, steps[]                  |
| `feature-split`       | Home, Service  | eyebrow, title, items[], image           |
| `industries`          | Home           | eyebrow, title, subtitle, items[]        |
| `testimonial`         | Home, About    | eyebrow, title, items[]                  |
| `cta-banner`          | All            | eyebrow, title, subtitle                 |

---

## Eksekusi Selanjutnya
1. **Migration files** untuk semua tabel (Fase 1).
2. **Model + Relationship** dengan `casts: content => array`.
3. **Seeder** dengan data dari prototype HTML ini sebagai baseline.
4. **Blade components** untuk 11 sections (markup sudah tersedia di prototype).
5. **CMS controllers** dengan form repeater Alpine.js.

Prototype HTML pada `Mancakata.html` berfungsi sebagai **single source of truth** untuk markup, color tokens, typography, dan content structure.
