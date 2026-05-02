# パターンカタログ — 音色 (Neiro)

対象: `artists/音色/` 配下 8曲。★付きなし。

楽曲リスト:
- B連打 (Chipcore × Future Bass)
- トリック☆スター (Soft Hyperpop × Y2K Dream Pop)
- Ratta-tta! (Jersey Club × Kawaii)
- 百鬼夜行 (Japanese Mythic HipHop × Dark Wa-Rap)
- 『作品』(Japanese Rock acoustic)
- クリティカルヒット (Arcade Game Trap × Heavy Jersey Bounce)
- Bite the Bullet (Japanese Energetic Rock)
- 未踏域 (Japanese HipHop × UK Drill)

---

## 1. プロンプト構造パターン

### 1-1. ジャンル「×」合成 + サブ要素列挙
タイトル直下にジャンルを × でクロスし、その下にムード/楽器/ボーカル/ネガを列挙。

- `Emotional chipcore × future bass hybrid` (B連打)
- `Soft Hyperpop × Y2K Dream Pop` (トリック☆スター)
- `Jersey Club, Kawaii Jersey, Bright Pop Club, Hyper-Cute Bounce` (Ratta-tta!)
- `Japanese Mythic HipHop × Dark Wa-Rap` (百鬼夜行)

→ CKと類似する「ジャンル × 」合成を採用。

### 1-2. セクション別プロンプト (Verse/Hook/Bridge/Finalごと)
ボーカル/楽器の指示をセクション別に分けて書く。

- 例 (B連打):
  - `Verse = glitchy 8bit pulses, cool detached vocal`
  - `Hook = bright chip arps + strong vocals with bitcrushed harmony`
  - `Verse2 = airy bells, soft pads, warm breathy vocal`
  - `Bridge = rising pads, shimmering arps, floating voice`
  - `Final hook = uplifting hyper-saw + powerful emotional vocal`

- 例 (百鬼夜行):
  - `Verse1: dark minimalism, Sparse taiko, single shamisen plucks`
  - `Hook1: march-like taiko rhythm`
  - `Bridge: nearly silent; one shakuhachi note + ambient wind`
  - `Final: explosive climax`

→ CKよりさらに細かく、**5-6セクションそれぞれに独立指示**を出す。

### 1-3. ボーカル指示の極めて精密な記述
キャラ/ピッチ/質感/発音まで指定する。

- `cute Japanese female voice, soft and airy, slightly sleepy deadpan tone (Neiro-style)` (トリック☆スター)
- `Soft airy rap voice, Breath-forward, clear, whisper edge, Cute but not childish, Light bounce, crisp consonants, Gentle attack on "ta / tta / ra"` (Ratta-tta!)
- `clear and glassy tone but with strong attack, Crisp consonants, fast and precise articulation, minimal vibrato, almost spoken-word clarity, ... Absolutely no cutesy inflection or idol tone` (未踏域)

→ "Neiro-style" という固有名で**一貫した声質**を指定する箇所が複数曲にある (B連打、トリック☆スター、クリティカルヒット)。

### 1-4. ネガティブプロンプトの「キャラ崩壊防止」型
他アーティストには無い特殊用法: **同じボーカリストの別キャラ表現が混入しないよう排除する**。

- `Absolutely no cutesy inflection or idol tone` (未踏域 — クール路線)
- `not too cute, not too soft` (Bite the Bullet — 強い路線)
- `Not Sexy, Not Deep, Slightly Cartoonish Energy` (クリティカルヒット — ゲーム路線)
- `NOT powerful, NOT aggressive, translucent and delicate presence` (百鬼夜行 — 和繊細路線)

→ 同一ボーカリストで楽曲ごとに**人格を切り替える**ためのネガ指定。これが「音色」最大の特徴。

### 1-5. メタヘッダー/セクション構造の多様性

| 書式 | 出典 |
|---|---|
| カンマ区切り長文 | B連打、トリック☆スター |
| 項目別ラベル (Genre/Mood/Drums/Vocal) | Ratta-tta!、クリティカルヒット |
| ◆ 記号区切り (Voice/Delivery/Beat) | 未踏域 |
| BPM併記 + 楽器列挙 | 百鬼夜行、作品 |

→ 1アーティスト内で**書式自体を曲ごとに使い分ける**。

---

## 2. 歌詞構造パターン

### 2-1. 日英完全対訳の併記
全8曲中6曲で**日本語フル歌詞 + 英語フル歌詞**を `*☼*―――*☼*` 等の区切りで併記。

- B連打、トリック☆スター、Ratta-tta!、作品、クリティカルヒット、Bite the Bullet
- (百鬼夜行、未踏域は日本語のみ)

→ 英語版はSinging-Singable版として独立して機能する完成度。多言語展開を想定した設計。

### 2-2. アーティスト名「Neiro」の一人称固定
歌詞中に自分の名前を多用する。キャラクター歌詞の自己紹介装置。

- `わたしがいなくなった世界で` `Neiroの宇宙` (未踏域)
- `Neiroちゃんっ / Neiroちゃんが強すぎるだけ` (クリティカルヒット)
- `言うてNeiroちゃん神じゃん！？` (トリック☆スター)
- `もう君のROMにNeiroはいない` (B連打)

→ Vチューバー/アイドル的な"キャラクター運用"。

### 2-3. 「カウンター/反逆」のテーマ系列
弱者の立場から強者へ反転するナラティブ。歌詞テーマの中核。

| 曲 | カウンターの相手 |
|---|---|
| B連打 | 「弱いままでいて」と願う元相手 |
| 作品 | SNSで作品を否定する炎上群衆 |
| Bite the Bullet | 「綺麗な言葉を使え」と縛る世間の声 |
| 未踏域 | 才能/数字/常識という幻想 |
| 百鬼夜行 | 鬼を「人」と分ける線引き自体 |

→ "私の声で叫ぶ"という決意フレーズが頻出。

### 2-4. 構造マーカーは小文字 [verse1] [hook] が標準
[Verse]ではなく `[verse1]` `[hook]` を採用。`[Pre Chorus]` `[Final hook]` も使う。

→ 表記の癖が一貫しておりNeiroのシグネチャ。

### 2-5. ゲーム/アニメ語彙の多用
- `レベル上がった 進化可能レベル / ROM` (B連打 — RPG)
- `wikiチェケラッチョ / week point / レート / 全マップ視野 / TKO` (クリティカルヒット — ゲーム実況)
- `YDK！ / ピクセル / キラデコ` (トリック☆スター — Y2K)

→ サブカル文脈の語彙を歌詞密度として利用。

### 2-6. 効果音/掛け声を歌詞に書く
- `BBBB BBBB…` (B連打 — Bボタン連打音)
- `Critical Hit！(ぴこっ) / (ぴしっ) / 対ありど～も！` (クリティカルヒット)
- `Ratta-tta!` (Ratta-tta! — タップ音)
- `(Woah-oh, woah-oh)` (Bite the Bullet — 観客コール)
- `百鬼夜行` 連呼 (百鬼夜行)

→ 楽曲のフック自体を**擬音/タイトルワード**で構成。

### 2-7. 韻と短句の畳みかけ (日本語ラップ譜)
ラップ系3曲(百鬼夜行、Ratta-tta!、未踏域)では同母音/同語尾の脚韻を高密度に配置。

- `転じろ汚点 / 痛みに機転 / 論じろ次点 / 飛び越え合点` (※TenJR Dope Pitchと同手法だが、音色のほうが意味性も維持)
- `諦めた想い  書き溜めた誇り / まだ飛べるしまだ潜れる / 天井も底もまだまだ見えない` (未踏域 — i音/u音重ね)
- `握力14(※左手)でも全然殴れる / すごい語彙力でTKO / TKGかき込み また歌詞書く` (未踏域 — 自己ネタ韻)

### 2-8. 終わり方: スポークン or タイトル反復
- `[spoken] …ねぇ、rapってやっぱ最高でしょ？` (Ratta-tta!)
- `今季の女王もNeiroちゃん！` (クリティカルヒット)
- `Bite the Bullet!` (Bite the Bullet)
- `My wings know where to go.` (B連打)

→ サビ後に独白/宣言で締める形式が多い。

---

## 3. ジャンル分布

| ジャンル軸 | 曲数 | 代表曲 |
|---|---|---|
| 8bit / Chiptune / ゲーム音楽 | 3 | B連打、クリティカルヒット、(トリック☆スター) |
| Jersey Club / Trap | 2 | Ratta-tta!、クリティカルヒット |
| Hyperpop / Y2K | 1 | トリック☆スター |
| HipHop / Rap | 3 | 百鬼夜行、Ratta-tta!、未踏域 |
| 和楽器 / Wa-Rap | 1 | 百鬼夜行 |
| Acoustic Rock | 1 | 作品 |
| Energetic Rock | 1 | Bite the Bullet |
| UK Drill | 1 | 未踏域 |

→ **異常に広い守備範囲**。同一ボーカリストで「kawaii→クール→和→ロック」を全部カバー。

---

## 4. テンポ/キー

| 曲 | BPM | Key |
|---|---|---|
| 作品 | 102 | (未記載) |
| 百鬼夜行 | 120-128 | (未記載) |
| 未踏域 | 140-150 | (未記載) |
| クリティカルヒット | 150-152 | (未記載) |
| B連打 / トリック☆スター / Ratta-tta! / Bite the Bullet | 未指定 | — |

→ BPM未指定の曲が多い (4/8)。**ジャンルとボーカル設計を優先し、テンポはAIに委ねる**スタイル。
