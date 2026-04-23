export default function ProblemSection({ items }) {
  return (
    <section className="section-shell bg-white">
      <div className="section-heading">
        <p className="eyebrow">Problem</p>
        <h2 className="section-title">よくある採用ページの不安を、先回りして消す。</h2>
        <p className="section-copy">
          条件が読みにくい、相談しにくい、生活との両立が見えない。そうした不安をそのまま残さないための導線です。
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-5">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-gold/30 bg-ink p-6 text-white shadow-soft transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="mb-5 h-1 w-14 rounded-full bg-gold" />
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/75">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
