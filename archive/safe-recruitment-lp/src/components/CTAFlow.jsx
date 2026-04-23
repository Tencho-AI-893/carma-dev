export default function CTAFlow({ steps, cta }) {
  return (
    <section id="cta-flow" className="section-shell bg-white">
      <div className="section-heading">
        <p className="eyebrow">Next step</p>
        <h2 className="section-title">いきなり応募ではなく、段階的に進める。</h2>
        <p className="section-copy">
          不安の解消から面談までを 3 ステップに分けると、迷っている人にも行動しやすい導線になります。
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-3">
        {steps.map((step, index) => (
          <article key={step.step} className="relative rounded-[1.75rem] bg-mist p-6 shadow-edge">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              {step.step}
            </p>
            <h3 className="mt-3 text-2xl font-bold text-ink">{step.title}</h3>
            <p className="mt-4 text-sm leading-7 text-ink/75">{step.body}</p>
            {index < steps.length - 1 ? (
              <span className="absolute right-4 top-4 hidden rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink lg:inline-flex">
                Next
              </span>
            ) : null}
          </article>
        ))}
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap gap-4">
        <a className="button-primary" href={cta.href}>
          {cta.label}
        </a>
        <a className="button-secondary border-ink/10 bg-ink text-white hover:bg-ink/90" href="mailto:recruit@example.com">
          メールで問い合わせる
        </a>
      </div>
    </section>
  );
}
