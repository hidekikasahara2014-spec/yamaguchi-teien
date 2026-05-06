import Link from "next/link";

const newsList = [
  {
    date: "2025.04.29",
    category: "お知らせ",
    title: "Instagram始めました。日々の施工事例や庭の様子を発信中です。",
    href: "/news",
  },
  {
    date: "2025.03.15",
    category: "施工事例",
    title: "入間市内にて大型造園工事が完了しました。",
    href: "/news",
  },
  {
    date: "2025.02.10",
    category: "お知らせ",
    title: "春の剪定シーズンのご予約を受け付けております。",
    href: "/news",
  },
  {
    date: "2025.01.20",
    category: "お知らせ",
    title: "年間管理契約のご相談はお気軽にお問い合わせください。",
    href: "/news",
  },
];

const services = [
  { label: "剪定・刈込", desc: "松・生垣・庭木の剪定" },
  { label: "造園工事", desc: "新築・リフォーム庭造り" },
  { label: "庭の管理", desc: "年間管理・草刈り" },
  { label: "樹木の移植", desc: "庭木の移植・植栽" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        id="top"
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "#1a2e0e" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
        />
        <div className="relative z-10 text-center text-white px-6">
          <p
            className="text-xs md:text-sm uppercase mb-6 opacity-80"
            style={{ letterSpacing: "0.4em" }}
          >
            Yamaguchi Teien — Iruma, Saitama
          </p>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight"
            style={{ letterSpacing: "0.12em" }}
          >
            山口庭園
          </h1>
          <p className="text-sm md:text-base opacity-80 max-w-md mx-auto leading-relaxed" style={{ letterSpacing: "0.05em" }}>
            緑を、暮らしに。<br />
            埼玉県入間市の造園・庭師
          </p>
          <Link
            href="/contact"
            className="inline-block mt-10 px-8 py-3 border border-white text-white text-xs uppercase hover:bg-white hover:text-green-900 transition-all duration-300"
            style={{ letterSpacing: "0.25em" }}
          >
            お問い合わせ
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white opacity-60">
          <span className="text-[10px] uppercase" style={{ letterSpacing: "0.3em" }}>Scroll</span>
          <span className="w-px h-12 bg-white/60" />
        </div>
      </section>

      {/* News */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="flex items-baseline justify-between mb-10">
            <div>
              <p className="section-subtitle mb-2">News</p>
              <h2 className="section-title">お知らせ</h2>
            </div>
            <Link
              href="/news"
              className="text-xs uppercase hover:text-green-800 transition-colors"
              style={{ letterSpacing: "0.2em", color: "var(--muted)" }}
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsList.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="group p-6 transition-colors duration-300"
                style={{ border: "1px solid var(--border)" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs" style={{ color: "var(--muted)" }}>{item.date}</span>
                  <span
                    className="text-[10px] px-2 py-0.5"
                    style={{ letterSpacing: "0.1em", background: "var(--gray)", color: "var(--muted)" }}
                  >
                    {item.category}
                  </span>
                </div>
                <p className="text-sm leading-relaxed group-hover:text-green-800 transition-colors">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--gray)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subtitle mb-2">About</p>
              <h2 className="section-title mb-6">庭師の仕事は、<br />自然との対話だ。</h2>
              <p className="text-sm leading-loose mb-4" style={{ color: "var(--muted)" }}>
                山口庭園は、埼玉県入間市を拠点とする造園会社です。
                剪定から造園工事まで、お庭に関するあらゆるお悩みにお応えします。
              </p>
              <p className="text-sm leading-loose mb-8" style={{ color: "var(--muted)" }}>
                代表の山口を中心に、経験豊富なスタッフ3名が、
                一軒一軒のお庭に真摯に向き合います。
              </p>
              <Link
                href="/about"
                className="text-xs uppercase pb-0.5 hover:opacity-70 transition-opacity"
                style={{ letterSpacing: "0.25em", color: "var(--green)", borderBottom: "1px solid var(--green)" }}
              >
                More About →
              </Link>
            </div>
            <div
              className="h-72 md:h-96 overflow-hidden flex items-center justify-center text-8xl"
              style={{ backgroundColor: "#c8d8b8", backgroundImage: "url('/images/about.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
            >
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-12">
            <p className="section-subtitle mb-2">Service</p>
            <h2 className="section-title">サービス一覧</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="p-8 text-center group cursor-default transition-all duration-300 bg-[#f5f5f3] hover:bg-[#2d5016] hover:text-white"
              >
                <p className="text-sm font-semibold mb-2">{s.label}</p>
                <p className="text-xs text-[#6b6b6b] group-hover:text-white/80">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/service"
              className="inline-block px-10 py-3 text-white text-xs uppercase hover:opacity-80 transition-opacity duration-300"
              style={{ backgroundColor: "var(--green)", letterSpacing: "0.25em" }}
            >
              サービス詳細
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--gray)" }}>
        <div className="container">
          <div className="flex items-baseline justify-between mb-10">
            <div>
              <p className="section-subtitle mb-2">Gallery</p>
              <h2 className="section-title">施工ギャラリー</h2>
            </div>
            <Link
              href="/gallery"
              className="text-xs uppercase hover:text-green-800 transition-colors"
              style={{ letterSpacing: "0.2em", color: "var(--muted)" }}
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden relative hover:opacity-90 transition-opacity"
                style={{
                  backgroundColor: "#b8c8a0",
                  backgroundImage: `url('/images/gallery-${i + 1}.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 md:py-28 text-white text-center" style={{ backgroundColor: "var(--green)" }}>
        <div className="container">
          <p className="section-subtitle mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>Contact</p>
          <h2 className="text-2xl md:text-4xl font-semibold mb-4" style={{ letterSpacing: "0.1em" }}>
            お庭のことなら<br />お気軽にご相談ください
          </h2>
          <p className="text-sm opacity-70 mb-10">剪定・造園・年間管理など、まずはお問い合わせください</p>
          <Link
            href="/contact"
            className="inline-block px-12 py-4 border border-white text-white text-xs uppercase hover:bg-white hover:text-green-900 transition-all duration-300"
            style={{ letterSpacing: "0.3em" }}
          >
            お問い合わせ
          </Link>
        </div>
      </section>
    </>
  );
}
