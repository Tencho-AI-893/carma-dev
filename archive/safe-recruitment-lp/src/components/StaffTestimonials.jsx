import { useState } from "react";

export default function StaffTestimonials({ items }) {
  const [index, setIndex] = useState(0);
  const active = items[index];

  function showNext() {
    setIndex((current) => (current + 1) % items.length);
  }

  function showPrev() {
    setIndex((current) => (current - 1 + items.length) % items.length);
  }

  return (
    <section className="section-shell bg-gradient-to-b from-sand/60 to-white">
      <div className="section-heading">
        <p className="eyebrow">Voices</p>
        <h2 className="section-title">実際に見るべきなのは、生活との相性。</h2>
        <p className="section-copy">
          顔写真に頼らず、働き方の再現性と安心材料をテキスト中心で見せる想定です。
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-[2rem] bg-ink p-8 text-white shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            {active.highlight}
          </p>
          <h3 className="mt-4 text-3xl font-bold">{active.title}</h3>
          <p className="mt-6 text-base leading-8 text-white/[0.78]">"{active.quote}"</p>
          <p className="mt-6 text-sm text-white/60">{active.name}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="button-primary" type="button" onClick={showPrev}>
              前へ
            </button>
            <button className="button-secondary" type="button" onClick={showNext}>
              次へ
            </button>
          </div>
        </article>

        <div className="grid gap-4">
          {items.map((item, itemIndex) => {
            const isActive = itemIndex === index;

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => setIndex(itemIndex)}
                className={`rounded-[1.5rem] border p-5 text-left transition ${
                  isActive
                    ? "border-gold bg-gold/10 shadow-soft"
                    : "border-ink/10 bg-white hover:border-gold/50"
                }`}
                aria-pressed={isActive}
              >
                <p className="text-sm font-semibold text-gold">{item.highlight}</p>
                <p className="mt-2 text-lg font-bold text-ink">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-ink/70">{item.name}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
