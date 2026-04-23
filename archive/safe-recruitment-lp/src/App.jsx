import { useState } from "react";

const heroStats = [
  { value: "4,000万〜5,000万円台", label: "30代〜40代が現実的に比較しやすい価格帯" },
  { value: "3LDK中心", label: "家族の今と将来を両立しやすい広さを想定" },
  { value: "駅徒歩10分圏", label: "通勤と生活利便のバランスが取りやすい条件" }
];

const concerns = [
  {
    title: "住宅ローンが重すぎないか不安",
    body:
      "月々の返済だけでなく、管理費・修繕積立金・教育費まで含めて考えると、決断が止まりやすくなります。"
  },
  {
    title: "今買うべきか、待つべきか迷う",
    body:
      "相場や金利の先行きが見えない中で、決断を先送りし続けると、比較の軸そのものが曖昧になりがちです。"
  },
  {
    title: "市外に出ると資産性が落ちそう",
    body:
      "価格だけで郊外を選ぶと後悔します。駅距離、生活導線、供給バランスまで見て初めて判断できます。"
  }
];

const selectionPillars = [
  {
    title: "返済の安心感",
    lead: "家賃と比較しながら、無理のない毎月支出に落とし込む。",
    body:
      "購入価格だけではなく、固定費化する住居費として考えることで、将来の家計変動にも備えやすくなります。"
  },
  {
    title: "暮らしやすさ",
    lead: "通勤時間、買い物、教育環境を一つの地図で見直す。",
    body:
      "駅までの導線、スーパー、学校、公園が散らばりすぎていないか。毎日のストレスが小さい立地が選ばれます。"
  },
  {
    title: "資産性の見極め",
    lead: "大阪市内の価格高騰だけを見ず、出口戦略も比較する。",
    body:
      "供給数、駅距離、エリアの人口動態を合わせて見ると、住み替えや売却時の選択肢も持ちやすくなります。"
  }
];

const checklist = [
  "駅徒歩10分圏か、夜道まで含めて歩きやすいか",
  "スーパー、ドラッグストア、病院が生活圏で完結するか",
  "小学校・保育園・公園が無理なく回れる動線か",
  "管理費と修繕積立金を含めても家賃比較で納得できるか",
  "将来売却や賃貸に出すときに説明しやすい立地条件か"
];

const marketReasons = [
  {
    title: "賃料上昇が家計を圧迫しやすい",
    body:
      "家賃を払い続ける安心より、将来の総支出を固定して考えたい世帯が増えています。"
  },
  {
    title: "金利は『待てば有利』とは限らない",
    body:
      "価格、金利、在庫の3つは同時に動くため、良い条件だけが残り続けるとは考えにくい状況です。"
  },
  {
    title: "市内中心部より現実的な広さを取りやすい",
    body:
      "同価格帯でも面積や部屋数を確保しやすく、子どもの成長や在宅ワークにも対応しやすくなります。"
  }
];

const modelPlans = [
  {
    name: "モデルケース A",
    target: "共働きで、家賃との差を抑えながら住み替えたい",
    price: "4,680万円",
    plan: "3LDK / 70.12m²",
    monthly: "月々 11万円台〜",
    note: "頭金0円、35年ローン、ボーナス払いなしを想定した参考イメージ"
  },
  {
    name: "モデルケース B",
    target: "教育費を見据えつつ、今より広さを確保したい",
    price: "4,980万円",
    plan: "3LDK + WIC / 72.44m²",
    monthly: "月々 12万円台〜",
    note: "管理費・修繕積立金を含めた総住居費で比較したい方向けの参考イメージ"
  }
];

const lifeScenes = [
  {
    title: "平日の朝が詰まりすぎない",
    body:
      "駅までの距離だけでなく、保育園送迎や買い物の寄り道まで含めて、毎朝の動きが軽くなるかが重要です。"
  },
  {
    title: "帰宅後の生活が回しやすい",
    body:
      "スーパー、ドラッグストア、医療施設が近いだけで、共働き世帯の負担は大きく変わります。"
  },
  {
    title: "休日に『わざわざ感』がない",
    body:
      "公園、図書館、カフェ、ショッピングモールなど、家族で過ごす選択肢が近いほど、暮らしの満足度が上がります。"
  }
];

const processSteps = [
  {
    step: "Step 01",
    title: "資料請求で価格表と間取りを比較",
    body:
      "まずは価格・広さ・管理費の全体像を確認し、候補を『見学する価値がある物件』まで絞り込みます。"
  },
  {
    step: "Step 02",
    title: "来場予約で生活導線を体感",
    body:
      "駅からの歩きやすさ、収納量、日当たり、共用部の雰囲気まで、写真ではわからない差を確認します。"
  },
  {
    step: "Step 03",
    title: "資金計画で不安を数字に変える",
    body:
      "購入判断を止めている不安は、感情の問題ではなく、比較すべき数字が揃っていないことが多いです。"
  }
];

const faqItems = [
  {
    question: "大阪市外だと資産価値が不安です。",
    answer:
      "価格だけで判断すると不安が残ります。駅距離、生活利便、供給状況、周辺人口などを組み合わせて比較すると、住み続ける場合も住み替える場合も判断しやすくなります。"
  },
  {
    question: "住宅ローンが将来苦しくならないか心配です。",
    answer:
      "返済額だけでなく、管理費・修繕積立金・教育費・車の維持費まで含めて総住居費で見るのが基本です。家賃との比較で納得できるラインまで整理すると、迷いがかなり減ります。"
  },
  {
    question: "今すぐ決めないといけませんか。",
    answer:
      "焦って決める必要はありません。ただし、良い条件の住戸は比較している間に動くこともあります。まずは資料請求と来場で判断材料を増やすのが現実的です。"
  },
  {
    question: "子育てしやすいかどうかは何を見ればいいですか。",
    answer:
      "学校や保育園までの距離だけでは足りません。駅、スーパー、公園、病院への回遊のしやすさまで含めて、毎日の動線を確認するのがポイントです。"
  }
];

function SectionIntro({ eyebrow, title, copy, light = false }) {
  return (
    <div className="shell mb-12 md:mb-16">
      <p className={`section-tag ${light ? "text-[#f4d89d]" : ""}`}>{eyebrow}</p>
      <h2 className={`section-title ${light ? "text-white" : "text-[#10212b]"}`}>{title}</h2>
      <p className={`section-copy ${light ? "text-white/72" : "text-[#10212b]/74"}`}>{copy}</p>
    </div>
  );
}

function HeroSection() {
  return (
    <header id="top" className="relative overflow-hidden bg-[#081019] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(183,145,74,0.24),transparent_28%),radial-gradient(circle_at_right,rgba(255,255,255,0.08),transparent_22%)]" />
      <div className="shell relative grid gap-8 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="inline-flex rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#f4d89d]">
              Osaka Suburban New Residence
            </p>
            <h1 className="display-title max-w-4xl text-4xl leading-[1.05] text-white md:text-6xl">
              大阪市外で、
              <br />
              家族の今と将来にちょうどいい
              <br />
              新築マンションを。
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/74 md:text-lg">
              価格だけでは決めきれない30代〜40代へ。通勤、子育て、住宅ローン、資産性まで、
              「本当に見るべき比較軸」を一つずつ整理して、迷いを前に進めるためのLPです。
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {heroStats.map((stat) => (
              <span
                key={stat.value}
                className="rounded-full border border-[#f4d89d]/30 bg-[#f4d89d]/10 px-4 py-2 text-sm text-[#f7e6bc]"
              >
                {stat.value}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a className="primary-button" href="#request">
              資料請求導線を見る
            </a>
            <a className="secondary-button" href="#plans">
              支払いイメージを見る
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {heroStats.map((stat) => (
              <article key={stat.label} className="metric-card">
                <p className="text-lg font-semibold text-[#f7e6bc]">{stat.value}</p>
                <p className="mt-2 text-sm leading-6 text-white/68">{stat.label}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="panel-dark relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#f4d89d] via-[#b7904a] to-transparent" />
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-[#f4d89d]">Decision Board</p>
              <h2 className="display-title mt-4 text-3xl text-white md:text-4xl">
                決め手になるのは、
                <br />
                価格だけではありません。
              </h2>
            </div>

            <div className="grid gap-4">
              {selectionPillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5"
                >
                  <p className="text-sm font-semibold text-[#f4d89d]">{pillar.title}</p>
                  <p className="mt-3 text-lg font-semibold text-white">{pillar.lead}</p>
                  <p className="mt-3 text-sm leading-7 text-white/66">{pillar.body}</p>
                </article>
              ))}
            </div>

            <div className="rounded-[28px] border border-[#f4d89d]/18 bg-[#101925] p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/46">Model Plan</p>
                  <p className="mt-3 text-2xl font-semibold text-white">3LDK / 70m²台中心</p>
                </div>
                <span className="rounded-full border border-[#f4d89d]/20 bg-[#f4d89d]/10 px-3 py-1 text-xs text-[#f7e6bc]">
                  参考シミュレーション
                </span>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[22px] bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/42">price range</p>
                  <p className="mt-3 text-2xl font-semibold text-[#f7e6bc]">4,680万円〜</p>
                </div>
                <div className="rounded-[22px] bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/42">monthly image</p>
                  <p className="mt-3 text-2xl font-semibold text-[#f7e6bc]">11万円台〜</p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-6 text-white/46">
                金利や諸費用、管理費・修繕積立金によって変動します。実際の判断は資金計画で最終確認してください。
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ConcernSection() {
  return (
    <section className="section-shell bg-[#f7f3ec] text-[#10212b]">
      <SectionIntro
        eyebrow="01 Concerns"
        title="まず、購入判断を止めている不安を整理する。"
        copy="不動産LPが弱く見えるのは、都合のいい話だけを並べるからです。先に不安を言語化すると、読者は『このページは自分の迷いをわかっている』と感じます。"
      />

      <div className="shell grid gap-4 lg:grid-cols-3">
        {concerns.map((concern) => (
          <article key={concern.title} className="panel bg-white">
            <p className="text-xs uppercase tracking-[0.2em] text-[#b7904a]">Real Concern</p>
            <h3 className="mt-4 text-2xl font-semibold text-[#10212b]">{concern.title}</h3>
            <p className="mt-4 text-sm leading-7 text-[#10212b]/70">{concern.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ValueSection() {
  return (
    <section className="section-shell bg-white text-[#10212b]">
      <SectionIntro
        eyebrow="02 Value"
        title="この価格帯で『選ばれる新築マンション』の条件。"
        copy="大阪市外で検討するなら、価格だけでなく『住みやすさ』『無理のない返済』『将来の出口』を同時に満たせるかどうかが鍵です。"
      />

      <div className="shell grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="grid gap-4">
          {selectionPillars.map((pillar) => (
            <article key={pillar.title} className="panel bg-[#f8f6f1]">
              <p className="text-xs uppercase tracking-[0.18em] text-[#b7904a]">{pillar.title}</p>
              <h3 className="mt-3 text-2xl font-semibold text-[#10212b]">{pillar.lead}</h3>
              <p className="mt-4 text-sm leading-7 text-[#10212b]/70">{pillar.body}</p>
            </article>
          ))}
        </div>

        <div className="panel-dark">
          <p className="text-xs uppercase tracking-[0.22em] text-[#f4d89d]">Checklist</p>
          <h3 className="display-title mt-4 text-3xl text-white">
            来場前に、
            <br />
            この5つだけは外さない。
          </h3>
          <div className="mt-8 grid gap-4">
            {checklist.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-4 text-sm leading-7 text-white/76"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimingSection() {
  return (
    <section className="section-shell bg-[#0b1320] text-white">
      <SectionIntro
        eyebrow="03 Timing"
        title="『もう少し様子見』だけでは、条件は良くならないこともある。"
        copy="いま動く人が増えている理由は、焦りではなく、賃料・金利・供給の3つを同時に見たときの現実にあります。"
        light
      />

      <div className="shell grid gap-4 lg:grid-cols-3">
        {marketReasons.map((reason) => (
          <article key={reason.title} className="panel-dark">
            <p className="text-xs uppercase tracking-[0.18em] text-[#f4d89d]">Market Signal</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">{reason.title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/68">{reason.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PlansSection() {
  return (
    <section id="plans" className="section-shell bg-[#f7f3ec] text-[#10212b]">
      <SectionIntro
        eyebrow="04 Plans"
        title="支払いイメージを『なんとなく』で終わらせない。"
        copy="4,000万〜5,000万円台でも、広さと毎月の負担感のバランスはかなり変わります。比較の入口として、2つのモデルケースを用意しました。"
      />

      <div className="shell grid gap-4 lg:grid-cols-2">
        {modelPlans.map((plan) => (
          <article key={plan.name} className="panel bg-white">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#b7904a]">{plan.name}</p>
                <h3 className="mt-3 text-2xl font-semibold text-[#10212b]">{plan.target}</h3>
              </div>
              <span className="rounded-full border border-[#b7904a]/18 bg-[#f5ead0] px-3 py-1 text-xs text-[#7f5a1f]">
                参考値
              </span>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-[22px] bg-[#f8f6f1] p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[#10212b]/44">price</p>
                <p className="mt-3 text-xl font-semibold text-[#10212b]">{plan.price}</p>
              </div>
              <div className="rounded-[22px] bg-[#f8f6f1] p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[#10212b]/44">plan</p>
                <p className="mt-3 text-xl font-semibold text-[#10212b]">{plan.plan}</p>
              </div>
              <div className="rounded-[22px] bg-[#10212b] p-4 text-white">
                <p className="text-xs uppercase tracking-[0.16em] text-white/48">monthly</p>
                <p className="mt-3 text-xl font-semibold text-[#f7e6bc]">{plan.monthly}</p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-[#10212b]/70">{plan.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function LifestyleSection() {
  return (
    <section className="section-shell bg-white text-[#10212b]">
      <SectionIntro
        eyebrow="05 Lifestyle"
        title="暮らしの満足度は、駅近より『回しやすさ』で決まる。"
        copy="家を買うときに本当に欲しいのは、派手な設備よりも、平日が楽になって休日の選択肢が増えること。その視点で見ると、候補の優先順位は大きく変わります。"
      />

      <div className="shell grid gap-4 lg:grid-cols-3">
        {lifeScenes.map((scene) => (
          <article key={scene.title} className="panel bg-[#f8f6f1]">
            <p className="text-xs uppercase tracking-[0.18em] text-[#b7904a]">Life Scene</p>
            <h3 className="mt-4 text-2xl font-semibold text-[#10212b]">{scene.title}</h3>
            <p className="mt-4 text-sm leading-7 text-[#10212b]/70">{scene.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section-shell bg-[#0b1320] text-white">
      <SectionIntro
        eyebrow="06 Process"
        title="比較から決断まで、次にやることはシンプルです。"
        copy="いきなり購入を決める必要はありません。まずは資料、来場、資金計画の順で判断材料を揃えることが、後悔の少ない進め方です。"
        light
      />

      <div className="shell grid gap-4 lg:grid-cols-3">
        {processSteps.map((step) => (
          <article key={step.step} className="panel-dark">
            <p className="text-xs uppercase tracking-[0.2em] text-[#f4d89d]">{step.step}</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">{step.title}</h3>
            <p className="mt-4 text-sm leading-7 text-white/68">{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="section-shell bg-[#f7f3ec] text-[#10212b]">
      <SectionIntro
        eyebrow="07 FAQ"
        title="購入前に多い不安を、先に言葉にしておく。"
        copy="本音の不安に触れないLPは、最後の一押しになりません。迷いが残りやすいポイントを、FAQとして先回りしておきます。"
      />

      <div className="shell grid gap-4">
        {faqItems.map((item, index) => (
          <details
            key={item.question}
            open={index === 0}
            className="panel bg-white px-6 py-5"
          >
            <summary className="cursor-pointer list-none text-lg font-semibold text-[#10212b]">
              {item.question}
            </summary>
            <p className="mt-4 text-sm leading-7 text-[#10212b]/72">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function InquirySection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="request" className="section-shell bg-[#10212b] text-white">
      <SectionIntro
        eyebrow="08 Request"
        title="資料請求から、比較の質を上げる。"
        copy="このデモでは送信内容は保存されませんが、実運用ではここに資料請求や来場予約の導線を接続できます。UIと入力体験の確認用として使える状態にしています。"
        light
      />

      <div className="shell grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="panel-dark">
          <p className="text-xs uppercase tracking-[0.18em] text-[#f4d89d]">What You Get</p>
          <h3 className="display-title mt-4 text-3xl text-white">
            資料請求で確認したいのは、
            <br />
            この3つです。
          </h3>
          <div className="mt-8 grid gap-4">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-lg font-semibold text-white">価格表と間取りの整合性</p>
              <p className="mt-3 text-sm leading-7 text-white/68">
                気になる住戸の価格だけでなく、広さと方角のバランスまで見て、割高感がないかを確認します。
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-lg font-semibold text-white">総住居費のイメージ</p>
              <p className="mt-3 text-sm leading-7 text-white/68">
                管理費や修繕積立金まで含めて、家賃比較ができる状態にしておくと、判断がかなり現実的になります。
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5">
              <p className="text-lg font-semibold text-white">来場する価値があるかどうか</p>
              <p className="mt-3 text-sm leading-7 text-white/68">
                資料の時点で候補を絞れれば、現地見学は『なんとなく』ではなく、確認するポイントを持って行けます。
              </p>
            </div>
          </div>
        </div>

        <div className="panel bg-white text-[#10212b]">
          <p className="text-xs uppercase tracking-[0.18em] text-[#b7904a]">Demo Form</p>
          <h3 className="mt-4 text-3xl font-semibold text-[#10212b]">資料請求デモ</h3>
          <p className="mt-4 text-sm leading-7 text-[#10212b]/70">
            実際の物件公開時には、LINE、メール、CRM、予約フォームなど任意の送信先へ接続できます。
          </p>

          <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
            <label className="grid gap-2 text-sm font-medium text-[#10212b]">
              お名前
              <input
                type="text"
                required
                placeholder="例）山田 花子"
                className="rounded-[18px] border border-[#10212b]/12 bg-[#f8f6f1] px-4 py-3 text-base text-[#10212b] outline-none transition focus:border-[#b7904a]"
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-[#10212b]">
              ご希望エリア
              <select className="rounded-[18px] border border-[#10212b]/12 bg-[#f8f6f1] px-4 py-3 text-base text-[#10212b] outline-none transition focus:border-[#b7904a]">
                <option>北摂エリア</option>
                <option>京阪エリア</option>
                <option>阪神間寄り</option>
                <option>まだ決まっていない</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-medium text-[#10212b]">
              ご予算感
              <select className="rounded-[18px] border border-[#10212b]/12 bg-[#f8f6f1] px-4 py-3 text-base text-[#10212b] outline-none transition focus:border-[#b7904a]">
                <option>4,000万円台前半</option>
                <option>4,000万円台後半</option>
                <option>5,000万円台前半</option>
                <option>相談したい</option>
              </select>
            </label>

            <label className="grid gap-2 text-sm font-medium text-[#10212b]">
              気になっていること
              <textarea
                rows="4"
                placeholder="例）月々の支払いイメージ、学区、駅までの導線など"
                className="rounded-[18px] border border-[#10212b]/12 bg-[#f8f6f1] px-4 py-3 text-base text-[#10212b] outline-none transition focus:border-[#b7904a]"
              />
            </label>

            <button className="primary-button mt-2 w-full justify-center" type="submit">
              デモ送信して導線を確認する
            </button>
          </form>

          <p className="mt-4 text-xs leading-6 text-[#10212b]/54">
            このフォームは体験確認用です。実際の公開時には送信先とプライバシーポリシーを接続してください。
          </p>

          {submitted ? (
            <div className="mt-6 rounded-[22px] border border-[#b7904a]/24 bg-[#f5ead0] px-5 py-4 text-sm leading-7 text-[#6b4b17]">
              デモ送信を受け付けました。実運用ではここから資料請求完了画面、LINE誘導、営業担当の自動返信などに接続できます。
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function FooterSection() {
  return (
    <footer className="bg-[#081019] px-6 py-8 text-xs leading-6 text-white/42 md:px-10">
      <div className="shell">
        このページは大阪市外の新築マンション向けLPデモです。価格、返済例、広さ、設備、周辺環境は
        実物件に合わせて差し替える前提の参考表現を含みます。公開前には実データ、法定表示、問い合わせ導線、
        プライバシーポリシーの整備を行ってください。
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#10212b]">
      <HeroSection />
      <main>
        <ConcernSection />
        <ValueSection />
        <TimingSection />
        <PlansSection />
        <LifestyleSection />
        <ProcessSection />
        <FAQSection />
        <InquirySection />
      </main>
      <FooterSection />

      <div className="floating-mobile-cta md:hidden">
        <a className="primary-button w-full justify-center" href="#request">
          資料請求導線を見る
        </a>
      </div>
    </div>
  );
}
