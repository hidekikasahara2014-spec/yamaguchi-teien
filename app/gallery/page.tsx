const galleryItems = Array.from({ length: 12 }, (_, i) => ({
  src: `/images/gallery-${i + 1}.jpg`,
  alt: `施工写真 ${i + 1}`,
}));

export default function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <div className="pt-32 pb-12 md:pt-40 md:pb-16" style={{ backgroundColor: "var(--gray)" }}>
        <div className="container">
          <p className="section-subtitle mb-2">Gallery</p>
          <h1 className="section-title">施工ギャラリー</h1>
        </div>
      </div>

      {/* Lead */}
      <section className="py-10">
        <div className="container max-w-3xl">
          <p className="text-sm leading-loose" style={{ color: "var(--muted)" }}>
            山口庭園が手がけた庭の一部をご紹介します。
            施工事例の詳細については、お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
                style={{
                  backgroundColor: "#b8c8a0",
                  backgroundImage: `url('${item.src}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                role="img"
                aria-label={item.alt}
              />
            ))}
          </div>
          <p className="mt-8 text-center text-xs" style={{ color: "var(--muted)" }}>
            ※ 画像はお客様の許可をいただいた上で掲載しています
          </p>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--gray)" }}>
        <div className="container max-w-2xl text-center">
          <p className="section-subtitle mb-4">Instagram</p>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--green)" }}>
            日々の施工をInstagramで発信中
          </h2>
          <p className="text-sm leading-loose mb-8" style={{ color: "var(--muted)" }}>
            施工の様子や完成した庭の写真をリアルタイムで更新しています。
          </p>
          <a
            href="https://www.instagram.com/yamaguchiteien0429"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 text-white text-xs uppercase hover:opacity-80 transition-opacity"
            style={{ backgroundColor: "var(--green)", letterSpacing: "0.2em" }}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Instagramを見る
          </a>
        </div>
      </section>
    </>
  );
}
