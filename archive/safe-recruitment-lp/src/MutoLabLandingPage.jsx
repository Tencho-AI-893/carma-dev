const featuredPosts = [
  {
    title: "新人賞の取り方",
    category: "GUIDE",
    description: "応募前に知っておきたい選考の勘所と、落ちる原稿の共通点。"
  },
  {
    title: "原稿料のリアル",
    category: "MONEY",
    description: "書く仕事で生きるために避けて通れない、単価と継続の話。"
  },
  {
    title: "プロ作家の思考",
    category: "BOOK REVIEW",
    description: "読み方と書き方を変える、編集者目線の読書ノート。"
  }
];

const categories = [
  "BOOKレビュー",
  "和菓子紀行",
  "取材活動",
  "WEB小説添削講座",
  "運営者情報"
];

const services = [
  {
    title: "添削講座",
    text: "プロの編集者が文章の癖と可能性を見抜き、伝わる原稿へ整えます。"
  },
  {
    title: "作家支援",
    text: "新人賞対策、企画相談、構成整理まで。次の一歩を実務で支えます。"
  },
  {
    title: "クリエイター募集",
    text: "ライター・作家・イラストレーターなど、表現に本気の仲間を募集。"
  }
];

const editors = [
  {
    name: "編集者 A",
    role: "Senior Editor",
    quote: "書き手の声を削るのではなく、届く形へ磨くのが仕事です。"
  },
  {
    name: "編集者 B",
    role: "Writing Mentor",
    quote: "うまい文章より、読者の心に残る文章を大切にしています。"
  },
  {
    name: "編集者 C",
    role: "Project Director",
    quote: "言葉には、人生を動かすだけの力があると信じています。"
  }
];

export default function MutoLabLandingPage() {
  return (
    <div
      className="min-h-screen bg-[#f6f1e8] text-[#111111]"
      style={{ fontFamily: '"Noto Serif JP", "Yu Mincho", serif' }}
    >
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(0,0,0,0.04), transparent 28%), radial-gradient(circle at 80% 10%, rgba(0,0,0,0.03), transparent 22%), linear-gradient(to bottom, rgba(255,255,255,0.55), rgba(255,255,255,0.15))"
          }}
        />

        <header className="relative z-10 border-b border-black/10">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
            <div>
              <div className="text-xs tracking-[0.35em] text-black/55">EDITORIAL PRODUCTION</div>
              <div className="mt-1 text-2xl font-semibold tracking-[0.08em]">MUTO LAB</div>
            </div>
            <nav className="hidden gap-8 text-sm text-black/70 md:flex">
              <a href="#about" className="transition hover:text-black">
                理念
              </a>
              <a href="#archive" className="transition hover:text-black">
                記事導線
              </a>
              <a href="#services" className="transition hover:text-black">
                サービス
              </a>
              <a href="#editors" className="transition hover:text-black">
                編集者
              </a>
            </nav>
          </div>
        </header>

        <section className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <div className="mb-5 inline-block border border-black/15 px-3 py-1 text-xs tracking-[0.3em] text-black/55">
                1997年創業 / 大阪拠点
              </div>
              <h1 className="max-w-3xl text-4xl leading-tight md:text-5xl lg:text-6xl">
                書くことで、
                <br />
                生きる人を支える。
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-black/72 md:text-lg">
                編集プロダクションとして25年以上。新人からプロまで、言葉の価値を磨き続けてきました。静かに、深く、確かな技術で。売り込むのではなく、信用を積み上げるための場所です。
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="rounded-none border border-[#1c1c1c] bg-[#1c1c1c] px-6 py-3 text-sm tracking-[0.18em] text-[#f6f1e8] transition hover:-translate-y-0.5"
                >
                  サービスを見る
                </a>
                <a
                  href="#archive"
                  className="rounded-none border border-black/20 px-6 py-3 text-sm tracking-[0.18em] text-black transition hover:bg-black/5"
                >
                  添削講座はこちら
                </a>
              </div>
            </div>

            <div className="flex items-end">
              <div className="w-full border border-black/15 bg-white/55 p-6 backdrop-blur-sm lg:p-8">
                <div className="text-xs tracking-[0.3em] text-black/50">POSITIONING</div>
                <div className="mt-4 border-t border-black/10 pt-4 text-sm leading-7 text-black/72">
                  <p>文学 × 信頼 × 編集プロ感</p>
                  <p>紙の質感 / 和モダン / 活版印刷の余韻</p>
                  <p>営業臭を消し、実力と歴史だけを残す</p>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4 border-t border-black/10 pt-6 text-sm">
                  <div>
                    <div className="text-2xl">25+</div>
                    <div className="mt-1 text-black/55">Years of Trust</div>
                  </div>
                  <div>
                    <div className="text-2xl">3層</div>
                    <div className="mt-1 text-black/55">教育 / 集客 / 収益化</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main>
        <section id="about" className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <div className="text-xs tracking-[0.3em] text-black/45">ABOUT</div>
              <h2 className="mt-4 text-3xl leading-tight md:text-4xl">
                老舗の重みを、
                <br className="hidden md:block" />
                ちゃんと見せる。
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                ["書籍編集", "企画立案から構成、原稿整理、仕上げまで一貫対応。"],
                ["ライティング", "取材記事、紹介文、解説文など、媒体に応じて執筆。"],
                ["取材", "現場で拾った温度を、読める言葉へ変換。"],
                ["WEB制作", "編集視点を活かした、読ませる導線設計。"]
              ].map(([title, text]) => (
                <div key={title} className="border border-black/10 bg-white/45 p-6">
                  <div className="text-lg">{title}</div>
                  <p className="mt-3 text-sm leading-7 text-black/68">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="archive" className="border-y border-black/10 bg-white/35">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="text-xs tracking-[0.3em] text-black/45">ARCHIVE & CONTENT</div>
                <h2 className="mt-4 text-3xl md:text-4xl">旧ブログ資産を、信用の導線に変える。</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-black/66">
                BOOKレビューで権威性を、和菓子紀行と取材活動で人間味を。古い記事は死んでいない。並べ方しだいで、今も営業する。
              </p>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-5">
                {featuredPosts.map((post) => (
                  <div
                    key={post.title}
                    className="border border-black/10 bg-[#f8f4ec] p-6 transition hover:-translate-y-1"
                  >
                    <div className="text-xs tracking-[0.25em] text-black/45">{post.category}</div>
                    <h3 className="mt-3 text-2xl">{post.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-black/68">{post.description}</p>
                    <div className="mt-5 text-sm text-black/70">記事を読む →</div>
                  </div>
                ))}
              </div>

              <aside className="border border-black/10 bg-[#1a1a1a] p-8 text-[#f6f1e8]">
                <div className="text-xs tracking-[0.3em] text-white/50">CATEGORIES</div>
                <ul className="mt-6 space-y-4 border-t border-white/10 pt-6">
                  {categories.map((category) => (
                    <li key={category} className="flex items-center justify-between text-sm">
                      <span>{category}</span>
                      <span className="text-white/45">→</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 border-t border-white/10 pt-6 text-sm leading-7 text-white/72">
                  書き手志望者が最初に読むべき入口を整理し、無料情報から相談導線へつなげる設計。
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
          <div className="max-w-2xl">
            <div className="text-xs tracking-[0.3em] text-black/45">SERVICES</div>
            <h2 className="mt-4 text-3xl md:text-4xl">
              ここで初めて、
              <br />
              仕事の話をする。
            </h2>
            <p className="mt-5 text-sm leading-8 text-black/68 md:text-base">
              先に信用を積み、そのあとで必要なサービスだけを静かに提示する。順番を間違えないことが、品のある営業になる。
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex min-h-[260px] flex-col justify-between border border-black/10 bg-white/55 p-7"
              >
                <div>
                  <div className="text-lg">{service.title}</div>
                  <p className="mt-4 text-sm leading-7 text-black/68">{service.text}</p>
                </div>
                <div className="mt-8 border-t border-black/10 pt-4 text-sm text-black/70">
                  詳しく見る →
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="editors" className="border-y border-black/10 bg-[#efe7d9]">
          <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
            <div className="max-w-2xl">
              <div className="text-xs tracking-[0.3em] text-black/45">EDITORS</div>
              <h2 className="mt-4 text-3xl md:text-4xl">
                編集者の顔が見えると、
                <br />
                信用は跳ねる。
              </h2>
              <p className="mt-5 text-sm leading-8 text-black/68 md:text-base">
                どんな人が、どんな目で原稿を読むのか。ここを隠さないだけで、サイトは一気に生身になる。
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {editors.map((editor) => (
                <div key={editor.name} className="border border-black/10 bg-white/50 p-7">
                  <div className="h-40 border border-black/10 bg-gradient-to-b from-black/5 to-transparent" />
                  <div className="mt-6 text-xl">{editor.name}</div>
                  <div className="mt-1 text-sm tracking-[0.15em] text-black/45">{editor.role}</div>
                  <p className="mt-5 text-sm leading-7 text-black/68">{editor.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
          <div className="text-xs tracking-[0.3em] text-black/45">FINAL CTA</div>
          <h2 className="mt-5 text-4xl leading-tight md:text-5xl">
            あなたの言葉を、
            <br />
            価値に変える。
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-black/68 md:text-base">
            文章の相談、添削の依頼、企画の壁打ちまで。静かで本気のやり取りを、ここから始めましょう。
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="#"
              className="border border-[#1c1c1c] bg-[#1c1c1c] px-8 py-4 text-sm tracking-[0.2em] text-[#f6f1e8] transition hover:-translate-y-0.5"
            >
              無料相談はこちら
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
