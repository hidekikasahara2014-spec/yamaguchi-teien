export default function AboutPage() {
  return (
    <>
      <div className="pt-32 pb-16 md:pt-44 md:pb-20" style={{ backgroundColor: "var(--bg-2)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <p className="section-en mb-4">About</p>
          <h1 className="section-title">私たちについて</h1>
        </div>
      </div>

      {/* Philosophy */}
      <section className="py-20 md:py-32" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div
              className="relative h-80 md:h-[520px] overflow-hidden"
              style={{
                backgroundColor: "#1a1a1a",
                backgroundImage: "url('/images/about.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute top-4 left-4 w-8 h-8" style={{ borderTop: "1px solid var(--gold)", borderLeft: "1px solid var(--gold)" }} />
              <div className="absolute bottom-4 right-4 w-8 h-8" style={{ borderBottom: "1px solid var(--gold)", borderRight: "1px solid var(--gold)" }} />
            </div>
            <div>
              <p className="section-en mb-4">Philosophy</p>
              <h2
                className="text-2xl md:text-4xl font-light mb-8 leading-relaxed"
                style={{ fontFamily: "'Noto Serif JP', serif", color: "var(--fg)", letterSpacing: "0.1em" }}
              >
                庭師の仕事は、<br />自然との対話だ。
              </h2>
              <span className="gold-line mb-8 block" />
              <p className="text-sm leading-loose mb-5 mt-8" style={{ color: "var(--fg-muted)" }}>
                山口庭園は、埼玉県入間市を拠点とする造園会社です。
                代表の山口は、庭師として20年以上のキャリアを持ち、
                「お客様の暮らしに寄り添う庭づくり」を信念に日々仕事に向き合っています。
              </p>
              <p className="text-sm leading-loose mb-5" style={{ color: "var(--fg-muted)" }}>
                一本の木と向き合うとき、私たちはその木の歴史と、
                そこに暮らす方々の生活を感じながら鋏を入れます。
                単に整えるだけでなく、木が持つ自然な美しさを引き出し、
                長く共に生きられる庭をつくることを大切にしています。
              </p>
              <p className="text-sm leading-loose" style={{ color: "var(--fg-muted)" }}>
                入間市を中心に、所沢市・狭山市・飯能市など近隣エリアにも対応しております。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--bg-2)" }}>
        <div className="container">
          <div className="text-center mb-16">
            <p className="section-en mb-3">Values</p>
            <h2 className="section-title">大切にしていること</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "var(--border)" }}>
            {[
              { en: "Sincerity", title: "誠実", desc: "お客様との約束を守り、丁寧な仕事を心がけています。見えないところにも手を抜きません。" },
              { en: "Technique", title: "技術", desc: "伝統的な庭師の技を継承しながら、現代の暮らしに合った庭づくりを提供します。" },
              { en: "Nature", title: "自然", desc: "木や草花が持つ本来の美しさを尊重し、自然の力を活かした庭造りを目指します。" },
            ].map((v, i) => (
              <div key={i} className="p-10 md:p-12" style={{ backgroundColor: "var(--bg)" }}>
                <p className="section-en mb-3">{v.en}</p>
                <h3
                  className="text-xl font-light mb-5"
                  style={{ fontFamily: "'Noto Serif JP', serif", color: "var(--fg)", letterSpacing: "0.2em" }}
                >
                  {v.title}
                </h3>
                <span className="gold-line mb-5 block" />
                <p className="text-sm leading-loose" style={{ color: "var(--fg-muted)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square"
                style={{
                  backgroundColor: "#1a1a1a",
                  backgroundImage: `url('/images/about-${i + 1}.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
