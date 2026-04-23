export default function Hero({ content }) {
  return (
    <header className="relative overflow-hidden bg-hero-glow text-white">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-3rem] h-80 w-80 rounded-full bg-white/20 blur-3xl" />
      </div>
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-12 px-6 py-16 lg:flex-row lg:items-center lg:px-10">
        <div className="max-w-3xl space-y-8">
          <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium tracking-[0.18em] text-white/80">
            {content.eyebrow}
          </p>
          <div className="space-y-5">
            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
              {content.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
              {content.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {content.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-sm font-medium text-gold"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <a className="button-primary" href={content.primaryCta.href}>
              {content.primaryCta.label}
            </a>
            <a className="button-secondary" href={content.secondaryCta.href}>
              {content.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="grid w-full max-w-xl gap-4 md:grid-cols-3 lg:grid-cols-1">
          {content.stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/[0.08] p-6 shadow-soft backdrop-blur"
            >
              <p className="text-3xl font-extrabold text-gold">{stat.value}</p>
              <p className="mt-2 text-sm leading-6 text-white/75">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </header>
  );
}
