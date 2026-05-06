const services = [
  { en: "Pruning", title: "剪定・刈込", desc: "松・もみじ・生垣・庭木など、樹種に合わせた適切な剪定を行います。樹木の健康を保ちながら、美しい樹形を整えます。", details: ["松の剪定（みどり摘み・もみあげ）", "広葉樹の透かし剪定", "生垣の刈込・成形", "高木の剪定（高所作業）"] },
  { en: "Landscaping", title: "造園工事", desc: "新築住宅の庭づくりや、既存の庭のリフォームに対応します。お客様のご要望とライフスタイルに合わせたデザインをご提案します。", details: ["庭のデザイン・設計", "石組み・飛び石の施工", "芝生の張り", "植栽・シンボルツリーの選定・植え付け"] },
  { en: "Maintenance", title: "年間管理", desc: "季節ごとに必要な管理作業を年間契約でお引き受けします。お庭をいつも美しい状態に保ちます。", details: ["春の剪定・施肥", "夏の草刈り・病害虫対策", "秋の落ち葉清掃・整枝", "冬の雪吊り・冬囲い"] },
  { en: "Transplanting", title: "樹木の移植・伐採", desc: "庭木の移植や、枯れ木・危険木の伐採に対応します。大型の樹木も安全に作業します。", details: ["庭木の掘り起こし・移植", "大木の伐採", "根切り・根の除去", "伐採後の整地"] },
  { en: "Weeding", title: "草刈り・除草", desc: "庭や空き地の草刈り、除草作業を行います。定期的な管理から、スポット対応まで承ります。", details: ["手作業による丁寧な除草", "機械による大面積の草刈り", "除草剤の散布（ご希望の場合）", "刈り取り後の清掃"] },
  { en: "Pest Control", title: "消毒・病害虫防除", desc: "樹木の健康を守るため、病害虫の予防・防除を行います。適切な薬剤を選定し、安全に作業します。", details: ["害虫の発見・同定", "薬剤散布（毛虫・アブラムシ等）", "カイガラムシの除去", "予防的な定期消毒"] },
];

export default function ServicePage() {
  return (
    <>
      <div className="pt-32 pb-16 md:pt-44 md:pb-20" style={{ backgroundColor: "var(--bg-2)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <p className="section-en mb-4">Service</p>
          <h1 className="section-title">サービス</h1>
        </div>
      </div>

      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container max-w-3xl">
          <p className="text-sm leading-loose" style={{ color: "var(--fg-muted)" }}>
            山口庭園では、剪定・造園工事・年間管理から草刈り・伐採まで、
            お庭に関するあらゆるサービスをご提供しています。
            埼玉県入間市を中心に近隣エリアにも対応。まずはお気軽にご相談ください。
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "var(--border)" }}>
            {services.map((s, i) => (
              <div key={i} className="p-10 md:p-12" style={{ backgroundColor: "var(--bg-2)" }}>
                <div className="flex items-baseline gap-4 mb-2">
                  <span className="text-[10px] tracking-widest" style={{ color: "var(--fg-muted)" }}>0{i + 1}</span>
                  <p className="section-en">{s.en}</p>
                </div>
                <h2
                  className="text-xl font-light mb-4"
                  style={{ fontFamily: "'Noto Serif JP', serif", color: "var(--fg)", letterSpacing: "0.1em" }}
                >
                  {s.title}
                </h2>
                <span className="gold-line mb-6 block" />
                <p className="text-sm leading-loose mb-6" style={{ color: "var(--fg-muted)" }}>{s.desc}</p>
                <ul className="space-y-2">
                  {s.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-3 text-xs" style={{ color: "var(--fg-muted)" }}>
                      <span className="mt-2 w-3 h-px flex-shrink-0 inline-block" style={{ backgroundColor: "var(--gold)" }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 text-center" style={{ backgroundColor: "#080808" }}>
        <div className="container max-w-2xl">
          <p className="section-en mb-4">Estimate</p>
          <h2
            className="text-xl font-light mb-6"
            style={{ fontFamily: "'Noto Serif JP', serif", color: "var(--fg)", letterSpacing: "0.15em" }}
          >
            料金について
          </h2>
          <span className="gold-line mx-auto mb-8 block" />
          <p className="text-sm leading-loose" style={{ color: "var(--fg-muted)" }}>
            料金は作業内容・樹木の種類・規模・現場の状況によって異なります。<br />
            まずは無料でお見積もりを承っておりますので、お気軽にお問い合わせください。
          </p>
        </div>
      </section>
    </>
  );
}
