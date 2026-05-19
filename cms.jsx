/* Mancakata — CMS Admin
   Module: Cms (Backend)
   Demonstrates the data-driven content model from Implementation Plan
*/

function CmsAdmin({ onExit }) {
  const [view, setView] = React.useState("dashboard");

  return (
    <div style={{ minHeight: "100vh", display: "flex", background: "var(--paper-100)" }}>
      <CmsSidebar view={view} setView={setView} onExit={onExit} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <CmsTopbar />
        <main style={{ padding: 32 }}>
          {view === "dashboard" && <CmsDashboard setView={setView} />}
          {view === "pages" && <CmsPages setView={setView} />}
          {view === "page-edit" && <CmsPageEdit setView={setView} />}
          {view === "posts" && <CmsPosts />}
          {view === "services" && <CmsServices />}
          {view === "menus" && <CmsMenus />}
          {view === "settings" && <CmsSettings />}
        </main>
      </div>
    </div>
  );
}

function CmsSidebar({ view, setView, onExit }) {
  const items = [
    { key: "dashboard", label: "Dashboard", icon: "▦" },
    { key: "pages", label: "Pages", icon: "▤", count: 7 },
    { key: "posts", label: "Blog Posts", icon: "✎", count: 24 },
    { key: "services", label: "Services", icon: "◉", count: 6 },
    { key: "menus", label: "Menus", icon: "≡" },
    { key: "settings", label: "Site Settings", icon: "⚙" },
  ];
  return (
    <aside style={{
      width: 260, background: "var(--ink-900)", color: "var(--paper-100)",
      display: "flex", flexDirection: "column", minHeight: "100vh",
      position: "sticky", top: 0,
    }}>
      <div style={{ padding: "24px 24px 32px", borderBottom: "1px solid rgba(245,241,230,0.1)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="assets/logo-mancakata.jpeg" width="32" height="32" style={{ borderRadius: 999 }} />
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--paper-50)" }}>
              Manca<span style={{ color: "var(--accent-soft)" }}>K</span>ata
            </div>
            <div className="mono" style={{ fontSize: 9, color: "rgba(245,241,230,0.5)" }}>CMS · v1.0</div>
          </div>
        </div>
      </div>
      <nav style={{ padding: "16px 12px", flex: 1 }}>
        <div className="mono" style={{
          fontSize: 9, color: "rgba(245,241,230,0.4)",
          padding: "12px 12px 8px", letterSpacing: "0.12em",
        }}>CONTENT</div>
        {items.map((it) => (
          <button key={it.key} onClick={() => setView(it.key)}
            style={{
              width: "100%", display: "flex", alignItems: "center", gap: 12,
              padding: "10px 12px", borderRadius: 6,
              background: view === it.key || (view === "page-edit" && it.key === "pages")
                ? "rgba(245,241,230,0.08)" : "transparent",
              color: view === it.key || (view === "page-edit" && it.key === "pages")
                ? "var(--paper-50)" : "rgba(245,241,230,0.7)",
              border: 0, cursor: "pointer", fontSize: 14, fontFamily: "inherit",
              textAlign: "left",
            }}>
            <span style={{ width: 16, fontSize: 13 }}>{it.icon}</span>
            <span style={{ flex: 1 }}>{it.label}</span>
            {it.count !== undefined && (
              <span className="mono" style={{ fontSize: 10, color: "rgba(245,241,230,0.5)" }}>{it.count}</span>
            )}
          </button>
        ))}
      </nav>
      <div style={{ padding: 16, borderTop: "1px solid rgba(245,241,230,0.1)" }}>
        <button onClick={onExit}
          style={{
            width: "100%", display: "flex", alignItems: "center", gap: 10,
            padding: "10px 12px", borderRadius: 6,
            background: "transparent", color: "rgba(245,241,230,0.7)",
            border: "1px solid rgba(245,241,230,0.15)", cursor: "pointer",
            fontSize: 13, fontFamily: "inherit",
          }}>
          ← Kembali ke situs
        </button>
      </div>
    </aside>
  );
}

function CmsTopbar() {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "16px 32px", background: "var(--paper-50)",
      borderBottom: "1px solid var(--line)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <input placeholder="Cari konten…"
          style={{
            padding: "10px 14px", border: "1px solid var(--line)",
            borderRadius: 8, fontSize: 13, width: 280,
            background: "var(--paper-100)", outline: "none",
            fontFamily: "inherit",
          }}/>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <span className="mono" style={{ color: "var(--ink-500)" }}>● ENV: PRODUCTION</span>
        <div style={{ width: 1, height: 20, background: "var(--line)" }}></div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 999,
            background: "var(--accent)", color: "var(--paper-50)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 12, fontWeight: 500,
          }}>SP</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 500 }}>Sigit Pranoto</div>
            <div className="mono" style={{ fontSize: 10, color: "var(--ink-500)" }}>SUPER ADMIN</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CmsDashboard({ setView }) {
  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <div className="mono" style={{ color: "var(--ink-500)", marginBottom: 8 }}>DASHBOARD</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 400 }}>
          Halo, Sigit. Berikut ringkasan hari ini.
        </h1>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 }}>
        {[
          { label: "Total Pages", num: "7", delta: "+1 minggu ini" },
          { label: "Blog Posts", num: "24", delta: "+3 minggu ini" },
          { label: "Page Sections", num: "63", delta: "Aktif di 7 pages" },
          { label: "Pengunjung 30 hari", num: "48,2k", delta: "+12% dari periode lalu" },
        ].map((s) => (
          <div key={s.label} className="card" style={{ padding: 24, background: "var(--paper-50)" }}>
            <div className="mono" style={{ color: "var(--ink-500)", marginBottom: 12, fontSize: 10 }}>
              {s.label.toUpperCase()}
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 400 }}>{s.num}</div>
            <div className="body-sm" style={{ marginTop: 8 }}>{s.delta}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 16 }}>
        <div className="card" style={{ padding: 24, background: "var(--paper-50)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 400 }}>Aktivitas terbaru</h2>
            <a href="#" style={{ fontSize: 13, color: "var(--accent)" }}>Lihat semua →</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {[
              { who: "Sigit P.", what: "mengupdate page", target: "Beranda", when: "5 menit lalu" },
              { who: "Anita W.", what: "mempublikasikan post", target: "Mengapa pseudo-localization wajib…", when: "2 jam lalu" },
              { who: "Roni S.", what: "menambah section", target: "stats-band di /about", when: "5 jam lalu" },
              { who: "Sigit P.", what: "mengubah site setting", target: "logo_header", when: "Kemarin" },
              { who: "Anita W.", what: "menambah menu item", target: "Karier di navbar_primary", when: "2 hari lalu" },
            ].map((a, i) => (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "32px 1fr auto", gap: 12,
                padding: "12px 0",
                borderBottom: i < 4 ? "1px solid var(--line)" : "none",
                alignItems: "center",
              }}>
                <div style={{
                  width: 28, height: 28, borderRadius: 999, background: "var(--paper-200)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 500,
                }}>{a.who.split(" ").map(w => w[0]).join("")}</div>
                <div style={{ fontSize: 14 }}>
                  <strong>{a.who}</strong> {a.what} <span style={{ color: "var(--accent)" }}>{a.target}</span>
                </div>
                <div className="mono" style={{ fontSize: 10, color: "var(--ink-500)" }}>{a.when}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="card" style={{ padding: 24, background: "var(--paper-50)" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 400, marginBottom: 24 }}>Quick actions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { label: "Edit Beranda", action: () => setView("page-edit") },
              { label: "Tulis Post Baru", action: () => setView("posts") },
              { label: "Tambah Service", action: () => setView("services") },
              { label: "Atur Menu Navbar", action: () => setView("menus") },
              { label: "Update Site Settings", action: () => setView("settings") },
            ].map((q) => (
              <button key={q.label} onClick={q.action} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "12px 14px", borderRadius: 8,
                background: "var(--paper-100)", border: "1px solid var(--line)",
                fontSize: 14, cursor: "pointer", fontFamily: "inherit",
                textAlign: "left", color: "var(--ink-900)",
              }}>
                {q.label}
                <ArrowDownRight />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CmsPages({ setView }) {
  const pages = [
    { title: "Beranda", slug: "/", sections: 9, status: "Published", updated: "5 menit lalu" },
    { title: "Layanan", slug: "/layanan", sections: 4, status: "Published", updated: "3 hari lalu" },
    { title: "Lokalisasi Software & Web", slug: "/layanan/lokalisasi", sections: 6, status: "Published", updated: "1 minggu lalu" },
    { title: "Tentang Kami", slug: "/tentang", sections: 5, status: "Published", updated: "2 minggu lalu" },
    { title: "Insights", slug: "/insights", sections: 3, status: "Published", updated: "Kemarin" },
    { title: "Kontak", slug: "/kontak", sections: 2, status: "Published", updated: "1 bulan lalu" },
    { title: "Karier (Coming Soon)", slug: "/karier", sections: 1, status: "Draft", updated: "5 hari lalu" },
  ];
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <div>
          <div className="mono" style={{ color: "var(--ink-500)", marginBottom: 8 }}>PAGES</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 400 }}>Pages</h1>
        </div>
        <button className="btn btn-primary">+ Tambah Page</button>
      </div>

      <div className="card" style={{ background: "var(--paper-50)", overflow: "hidden" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "2fr 2fr 1fr 1fr 1fr 80px",
          gap: 16, padding: "14px 24px",
          background: "var(--paper-100)", borderBottom: "1px solid var(--line)",
        }}>
          {["Title", "Slug", "Sections", "Status", "Updated", ""].map((h) => (
            <div key={h} className="mono" style={{ color: "var(--ink-500)", fontSize: 10 }}>{h}</div>
          ))}
        </div>
        {pages.map((p, i) => (
          <div key={i} onClick={() => setView("page-edit")} style={{
            display: "grid", gridTemplateColumns: "2fr 2fr 1fr 1fr 1fr 80px",
            gap: 16, padding: "16px 24px",
            borderBottom: i < pages.length - 1 ? "1px solid var(--line)" : "none",
            alignItems: "center", cursor: "pointer",
            background: "transparent",
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = "var(--paper-100)"}
          onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
          >
            <div style={{ fontSize: 14, fontWeight: 500 }}>{p.title}</div>
            <div className="mono" style={{ color: "var(--ink-500)" }}>{p.slug}</div>
            <div style={{ fontSize: 13 }}>{p.sections} sections</div>
            <div>
              <span style={{
                fontSize: 11, padding: "3px 8px", borderRadius: 999,
                background: p.status === "Published" ? "rgba(21,102,61,0.1)" : "rgba(184,104,42,0.12)",
                color: p.status === "Published" ? "var(--accent-ink)" : "var(--accent-2-ink)",
                fontFamily: "var(--font-mono)", letterSpacing: "0.04em", textTransform: "uppercase",
              }}>{p.status}</span>
            </div>
            <div className="body-sm">{p.updated}</div>
            <div style={{ textAlign: "right", color: "var(--ink-500)" }}>···</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CmsPageEdit({ setView }) {
  const [sections, setSections] = React.useState([
    { component: "hero-enterprise", label: "Hero Enterprise", content: { title: "Bahasa yang membuat maksud tetap utuh.", eyebrow: "Penerjemahan & Lokalisasi" } },
    { component: "logo-cloud", label: "Logo Cloud", content: { label: "Dipercaya oleh 320+ perusahaan" } },
    { component: "service-grid", label: "Service Grid", content: { eyebrow: "Layanan" } },
    { component: "stats-band", label: "Stats Band", content: {} },
    { component: "process-steps", label: "Process Steps", content: {} },
    { component: "feature-split", label: "Feature Split", content: {} },
    { component: "industries", label: "Industries", content: {} },
    { component: "testimonial", label: "Testimonial", content: {} },
    { component: "cta-banner", label: "CTA Banner", content: {} },
  ]);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [draggedIdx, setDraggedIdx] = React.useState(null);

  const componentLibrary = [
    "hero-enterprise", "hero-split", "hero-editorial",
    "logo-cloud", "service-grid", "stats-band",
    "process-steps", "feature-split", "industries",
    "testimonial", "cta-banner",
  ];

  const removeSection = (i) => setSections(sections.filter((_, j) => j !== i));
  const addSection = (comp) => setSections([...sections, { component: comp, label: comp, content: {} }]);

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <div>
          <button onClick={() => setView("pages")} style={{
            background: "transparent", border: 0, fontSize: 13, color: "var(--ink-500)",
            cursor: "pointer", marginBottom: 8, fontFamily: "inherit",
          }}>← Kembali ke Pages</button>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 400 }}>
            Edit: Beranda
          </h1>
          <div className="mono" style={{ color: "var(--ink-500)", marginTop: 4 }}>SLUG: / · {sections.length} SECTIONS</div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn btn-secondary">Preview</button>
          <button className="btn btn-primary">Save & Publish</button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "320px 1fr 320px", gap: 16 }}>
        {/* Section list (repeater) */}
        <div className="card" style={{ background: "var(--paper-50)", padding: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div className="mono" style={{ color: "var(--ink-500)", fontSize: 10 }}>PAGE_SECTIONS</div>
            <span className="mono" style={{ fontSize: 10, color: "var(--ink-400)" }}>{sections.length}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {sections.map((s, i) => (
              <div key={i}
                draggable
                onDragStart={() => setDraggedIdx(i)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => {
                  if (draggedIdx === null || draggedIdx === i) return;
                  const next = [...sections];
                  const [moved] = next.splice(draggedIdx, 1);
                  next.splice(i, 0, moved);
                  setSections(next);
                  setActiveIdx(i);
                  setDraggedIdx(null);
                }}
                onClick={() => setActiveIdx(i)}
                style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "10px 12px", borderRadius: 6,
                  background: activeIdx === i ? "var(--ink-900)" : "var(--paper-100)",
                  color: activeIdx === i ? "var(--paper-50)" : "var(--ink-900)",
                  cursor: "pointer", fontSize: 13,
                  border: "1px solid",
                  borderColor: activeIdx === i ? "var(--ink-900)" : "var(--line)",
                }}
              >
                <span style={{ color: activeIdx === i ? "rgba(245,241,230,0.5)" : "var(--ink-400)", fontSize: 11, cursor: "grab" }}>⋮⋮</span>
                <span className="mono" style={{ fontSize: 10, color: activeIdx === i ? "rgba(245,241,230,0.6)" : "var(--ink-400)" }}>
                  /{String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ flex: 1, fontWeight: 500 }}>{s.label}</span>
                <button onClick={(e) => { e.stopPropagation(); removeSection(i); }}
                  style={{
                    background: "transparent", border: 0,
                    color: activeIdx === i ? "rgba(245,241,230,0.6)" : "var(--ink-400)",
                    cursor: "pointer", fontSize: 14,
                  }}>×</button>
              </div>
            ))}
          </div>
          <div style={{
            marginTop: 16, paddingTop: 16,
            borderTop: "1px solid var(--line)",
          }}>
            <div className="mono" style={{ color: "var(--ink-500)", fontSize: 10, marginBottom: 8 }}>+ TAMBAH SECTION</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {componentLibrary.map((c) => (
                <button key={c} onClick={() => addSection(c)}
                  className="tag"
                  style={{ cursor: "pointer", padding: "5px 10px", fontSize: 10 }}>
                  + {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Preview canvas */}
        <div style={{
          background: "var(--paper-200)", borderRadius: 12,
          padding: 16, minHeight: 600,
          backgroundImage: "radial-gradient(circle, var(--ink-300) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}>
          <div style={{
            background: "var(--paper-50)", borderRadius: 8,
            border: "1px solid var(--line)", overflow: "hidden",
            height: 600, display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column", gap: 16, padding: 32, textAlign: "center",
          }}>
            <div className="mono" style={{ color: "var(--ink-500)" }}>LIVE PREVIEW · /</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 400 }}>
              Section {activeIdx + 1}: <span style={{ color: "var(--accent)" }}>{sections[activeIdx]?.component}</span>
            </div>
            <div style={{
              padding: "20px 24px", background: "var(--paper-100)",
              borderRadius: 8, border: "1px solid var(--line)",
              fontFamily: "var(--font-mono)", fontSize: 11, textAlign: "left",
              maxWidth: 480, color: "var(--ink-700)",
            }}>
              {`<x-dynamic-component`}<br/>
              &nbsp;&nbsp;{`:component="'web::sections.${sections[activeIdx]?.component}'"`}<br/>
              &nbsp;&nbsp;{`:data="$section->content" />`}
            </div>
            <p className="body-sm" style={{ maxWidth: 380 }}>
              Blade dynamic component akan dipanggil dengan nama file dari <code style={{
                fontFamily: "var(--font-mono)", padding: "2px 6px",
                background: "var(--paper-200)", borderRadius: 4, fontSize: 12,
              }}>page_sections.component_name</code> dan data dari <code style={{
                fontFamily: "var(--font-mono)", padding: "2px 6px",
                background: "var(--paper-200)", borderRadius: 4, fontSize: 12,
              }}>page_sections.content</code>.
            </p>
          </div>
        </div>

        {/* Inspector / data */}
        <div className="card" style={{ background: "var(--paper-50)", padding: 16 }}>
          <div className="mono" style={{ color: "var(--ink-500)", fontSize: 10, marginBottom: 12 }}>SECTION INSPECTOR</div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 11, color: "var(--ink-500)", display: "block", marginBottom: 4 }}>component_name</label>
            <select className="form-input" value={sections[activeIdx]?.component} onChange={(e) => {
              const next = [...sections]; next[activeIdx].component = e.target.value;
              next[activeIdx].label = e.target.value;
              setSections(next);
            }}>
              {componentLibrary.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ fontSize: 11, color: "var(--ink-500)", display: "block", marginBottom: 4 }}>order</label>
            <input className="form-input" value={activeIdx + 1} readOnly style={{ background: "var(--paper-100)" }} />
          </div>
          <div>
            <label style={{ fontSize: 11, color: "var(--ink-500)", display: "block", marginBottom: 4 }}>content (JSON)</label>
            <textarea className="form-input"
              value={JSON.stringify(sections[activeIdx]?.content || {}, null, 2)}
              onChange={(e) => {
                try {
                  const parsed = JSON.parse(e.target.value);
                  const next = [...sections]; next[activeIdx].content = parsed;
                  setSections(next);
                } catch {}
              }}
              rows={14}
              style={{
                fontFamily: "var(--font-mono)", fontSize: 11,
                lineHeight: 1.6, color: "var(--ink-800)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CmsPosts() {
  const posts = [
    { title: "Mengapa pseudo-localization wajib dilakukan…", cat: "Lokalisasi", status: "Published", date: "12 Apr 2026" },
    { title: "5 kesalahan umum dalam dokumen due diligence…", cat: "Industri", status: "Published", date: "08 Apr 2026" },
    { title: "Memilih CAT tool untuk tim in-house", cat: "Workflow", status: "Published", date: "02 Apr 2026" },
    { title: "Bagaimana kami melokalkan superapp ke 6 pasar…", cat: "Studi Kasus", status: "Published", date: "25 Mar 2026" },
    { title: "AI translation sudah cukup baik. Lalu kenapa…", cat: "Tren", status: "Draft", date: "20 Mar 2026" },
    { title: "Bahasa Indonesia formal vs casual", cat: "Bahasa", status: "Published", date: "10 Mar 2026" },
  ];
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 32 }}>
        <div>
          <div className="mono" style={{ color: "var(--ink-500)", marginBottom: 8 }}>BLOG POSTS</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 400 }}>Posts</h1>
          <p className="body-sm" style={{ marginTop: 8 }}>
            Template fixed, content dari database (title, slug, excerpt, content HTML, image, status).
          </p>
        </div>
        <button className="btn btn-primary">+ Post Baru</button>
      </div>
      <div className="card" style={{ background: "var(--paper-50)" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "3fr 1fr 1fr 1fr 80px",
          gap: 16, padding: "14px 24px", background: "var(--paper-100)",
          borderBottom: "1px solid var(--line)",
        }}>
          {["Title", "Category", "Status", "Date", ""].map((h) => (
            <div key={h} className="mono" style={{ color: "var(--ink-500)", fontSize: 10 }}>{h}</div>
          ))}
        </div>
        {posts.map((p, i) => (
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "3fr 1fr 1fr 1fr 80px",
            gap: 16, padding: "16px 24px",
            borderBottom: i < posts.length - 1 ? "1px solid var(--line)" : "none",
            alignItems: "center",
          }}>
            <div style={{ fontSize: 14, fontWeight: 500 }}>{p.title}</div>
            <div className="body-sm">{p.cat}</div>
            <div>
              <span style={{
                fontSize: 11, padding: "3px 8px", borderRadius: 999,
                background: p.status === "Published" ? "rgba(21,102,61,0.1)" : "rgba(184,104,42,0.12)",
                color: p.status === "Published" ? "var(--accent-ink)" : "var(--accent-2-ink)",
                fontFamily: "var(--font-mono)", letterSpacing: "0.04em", textTransform: "uppercase",
              }}>{p.status}</span>
            </div>
            <div className="body-sm">{p.date}</div>
            <div style={{ textAlign: "right", color: "var(--ink-500)" }}>···</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CmsServices() {
  const services = [
    { num: "01", title: "Penerjemahan Dokumen", status: "Active" },
    { num: "02", title: "Lokalisasi Software & Web", status: "Active" },
    { num: "03", title: "Subtitle & Dubbing", status: "Active" },
    { num: "04", title: "Interpreter Konferensi", status: "Active" },
    { num: "05", title: "Transcreation", status: "Active" },
    { num: "06", title: "Sertifikasi & Tersumpah", status: "Active" },
  ];
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 32 }}>
        <div>
          <div className="mono" style={{ color: "var(--ink-500)", marginBottom: 8 }}>SERVICES</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 400 }}>Services</h1>
          <p className="body-sm" style={{ marginTop: 8 }}>
            Template fixed, content dari database (title, slug, excerpt, content, image, status).
          </p>
        </div>
        <button className="btn btn-primary">+ Service Baru</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
        {services.map((s, i) => (
          <div key={i} className="card" style={{ padding: 24, background: "var(--paper-50)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 16 }}>
              <span className="mono" style={{ color: "var(--ink-400)" }}>/{s.num}</span>
              <span style={{
                fontSize: 11, padding: "3px 8px", borderRadius: 999,
                background: "rgba(21,102,61,0.1)", color: "var(--accent-ink)",
                fontFamily: "var(--font-mono)", letterSpacing: "0.04em", textTransform: "uppercase",
              }}>{s.status}</span>
            </div>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 400, marginBottom: 16 }}>{s.title}</h3>
            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
              <button className="btn btn-secondary" style={{ padding: "8px 14px", fontSize: 12 }}>Edit</button>
              <button className="btn btn-ghost" style={{ padding: "8px 4px", fontSize: 12 }}>Lihat di situs →</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CmsMenus() {
  const [activeMenu, setActiveMenu] = React.useState("navbar_primary");
  const menus = {
    navbar_primary: [
      { label: "Layanan", url: "/layanan", children: [
        { label: "Penerjemahan Dokumen", url: "/layanan/penerjemahan" },
        { label: "Lokalisasi Software", url: "/layanan/lokalisasi" },
        { label: "Subtitle & Dubbing", url: "/layanan/subtitle" },
      ]},
      { label: "Industri", url: "#" },
      { label: "Insights", url: "/insights" },
      { label: "Tentang Kami", url: "/tentang" },
      { label: "Kontak", url: "/kontak" },
    ],
    footer_main: [
      { label: "Layanan", url: "#" },
      { label: "Industri", url: "#" },
      { label: "Perusahaan", url: "#" },
      { label: "Sumber Daya", url: "#" },
    ],
  };
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 32 }}>
        <div>
          <div className="mono" style={{ color: "var(--ink-500)", marginBottom: 8 }}>MENUS & MENU_ITEMS</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 400 }}>Menus</h1>
          <p className="body-sm" style={{ marginTop: 8 }}>
            Navigasi navbar dan footer, lengkap dengan parent_id untuk dropdown / mega menu.
          </p>
        </div>
        <button className="btn btn-primary">+ Menu Item</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 16 }}>
        <div className="card" style={{ padding: 12, background: "var(--paper-50)" }}>
          <div className="mono" style={{ color: "var(--ink-500)", fontSize: 10, padding: "8px 12px" }}>LOKASI MENU</div>
          {Object.keys(menus).map((m) => (
            <button key={m} onClick={() => setActiveMenu(m)} style={{
              width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "10px 12px", borderRadius: 6, marginBottom: 4,
              background: activeMenu === m ? "var(--ink-900)" : "transparent",
              color: activeMenu === m ? "var(--paper-50)" : "var(--ink-900)",
              border: 0, cursor: "pointer", fontFamily: "inherit", fontSize: 13,
              textAlign: "left",
            }}>
              <span className="mono" style={{ fontSize: 11 }}>{m}</span>
              <span className="mono" style={{ fontSize: 10, opacity: 0.6 }}>{menus[m].length}</span>
            </button>
          ))}
        </div>
        <div className="card" style={{ padding: 24, background: "var(--paper-50)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {menus[activeMenu].map((it, i) => (
              <React.Fragment key={i}>
                <div style={{
                  display: "grid", gridTemplateColumns: "20px 1fr 1.5fr 80px",
                  gap: 16, padding: "12px 16px", background: "var(--paper-100)",
                  borderRadius: 6, alignItems: "center", border: "1px solid var(--line)",
                }}>
                  <span style={{ color: "var(--ink-400)", cursor: "grab" }}>⋮⋮</span>
                  <input className="form-input" style={{ padding: "6px 10px", fontSize: 13 }} defaultValue={it.label} />
                  <input className="form-input" style={{ padding: "6px 10px", fontSize: 13, fontFamily: "var(--font-mono)" }} defaultValue={it.url} />
                  <button style={{ background: "transparent", border: 0, color: "var(--ink-500)", cursor: "pointer" }}>Hapus</button>
                </div>
                {it.children && it.children.map((c, j) => (
                  <div key={j} style={{
                    display: "grid", gridTemplateColumns: "20px 1fr 1.5fr 80px",
                    gap: 16, padding: "10px 16px", marginLeft: 32,
                    background: "var(--paper-50)",
                    borderRadius: 6, alignItems: "center", border: "1px solid var(--line)",
                  }}>
                    <span style={{ color: "var(--ink-400)", cursor: "grab", fontSize: 11 }}>⋮⋮</span>
                    <input className="form-input" style={{ padding: "6px 10px", fontSize: 12 }} defaultValue={c.label} />
                    <input className="form-input" style={{ padding: "6px 10px", fontSize: 12, fontFamily: "var(--font-mono)" }} defaultValue={c.url} />
                    <button style={{ background: "transparent", border: 0, color: "var(--ink-500)", cursor: "pointer", fontSize: 12 }}>Hapus</button>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CmsSettings() {
  const settings = [
    { key: "logo_header", type: "image", value: "assets/logo-mancakata.jpeg", desc: "Logo utama di navbar" },
    { key: "logo_footer", type: "image", value: "assets/logo-mancakata.jpeg", desc: "Logo di footer (versi inverted)" },
    { key: "site_name", type: "string", value: "PT MancaKata", desc: "Nama perusahaan" },
    { key: "site_tagline", type: "string", value: "Penerjemahan & Lokalisasi Profesional", desc: "Tagline pendek" },
    { key: "contact_email", type: "string", value: "halo@mancakata.id", desc: "Email kontak utama" },
    { key: "contact_phone", type: "string", value: "+62 21 5000 1414", desc: "Telepon kantor" },
    { key: "contact_whatsapp", type: "string", value: "+62 811 1414 414", desc: "WhatsApp business" },
    { key: "social_links", type: "json", value: '{"linkedin":"…","instagram":"…","twitter":"…"}', desc: "Link sosmed (JSON)" },
    { key: "office_addresses", type: "json", value: "[{...3 kantor...}]", desc: "Alamat kantor (JSON array)" },
    { key: "footer_copyright", type: "string", value: "© 2026 PT Mancakata Nusantara", desc: "Copyright text" },
    { key: "google_analytics_id", type: "string", value: "G-XXXXXXXXXX", desc: "Google Analytics tracking ID" },
  ];
  return (
    <div>
      <div style={{ marginBottom: 32 }}>
        <div className="mono" style={{ color: "var(--ink-500)", marginBottom: 8 }}>SITE_SETTINGS</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 400 }}>Site Settings</h1>
        <p className="body-sm" style={{ marginTop: 8 }}>
          Key-value store untuk pengaturan global. Auto-injected ke semua views via View::composer + Cache.
        </p>
      </div>
      <div className="card" style={{ background: "var(--paper-50)" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "200px 80px 1.4fr 1fr 80px",
          gap: 16, padding: "14px 24px", background: "var(--paper-100)",
          borderBottom: "1px solid var(--line)",
        }}>
          {["Key", "Type", "Value", "Description", ""].map((h) => (
            <div key={h} className="mono" style={{ color: "var(--ink-500)", fontSize: 10 }}>{h}</div>
          ))}
        </div>
        {settings.map((s, i) => (
          <div key={i} style={{
            display: "grid", gridTemplateColumns: "200px 80px 1.4fr 1fr 80px",
            gap: 16, padding: "16px 24px",
            borderBottom: i < settings.length - 1 ? "1px solid var(--line)" : "none",
            alignItems: "center",
          }}>
            <div className="mono" style={{ fontSize: 12, color: "var(--ink-900)" }}>{s.key}</div>
            <div>
              <span className="tag" style={{ fontSize: 9, padding: "3px 8px" }}>{s.type}</span>
            </div>
            <input className="form-input" defaultValue={s.value}
              style={{ padding: "8px 12px", fontSize: 13, fontFamily: s.type === "json" ? "var(--font-mono)" : "inherit" }} />
            <div className="body-sm">{s.desc}</div>
            <div style={{ textAlign: "right", color: "var(--ink-500)" }}>···</div>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { CmsAdmin });
