const works = [
  { title: "和風庭園 リフォーム", location: "入間市", tag: "造園工事", desc: "石組み・松・苔を組み合わせた和の庭。既存の庭を全面リフォームしました。" },
  { title: "生垣の剪定・刈込", location: "所沢市", tag: "剪定", desc: "カイズカイブキの生垣を均一に刈り揃え、美しいラインを整えました。" },
  { title: "新築外構・植栽工事", location: "狭山市", tag: "造園工事", desc: "新築住宅の庭に芝生・低木・シンボルツリーを配置しました。" },
  { title: "松の年間管理", location: "入間市", tag: "年間管理", desc: "5本の松を年3回の剪定で管理。四季を通じた美しい樹形を維持しています。" },
  { title: "竹林の整備", location: "飯能市", tag: "年間管理", desc: "荒れた竹林を整理し、管理しやすい状態に戻しました。" },
  { title: "和モダン庭園 新設", location: "入間市", tag: "造園工事", desc: "現代的な外観の住宅に合わせた、シンプルで洗練された和の庭をデザインしました。" },
];

export default function WorksPage() {
  return (
    <>
      <div className="pt-32 pb-16 md:pt-44 md:pb-20" style={{ backgroundColor: "var(--bg-2)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <p className="section-en mb-4">Works</p>
          <h1 className="section-title">施工事例</h1>
        </div>
      </div>

      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: "var(--border)" }}>
            {works.map((w, i) => (
              <article key={i} className="group" style={{ backgroundColor: "var(--bg-2)" }}>
                <div
                  className="aspect-video overflow-hidden relative"
                  style={{
                    backgroundColor: "#1a1a1a",
                    backgroundImage: `url('/images/works-${i + 1}.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ backgroundColor: "rgba(200,169,110,0.1)" }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-[9px] tracking-widest px-2 py-0.5"
                      style={{ border: "1px solid var(--border-light)", color: "var(--gold)" }}
                    >
                      {w.tag}
                    </span>
                    <span className="text-[10px]" style={{ color: "var(--fg-muted)" }}>{w.location}</span>
                  </div>
                  <h2
                    className="text-base font-light mb-2 transition-colors duration-300 group-hover:text-[var(--gold)]"
                    style={{ fontFamily: "'Noto Serif JP', serif", color: "var(--fg)", letterSpacing: "0.08em" }}
                  >
                    {w.title}
                  </h2>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--fg-muted)" }}>{w.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
