export default function FAQSection({ items }) {
  return (
    <section className="section-shell bg-white">
      <div className="section-heading">
        <p className="eyebrow">FAQ</p>
        <h2 className="section-title">応募前に解像度を上げる FAQ</h2>
        <p className="section-copy">
          条件、個人情報、相談体制など、最後まで読み切る前に知りたい内容を先に整理します。
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl gap-4">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-[1.5rem] border border-ink/10 bg-mist p-6 shadow-edge"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-ink">
              <span>{item.question}</span>
              <span className="text-gold transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 text-sm leading-7 text-ink/75">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
