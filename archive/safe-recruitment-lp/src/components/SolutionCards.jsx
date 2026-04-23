function accentClasses(accent) {
  if (accent === "gold") {
    return "bg-gradient-to-br from-sand to-white";
  }

  return "bg-gradient-to-br from-white to-mist";
}

export default function SolutionCards({ cards }) {
  return (
    <section className="section-shell bg-gradient-to-b from-mist to-sand/70">
      <div className="section-heading">
        <p className="eyebrow">Promises</p>
        <h2 className="section-title">安心して比較できる、5 つの約束</h2>
        <p className="section-copy">
          ただ良さを並べるのではなく、どんな人にどう効くのかまで説明できるカード群にしています。
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-2">
        {cards.map((card) => (
          <article
            key={card.title}
            className={`rounded-[2rem] border border-gold/35 p-7 shadow-soft ${accentClasses(card.accent)}`}
          >
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 className="text-2xl font-bold text-ink">{card.title}</h3>
              <span className="rounded-full border border-gold/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                promise
              </span>
            </div>
            <p className="text-base leading-8 text-ink/80">{card.description}</p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {card.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-white"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
