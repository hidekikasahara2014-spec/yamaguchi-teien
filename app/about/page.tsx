export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <div className="pt-32 pb-12 md:pt-40 md:pb-16" style={{ backgroundColor: "var(--gray)" }}>
        <div className="container">
          <p className="section-subtitle mb-2">About</p>
          <h1 className="section-title">私たちについて</h1>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <div className="mb-16">
            <h2
              className="text-2xl md:text-4xl font-semibold leading-relaxed mb-8"
              style={{ color: "var(--green)", letterSpacing: "0.08em" }}
            >
              庭師の仕事は、<br />自然との対話だ。
            </h2>
            <p className="text-sm leading-loose mb-4" style={{ color: "var(--muted)" }}>
              山口庭園は、埼玉県入間市を拠点とする造園会社です。
              代表の山口は、庭師として20年以上のキャリアを持ち、
              「お客様の暮らしに寄り添う庭づくり」を信念に日々仕事に向き合っています。
            </p>
            <p className="text-sm leading-loose mb-4" style={{ color: "var(--muted)" }}>
              一本の木と向き合うとき、私たちはその木の歴史と、
              そこに暮らす方々の生活を感じながら鋏を入れます。
              単に「きれいに整える」だけでなく、木が持つ自然な美しさを引き出し、
              長く共に生きられる庭をつくることを大切にしています。
            </p>
            <p className="text-sm leading-loose" style={{ color: "var(--muted)" }}>
              剪定・造園工事・年間管理・植栽など、お庭に関するご相談は何でもお気軽にどうぞ。
              入間市を中心に、所沢市・狭山市・飯能市など近隣エリアにも対応しております。
            </p>
          </div>

          {/* Divider */}
          <div className="w-12 h-px mb-16" style={{ backgroundColor: "var(--green)" }} />

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "誠実", desc: "お客様との約束を守り、丁寧な仕事を心がけています。" },
              { title: "技術", desc: "伝統的な庭師の技を継承しながら、現代の暮らしに合った庭づくりを提供します。" },
              { title: "自然", desc: "木や草花が持つ本来の美しさを尊重し、自然の力を活かした庭造りを目指します。" },
            ].map((v, i) => (
              <div key={i}>
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ color: "var(--green)", letterSpacing: "0.15em" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-loose" style={{ color: "var(--muted)" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "var(--gray)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square"
                style={{
                  backgroundColor: "#c8d8b8",
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
