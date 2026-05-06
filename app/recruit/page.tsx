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
      {/* Page Header */}
      <div className="pt-32 pb-12 md:pt-40 md:pb-16" style={{ backgroundColor: "var(--gray)" }}>
        <div className="container">
          <p className="section-subtitle mb-2">Recruit</p>
          <h1 className="section-title">採用情報</h1>
        </div>
      </div>

      {/* Message */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <h2 className="text-xl font-semibold mb-6" style={{ color: "var(--green)" }}>
            一緒に、緑の仕事をしませんか。
          </h2>
          <p className="text-sm leading-loose mb-4" style={{ color: "var(--muted)" }}>
            山口庭園では、共に働く仲間を募集しています。
            庭師の仕事に興味がある方、自然の中で働きたい方、
            経験者・未経験者どちらも歓迎します。
          </p>
          <p className="text-sm leading-loose" style={{ color: "var(--muted)" }}>
            少人数のチームなので、先輩から直接技術を学べる環境です。
            丁寧に指導しますので、はじめての方もご安心ください。
          </p>
        </div>
      </section>

      {/* Positions */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-3xl">
          <div className="flex flex-col gap-10">
            {positions.map((pos, i) => (
              <div key={i} className="p-8 md:p-10" style={{ border: "1px solid var(--border)" }}>
                <div className="flex items-center gap-3 mb-6">
                  <h2 className="text-lg font-semibold">{pos.title}</h2>
                  <span
                    className="text-[10px] px-2 py-0.5"
                    style={{ background: "var(--gray)", color: "var(--muted)", letterSpacing: "0.1em" }}
                  >
                    {pos.type}
                  </span>
                </div>
                <table className="w-full border-collapse">
                  <tbody>
                    {pos.details.map((d, j) => (
                      <tr key={j} className="border-b" style={{ borderColor: "var(--border)" }}>
                        <th
                          className="py-3 pr-6 text-left text-xs font-medium align-top w-24"
                          style={{ color: "var(--muted)" }}
                        >
                          {d.label}
                        </th>
                        <td className="py-3 text-sm">{d.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-16 text-white text-center" style={{ backgroundColor: "var(--green)" }}>
        <div className="container max-w-2xl">
          <h2 className="text-xl font-semibold mb-4">応募・お問い合わせ</h2>
          <p className="text-sm opacity-70 mb-8">
            まずはお気軽にお問い合わせください。<br />
            採用担当者が丁寧にご対応いたします。
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-3 border border-white text-white text-xs uppercase hover:bg-white hover:text-green-900 transition-all duration-300"
            style={{ letterSpacing: "0.25em" }}
          >
            採用に応募する
          </Link>
        </div>
      </section>
    </>
  );
}
