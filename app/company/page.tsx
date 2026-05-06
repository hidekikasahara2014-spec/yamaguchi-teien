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
      {/* Page Header */}
      <div className="pt-32 pb-12 md:pt-40 md:pb-16" style={{ backgroundColor: "var(--gray)" }}>
        <div className="container">
          <p className="section-subtitle mb-2">Company</p>
          <h1 className="section-title">会社概要</h1>
        </div>
      </div>

      {/* Company Info */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <table className="w-full border-collapse">
            <tbody>
              {companyInfo.map((row, i) => (
                <tr key={i} className="border-b" style={{ borderColor: "var(--border)" }}>
                  <th
                    className="py-5 pr-8 text-left text-xs font-medium align-top w-32 md:w-40"
                    style={{ color: "var(--muted)", letterSpacing: "0.05em" }}
                  >
                    {row.label}
                  </th>
                  <td className="py-5 text-sm leading-relaxed">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-3xl">
          <h2 className="text-base font-semibold mb-4" style={{ color: "var(--green)" }}>アクセス</h2>
          <div
            className="w-full h-64 md:h-80 flex items-center justify-center text-sm"
            style={{ backgroundColor: "var(--gray)", color: "var(--muted)" }}
          >
            Googleマップを埋め込み予定
          </div>
        </div>
      </section>
    </>
  );
}
