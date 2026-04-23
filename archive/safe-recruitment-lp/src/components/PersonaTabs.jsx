import { useState } from "react";

export default function PersonaTabs({ personas }) {
  const [activeId, setActiveId] = useState(personas[0]?.id);
  const activePersona = personas.find((persona) => persona.id === activeId) ?? personas[0];

  return (
    <section className="section-shell bg-ink text-white">
      <div className="section-heading">
        <p className="eyebrow text-gold/80">Persona</p>
        <h2 className="section-title text-white">あなたの生活に合わせて、判断しやすく。</h2>
        <p className="section-copy text-white/70">
          誰に向けた募集なのかを曖昧にせず、生活背景ごとの悩みに答える構成にしています。
        </p>
      </div>

      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-soft backdrop-blur md:p-6">
        <div className="flex flex-wrap gap-3">
          {personas.map((persona) => {
            const isActive = persona.id === activeId;

            return (
              <button
                key={persona.id}
                type="button"
                onClick={() => setActiveId(persona.id)}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-gold text-ink"
                    : "border border-white/20 bg-white/5 text-white/75 hover:bg-white/10"
                }`}
                aria-pressed={isActive}
              >
                {persona.label}
              </button>
            );
          })}
        </div>

        <article className="mt-6 grid gap-6 rounded-[1.75rem] bg-white p-8 text-ink lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              {activePersona.label}
            </p>
            <h3 className="mt-3 text-3xl font-bold leading-tight">{activePersona.hook}</h3>
            <p className="mt-5 text-base leading-8 text-ink/75">{activePersona.body}</p>
          </div>
          <div className="rounded-[1.5rem] bg-mist p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/[0.45]">
              Recommended action
            </p>
            <p className="mt-4 text-lg leading-8 text-ink/80">{activePersona.action}</p>
            <div className="mt-8 space-y-3 text-sm text-ink/[0.65]">
              <p>相談前に見せたい情報: シフト例、条件表、連絡手段</p>
              <p>刺さるコピー: 生活を崩さず、目的から逆算できる働き方</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
