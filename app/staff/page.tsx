const staffList = [
  { name: "山口 達也", role: "代表・庭師", en: "President / Master Gardener", experience: "庭師歴 20年以上", bio: "埼玉県入間市出身。10代の頃から庭師の仕事に魅了され、修業を経て山口庭園を設立。「木と対話しながら仕事をする」がモットー。松の剪定と石組みが得意。", hobby: "趣味：盆栽・山歩き", image: "/images/staff-1.jpg" },
  { name: "田中 健二", role: "庭師", en: "Gardener", experience: "庭師歴 10年", bio: "造園の専門学校を卒業後、山口庭園に入社。若手ながら確かな技術と丁寧な仕事ぶりで、お客様からの信頼も厚い。生垣の刈込が得意。", hobby: "趣味：サッカー・料理", image: "/images/staff-2.jpg" },
  { name: "佐藤 誠", role: "庭師", en: "Gardener", experience: "庭師歴 8年", bio: "異業種から転職し庭師の道へ。「緑の仕事がしたい」という想いで入社。お客様とのコミュニケーションを大切にし、ご要望を丁寧にヒアリングします。", hobby: "趣味：ガーデニング・写真", image: "/images/staff-3.jpg" },
  { name: "鈴木 拓海", role: "庭師見習い", en: "Apprentice Gardener", experience: "入社1年目", bio: "自然が好きで庭師を志した最年少メンバー。先輩たちの技術を吸収しながら、毎日元気に現場で活躍中。将来は造園デザインも手がけたいと夢を持っています。", hobby: "趣味：キャンプ・DIY", image: "/images/staff-4.jpg" },
];

export default function StaffPage() {
  return (
    <>
      <div className="pt-32 pb-16 md:pt-44 md:pb-20" style={{ backgroundColor: "var(--bg-2)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <p className="section-en mb-4">Staff</p>
          <h1 className="section-title">スタッフ紹介</h1>
        </div>
      </div>

      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container">
          <div className="flex flex-col gap-0">
            {staffList.map((s, i) => (
              <article
                key={i}
                className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-0"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                {/* 写真 */}
                <div
                  className="h-64 md:h-80"
                  style={{
                    backgroundColor: "#1a1a1a",
                    backgroundImage: `url('${s.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                  }}
                />
                {/* 情報 */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <p className="section-en mb-3">{s.en}</p>
                  <h2
                    className="text-2xl font-light mb-1"
                    style={{ fontFamily: "'Noto Serif JP', serif", color: "var(--fg)", letterSpacing: "0.15em" }}
                  >
                    {s.name}
                  </h2>
                  <p className="text-xs mb-1" style={{ color: "var(--gold)", letterSpacing: "0.15em" }}>{s.role}</p>
                  <p className="text-xs mb-6" style={{ color: "var(--fg-muted)" }}>{s.experience}</p>
                  <span className="gold-line mb-6 block" />
                  <p className="text-sm leading-loose mb-4" style={{ color: "var(--fg-muted)" }}>{s.bio}</p>
                  <p className="text-xs" style={{ color: "#555" }}>{s.hobby}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: "#080808" }}>
        <div className="container max-w-2xl">
          <p className="section-en mb-4">Team</p>
          <h2
            className="text-xl font-light mb-6"
            style={{ fontFamily: "'Noto Serif JP', serif", color: "var(--fg)", letterSpacing: "0.15em" }}
          >
            チームで、お庭を守ります。
          </h2>
          <span className="gold-line mx-auto block mb-8" />
          <p className="text-sm leading-loose" style={{ color: "var(--fg-muted)" }}>
            山口庭園のスタッフは全員、お客様のお庭を自分の庭のように大切に扱います。
          </p>
        </div>
      </section>
    </>
  );
}
