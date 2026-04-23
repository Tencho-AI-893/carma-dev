# Safe Recruitment LP

このフォルダは、成人向け要素を含まない一般採用ランディングページの React + Tailwind CSS テンプレートです。

## セットアップ

```bash
npm install
npm run dev
```

公開用HTMLを `public` 配下へ出力する場合は、次を実行します。

```bash
npm run build:public
```

このコマンドで以下が更新されます。

- `../public/recruit-carma-partner.html`
- `../public/recruit-carma-partner-assets/*`

## 主な構成

- `src/App.jsx`: ページ全体の構成
- `src/content.js`: コピー、数値、FAQ などの差し替え用データ
- `src/components/*`: セクション別コンポーネント
- `src/styles/globals.css`: Tailwind 読み込みと共通スタイル

## カスタマイズしやすい点

- CTA リンクや見出しは `src/content.js` で一括変更できます
- 各セクションは独立しているので、追加・削除・並び替えが容易です
- 画像なしでも成立するよう、背景や装飾は CSS ベースで構成しています
- 公開用メタ情報は `recruit-carma-partner.html` で管理できます
