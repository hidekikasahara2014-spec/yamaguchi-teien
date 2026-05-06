"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Header */}
      <div className="pt-32 pb-12 md:pt-40 md:pb-16" style={{ backgroundColor: "var(--gray)" }}>
        <div className="container">
          <p className="section-subtitle mb-2">Contact</p>
          <h1 className="section-title">お問い合わせ</h1>
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="container max-w-2xl">
          {/* Lead */}
          <div className="mb-12">
            <p className="text-sm leading-loose mb-2" style={{ color: "var(--muted)" }}>
              剪定・造園・年間管理のご依頼やお見積もり、採用に関するお問い合わせなど、
              お気軽にご連絡ください。
            </p>
            <p className="text-sm leading-loose" style={{ color: "var(--muted)" }}>
              通常2〜3営業日以内にご返答いたします。
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-16">
              <div className="text-4xl mb-6">🌿</div>
              <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--green)" }}>
                お問い合わせありがとうございます
              </h2>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                内容を確認の上、担当者よりご連絡いたします。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name */}
              <div>
                <label className="block text-xs mb-2" style={{ letterSpacing: "0.1em", color: "var(--muted)" }}>
                  お名前 <span style={{ color: "var(--green)" }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 text-sm border outline-none transition-colors focus:border-green-700"
                  style={{ borderColor: "var(--border)", backgroundColor: "#fafaf9" }}
                  placeholder="山田 太郎"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs mb-2" style={{ letterSpacing: "0.1em", color: "var(--muted)" }}>
                  メールアドレス <span style={{ color: "var(--green)" }}>*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 text-sm border outline-none transition-colors focus:border-green-700"
                  style={{ borderColor: "var(--border)", backgroundColor: "#fafaf9" }}
                  placeholder="example@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs mb-2" style={{ letterSpacing: "0.1em", color: "var(--muted)" }}>
                  電話番号
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 text-sm border outline-none transition-colors focus:border-green-700"
                  style={{ borderColor: "var(--border)", backgroundColor: "#fafaf9" }}
                  placeholder="090-0000-0000"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs mb-2" style={{ letterSpacing: "0.1em", color: "var(--muted)" }}>
                  お問い合わせ内容 <span style={{ color: "var(--green)" }}>*</span>
                </label>
                <select
                  required
                  className="w-full px-4 py-3 text-sm border outline-none transition-colors focus:border-green-700 bg-white"
                  style={{ borderColor: "var(--border)", backgroundColor: "#fafaf9", color: "var(--fg)" }}
                >
                  <option value="">選択してください</option>
                  <option value="estimate">お見積もり依頼</option>
                  <option value="pruning">剪定・刈込</option>
                  <option value="garden">造園工事</option>
                  <option value="management">年間管理</option>
                  <option value="recruit">採用について</option>
                  <option value="other">その他</option>
                </select>
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs mb-2" style={{ letterSpacing: "0.1em", color: "var(--muted)" }}>
                  現場の住所（ご依頼の場合）
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 text-sm border outline-none transition-colors focus:border-green-700"
                  style={{ borderColor: "var(--border)", backgroundColor: "#fafaf9" }}
                  placeholder="埼玉県入間市〇〇"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs mb-2" style={{ letterSpacing: "0.1em", color: "var(--muted)" }}>
                  詳細・ご要望 <span style={{ color: "var(--green)" }}>*</span>
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 text-sm border outline-none transition-colors focus:border-green-700 resize-none"
                  style={{ borderColor: "var(--border)", backgroundColor: "#fafaf9" }}
                  placeholder="お庭の状況や作業内容の詳細をお聞かせください。"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-white text-xs uppercase hover:opacity-80 transition-opacity"
                style={{ backgroundColor: "var(--green)", letterSpacing: "0.3em" }}
              >
                送信する
              </button>

              <p className="text-center text-xs" style={{ color: "var(--muted)" }}>
                ご入力いただいた情報は、お問い合わせへの返答のみに使用します。
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
