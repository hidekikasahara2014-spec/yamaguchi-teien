const companyInfo = [
  { label: "会社名", value: "山口庭園" },
  { label: "代表者", value: "山口 達也" },
  { label: "所在地", value: "〒358-0000 埼玉県入間市" },
  { label: "電話番号", value: "000-000-0000" },
  { label: "メール", value: "info@yamaguchi-teien.jp" },
  { label: "設立", value: "2005年" },
  { label: "事業内容", value: "造園工事・庭木の剪定・年間管理・植栽工事・伐採・草刈り" },
  { label: "対応エリア", value: "埼玉県入間市・所沢市・狭山市・飯能市・川越市 および近隣市町村" },
];

export default function CompanyPage() {
  return (
    <>
      <div className="pt-32 pb-16 md:pt-44 md:pb-20" style={{ backgroundColor: "var(--bg-2)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <p className="section-en mb-4">Company</p>
          <h1 className="section-title">会社概要</h1>
        </div>
      </div>

      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container max-w-3xl">
          <table className="w-full border-collapse">
            <tbody>
              {companyInfo.map((row, i) => (
                <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                  <th
                    className="py-6 pr-8 text-left text-xs font-normal align-top w-32 md:w-40"
                    style={{ color: "var(--gold)", letterSpacing: "0.05em" }}
                  >
                    {row.label}
                  </th>
                  <td className="py-6 text-sm leading-relaxed" style={{ color: "var(--fg)" }}>
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="pb-20 md:pb-28" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container max-w-3xl">
          <h2
            className="text-base font-light mb-6"
            style={{ color: "var(--gold)", letterSpacing: "0.2em" }}
          >
            Access
          </h2>
          <div
            className="w-full h-64 md:h-80 flex items-center justify-center text-sm"
            style={{ backgroundColor: "var(--bg-3)", border: "1px solid var(--border)", color: "var(--fg-muted)" }}
          >
            Googleマップを埋め込み予定
          </div>
        </div>
      </section>
    </>
  );
}
