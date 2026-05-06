const works = [
  { title: "和風庭園 リフォーム", location: "入間市", tag: "造園工事", desc: "石組み・松・苔を組み合わせた和の庭。既存の庭を全面リフォームしました。" },
  { title: "生垣の剪定・刈込", location: "所沢市", tag: "剪定", desc: "カイズカイブキの生垣を均一に刈り揃え、美しいラインを整えました。" },
  { title: "新築外構・植栽工事", location: "狭山市", tag: "造園工事", desc: "新築住宅の庭に芝生・低木・シンボルツリーを配置しました。" },
  { title: "松の年間管理", location: "入間市", tag: "庭の管理", desc: "5本の松を年3回の剪定で管理。四季を通じた美しい樹形を維持しています。" },
  { title: "竹林の整備", location: "飯能市", tag: "庭の管理", desc: "荒れた竹林を整理し、管理しやすい状態に戻しました。" },
  { title: "和モダン庭園 新設", location: "入間市", tag: "造園工事", desc: "現代的な外観の住宅に合わせた、シンプルで洗練された和の庭をデザインしました。" },
];

const tags = ["すべて", "造園工事", "剪定", "庭の管理"];

export default function WorksPage() {
  return (
    <>
      {/* Page Header */}
      <div className="pt-32 pb-12 md:pt-40 md:pb-16" style={{ backgroundColor: "var(--gray)" }}>
        <div className="container">
          <p className="section-subtitle mb-2">Works</p>
          <h1 className="section-title">施工事例</h1>
        </div>
      </div>

      {/* Works Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((w, i) => (
              <article key={i} className="group">
                <div
                  className="aspect-video mb-4 overflow-hidden"
                  style={{
                    backgroundColor: "#c8d8b8",
                    backgroundImage: `url('/images/works-${i + 1}.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[10px] px-2 py-0.5"
                    style={{ letterSpacing: "0.1em", background: "var(--gray)", color: "var(--muted)" }}
                  >
                    {w.tag}
                  </span>
                  <span className="text-xs" style={{ color: "var(--muted)" }}>{w.location}</span>
                </div>
                <h2 className="text-base font-semibold mb-2 group-hover:text-green-800 transition-colors">
                  {w.title}
                </h2>
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{w.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
