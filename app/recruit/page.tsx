import Link from "next/link";

const positions = [
  {
    title: "庭師（経験者）",
    type: "正社員",
    details: [
      { label: "勤務地", value: "埼玉県入間市（現場は近隣各地）" },
      { label: "給与", value: "月給 230,000円〜（経験・スキルにより優遇）" },
      { label: "勤務時間", value: "8:00〜17:00（季節により変動あり）" },
      { label: "休日", value: "週休2日（日・祝）、夏季休暇、年末年始休暇" },
      { label: "待遇", value: "社会保険完備、車通勤可、道具支給" },
      { label: "応募資格", value: "造園の実務経験3年以上、普通自動車免許（AT可）" },
    ],
  },
  {
    title: "庭師見習い・未経験者",
    type: "正社員",
    details: [
      { label: "勤務地", value: "埼玉県入間市（現場は近隣各地）" },
      { label: "給与", value: "月給 200,000円〜（スキル習得に応じて昇給）" },
      { label: "勤務時間", value: "8:00〜17:00（季節により変動あり）" },
      { label: "休日", value: "週休2日（日・祝）、夏季休暇、年末年始休暇" },
      { label: "待遇", value: "社会保険完備、制服・道具支給、資格取得支援" },
      { label: "応募資格", value: "普通自動車免許（AT可）、緑の仕事が好きな方" },
    ],
  },
];

export default function RecruitPage() {
  return (
    <>
      <div className="pt-32 pb-16 md:pt-44 md:pb-20" style={{ backgroundColor: "var(--bg-2)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <p className="section-en mb-4">Recruit</p>
          <h1 className="section-title">採用情報</h1>
        </div>
      </div>

      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container max-w-3xl">
          <h2
            className="text-xl font-light mb-6"
            style={{ fontFamily: "'Noto Serif JP', serif", color: "var(--fg)", letterSpacing: "0.12em" }}
          >
            一緒に、緑の仕事をしませんか。
          </h2>
          <span className="gold-line mb-8 block" />
          <p className="text-sm leading-loose mb-4" style={{ color: "var(--fg-muted)" }}>
            山口庭園では、共に働く仲間を募集しています。
            庭師の仕事に興味がある方、自然の中で働きたい方、
            経験者・未経験者どちらも歓迎します。
          </p>
          <p className="text-sm leading-loose" style={{ color: "var(--fg-muted)" }}>
            少人数のチームなので、先輩から直接技術を学べる環境です。
            丁寧に指導しますので、はじめての方もご安心ください。
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container max-w-3xl">
          <div className="flex flex-col gap-8">
            {positions.map((pos, i) => (
              <div key={i} className="p-8 md:p-10" style={{ backgroundColor: "var(--bg-2)", border: "1px solid var(--border)" }}>
                <div className="flex items-center gap-4 mb-6">
                  <h2
                    className="text-lg font-light"
                    style={{ fontFamily: "'Noto Serif JP', serif", color: "var(--fg)", letterSpacing: "0.08em" }}
                  >
                    {pos.title}
                  </h2>
                  <span
                    className="text-[9px] tracking-widest px-2 py-0.5"
                    style={{ border: "1px solid var(--border-light)", color: "var(--gold)" }}
                  >
                    {pos.type}
                  </span>
                </div>
                <table className="w-full border-collapse">
                  <tbody>
                    {pos.details.map((d, j) => (
                      <tr key={j} style={{ borderBottom: "1px solid var(--border)" }}>
                        <th
                          className="py-4 pr-6 text-left text-xs font-normal align-top w-24"
                          style={{ color: "var(--gold)" }}
                        >
                          {d.label}
                        </th>
                        <td className="py-4 text-sm" style={{ color: "var(--fg-muted)" }}>{d.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: "#080808" }}>
        <div className="container max-w-2xl">
          <p className="section-en mb-4">Apply</p>
          <h2
            className="text-xl font-light mb-6"
            style={{ fontFamily: "'Noto Serif JP', serif", color: "var(--fg)", letterSpacing: "0.15em" }}
          >
            応募・お問い合わせ
          </h2>
          <span className="gold-line mx-auto block mb-8" />
          <p className="text-sm leading-loose mb-10" style={{ color: "var(--fg-muted)" }}>
            まずはお気軽にお問い合わせください。採用担当者が丁寧にご対応いたします。
          </p>
          <Link
            href="/contact"
            className="inline-block px-12 py-4 text-[10px] tracking-[0.35em] uppercase transition-all duration-500 hover:bg-[var(--gold)] hover:text-[var(--bg)]"
            style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
          >
            採用に応募する
          </Link>
        </div>
      </section>
    </>
  );
}
