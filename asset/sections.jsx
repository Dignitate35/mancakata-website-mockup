/* Mancakata — Section components
   Each component takes a `data` prop matching what page_sections.content
   would store as JSON. Mirrors `<x-dynamic-component :component=...>` Blade pattern.
*/

/* ============ HERO ENTERPRISE ============ */
function HeroEnterprise({ data, onNavigate }) {
  const d = data || {};
  return (
    <section style={{ position: "relative", paddingTop: 80, paddingBottom: 120, overflow: "hidden" }}>
      <div className="container container-wide">
        <div style={{ maxWidth: 1100, marginBottom: 72 }}>
          <div className="eyebrow" style={{ marginBottom: 32 }}>{d.eyebrow || "Penerjemahan & Lokalisasi"}</div>
          <h1 className="display-1">
            {d.title || (
              <>Bahasa yang membuat <em>maksud</em> tetap utuh.</>
            )}
          </h1>
          <p className="lead" style={{ marginTop: 36, maxWidth: 640 }}>
            {d.subtitle || "Mancakata membantu perusahaan global, lembaga, dan media menerjemahkan setiap dokumen, produk digital, dan pesan tanpa kehilangan nuansa."}
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 44, flexWrap: "wrap" }}>
            <button className="btn btn-primary" onClick={() => onNavigate?.("contact")}>
              Mulai Proyek
              <ArrowIcon size={12} />
            </button>
            <button className="btn btn-secondary" onClick={() => onNavigate?.("services")}>
              Lihat Layanan
            </button>
          </div>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "1.7fr 1fr 1fr", gap: 16, height: 460,
        }}>
          <div className="imgph" style={{ borderRadius: "var(--radius-xl)" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ marginBottom: 8 }}>◐</div>
              <div>FOTO LINGUIST · STUDIO</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { num: "12,4M", em: "M", label: "kata diterjemahkan tahun 2025", tone: "tint" },
              { num: "74", label: "pasangan bahasa aktif", tone: "white" },
            ].map((s, i) => (
              <div key={i} style={{
                flex: 1, padding: 28,
                background: s.tone === "tint" ? "var(--tint-100)" : "var(--paper-50)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius-xl)",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
              }}>
                <div className="mono" style={{ color: "var(--ink-500)" }}>
                  {i === 0 ? "VOLUME 2025" : "BAHASA"}
                </div>
                <div>
                  <div className="stat-num">
                    {s.num.split('').map((c, j) =>
                      /[a-zA-Z]/.test(c)
                        ? <em key={j}>{c}</em>
                        : c
                    )}
                  </div>
                  <div style={{ marginTop: 8, fontSize: 13, color: "var(--ink-700)" }}>
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{
            background: "var(--paper-50)",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius-xl)",
            padding: 28,
            display: "flex", flexDirection: "column", justifyContent: "space-between",
          }}>
            <div className="mono" style={{ color: "var(--ink-500)" }}>SLA TYPICAL</div>
            <div>
              <div className="stat-num">
                &lt;<em>24</em>j
              </div>
              <div style={{ marginTop: 8, fontSize: 13, color: "var(--ink-700)" }}>
                untuk dokumen ≤2k kata, dengan QA dua tingkat oleh editor senior.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ HERO SPLIT (variation) ============ */
function HeroSplit({ data, onNavigate }) {
  const d = data || {};
  return (
    <section style={{ paddingTop: 32, paddingBottom: 96 }}>
      <div className="container container-wide" style={{
        display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "center",
        minHeight: "calc(100vh - 200px)",
      }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 32 }}>{d.eyebrow || "Sejak 2014"}</div>
          <h1 className="display-1">
            {d.title || <>Setiap kata <em>punya tempat</em> di dunia.</>}
          </h1>
          <p className="lead" style={{ marginTop: 32, maxWidth: 540 }}>
            {d.subtitle || "Tim linguist, editor, dan localization engineer kami menerjemahkan dengan presisi industri — dari kontrak hukum hingga string aplikasi mobile."}
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 40 }}>
            <button className="btn btn-primary" onClick={() => onNavigate?.("contact")}>
              Konsultasi Gratis <ArrowIcon size={12} />
            </button>
            <button className="btn btn-ghost" onClick={() => onNavigate?.("services")}>
              Cara Kerja Kami
              <ArrowIcon size={12} />
            </button>
          </div>
        </div>
        <div className="imgph" style={{
          height: 600, borderRadius: "var(--radius-lg)",
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>✻</div>
            <div>POTRET LINGUIST · 4:5</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ HERO EDITORIAL (variation) ============ */
function HeroEditorial({ data, onNavigate }) {
  const d = data || {};
  return (
    <section style={{ paddingTop: 32, paddingBottom: 80 }}>
      <div className="container container-wide">
        <div className="eyebrow" style={{ marginBottom: 64 }}>{d.eyebrow || "Edisi 2026"}</div>
        <h1 className="display-1" style={{ fontSize: "clamp(64px, 9vw, 160px)", textAlign: "center", maxWidth: "100%" }}>
          {d.title || <>Bahasa, <em>diterjemahkan</em><br/>dengan ketelitian.</>}
        </h1>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr auto 1fr",
          gap: 32, alignItems: "end", marginTop: 80, paddingTop: 32,
          borderTop: "1px solid var(--line)",
        }}>
          <div className="mono" style={{ color: "var(--ink-500)" }}>
            JKT · SGP · KL — TIM LINGUIST 240+
          </div>
          <button className="btn btn-primary" onClick={() => onNavigate?.("contact")}>
            Mulai Proyek <ArrowIcon size={12} />
          </button>
          <p className="body-sm" style={{ textAlign: "right", maxWidth: 360, marginLeft: "auto" }}>
            {d.subtitle || "Penerjemahan dokumen, lokalisasi software, subtitle, dan interpreter konferensi untuk perusahaan dan lembaga."}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============ LOGO CLOUD ============ */
function LogoCloud({ data }) {
  const d = data || {};
  const logos = d.logos || [
    "Bank Mandiri", "Telkom", "GoTo", "Tokopedia", "Pertamina",
    "Bukalapak", "Sinar Mas", "Astra", "Mayora", "BCA",
    "Indofood", "Traveloka",
  ];
  return (
    <section style={{ padding: "48px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="container container-wide">
        <div style={{ display: "flex", alignItems: "center", gap: 48, marginBottom: 32 }}>
          <div className="mono" style={{ color: "var(--ink-500)" }}>
            {d.label || "DIPERCAYA OLEH 320+ PERUSAHAAN DAN LEMBAGA"}
          </div>
          <div style={{ flex: 1, height: 1, background: "var(--line)" }}></div>
        </div>
        <div style={{ overflow: "hidden", maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}>
          <div className="marquee">
            {[...logos, ...logos].map((name, i) => (
              <div key={i} style={{
                fontFamily: "var(--font-display)",
                fontSize: 28,
                fontWeight: 400,
                color: "var(--ink-400)",
                whiteSpace: "nowrap",
                fontStyle: i % 3 === 0 ? "italic" : "normal",
              }}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ SERVICE GRID ============ */
function ServiceGrid({ data, onNavigate }) {
  const d = data || {};
  const services = d.services || [
    {
      num: "01",
      title: "Penerjemahan Dokumen",
      desc: "Hukum, medis, finansial, teknis, akademik. Diterjemahkan oleh linguist spesialis bidang dengan QA dua tingkat.",
      tags: ["Kontrak", "Laporan tahunan", "Dokumen klinis"],
    },
    {
      num: "02",
      title: "Lokalisasi Software & Web",
      desc: "Adaptasi UI strings, mobile apps, dan situs web. Termasuk i18n setup, pseudo-localization, dan QA linguistik in-context.",
      tags: ["iOS / Android", "Web app", "Help docs"],
    },
    {
      num: "03",
      title: "Subtitle & Dubbing",
      desc: "Transkripsi, time-coding, terjemahan, dan kontrol kualitas audiovisual untuk OTT, e-learning, dan media digital.",
      tags: ["SRT / VTT", "Closed caption", "Voice-over"],
    },
    {
      num: "04",
      title: "Interpreter Konferensi",
      desc: "Simultan, konsekutif, dan whisper untuk acara korporat, diplomatik, dan medis — onsite maupun daring.",
      tags: ["Simultan", "Konsekutif", "Hybrid event"],
    },
    {
      num: "05",
      title: "Transcreation",
      desc: "Adaptasi kreatif untuk pemasaran — slogan, copy iklan, narasi brand — yang tetap menjual di pasar lokal.",
      tags: ["Brand voice", "Iklan", "Konten sosial"],
    },
    {
      num: "06",
      title: "Sertifikasi & Tersumpah",
      desc: "Penerjemah tersumpah resmi dengan stempel dan tanda tangan, untuk dokumen legal, imigrasi, dan apostille.",
      tags: ["Tersumpah", "Notaris", "Apostille"],
    },
  ];
  return (
    <section className="section">
      <div className="container container-wide">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>{d.eyebrow || "Layanan"}</div>
            <h2 className="display-2">
              {d.title || <>Enam jalur, <em>satu standar</em> mutu.</>}
            </h2>
          </div>
          <p className="lead">
            {d.subtitle || "Setiap layanan ditangani tim spesialis dengan alur kerja yang sama: linguist senior, editor, dan QA bahasa-target."}
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          borderTop: "1px solid var(--line)",
          borderLeft: "1px solid var(--line)",
        }}>
          {services.map((s, i) => (
            <a
              key={i}
              href="#"
              onClick={(e) => { e.preventDefault(); onNavigate?.("service-detail"); }}
              style={{
                padding: "40px 32px 32px",
                borderRight: "1px solid var(--line)",
                borderBottom: "1px solid var(--line)",
                display: "flex", flexDirection: "column", gap: 16,
                transition: "background 0.2s",
                position: "relative",
                minHeight: 320,
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "var(--paper-100)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <span className="mono" style={{ color: "var(--ink-400)" }}>/{s.num}</span>
                <ArrowDownRight size={14} />
              </div>
              <h3 className="display-3" style={{ marginTop: 24 }}>{s.title}</h3>
              <p className="body-sm" style={{ flex: 1 }}>{s.desc}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 16 }}>
                {s.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ STATS BAND ============ */
function StatsBand({ data }) {
  const d = data || {};
  const stats = d.stats || [
    { num: "12,4M", label: "kata diterjemahkan tahun ini" },
    { num: "74", label: "pasangan bahasa aktif" },
    { num: "240+", label: "linguist tersertifikasi" },
    { num: "98,7%", label: "tepat waktu deadline" },
  ];
  return (
    <section className="section section-dark">
      <div className="container container-wide">
        <div className="section-head" style={{ marginBottom: 80 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>{d.eyebrow || "Angka"}</div>
            <h2 className="display-2">
              {d.title || <>Skala yang sudah <em>diuji</em>, sejak 2014.</>}
            </h2>
          </div>
          <p className="lead">
            {d.subtitle || "Satu dekade pengalaman menangani proyek-proyek besar untuk perusahaan multinasional dan lembaga publik."}
          </p>
        </div>
        <div style={{
          display: "grid", gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
          gap: 0,
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: "32px 24px 32px 0",
              borderLeft: i === 0 ? "none" : "1px solid rgba(245,241,230,0.18)",
              paddingLeft: i === 0 ? 0 : 32,
            }}>
              <div className="stat-num" style={{ color: "var(--paper-50)" }}>
                {s.num.split('').map((c, j) =>
                  /[a-zA-Z%+]/.test(c)
                    ? <em key={j} style={{ fontStyle: "italic", color: "var(--accent-soft)", fontWeight: 300 }}>{c}</em>
                    : c
                )}
              </div>
              <div style={{ marginTop: 16, fontSize: 14, color: "rgba(245,241,230,0.65)", maxWidth: 200 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ PROCESS STEPS ============ */
function ProcessSteps({ data }) {
  const d = data || {};
  const steps = d.steps || [
    { num: "01", title: "Brief & Lingkup", desc: "Diskusi kebutuhan, pasangan bahasa, format file, glosarium, deadline, dan target audiens." },
    { num: "02", title: "Penugasan Tim", desc: "Linguist spesialis bidang dipilih berdasarkan domain. Editor & QA ditugaskan paralel." },
    { num: "03", title: "Penerjemahan", desc: "Penerjemahan dengan TM (Translation Memory) dan glossary. Konsultasi terminologi bila perlu." },
    { num: "04", title: "Editing & QA", desc: "Editor senior memeriksa konteks. QA otomatis dan manual untuk konsistensi & kelengkapan." },
    { num: "05", title: "Pengiriman & Revisi", desc: "Pengiriman dalam format aslinya. Revisi terbatas tercakup dalam paket." },
  ];
  return (
    <section className="section section-tint">
      <div className="container container-wide">
        <div className="section-head section-head-stack" style={{ marginBottom: 80 }}>
          <div className="eyebrow" style={{ marginBottom: 24 }}>{d.eyebrow || "Proses"}</div>
          <h2 className="display-2">
            {d.title || <>Cara kerja kami, <em>dari brief ke handoff</em>.</>}
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "120px 1fr 1.2fr 80px",
              gap: 32, padding: "32px 0",
              borderTop: i === 0 ? "1px solid var(--line-strong)" : "1px solid var(--line)",
              borderBottom: i === steps.length - 1 ? "1px solid var(--line-strong)" : "none",
              alignItems: "start",
            }}>
              <div className="mono" style={{ color: "var(--ink-500)", paddingTop: 8 }}>STEP /{s.num}</div>
              <h3 className="display-3" style={{ fontSize: 28 }}>{s.title}</h3>
              <p className="body" style={{ paddingTop: 6 }}>{s.desc}</p>
              <div style={{ paddingTop: 8, color: "var(--accent)" }}>
                <ArrowDownRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ FEATURE SPLIT ============ */
function FeatureSplit({ data }) {
  const d = data || {};
  const items = d.items || [
    { label: "TRANSLATION MEMORY", title: "Konsisten lintas proyek", desc: "Bank istilah dan TM per klien menjamin gaya bahasa yang seragam, sekaligus menekan biaya pengerjaan ulang." },
    { label: "QA LINGUISTIK", title: "Dua tingkat verifikasi", desc: "Setiap dokumen diperiksa editor senior + QA otomatis (Xbench, Verifika) sebelum diserahkan." },
    { label: "KEAMANAN DATA", title: "ISO 27001 & NDA", desc: "Server di Indonesia, akses berlapis. NDA standar dan custom tersedia untuk dokumen sensitif." },
  ];
  return (
    <section className="section">
      <div className="container container-wide" style={{
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "center",
      }}>
        <div className="imgph" style={{ height: 600, borderRadius: "var(--radius-lg)" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 28, marginBottom: 12 }}>◇</div>
            <div>SCREENSHOT CAT TOOL / DASHBOARD · 4:5</div>
          </div>
        </div>
        <div>
          <div className="eyebrow" style={{ marginBottom: 24 }}>{d.eyebrow || "Mengapa Mancakata"}</div>
          <h2 className="display-2" style={{ marginBottom: 48 }}>
            {d.title || <>Bukan sekadar penerjemah, <em>tapi sistem</em>.</>}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {items.map((it, i) => (
              <div key={i} style={{ paddingBottom: 32, borderBottom: i < items.length - 1 ? "1px solid var(--line)" : "none" }}>
                <div className="mono" style={{ color: "var(--ink-500)", marginBottom: 8 }}>{it.label}</div>
                <h3 className="display-3" style={{ fontSize: 26, marginBottom: 12 }}>{it.title}</h3>
                <p className="body">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ TESTIMONIAL ============ */
function Testimonial({ data }) {
  const d = data || {};
  const items = d.items || [
    {
      quote: "Mancakata jadi mitra lokalisasi tetap kami untuk peluncuran ke 6 pasar Asia Tenggara. Kualitasnya stabil di setiap rilis.",
      author: "Sarah Wijaya",
      role: "Head of Product, FinTech Series B",
    },
    {
      quote: "Dokumen due diligence yang biasanya butuh seminggu, mereka selesaikan dalam 3 hari tanpa kompromi akurasi hukum.",
      author: "Andre Kurniawan",
      role: "Partner, AKK Law Firm",
    },
  ];
  const [idx, setIdx] = React.useState(0);
  const cur = items[idx];
  return (
    <section className="section">
      <div className="container container-wide">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>{d.eyebrow || "Suara klien"}</div>
            <h2 className="display-3">
              {d.title || "Tim yang dipercaya untuk peluncuran lintas pasar."}
            </h2>
            <div style={{ display: "flex", gap: 8, marginTop: 48 }}>
              <button onClick={() => setIdx((idx - 1 + items.length) % items.length)} style={{
                width: 44, height: 44, borderRadius: 999, border: "1px solid var(--line-strong)",
                background: "transparent", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>←</button>
              <button onClick={() => setIdx((idx + 1) % items.length)} style={{
                width: 44, height: 44, borderRadius: 999, border: "1px solid var(--ink-900)",
                background: "var(--ink-900)", color: "var(--paper-50)", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>→</button>
            </div>
          </div>
          <div>
            <blockquote className="display-2" style={{ fontWeight: 300, fontSize: "clamp(28px, 3.2vw, 44px)" }}>
              <span style={{ color: "var(--accent)", fontStyle: "italic" }}>"</span>
              {cur.quote}
              <span style={{ color: "var(--accent)", fontStyle: "italic" }}>"</span>
            </blockquote>
            <div style={{ marginTop: 48, display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{
                width: 56, height: 56, borderRadius: 999,
                background: "var(--paper-200)", border: "1px solid var(--line)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-display)", fontSize: 20, color: "var(--ink-700)",
              }}>
                {cur.author.split(" ").map(w => w[0]).slice(0, 2).join("")}
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 500 }}>{cur.author}</div>
                <div className="body-sm">{cur.role}</div>
              </div>
              <div style={{ flex: 1 }}></div>
              <div className="mono" style={{ color: "var(--ink-400)" }}>
                {String(idx + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ INDUSTRIES ============ */
function Industries({ data }) {
  const d = data || {};
  const items = d.items || [
    { title: "Teknologi & SaaS", desc: "Localization untuk produk digital yang dirilis multi-pasar.", count: "120+ klien" },
    { title: "Hukum & Korporat", desc: "Kontrak, due diligence, litigasi internasional.", count: "Tersumpah" },
    { title: "Kesehatan & Farmasi", desc: "Klinis, regulatori, materi pasien.", count: "ISO 17100" },
    { title: "E-commerce & Retail", desc: "Katalog, copy produk, customer support.", count: "20+ bahasa" },
    { title: "Pemerintah & Publik", desc: "Lembaga, kementerian, organisasi internasional.", count: "Tender" },
    { title: "Media & Hiburan", desc: "Subtitle, dubbing, naskah, dokumenter.", count: "OTT-ready" },
  ];
  return (
    <section className="section">
      <div className="container container-wide">
        <div className="section-head" style={{ marginBottom: 64 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>{d.eyebrow || "Industri"}</div>
            <h2 className="display-2">
              {d.title || <>Setiap industri punya <em>bahasanya sendiri</em>.</>}
            </h2>
          </div>
          <p className="lead">
            {d.subtitle || "Kami punya tim spesialis yang memahami terminologi, regulasi, dan gaya komunikasi setiap sektor."}
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0,
                      borderTop: "1px solid var(--line-strong)" }}>
          {items.map((it, i) => (
            <div key={i} style={{
              padding: "32px 24px",
              borderRight: i % 3 !== 2 ? "1px solid var(--line)" : "none",
              borderBottom: i < 3 ? "1px solid var(--line)" : "none",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
                <h3 className="display-3" style={{ fontSize: 24 }}>{it.title}</h3>
                <span className="tag tag-accent">{it.count}</span>
              </div>
              <p className="body-sm" style={{ marginTop: 12 }}>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ CTA BANNER ============ */
function CtaBanner({ data, onNavigate }) {
  const d = data || {};
  return (
    <section style={{ padding: "32px 0" }}>
      <div className="container container-wide">
        <div style={{
          background: "var(--ink-900)",
          color: "var(--paper-50)",
          borderRadius: "var(--radius-lg)",
          padding: "80px 64px",
          display: "grid", gridTemplateColumns: "1.4fr 1fr",
          gap: 64, alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", right: -120, top: -120,
            width: 400, height: 400, borderRadius: 999,
            border: "1px solid rgba(245,241,230,0.15)",
          }}></div>
          <div style={{
            position: "absolute", right: -80, top: -80,
            width: 240, height: 240, borderRadius: 999,
            border: "1px solid rgba(245,241,230,0.1)",
          }}></div>
          <div>
            <div className="eyebrow" style={{ color: "rgba(245,241,230,0.6)", marginBottom: 24 }}>
              {d.eyebrow || "Mulai hari ini"}
            </div>
            <h2 className="display-2" style={{ color: "var(--paper-50)" }}>
              {d.title || <>Punya proyek? <em>Mari kita bicara</em>.</>}
            </h2>
            <p className="lead" style={{ marginTop: 24, color: "rgba(245,241,230,0.7)" }}>
              {d.subtitle || "Konsultasi pertama gratis. Estimasi biaya & timeline dalam 1 hari kerja."}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
            <button className="btn btn-primary" onClick={() => onNavigate?.("contact")}
              style={{ background: "var(--paper-50)", color: "var(--ink-900)" }}>
              Minta Penawaran <ArrowIcon size={12} />
            </button>
            <button className="btn btn-ghost" style={{ color: "var(--paper-50)" }}>
              Jadwalkan Demo TMS <ArrowIcon size={12} />
            </button>
            <div className="mono" style={{ color: "rgba(245,241,230,0.5)", marginTop: 16 }}>
              ATAU EMAIL: HALO@MANCAKATA.ID
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  HeroEnterprise, HeroSplit, HeroEditorial,
  LogoCloud, ServiceGrid, StatsBand, ProcessSteps,
  FeatureSplit, Testimonial, Industries, CtaBanner,
});
