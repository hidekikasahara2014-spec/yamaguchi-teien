const galleryItems = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/gallery-${i + 1}.jpg`,
  alt: `施工写真 ${i + 1}`,
}));

export default function GalleryPage() {
  return (
    <>
      <div className="pt-32 pb-16 md:pt-44 md:pb-20" style={{ backgroundColor: "var(--bg-2)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <p className="section-en mb-4">Gallery</p>
          <h1 className="section-title">施工ギャラリー</h1>
        </div>
      </div>

      <section className="py-12" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container max-w-3xl">
          <p className="text-sm leading-loose" style={{ color: "var(--fg-muted)" }}>
            山口庭園が手がけた庭の一部をご紹介します。詳細はお気軽にお問い合わせください。
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden relative group cursor-pointer"
                style={{
                  backgroundColor: "#1a1a1a",
                  backgroundImage: `url('${item.src}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                role="img"
                aria-label={item.alt}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ backgroundColor: "rgba(200,169,110,0.15)", border: "1px solid rgba(200,169,110,0.3)" }}
                />
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[10px] tracking-widest" style={{ color: "#444" }}>
            ※ 画像はお客様の許可をいただいた上で掲載しています
          </p>
        </div>
      </section>

      <section className="py-20 text-center" style={{ backgroundColor: "#080808" }}>
        <div className="container max-w-2xl">
          <p className="section-en mb-4">Instagram</p>
          <h2
            className="text-xl font-light mb-6"
            style={{ fontFamily: "'Noto Serif JP', serif", color: "var(--fg)", letterSpacing: "0.15em" }}
          >
            日々の施工をInstagramで発信中
          </h2>
          <span className="gold-line mx-auto block mb-8" />
          <p className="text-sm leading-loose mb-10" style={{ color: "var(--fg-muted)" }}>
            施工の様子や完成した庭の写真をリアルタイムで更新しています。
          </p>
          <a
            href="https://www.instagram.com/yamaguchiteien0429"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-3 text-[10px] tracking-[0.35em] uppercase transition-all duration-500 hover:bg-[var(--gold)] hover:text-[var(--bg)]"
            style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Instagramを見る
          </a>
        </div>
      </section>
    </>
  );
}
