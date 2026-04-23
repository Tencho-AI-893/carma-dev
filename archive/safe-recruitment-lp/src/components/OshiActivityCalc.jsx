import { useState } from "react";

export default function OshiActivityCalc() {
  const [goal, setGoal] = useState(60000);
  const [daysLeft, setDaysLeft] = useState(45);
  const [savings, setSavings] = useState(10000);

  const remaining = Math.max(Number(goal) - Number(savings), 0);
  const monthlyNeed = Math.ceil((remaining / Math.max(Number(daysLeft), 1)) * 30);
  const weeklyPlan = Math.max(Math.ceil(monthlyNeed / 4 / 2400), 1);

  return (
    <article className="rounded-[2rem] bg-ink p-8 text-white shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="eyebrow text-gold/80">Goal planner</p>
          <h2 className="mt-2 text-2xl font-bold">目標額プランナー</h2>
        </div>
        <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white/75">
          hobby / travel / school
        </span>
      </div>

      <div className="mt-8 grid gap-5">
        <label className="field field-dark">
          <span>目標額</span>
          <input
            type="range"
            min="10000"
            max="200000"
            step="5000"
            value={goal}
            onChange={(event) => setGoal(event.target.value)}
          />
          <strong>{Number(goal).toLocaleString()} 円</strong>
        </label>

        <label className="field field-dark">
          <span>達成までの日数</span>
          <input
            type="range"
            min="7"
            max="180"
            step="1"
            value={daysLeft}
            onChange={(event) => setDaysLeft(event.target.value)}
          />
          <strong>{daysLeft} 日</strong>
        </label>

        <label className="field field-dark">
          <span>現在の貯金</span>
          <input
            type="range"
            min="0"
            max="100000"
            step="5000"
            value={savings}
            onChange={(event) => setSavings(event.target.value)}
          />
          <strong>{Number(savings).toLocaleString()} 円</strong>
        </label>
      </div>

      <div className="mt-8 rounded-[1.5rem] bg-white/[0.08] p-6">
        <p className="text-sm text-white/60">残り必要額</p>
        <p className="mt-3 text-4xl font-extrabold text-gold">
          {remaining.toLocaleString()} 円
        </p>
        <p className="mt-4 text-sm leading-7 text-white/75">
          月あたり {monthlyNeed.toLocaleString()} 円を目安にすると、週あたり約 {weeklyPlan} 時間分の稼働で追いつけます。
        </p>
      </div>
    </article>
  );
}
