import Link from "next/link";

const newsList = [
  { date: "2025.04.29", category: "お知らせ", title: "Instagram始めました。日々の施工事例や庭の様子を発信中です。" },
  { date: "2025.03.15", category: "施工事例", title: "入間市内にて大型造園工事が完了しました。" },
  { date: "2025.02.10", category: "お知らせ", title: "春の剪定シーズンのご予約を受け付けております。" },
  { date: "2025.01.20", category: "お知らせ", title: "年間管理契約のご相談はお気軽にお問い合わせください。" },
];

const services = [
  { label: "剪定・刈込", en: "Pruning", desc: "松・生垣・庭木の剪定" },
  { label: "造園工事", en: "Landscaping", desc: "新築・リフォーム庭造り" },
  { label: "年間管理", en: "Maintenance", desc: "通年の庭木管理・草刈り" },
  { label: "樹木の移植", en: "Transplanting", desc: "庭木の移植・植栽" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        id="top"
        className="relative h-screen min-h-[600px] flex items-end justify-start overflow-hidden"
        style={{ backgroundColor: "#080808" }}
      >
        {/* 背景画像 */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
            opacity: 0.4,
          }}
        />
        {/* グラデーションオーバーレイ */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.3) 60%, rgba(8,8,8,0.6) 100%)" }}
        />

        {/* コンテンツ */}
        <div className="relative z-10 container pb-20 md:pb-28">
          {/* 縦書き風アクセント */}
          <div className="flex items-end gap-10">
            <div>
              <p
                className="text-[10px] mb-6"
                style={{ letterSpacing: "0.45em", color: "var(--gold)" }}
              >
                YAMAGUCHI TEIEN — IRUMA, SAITAMA
              </p>
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-light mb-6"
                style={{
                  fontFamily: "'Noto Serif JP', serif",
                  letterSpacing: "0.15em",
                  color: "var(--fg)",
                  lineHeight: 1.2,
                }}
              >
                山口<br />庭園
              </h1>
              <div className="flex items-center gap-4 mb-8">
                <span className="gold-line" />
                <p
                  className="text-xs"
                  style={{ letterSpacing: "0.2em", color: "var(--fg-muted)" }}
                >
                  緑を、暮らしに。埼玉県入間市の造園・庭師
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 text-[10px] tracking-[0.35em] uppercase transition-all duration-500 hover:bg-[var(--gold)] hover:text-[var(--bg)]"
                style={{
                  border: "1px solid var(--gold)",
                  color: "var(--gold)",
                }}
              >
                お問い合わせ
              </Link>
            </div>

            {/* 右側：縦書きテキスト */}
            <div
              className="hidden md:flex flex-col items-center gap-3 ml-auto pb-2"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              <p
                className="text-xs"
                style={{ letterSpacing: "0.3em", color: "var(--fg-muted)", fontSize: "0.65rem" }}
              >
                Scroll
              </p>
              <span className="w-px h-16" style={{ backgroundColor: "var(--border-light)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container">
          <div className="flex items-start justify-between mb-12">
            <div>
              <p className="section-en mb-3">News</p>
              <h2 className="section-title">お知らせ</h2>
            </div>
            <Link
              href="/news"
              className="text-[10px] tracking-[0.3em] uppercase mt-1 transition-colors duration-300 hover:text-[var(--gold)]"
              style={{ color: "var(--fg-muted)" }}
            >
              View All →
            </Link>
          </div>

          <div className="flex flex-col">
            {newsList.map((item, i) => (
              <Link
                key={i}
                href="/news"
                className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-6 transition-colors duration-300"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <span
                  className="text-[10px] tracking-widest flex-shrink-0"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {item.date}
                </span>
                <span
                  className="text-[9px] tracking-widest px-2 py-0.5 flex-shrink-0"
                  style={{ border: "1px solid var(--border-light)", color: "var(--gold)" }}
                >
                  {item.category}
                </span>
                <p
                  className="text-sm leading-relaxed transition-colors duration-300 group-hover:text-[var(--gold)]"
                  style={{ color: "var(--fg)" }}
                >
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 md:py-32" style={{ backgroundColor: "var(--bg-2)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* 画像 */}
            <div
              className="relative h-80 md:h-[500px] overflow-hidden"
              style={{
                backgroundColor: "#1a1a1a",
                backgroundImage: "url('/images/about.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* 金のコーナーアクセント */}
              <div className="absolute top-4 left-4 w-8 h-8" style={{ borderTop: "1px solid var(--gold)", borderLeft: "1px solid var(--gold)" }} />
              <div className="absolute bottom-4 right-4 w-8 h-8" style={{ borderBottom: "1px solid var(--gold)", borderRight: "1px solid var(--gold)" }} />
            </div>

            {/* テキスト */}
            <div>
              <p className="section-en mb-4">About</p>
              <h2
                className="text-2xl md:text-4xl font-light mb-8 leading-relaxed"
                style={{ fontFamily: "'Noto Serif JP', serif", color: "var(--fg)", letterSpacing: "0.1em" }}
              >
                庭師の仕事は、<br />自然との対話だ。
              </h2>
              <span className="gold-line mb-8" />
              <p className="text-sm leading-loose mb-4 mt-8" style={{ color: "var(--fg-muted)" }}>
                山口庭園は、埼玉県入間市を拠点とする造園会社です。
                剪定から造園工事まで、お庭に関するあらゆるお悩みにお応えします。
              </p>
              <p className="text-sm leading-loose mb-10" style={{ color: "var(--fg-muted)" }}>
                代表の山口を中心に、経験豊富なスタッフ3名が、
                一軒一軒のお庭に真摯に向き合います。
              </p>
              <Link
                href="/about"
                className="text-[10px] tracking-[0.35em] uppercase transition-colors duration-300 hover:text-[var(--gold)]"
                style={{ color: "var(--fg-muted)", borderBottom: "1px solid var(--border-light)", paddingBottom: "4px" }}
              >
                More About →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container">
          <div className="text-center mb-16">
            <p className="section-en mb-3">Service</p>
            <h2 className="section-title">サービス一覧</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: "var(--border)" }}>
            {services.map((s, i) => (
              <div
                key={i}
                className="group p-10 flex flex-col gap-4 transition-colors duration-500 hover:bg-[var(--gold)]"
                style={{ backgroundColor: "var(--bg-2)" }}
              >
                <span
                  className="text-[9px] tracking-[0.3em] uppercase transition-colors duration-500 group-hover:text-[var(--bg)]"
                  style={{ color: "var(--gold)" }}
                >
                  {s.en}
                </span>
                <h3
                  className="text-lg font-light transition-colors duration-500 group-hover:text-[var(--bg)]"
                  style={{ fontFamily: "'Noto Serif JP', serif", color: "var(--fg)", letterSpacing: "0.1em" }}
                >
                  {s.label}
                </h3>
                <p
                  className="text-xs leading-relaxed transition-colors duration-500 group-hover:text-[var(--bg)]"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/service"
              className="inline-block px-10 py-3 text-[10px] tracking-[0.35em] uppercase transition-all duration-300 hover:bg-[var(--gold)] hover:text-[var(--bg)] hover:border-[var(--gold)]"
              style={{ border: "1px solid var(--border-light)", color: "var(--fg-muted)" }}
            >
              サービス詳細
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--bg-2)" }}>
        <div className="container">
          <div className="flex items-start justify-between mb-12">
            <div>
              <p className="section-en mb-3">Gallery</p>
              <h2 className="section-title">施工ギャラリー</h2>
            </div>
            <Link
              href="/gallery"
              className="text-[10px] tracking-[0.3em] uppercase mt-1 transition-colors duration-300 hover:text-[var(--gold)]"
              style={{ color: "var(--fg-muted)" }}
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden relative group"
                style={{
                  backgroundColor: "#1a1a1a",
                  backgroundImage: `url('/images/gallery-${i + 1}.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundColor: "rgba(200,169,110,0.15)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        className="py-24 md:py-36 text-center relative overflow-hidden"
        style={{ backgroundColor: "#080808" }}
      >
        {/* 背景装飾 */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, var(--gold) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 container">
          <p className="section-en mb-6">Contact</p>
          <h2
            className="text-2xl md:text-4xl font-light mb-6"
            style={{ fontFamily: "'Noto Serif JP', serif", color: "var(--fg)", letterSpacing: "0.15em", lineHeight: 1.8 }}
          >
            お庭のことなら<br />お気軽にご相談ください
          </h2>
          <div className="flex justify-center mb-10">
            <span className="gold-line" />
          </div>
          <p className="text-xs mb-12" style={{ color: "var(--fg-muted)", letterSpacing: "0.1em" }}>
            剪定・造園・年間管理など、まずはお問い合わせください
          </p>
          <Link
            href="/contact"
            className="inline-block px-14 py-4 text-[10px] tracking-[0.4em] uppercase transition-all duration-500 hover:bg-[var(--gold)] hover:text-[var(--bg)]"
            style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
          >
            お問い合わせ
          </Link>
        </div>
      </section>
    </>
  );
}
