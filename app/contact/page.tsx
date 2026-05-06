"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "0.875rem 1rem",
    fontSize: "0.875rem",
    backgroundColor: "var(--bg-3)",
    border: "1px solid var(--border)",
    color: "var(--fg)",
    outline: "none",
  };

  const labelStyle = {
    display: "block",
    fontSize: "0.625rem",
    letterSpacing: "0.2em",
    marginBottom: "0.5rem",
    color: "var(--fg-muted)",
  };

  return (
    <>
      <div className="pt-32 pb-16 md:pt-44 md:pb-20" style={{ backgroundColor: "var(--bg-2)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <p className="section-en mb-4">Contact</p>
          <h1 className="section-title">お問い合わせ</h1>
        </div>
      </div>

      <section className="py-16 md:py-24" style={{ backgroundColor: "var(--bg)" }}>
        <div className="container max-w-2xl">
          <div className="mb-12">
            <p className="text-sm leading-loose" style={{ color: "var(--fg-muted)" }}>
              剪定・造園・年間管理のご依頼やお見積もり、採用に関するお問い合わせなど、
              お気軽にご連絡ください。通常2〜3営業日以内にご返答いたします。
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-20" style={{ border: "1px solid var(--border)" }}>
              <span className="gold-line mx-auto block mb-8" />
              <h2
                className="text-xl font-light mb-4"
                style={{ fontFamily: "'Noto Serif JP', serif", color: "var(--fg)", letterSpacing: "0.15em" }}
              >
                ありがとうございます
              </h2>
              <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                内容を確認の上、担当者よりご連絡いたします。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label style={labelStyle}>
                  お名前 <span style={{ color: "var(--gold)" }}>*</span>
                </label>
                <input type="text" required style={inputStyle} placeholder="山田 太郎" />
              </div>

              <div>
                <label style={labelStyle}>
                  メールアドレス <span style={{ color: "var(--gold)" }}>*</span>
                </label>
                <input type="email" required style={inputStyle} placeholder="example@email.com" />
              </div>

              <div>
                <label style={labelStyle}>電話番号</label>
                <input type="tel" style={inputStyle} placeholder="090-0000-0000" />
              </div>

              <div>
                <label style={labelStyle}>
                  お問い合わせ内容 <span style={{ color: "var(--gold)" }}>*</span>
                </label>
                <select
                  required
                  style={{ ...inputStyle, appearance: "none" as const }}
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

              <div>
                <label style={labelStyle}>現場の住所（ご依頼の場合）</label>
                <input type="text" style={inputStyle} placeholder="埼玉県入間市〇〇" />
              </div>

              <div>
                <label style={labelStyle}>
                  詳細・ご要望 <span style={{ color: "var(--gold)" }}>*</span>
                </label>
                <textarea
                  required
                  rows={6}
                  style={{ ...inputStyle, resize: "none" as const }}
                  placeholder="お庭の状況や作業内容の詳細をお聞かせください。"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-[10px] tracking-[0.4em] uppercase transition-all duration-500 hover:bg-[var(--gold)] hover:text-[var(--bg)]"
                style={{ border: "1px solid var(--gold)", color: "var(--gold)", background: "transparent" }}
              >
                送信する
              </button>

              <p className="text-center text-[10px] tracking-wider" style={{ color: "#444" }}>
                ご入力いただいた情報は、お問い合わせへの返答のみに使用します。
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
