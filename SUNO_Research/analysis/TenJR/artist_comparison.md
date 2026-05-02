# アーティスト比較

現状サンプル: TenJR (6曲) のみ。複数アーティスト追加時に拡張する。

## TenJR — 全体像

| 項目 | 傾向 |
|---|---|
| 主軸ジャンル | デジタルハードコア / メロディックハードコアパンク |
| 副ジャンル | アコースティック弾き語り、インダストリアル+ジャングル |
| BPM帯 | 200–220 (高速) と 90台 (低速) の二極 |
| 楽器シグネチャ | Explorer + Les Paul / Freedom Custom Bass / TAMA + Zildjian |
| ボーカル指定 | `raspy`, `dirty`, `distortion`, `hoarse`, `shouting` (ハード曲) / `husky`, `breathy`, `intimate` (アコ曲) |
| 歌詞言語 | 日英ハイブリッド（サビ英語+日本語フック）、または日本語単独、英語単独 |
| 構造指示 | 【Verse】【Chorus】【Bridge】を明記。Pre-Chorusも導入 |
| ネガプロ | `No studio polish`, `No clean polish`, 楽器排除型 (アコ曲) |
| 高品質マーカー | NOTES欄に短い感想 (例: 「迫力を感じた」「メロディが良い」) |

## 曲別カラー

| 曲 | 一言 | 強み |
|---|---|---|
| Craving Distortion (Live) | ライブハウス再現 | 観客描写でミックス誘導、Shout応答の構造 |
| Goodbye, My Beautiful Rock and Roll | メロディック+ハイスタ系 | gang vocals指定、サビのリフレイン4連 |
| エキザカム -Unplugged- | 弾き語り | 楽器排除ネガプロ、close-micの肌触り指定 |
| MOTHER EARTH (cover) | 高速カバー | "改変するな"指示の精度、原曲への敬意指示 |
| Dope Pitch | 入場曲・煽り | カタカナ語と漢字熟語の高密度詰め込み |
| Sever Gravity | 異種混交 | industrial × jungle × 低BPMという珍配合 |

## TenJRのクセ・強み

強み:
- 機材名(Explorer/Les Paul/Freedom/TAMA/Zildjian)で音色を固定する精度。
- 日英コードスイッチの設計が一貫しており、サビのフックが立つ。
- ネガティブプロンプトを「仕上げ拒否」「楽器排除」「構造改変拒否」の3種で使い分ける。

クセ:
- 同じ指示をPROMPT欄とLYRICS欄に二重記述する（反映率を上げる目的と思われる）。
- ハード曲では漢字熟語と擬音的カタカナを多投する音圧重視の歌詞。
- BPMが極端 (200+ か 90台)。中速域のレパートリーが薄い。

改善余地（自分が真似する場合の注意点）:
- 二重記述はトークン消費が大きい。Suno v4以降では片方でも反映される場合あり、要検証。
- 機材名指定は強力だが、知名度の低い機材はAIが解釈できないリスクあり。
