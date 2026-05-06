const staffList = [
  {
    name: "山口 達也",
    role: "代表・庭師",
    experience: "庭師歴 20年以上",
    bio: "埼玉県入間市出身。10代の頃から庭師の仕事に魅了され、修業を経て山口庭園を設立。「木と対話しながら仕事をする」がモットー。松の剪定と石組みが得意。",
    hobby: "趣味：盆栽・山歩き",
    image: "/images/staff-1.jpg",
  },
  {
    name: "田中 健二",
    role: "庭師",
    experience: "庭師歴 10年",
    bio: "造園の専門学校を卒業後、山口庭園に入社。若手ながら確かな技術と丁寧な仕事ぶりで、お客様からの信頼も厚い。生垣の刈込が得意。",
    hobby: "趣味：サッカー・料理",
    image: "/images/staff-2.jpg",
  },
  {
    name: "佐藤 誠",
    role: "庭師",
    experience: "庭師歴 8年",
    bio: "異業種から転職し庭師の道へ。「緑の仕事がしたい」という想いで入社。お客様とのコミュニケーションを大切にし、ご要望を丁寧にヒアリングします。",
    hobby: "趣味：ガーデニング・写真",
    image: "/images/staff-3.jpg",
  },
  {
    name: "鈴木 拓海",
    role: "庭師見習い",
    experience: "入社1年目",
    bio: "自然が好きで庭師を志した最年少メンバー。先輩たちの技術を吸収しながら、毎日元気に現場で活躍中。将来は造園デザインも手がけたいと夢を持っています。",
    hobby: "趣味：キャンプ・DIY",
    image: "/images/staff-4.jpg",
  },
];

export default function StaffPage() {
  return (
    <>
      {/* Page Header */}
      <div className="pt-32 pb-12 md:pt-40 md:pb-16" style={{ backgroundColor: "var(--gray)" }}>
        <div className="container">
          <p className="section-subtitle mb-2">Staff</p>
          <h1 className="section-title">スタッフ紹介</h1>
        </div>
      </div>

      {/* Staff Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {staffList.map((s, i) => (
              <article key={i} className="flex flex-col sm:flex-row gap-6">
                {/* Photo */}
                <div
                  className="w-full sm:w-40 h-52 sm:h-48 flex-shrink-0"
                  style={{
                    backgroundColor: "#c8d8b8",
                    backgroundImage: `url('${s.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                  }}
                />
                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 mb-1">
                    <h2 className="text-xl font-semibold">{s.name}</h2>
                  </div>
                  <p className="text-xs mb-1" style={{ color: "var(--green)", letterSpacing: "0.1em" }}>
                    {s.role}
                  </p>
                  <p className="text-xs mb-4" style={{ color: "var(--muted)" }}>{s.experience}</p>
                  <p className="text-sm leading-loose mb-3" style={{ color: "var(--muted)" }}>{s.bio}</p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>{s.hobby}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team Message */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--gray)" }}>
        <div className="container max-w-2xl text-center">
          <h2 className="text-xl font-semibold mb-6" style={{ color: "var(--green)" }}>
            チームで、お庭を守ります。
          </h2>
          <p className="text-sm leading-loose" style={{ color: "var(--muted)" }}>
            山口庭園のスタッフは全員、お客様のお庭を自分の庭のように大切に扱います。
            技術と誠実さを持って、日々の仕事に向き合っています。
          </p>
        </div>
      </section>
    </>
  );
}
