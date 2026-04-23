export default function DataSection({ metrics }) {
  return (
    <section className="section-shell bg-ink text-white">
      <div className="section-heading">
        <p className="eyebrow text-gold/80">Data</p>
        <h2 className="section-title text-white">数字で伝えると、信頼は早い。</h2>
        <p className="section-copy text-white/70">
          雰囲気ではなく、継続率や納得率のような数字をひと目で比較できる構成です。
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
        {metrics.map((metric) => (
          <article key={metric.label} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm text-white/60">{metric.label}</p>
                <p className="mt-3 text-4xl font-extrabold text-gold">{metric.value}</p>
              </div>
              <p className="text-sm font-semibold text-white/50">sample metric</p>
            </div>
            <div className="mt-6 h-3 rounded-full bg-white/10">
              <div
                className={`h-3 rounded-full ${
                  metric.tone === "gold" ? "bg-gold" : "bg-emerald"
                }`}
                style={{ width: `${metric.progress}%` }}
                aria-hidden="true"
              />
            </div>
          </article>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-6xl text-sm text-white/50">
        表示している数値はテンプレート用のサンプルです。本番では運用実績やアンケート結果に差し替えてください。
      </p>
    </section>
  );
}
