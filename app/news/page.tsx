import Link from "next/link";

const newsList = [
  { date: "2025.04.29", category: "お知らせ", title: "Instagram始めました。日々の施工事例や庭の様子を発信中です。", body: "山口庭園の公式Instagramアカウントを開設しました。日々の施工風景、完成した庭の様子、季節ごとの庭木の表情などをリアルタイムで発信していきます。ぜひフォローしてください。" },
  { date: "2025.03.15", category: "施工事例", title: "入間市内にて大型造園工事が完了しました。", body: "新築戸建て住宅の庭造り工事が完了しました。石組み・植栽・芝生敷きを組み合わせた和モダンの庭です。" },
  { date: "2025.02.10", category: "お知らせ", title: "春の剪定シーズンのご予約を受け付けております。", body: "3月〜5月の剪定シーズンに向けてご予約の受付を開始しました。お早めにご連絡ください。" },
  { date: "2025.01.20", category: "お知らせ", title: "年間管理契約のご相談はお気軽にお問い合わせください。", body: "春・夏・秋・冬と通年でお庭の管理をお任せいただけるプランをご用意しております。" },
  { date: "2024.12.01", category: "施工事例", title: "所沢市にて松の剪定・透かし剪定を行いました。", body: "樹齢30年を超える松の大木の剪定を行いました。枝の密度を調整し、風通しと見た目の美しさを両立しました。" },
  { date: "2024.11.15", category: "お知らせ", title: "冬支度・雪吊り作業のご依頼を受け付けております。", body: "冬の積雪による樹木の枝折れを防ぐ雪吊り作業を承っております。" },
];

export default function NewsPage() {
  return (
    <>
      <div className="pt-32 pb-16 md:pt-44 md:pb-20" style={{ backgroundColor: "var(--bg-2)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <p className="section-en mb-4">News</p>
          <h1 className="section-title">お知らせ</h1>
        </div>
      </div>

      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container max-w-3xl">
          {newsList.map((item, i) => (
            <article
              key={i}
              className="py-10"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <time className="text-[10px] tracking-widest" style={{ color: "var(--fg-muted)" }}>{item.date}</time>
                <span
                  className="text-[9px] tracking-widest px-2 py-0.5"
                  style={{ border: "1px solid var(--border-light)", color: "var(--gold)" }}
                >
                  {item.category}
                </span>
              </div>
              <h2
                className="text-base font-medium mb-4"
                style={{ color: "var(--fg)", letterSpacing: "0.05em" }}
              >
                {item.title}
              </h2>
              <p className="text-sm leading-loose" style={{ color: "var(--fg-muted)" }}>{item.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
