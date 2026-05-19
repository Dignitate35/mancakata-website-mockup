/* Mancakata — shared chrome (nav, footer) */

const Logo = ({ inverted }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
    <img src="assets/logo-mancakata.jpeg" alt="PT MancaKata" width="36" height="36"
      style={{
        borderRadius: 999, display: "block",
        background: inverted ? "var(--paper-50)" : "transparent",
        padding: inverted ? 0 : 0,
      }}
    />
    <span style={{
      fontFamily: "var(--font-display)",
      fontSize: 22,
      fontWeight: 400,
      letterSpacing: "-0.01em",
      color: inverted ? "var(--paper-50)" : "var(--ink-900)"
    }}>
      Manca<span style={{ color: inverted ? "var(--accent-soft)" : "var(--accent)" }}>K</span>ata<span style={{ color: "var(--accent-2)", fontStyle: "italic" }}>.</span>
    </span>
  </div>
);

const ArrowIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
    <path d="M3 7H11M11 7L7 3M11 7L7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowDownRight = ({ size = 12 }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <path d="M3 3L9 9M9 9V4M9 9H4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

/* ---------------- Navbar ---------------- */
function Navbar({ current = "home", onNavigate }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState(null);
  const [vw, setVw] = React.useState(typeof window !== "undefined" ? window.innerWidth : 1400);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const compact = vw < 1180;
  const mobile = vw < 900;

  const items = [
    { key: "services", label: "Layanan", page: "services", mega: [
      { label: "Penerjemahan Dokumen", desc: "Hukum, medis, teknis, finansial", page: "service-detail" },
      { label: "Lokalisasi Software & Web", desc: "UI strings, i18n, QA linguistik", page: "service-detail" },
      { label: "Subtitle & Dubbing", desc: "Audiovisual untuk media digital", page: "service-detail" },
      { label: "Interpreter & Konferensi", desc: "Simultan, konsekutif, daring", page: "service-detail" },
      { label: "Transcreation", desc: "Adaptasi kreatif untuk pemasaran", page: "service-detail" },
      { label: "Sertifikasi & Legalisasi", desc: "Penerjemah tersumpah, apostille", page: "service-detail" },
    ]},
    { key: "industries", label: "Industri", dropdown: [
      "Teknologi & SaaS", "Hukum & Korporat", "Kesehatan & Farmasi",
      "E-commerce & Retail", "Pemerintah & Publik", "Media & Hiburan"
    ]},
    { key: "insights", label: "Insights", page: "blog" },
    { key: "about", label: "Tentang Kami", page: "about" },
    { key: "contact", label: "Kontak", page: "contact" },
  ];

  const navStyle = {
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: scrolled ? "rgba(251, 249, 243, 0.85)" : "transparent",
    backdropFilter: scrolled ? "blur(16px) saturate(160%)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(16px) saturate(160%)" : "none",
    borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
    transition: "all 0.25s ease",
  };

  return (
    <nav style={navStyle} onMouseLeave={() => setOpenMenu(null)}>
      <div className="container container-wide" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 76,
      }}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); }}>
          <Logo />
        </a>

        {!mobile && <div style={{ display: "flex", alignItems: "center", gap: compact ? 0 : 4, flexShrink: 1, minWidth: 0 }}>
          {items.map((it) => (
            <div
              key={it.key}
              style={{ position: "relative" }}
              onMouseEnter={() => setOpenMenu(it.mega || it.dropdown ? it.key : null)}
            >
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); if (it.page) onNavigate(it.page); }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: compact ? "10px 8px" : "10px 14px",
                  fontSize: compact ? 13 : 14, fontWeight: 450,
                  color: current === it.key ? "var(--accent)" : "var(--ink-800)",
                  borderRadius: 8,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {it.label}
                {(it.mega || it.dropdown) && (
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{
                    transform: openMenu === it.key ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 0.2s",
                  }}>
                    <path d="M2.5 3.75L5 6.25L7.5 3.75" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                )}
              </a>
            </div>
          ))}
        </div>}

        <div style={{ display: "flex", alignItems: "center", gap: compact ? 8 : 12, flexShrink: 0 }}>
          {!compact && <>
            <button className="btn btn-ghost" style={{ padding: "10px 4px", fontSize: 13 }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M9.5 9.5L12 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              Cari
            </button>
            <div style={{ width: 1, height: 20, background: "var(--line)" }}></div>
            <button className="btn btn-ghost" style={{ padding: "10px 4px", fontSize: 13 }}>EN / ID</button>
          </>}
          {!mobile && <button
            className="btn btn-primary"
            style={{ padding: compact ? "10px 14px" : "11px 18px", fontSize: 13 }}
            onClick={() => onNavigate("contact")}
          >
            {compact ? "Penawaran" : "Minta Penawaran"}
            <ArrowIcon size={12} />
          </button>}
          {mobile && (
            <button onClick={() => setMobileOpen(!mobileOpen)} style={{
              width: 44, height: 44, border: "1px solid var(--line-strong)",
              background: "transparent", borderRadius: 999, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{ width: 18, display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ height: 1.5, background: "var(--ink-900)" }}></span>
                <span style={{ height: 1.5, background: "var(--ink-900)" }}></span>
              </div>
            </button>
          )}
        </div>
      </div>

      {/* Mega menu */}
      {openMenu === "services" && (
        <div style={{
          position: "absolute", left: 0, right: 0, top: "100%",
          background: "var(--paper-50)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          boxShadow: "0 24px 48px -16px rgba(20,17,13,0.08)",
          animation: "fadeUp 0.18s ease-out",
        }}>
          <div className="container container-wide" style={{
            display: "grid", gridTemplateColumns: "260px 1fr",
            gap: 64, padding: "40px 32px",
          }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 16 }}>Layanan</div>
              <div className="display-3" style={{ marginBottom: 20 }}>Setiap kata punya konteks.</div>
              <p className="body-sm">Lihat semua layanan terjemahan dan lokalisasi kami untuk perusahaan dan lembaga.</p>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("services"); setOpenMenu(null); }}
                 style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 24,
                          color: "var(--accent)", fontSize: 14, fontWeight: 500 }}>
                Semua Layanan <ArrowIcon size={12} />
              </a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
              {items[0].mega.map((m) => (
                <a
                  key={m.label}
                  href="#"
                  onClick={(e) => { e.preventDefault(); onNavigate(m.page); setOpenMenu(null); }}
                  style={{
                    display: "block", padding: "16px 20px", borderRadius: 8,
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "var(--paper-100)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 15, fontWeight: 500, color: "var(--ink-900)" }}>{m.label}</span>
                    <ArrowDownRight />
                  </div>
                  <p className="body-sm" style={{ marginTop: 4 }}>{m.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {mobile && mobileOpen && (
        <div style={{
          position: "absolute", left: 0, right: 0, top: "100%",
          background: "var(--paper-50)", borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)", padding: "16px 0",
        }}>
          <div className="container container-wide" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {items.map((it) => (
              <a key={it.key} href="#" onClick={(e) => {
                e.preventDefault();
                if (it.page) { onNavigate(it.page); setMobileOpen(false); }
              }} style={{
                padding: "14px 16px", borderRadius: 8, fontSize: 16,
                color: "var(--ink-900)", borderBottom: "1px solid var(--line)",
              }}>{it.label}</a>
            ))}
            <button className="btn btn-primary" style={{ marginTop: 12 }}
              onClick={() => { onNavigate("contact"); setMobileOpen(false); }}>
              Minta Penawaran <ArrowIcon size={12} />
            </button>
          </div>
        </div>
      )}

      {openMenu === "industries" && (
        <div style={{
          position: "absolute", left: 0, right: 0, top: "100%",
          background: "var(--paper-50)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          boxShadow: "0 24px 48px -16px rgba(20,17,13,0.08)",
        }}>
          <div className="container container-wide" style={{ padding: "32px" }}>
            <div className="eyebrow" style={{ marginBottom: 20 }}>Industri yang kami layani</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4 }}>
              {items[1].dropdown.map((d) => (
                <a key={d} href="#" onClick={(e) => e.preventDefault()}
                  style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "14px 18px", borderRadius: 8, fontSize: 15,
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = "var(--paper-100)"}
                  onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                >
                  {d} <ArrowDownRight />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ---------------- Footer ---------------- */
function Footer({ onNavigate }) {
  return (
    <footer style={{ background: "var(--ink-900)", color: "var(--paper-100)", paddingTop: 96 }}>
      <div className="container container-wide">
        {/* Big mark */}
        <div style={{
          display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr",
          gap: 48, paddingBottom: 80,
        }}>
          <div>
            <Logo inverted />
            <p style={{
              marginTop: 24, color: "rgba(245,241,230,0.65)",
              fontSize: 15, lineHeight: 1.6, maxWidth: 280,
            }}>
              Penerjemahan dan lokalisasi profesional untuk perusahaan yang bicara ke dunia.
            </p>
            <div style={{ marginTop: 32 }}>
              <div className="mono" style={{ color: "rgba(245,241,230,0.4)", marginBottom: 8 }}>
                NEWSLETTER
              </div>
              <div style={{
                display: "flex", borderBottom: "1px solid rgba(245,241,230,0.2)",
                paddingBottom: 8, gap: 12,
              }}>
                <input
                  type="email"
                  placeholder="email@perusahaan.com"
                  style={{
                    flex: 1, background: "transparent", border: 0, outline: "none",
                    color: "var(--paper-50)", fontSize: 14, padding: "8px 0",
                    fontFamily: "inherit",
                  }}
                />
                <button style={{
                  background: "transparent", border: 0, color: "var(--paper-50)",
                  cursor: "pointer", padding: 8,
                }}>
                  <ArrowIcon />
                </button>
              </div>
            </div>
          </div>

          {[
            { title: "Layanan", links: ["Penerjemahan Dokumen", "Lokalisasi Software", "Subtitle & Dubbing", "Interpreter", "Transcreation", "Tersumpah"] },
            { title: "Industri", links: ["Teknologi", "Hukum", "Kesehatan", "E-commerce", "Pemerintah", "Media"] },
            { title: "Perusahaan", links: ["Tentang Kami", "Tim Linguist", "Karier", "Insights", "Studi Kasus", "Kontak"] },
            { title: "Sumber Daya", links: ["Pusat Bantuan", "Dokumentasi API", "Glosarium", "Status Sistem", "Kebijakan Privasi", "Syarat Layanan"] },
          ].map((col) => (
            <div key={col.title}>
              <div className="mono" style={{ color: "rgba(245,241,230,0.4)", marginBottom: 16 }}>
                {col.title.toUpperCase()}
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" onClick={(e) => e.preventDefault()}
                      style={{ color: "rgba(245,241,230,0.85)", fontSize: 14 }}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Massive wordmark */}
        <div style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(96px, 16vw, 240px)",
          fontWeight: 300,
          lineHeight: 0.85,
          letterSpacing: "-0.04em",
          color: "var(--paper-50)",
          paddingBottom: 48,
          borderBottom: "1px solid rgba(245,241,230,0.1)",
        }}>
          Manca<em style={{ fontStyle: "italic", color: "var(--accent-soft)", fontWeight: 200 }}>kata</em>.
        </div>

        <div style={{
          padding: "32px 0 48px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 16,
        }}>
          <div className="mono" style={{ color: "rgba(245,241,230,0.4)" }}>
            © 2026 PT MANCAKATA NUSANTARA · TERDAFTAR DI HPI & ATA
          </div>
          <div style={{ display: "flex", gap: 24 }}>
            {["LinkedIn", "Twitter", "Instagram", "YouTube"].map((s) => (
              <a key={s} href="#" onClick={(e) => e.preventDefault()}
                style={{ fontSize: 13, color: "rgba(245,241,230,0.7)" }}>{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Navbar, Footer, Logo, ArrowIcon, ArrowDownRight });
