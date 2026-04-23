import { useState } from "react";

const BASE_RATE = 2400;

export default function SalarySim() {
  const [daysPerWeek, setDaysPerWeek] = useState(2);
  const [hoursPerDay, setHoursPerDay] = useState(4);
  const [weeks, setWeeks] = useState(4);
  const [bonus, setBonus] = useState(12000);

  const estimatedIncome =
    BASE_RATE * Number(daysPerWeek) * Number(hoursPerDay) * Number(weeks) + Number(bonus);
  const monthlyAverage = Math.round((estimatedIncome / Math.max(Number(weeks), 1)) * 4);

  return (
    <article className="rounded-[2rem] bg-white p-8 shadow-soft">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="eyebrow">Calculator</p>
          <h2 className="mt-2 text-2xl font-bold text-ink">収入シミュレーター</h2>
        </div>
        <span className="rounded-full bg-gold/15 px-4 py-2 text-sm font-semibold text-gold">
          base {BASE_RATE.toLocaleString()} 円 / h
        </span>
      </div>

      <div className="mt-8 grid gap-5">
        <label className="field">
          <span>週あたりの勤務日数</span>
          <input
            type="range"
            min="1"
            max="7"
            value={daysPerWeek}
            onChange={(event) => setDaysPerWeek(event.target.value)}
          />
          <strong>{daysPerWeek} 日</strong>
        </label>

        <label className="field">
          <span>1 日あたりの勤務時間</span>
          <input
            type="range"
            min="1"
            max="8"
            value={hoursPerDay}
            onChange={(event) => setHoursPerDay(event.target.value)}
          />
          <strong>{hoursPerDay} 時間</strong>
        </label>

        <label className="field">
          <span>想定する週数</span>
          <input
            type="range"
            min="1"
            max="12"
            value={weeks}
            onChange={(event) => setWeeks(event.target.value)}
          />
          <strong>{weeks} 週</strong>
        </label>

        <label className="field">
          <span>追加手当の見込み</span>
          <input
            type="range"
            min="0"
            max="50000"
            step="1000"
            value={bonus}
            onChange={(event) => setBonus(event.target.value)}
          />
          <strong>{Number(bonus).toLocaleString()} 円</strong>
        </label>
      </div>

      <div className="mt-8 rounded-[1.5rem] bg-ink p-6 text-white">
        <p className="text-sm text-white/[0.65]">この条件で見込める収入</p>
        <p className="mt-3 text-4xl font-extrabold text-gold">
          {estimatedIncome.toLocaleString()} 円
        </p>
        <p className="mt-3 text-sm text-white/70">
          月間換算の目安: {monthlyAverage.toLocaleString()} 円
        </p>
      </div>
    </article>
  );
}
