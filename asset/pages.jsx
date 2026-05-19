/* Mancakata — Page templates
   Each page composes section components, mirroring the
   "page has many sections" data model.
*/

/* =================== HOME PAGE =================== */
function HomePage({ onNavigate, heroVariant }) {
  const HeroComp = heroVariant === "split" ? HeroSplit
                : heroVariant === "editorial" ? HeroEditorial
                : HeroEnterprise;
  return (
    <>
      <HeroComp data={{}} onNavigate={onNavigate} />
      <LogoCloud data={{}} />
      <ServiceGrid data={{}} onNavigate={onNavigate} />
      <StatsBand data={{}} />
      <ProcessSteps data={{}} />
      <FeatureSplit data={{}} />
      <Industries data={{}} />
      <Testimonial data={{}} />
      <CtaBanner data={{}} onNavigate={onNavigate} />
    </>
  );
}

/* =================== SERVICES LIST PAGE =================== */
function ServicesPage({ onNavigate }) {
  return (
    <>
      <section style={{ paddingTop: 64, paddingBottom: 80 }}>
        <div className="container container-wide">
          <div className="eyebrow" style={{ marginBottom: 32 }}>Layanan</div>
          <h1 className="display-1" style={{ maxWidth: 1100 }}>
            Penerjemahan, lokalisasi, dan <em>linguistic services</em> end-to-end.
          </h1>
          <p className="lead" style={{ marginTop: 32, maxWidth: 700 }}>
            Enam jalur layanan utama, ditangani tim spesialis dengan satu standar QA.
            Pilih yang sesuai kebutuhan, atau hubungi kami untuk solusi gabungan.
          </p>
        </div>
      </section>
      <ServiceGrid data={{ eyebrow: "Katalog layanan", title: <>Setiap kebutuhan, <em>punya alurnya</em>.</> }} onNavigate={onNavigate} />
      <ProcessSteps data={{}} />
      <FeatureSplit data={{}} />
      <CtaBanner data={{}} onNavigate={onNavigate} />
    </>
  );
}

/* =================== SERVICE DETAIL PAGE =================== */
function ServiceDetailPage({ onNavigate }) {
  return (
    <>
      <section style={{ paddingTop: 48, paddingBottom: 64 }}>
        <div className="container container-wide">
          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 48,
                        fontSize: 13, color: "var(--ink-500)" }}>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("home"); }}>Beranda</a>
            <span>/</span>
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("services"); }}>Layanan</a>
            <span>/</span>
            <span style={{ color: "var(--ink-900)" }}>Lokalisasi Software & Web</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 80, alignItems: "end" }}>
            <div>
              <div className="mono" style={{ color: "var(--accent)", marginBottom: 16 }}>SERVICE /02</div>
              <h1 className="display-1">
                Lokalisasi <em>Software</em> & Web
              </h1>
              <p className="lead" style={{ marginTop: 32 }}>
                Adaptasi UI strings, mobile apps, dan situs web ke bahasa target — termasuk
                i18n setup, pseudo-localization, dan QA linguistik in-context.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div className="card" style={{ padding: 24 }}>
                <div className="mono" style={{ color: "var(--ink-500)", marginBottom: 8 }}>MULAI DARI</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 400 }}>
                  Rp 250<span style={{ fontSize: 16, color: "var(--ink-500)" }}>/kata</span>
                </div>
              </div>
              <div className="card" style={{ padding: 24 }}>
                <div className="mono" style={{ color: "var(--ink-500)", marginBottom: 8 }}>SLA TYPICAL</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 400 }}>
                  3–7<span style={{ fontSize: 16, color: "var(--ink-500)" }}> hari</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "32px 0 64px" }}>
        <div className="container container-wide">
          <div className="imgph" style={{ height: 480, borderRadius: "var(--radius-lg)" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>◐</div>
              <div>HERO IMAGE LAYANAN · 16:9</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container container-wide" style={{
          display: "grid", gridTemplateColumns: "1fr 2fr", gap: 96, alignItems: "start",
        }}>
          <div style={{ position: "sticky", top: 100 }}>
            <div className="eyebrow" style={{ marginBottom: 24 }}>Pada layanan ini</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }}>
              {["Cakupan", "Format yang didukung", "Workflow", "Tim & QA", "Tarif & SLA"].map((it, i) => (
                <li key={it}>
                  <a href="#" onClick={(e) => e.preventDefault()} style={{
                    display: "block", padding: "10px 14px", borderRadius: 8,
                    background: i === 0 ? "var(--paper-200)" : "transparent",
                    color: i === 0 ? "var(--ink-900)" : "var(--ink-500)",
                    fontSize: 14, fontWeight: i === 0 ? 500 : 400,
                  }}>{it}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>Cakupan</div>
            <h2 className="display-2" style={{ marginBottom: 32 }}>
              Lebih dari sekadar terjemahan teks UI.
            </h2>
            <p className="lead" style={{ marginBottom: 48 }}>
              Lokalisasi yang baik dimulai sebelum string pertama diterjemahkan.
              Kami bekerja bersama tim engineering Anda dari tahap i18n setup hingga rilis.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
              {[
                { title: "i18n Audit", desc: "Review codebase untuk hardcoded strings, format tanggal, mata uang." },
                { title: "Translation Memory", desc: "TM per produk untuk konsistensi rilis berikutnya, hemat 30–60% biaya." },
                { title: "Pseudo-localization", desc: "Uji panjang string & encoding sebelum penerjemahan asli dimulai." },
                { title: "In-context QA", desc: "Linguist memeriksa string di build aktual, bukan hanya di spreadsheet." },
                { title: "Continuous Localization", desc: "Integrasi GitHub / GitLab. String baru otomatis masuk antrian." },
                { title: "Release Support", desc: "QA pra-rilis, hot-fix linguistik, dukungan untuk over-the-air updates." },
              ].map((it, i) => (
                <div key={i} style={{ paddingBottom: 24, borderBottom: "1px solid var(--line)" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 500, marginBottom: 8 }}>{it.title}</h3>
                  <p className="body-sm">{it.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FeatureSplit data={{ eyebrow: "Workflow", title: <>Terintegrasi dengan <em>tools</em> Anda.</> }} />
      <CtaBanner data={{ title: <>Siap melokalkan produk Anda?</> }} onNavigate={onNavigate} />
    </>
  );
}

/* =================== BLOG LIST =================== */
function BlogPage({ onNavigate }) {
  const featured = {
    cat: "Lokalisasi", date: "12 Apr 2026", read: "9 menit baca",
    title: "Mengapa pseudo-localization wajib dilakukan sebelum rilis multi-bahasa",
    excerpt: "Bug terjemahan paling mahal bukan datang dari salah arti, tapi dari layout yang pecah karena string Jerman 40% lebih panjang. Berikut pendekatan tim kami.",
    author: "Dewi Pranata",
  };
  const posts = [
    { cat: "Industri", date: "08 Apr 2026", title: "5 kesalahan umum dalam dokumen due diligence multi-bahasa", excerpt: "Dari nuansa hukum yang hilang hingga inkonsistensi terminologi — apa yang harus dihindari." },
    { cat: "Workflow", date: "02 Apr 2026", title: "Memilih CAT tool untuk tim in-house: SDL, memoQ, atau Phrase?", excerpt: "Perbandingan praktis dari sudut pandang ops manager, bukan tutorial teknis." },
    { cat: "Studi Kasus", date: "25 Mar 2026", title: "Bagaimana kami melokalkan superapp ke 6 pasar dalam 90 hari", excerpt: "Anatomi proyek end-to-end, lengkap dengan timeline, hambatan, dan apa yang akan kami ubah." },
    { cat: "Tren", date: "18 Mar 2026", title: "AI translation sudah cukup baik. Lalu kenapa masih butuh manusia?", excerpt: "Diskusi jujur tentang post-editing, kepercayaan, dan apa yang mesin masih lewatkan." },
    { cat: "Bahasa", date: "10 Mar 2026", title: "Bahasa Indonesia formal vs casual: kapan menggunakan yang mana", excerpt: "Panduan singkat untuk tim brand & marketing yang sedang masuk pasar Indonesia." },
    { cat: "Industri", date: "02 Mar 2026", title: "Regulatori farmasi & terjemahan: apa yang BPOM benar-benar tuntut", excerpt: "Persyaratan dokumen, format, dan pitfall yang sering terjadi pada pendaftaran obat." },
  ];
  const categories = ["Semua", "Lokalisasi", "Workflow", "Studi Kasus", "Industri", "Tren", "Bahasa"];
  const [activeCat, setActiveCat] = React.useState("Semua");

  return (
    <>
      <section style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="container container-wide">
          <div className="eyebrow" style={{ marginBottom: 32 }}>Insights</div>
          <h1 className="display-1" style={{ maxWidth: 1000 }}>
            Catatan lapangan dari <em>tim linguist</em> kami.
          </h1>
          <p className="lead" style={{ marginTop: 32, maxWidth: 640 }}>
            Studi kasus, panduan praktis, dan refleksi tentang industri penerjemahan dari orang-orang yang mengerjakannya tiap hari.
          </p>
        </div>
      </section>

      <section style={{ padding: "16px 0 32px" }}>
        <div className="container container-wide">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("blog-detail"); }}
            style={{
              display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 48, alignItems: "center",
              padding: 24, border: "1px solid var(--line)", borderRadius: "var(--radius-lg)",
              background: "var(--paper-100)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--line-strong)"}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--line)"}
          >
            <div className="imgph" style={{ height: 380, borderRadius: "var(--radius-md)" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>◑</div>
                <div>FEATURED IMAGE · 16:10</div>
              </div>
            </div>
            <div style={{ padding: "0 24px" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 24 }}>
                <span className="tag tag-accent">Featured</span>
                <span className="mono" style={{ color: "var(--ink-500)" }}>{featured.cat.toUpperCase()}</span>
                <span className="mono" style={{ color: "var(--ink-400)" }}>· {featured.date}</span>
              </div>
              <h2 className="display-2" style={{ fontSize: "clamp(28px, 3.6vw, 48px)" }}>
                {featured.title}
              </h2>
              <p className="lead" style={{ marginTop: 24, fontSize: 17 }}>{featured.excerpt}</p>
              <div style={{ marginTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div className="body-sm">Oleh <strong style={{ color: "var(--ink-900)", fontWeight: 500 }}>{featured.author}</strong> · {featured.read}</div>
                <span style={{ color: "var(--accent)", fontSize: 14, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 6 }}>
                  Baca artikel <ArrowIcon size={12} />
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      <section style={{ padding: "48px 0", borderTop: "1px solid var(--line)" }}>
        <div className="container container-wide">
          <div style={{ display: "flex", gap: 8, marginBottom: 48, flexWrap: "wrap" }}>
            {categories.map((c) => (
              <button key={c} onClick={() => setActiveCat(c)}
                className="tag"
                style={{
                  cursor: "pointer", padding: "8px 16px",
                  background: activeCat === c ? "var(--ink-900)" : "transparent",
                  color: activeCat === c ? "var(--paper-50)" : "var(--ink-700)",
                  borderColor: activeCat === c ? "var(--ink-900)" : "var(--line)",
                }}
              >{c}</button>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {posts.map((p, i) => (
              <a key={i} href="#" onClick={(e) => { e.preventDefault(); onNavigate("blog-detail"); }}
                style={{
                  display: "flex", flexDirection: "column", gap: 16,
                  paddingBottom: 32, borderBottom: "1px solid var(--line)",
                }}
              >
                <div className="imgph" style={{ height: 220, borderRadius: "var(--radius-md)" }}>
                  <div style={{ fontSize: 11 }}>POST IMG · 16:9</div>
                </div>
                <div className="mono" style={{ color: "var(--ink-500)" }}>
                  {p.cat.toUpperCase()} · {p.date}
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 400, lineHeight: 1.2 }}>
                  {p.title}
                </h3>
                <p className="body-sm" style={{ flex: 1 }}>{p.excerpt}</p>
                <div style={{ color: "var(--accent)", fontSize: 13, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 6 }}>
                  Baca <ArrowIcon size={11} />
                </div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 64 }}>
            <button className="btn btn-secondary">Muat lebih banyak</button>
          </div>
        </div>
      </section>
      <CtaBanner data={{ title: <>Mau berbicara langsung dengan tim?</> }} onNavigate={onNavigate} />
    </>
  );
}

/* =================== BLOG DETAIL =================== */
function BlogDetailPage({ onNavigate }) {
  return (
    <>
      <article style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="container container-narrow">
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 32 }}>
            <span className="tag tag-accent">Lokalisasi</span>
            <span className="mono" style={{ color: "var(--ink-500)" }}>12 APRIL 2026 · 9 MENIT BACA</span>
          </div>
          <h1 className="display-1" style={{ fontSize: "clamp(40px, 5vw, 72px)" }}>
            Mengapa pseudo-localization wajib dilakukan <em>sebelum</em> rilis multi-bahasa.
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 48 }}>
            <div style={{
              width: 48, height: 48, borderRadius: 999,
              background: "var(--paper-200)", border: "1px solid var(--line)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-display)", fontSize: 18,
            }}>DP</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 500 }}>Dewi Pranata</div>
              <div className="body-sm">Senior Localization Engineer</div>
            </div>
          </div>
        </div>
      </article>

      <section style={{ padding: "32px 0 64px" }}>
        <div className="container container-narrow">
          <div className="imgph" style={{ height: 460, borderRadius: "var(--radius-lg)" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>◑</div>
              <div>FEATURED IMAGE · 16:9</div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 96 }}>
        <div className="container container-narrow" style={{
          fontSize: 18, lineHeight: 1.75, color: "var(--ink-700)",
        }}>
          <p style={{ fontSize: 22, lineHeight: 1.55, color: "var(--ink-900)", marginBottom: 32 }}>
            Bug terjemahan paling mahal yang pernah kami lihat bukan soal salah arti.
            Bug itu soal tombol "Simpan" yang tiba-tiba memotong setengah kalimat di
            versi Jerman, dua jam sebelum rilis.
          </p>
          <p style={{ marginBottom: 24 }}>
            Setiap tim produk yang sudah pernah merilis ke pasar non-Inggris kemungkinan
            besar punya cerita serupa. String yang panjangnya pas di mockup Inggris
            tiba-tiba pecah di Spanyol, hilang sebagian di Mandarin, atau merusak grid di Arab.
            Penyebabnya hampir selalu sama: tim baru menyadari masalah ini setelah penerjemahan
            asli sudah masuk dan dipasang.
          </p>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 400, margin: "48px 0 16px" }}>
            Apa itu pseudo-localization?
          </h2>
          <p style={{ marginBottom: 24 }}>
            Pseudo-localization adalah teknik mengganti seluruh string aplikasi Anda
            dengan versi sintetis — biasanya 30–40% lebih panjang dan diisi karakter
            beraksen — sebelum penerjemahan asli dimulai. Tujuannya bukan untuk dibaca,
            tapi untuk menguji apakah UI Anda siap menerima string yang tidak rapi.
          </p>
          <blockquote style={{
            margin: "48px 0", paddingLeft: 32, borderLeft: "3px solid var(--accent)",
            fontFamily: "var(--font-display)", fontSize: 24, fontStyle: "italic",
            color: "var(--ink-900)", lineHeight: 1.4,
          }}>
            "Lebih murah memperbaiki layout dengan string palsu daripada
            menerjemahkan dua kali karena tombolnya pecah."
          </blockquote>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 400, margin: "48px 0 16px" }}>
            Tiga hal yang langsung kelihatan
          </h2>
          <ol style={{ paddingLeft: 24, marginBottom: 24 }}>
            <li style={{ marginBottom: 12 }}>String hardcoded yang lupa dimasukkan ke katalog terjemahan.</li>
            <li style={{ marginBottom: 12 }}>Komponen UI yang tidak fleksibel terhadap panjang teks.</li>
            <li style={{ marginBottom: 12 }}>Encoding bug pada karakter di luar ASCII.</li>
          </ol>
          <p style={{ marginBottom: 24 }}>
            Ketiganya jauh lebih murah diperbaiki di tahap ini daripada setelah penerjemahan
            asli sudah selesai dan QA sudah berjalan paralel di lima bahasa.
          </p>
        </div>
      </section>

      <section style={{ padding: "64px 0", borderTop: "1px solid var(--line)" }}>
        <div className="container container-wide">
          <div className="eyebrow" style={{ marginBottom: 32 }}>Baca juga</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {[
              { cat: "Workflow", date: "02 APR 2026", title: "Memilih CAT tool untuk tim in-house: SDL, memoQ, atau Phrase?" },
              { cat: "Studi Kasus", date: "25 MAR 2026", title: "Bagaimana kami melokalkan superapp ke 6 pasar dalam 90 hari" },
              { cat: "Tren", date: "18 MAR 2026", title: "AI translation sudah cukup baik. Lalu kenapa masih butuh manusia?" },
            ].map((p, i) => (
              <a key={i} href="#" onClick={(e) => e.preventDefault()}
                style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div className="imgph" style={{ height: 180, borderRadius: "var(--radius-md)" }}>
                  <div style={{ fontSize: 11 }}>POST IMG</div>
                </div>
                <div className="mono" style={{ color: "var(--ink-500)" }}>{p.cat.toUpperCase()} · {p.date}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 400, lineHeight: 1.25 }}>{p.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner data={{}} onNavigate={onNavigate} />
    </>
  );
}

/* =================== ABOUT =================== */
function AboutPage({ onNavigate }) {
  return (
    <>
      <section style={{ paddingTop: 64, paddingBottom: 96 }}>
        <div className="container container-wide">
          <div className="eyebrow" style={{ marginBottom: 32 }}>Tentang Kami</div>
          <h1 className="display-1" style={{ maxWidth: 1100 }}>
            Tim linguist, editor, dan engineer yang bekerja seperti <em>satu studio</em>.
          </h1>
          <p className="lead" style={{ marginTop: 32, maxWidth: 700 }}>
            Mancakata didirikan tahun 2014 oleh tiga penerjemah senior yang lelah dengan
            agency tradisional. Hari ini kami melayani 320+ klien di kawasan ASEAN.
          </p>
        </div>
      </section>
      <StatsBand data={{ title: <>Skala kami, <em>secara angka</em>.</> }} />
      <section className="section">
        <div className="container container-wide" style={{
          display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 96,
        }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 24 }}>Cerita kami</div>
            <h2 className="display-2">Mulai dari tiga orang di Bandung.</h2>
          </div>
          <div className="body" style={{ fontSize: 18, lineHeight: 1.7 }}>
            <p style={{ marginBottom: 20 }}>
              Tahun 2014, Pak Sigit, Bu Anita, dan Pak Roni mendirikan Mancakata di sebuah
              ruang co-working kecil di Bandung. Tujuannya sederhana: membangun agency
              terjemahan yang memperlakukan linguist sebagai profesional senior, bukan komoditas.
            </p>
            <p style={{ marginBottom: 20 }}>
              Sepuluh tahun kemudian, kami punya kantor di Jakarta, Singapura, dan Kuala Lumpur,
              dengan jaringan 240+ linguist tersertifikasi yang melayani 74 pasangan bahasa.
            </p>
            <p>
              Yang tidak berubah adalah cara kami bekerja: setiap proyek punya satu Project Lead,
              satu linguist utama, satu editor senior, dan setidaknya satu QA spesialis.
              Tidak ada middleman, tidak ada lelang harga di belakang.
            </p>
          </div>
        </div>
      </section>
      <FeatureSplit data={{ eyebrow: "Bagaimana kami bekerja" }} />
      <CtaBanner data={{}} onNavigate={onNavigate} />
    </>
  );
}

/* =================== CONTACT =================== */
function ContactPage({ onNavigate }) {
  const [step, setStep] = React.useState(1);
  const [form, setForm] = React.useState({
    service: "", source: "", target: "", volume: "", deadline: "", name: "", email: "", company: "", message: ""
  });
  const upd = (k, v) => setForm({ ...form, [k]: v });

  return (
    <>
      <section style={{ paddingTop: 64, paddingBottom: 64 }}>
        <div className="container container-wide">
          <div className="eyebrow" style={{ marginBottom: 32 }}>Kontak</div>
          <h1 className="display-1" style={{ maxWidth: 1000 }}>
            Mari kita <em>bicara</em> tentang proyek Anda.
          </h1>
          <p className="lead" style={{ marginTop: 32, maxWidth: 600 }}>
            Estimasi biaya & timeline dalam 1 hari kerja. Konsultasi pertama gratis.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: 120 }}>
        <div className="container container-wide" style={{
          display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 64,
        }}>
          {/* Sidebar info */}
          <div>
            <div style={{
              padding: 32, background: "var(--paper-100)",
              borderRadius: "var(--radius-lg)", border: "1px solid var(--line)",
              marginBottom: 24,
            }}>
              <div className="mono" style={{ color: "var(--ink-500)", marginBottom: 16 }}>HUBUNGI LANGSUNG</div>
              <div style={{ marginBottom: 24 }}>
                <div className="body-sm" style={{ marginBottom: 4 }}>Email umum</div>
                <a href="mailto:halo@mancakata.id" style={{ fontSize: 18, fontWeight: 500 }}>halo@mancakata.id</a>
              </div>
              <div style={{ marginBottom: 24 }}>
                <div className="body-sm" style={{ marginBottom: 4 }}>Telepon</div>
                <div style={{ fontSize: 18, fontWeight: 500 }}>+62 21 5000 1414</div>
              </div>
              <div>
                <div className="body-sm" style={{ marginBottom: 4 }}>WhatsApp</div>
                <div style={{ fontSize: 18, fontWeight: 500 }}>+62 811 1414 414</div>
              </div>
            </div>
            <div style={{
              padding: 32, background: "var(--ink-900)", color: "var(--paper-50)",
              borderRadius: "var(--radius-lg)",
            }}>
              <div className="mono" style={{ color: "rgba(245,241,230,0.5)", marginBottom: 16 }}>KANTOR</div>
              {[
                { city: "Jakarta", addr: "Wisma 46, Sudirman Lt. 19, Jakarta Pusat" },
                { city: "Bandung", addr: "Jl. Cipaganti 88, Bandung 40161" },
                { city: "Singapura", addr: "1 Raffles Place #20-61, SG 048616" },
              ].map((o, i) => (
                <div key={o.city} style={{
                  paddingTop: 16, paddingBottom: 16,
                  borderBottom: i < 2 ? "1px solid rgba(245,241,230,0.15)" : "none",
                }}>
                  <div style={{ fontSize: 16, fontWeight: 500, marginBottom: 4 }}>{o.city}</div>
                  <div style={{ fontSize: 14, color: "rgba(245,241,230,0.7)" }}>{o.addr}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{
            padding: 48, background: "var(--paper-50)",
            border: "1px solid var(--line)", borderRadius: "var(--radius-lg)",
          }}>
            <div style={{ display: "flex", gap: 8, marginBottom: 40 }}>
              {[1, 2, 3].map((s) => (
                <div key={s} style={{ flex: 1, height: 3, borderRadius: 2,
                  background: s <= step ? "var(--accent)" : "var(--paper-200)" }}></div>
              ))}
            </div>

            <div className="mono" style={{ color: "var(--ink-500)", marginBottom: 12 }}>
              STEP /0{step} DARI /03
            </div>

            {step === 1 && (
              <>
                <h2 className="display-3" style={{ marginBottom: 32 }}>Tentang proyek Anda</h2>
                <FormField label="Layanan yang dibutuhkan">
                  <select value={form.service} onChange={(e) => upd("service", e.target.value)} className="form-input">
                    <option value="">Pilih layanan…</option>
                    <option>Penerjemahan Dokumen</option>
                    <option>Lokalisasi Software / Web</option>
                    <option>Subtitle & Dubbing</option>
                    <option>Interpreter Konferensi</option>
                    <option>Transcreation</option>
                    <option>Tersumpah / Sertifikasi</option>
                  </select>
                </FormField>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <FormField label="Bahasa sumber">
                    <input value={form.source} onChange={(e) => upd("source", e.target.value)}
                           className="form-input" placeholder="Contoh: Bahasa Indonesia" />
                  </FormField>
                  <FormField label="Bahasa target">
                    <input value={form.target} onChange={(e) => upd("target", e.target.value)}
                           className="form-input" placeholder="Contoh: English, Mandarin" />
                  </FormField>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <FormField label="Estimasi volume">
                    <select value={form.volume} onChange={(e) => upd("volume", e.target.value)} className="form-input">
                      <option value="">Pilih…</option>
                      <option>&lt; 1.000 kata</option>
                      <option>1.000 – 5.000 kata</option>
                      <option>5.000 – 20.000 kata</option>
                      <option>20.000 – 100.000 kata</option>
                      <option>&gt; 100.000 kata</option>
                    </select>
                  </FormField>
                  <FormField label="Deadline">
                    <input type="date" value={form.deadline} onChange={(e) => upd("deadline", e.target.value)}
                           className="form-input" />
                  </FormField>
                </div>
                <div style={{ marginTop: 40, display: "flex", justifyContent: "flex-end" }}>
                  <button className="btn btn-primary" onClick={() => setStep(2)}>
                    Lanjut <ArrowIcon size={12} />
                  </button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="display-3" style={{ marginBottom: 32 }}>Informasi kontak</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <FormField label="Nama lengkap">
                    <input value={form.name} onChange={(e) => upd("name", e.target.value)}
                           className="form-input" placeholder="Nama Anda" />
                  </FormField>
                  <FormField label="Perusahaan / lembaga">
                    <input value={form.company} onChange={(e) => upd("company", e.target.value)}
                           className="form-input" placeholder="Opsional" />
                  </FormField>
                </div>
                <FormField label="Email">
                  <input type="email" value={form.email} onChange={(e) => upd("email", e.target.value)}
                         className="form-input" placeholder="email@perusahaan.com" />
                </FormField>
                <FormField label="Catatan tambahan">
                  <textarea value={form.message} onChange={(e) => upd("message", e.target.value)}
                            className="form-input" rows={4}
                            placeholder="Konteks proyek, audiens, tone, atau permintaan khusus." />
                </FormField>
                <div style={{ marginTop: 40, display: "flex", justifyContent: "space-between" }}>
                  <button className="btn btn-ghost" onClick={() => setStep(1)}>← Kembali</button>
                  <button className="btn btn-primary" onClick={() => setStep(3)}>
                    Kirim Brief <ArrowIcon size={12} />
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <div style={{ textAlign: "center", padding: "48px 24px" }}>
                <div style={{
                  width: 64, height: 64, borderRadius: 999, background: "var(--accent)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  color: "var(--paper-50)", marginBottom: 32,
                }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M6 14L12 20L22 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="display-2" style={{ marginBottom: 16 }}>Terima kasih.</h2>
                <p className="lead" style={{ maxWidth: 480, margin: "0 auto" }}>
                  Brief Anda sudah masuk. Project Manager akan menghubungi Anda
                  dalam 1 hari kerja dengan estimasi biaya & timeline.
                </p>
                <button className="btn btn-secondary" style={{ marginTop: 32 }}
                        onClick={() => { setStep(1); setForm({ service: "", source: "", target: "", volume: "", deadline: "", name: "", email: "", company: "", message: "" }); }}>
                  Kirim brief lain
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function FormField({ label, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <label style={{
        display: "block", fontSize: 13, fontWeight: 500,
        color: "var(--ink-700)", marginBottom: 8,
      }}>{label}</label>
      {children}
    </div>
  );
}

Object.assign(window, {
  HomePage, ServicesPage, ServiceDetailPage,
  BlogPage, BlogDetailPage, AboutPage, ContactPage,
  FormField,
});
