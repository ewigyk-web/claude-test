# パターンカタログ — CK

対象: `artists/CK/` 配下 8曲。★付きなし。

楽曲リスト:
- Crave the quiet (Djent + Celtic + Piano)
- Only you remains (Metal × Hybrid Idol Pop)
- Storm Party (Metalcore + Synth Pop)
- Almost Connected / Glass City (City Pop + Cyberpunk)
- Bloomer - The Antidote (Djent Dark Pop)
- fake love (Industrial × Dark Orchestral × J-Rock)
- Don't Reset Me (Progressive Metal × Industrial)
- Neon Fracture (Cyberpunk Metal × EDM)

---

## 1. プロンプト構造パターン

### 1-1. 「カンマ区切りタグ列挙」型
TenJRの長文記述型と対照的に、CKは**短いタグを大量カンマ区切り**で並べる。

- 例 (Crave the quiet): `Dark Metal, Nu Metal, Djent, Heavy Metal, Celtic Folk Influence, Classical Piano, Cello, Dark Strings, Glitchy Synth Stabs, Heavy Drop, ...` (30+ タグ)
- 例 (Neon Fracture): `Cyberpunk Metal, Alternative Metal, EDM, 140 BPM, Minor Key, Clean Male Vocal, Catchy, Heavy, Aggressive, Dynamic Contrast` (極限まで簡素な10タグ)

→ Suno v5系のスタイル指定に最適化された書式。

### 1-2. 「ジャンル × ジャンル」のクロス指定
1曲に2〜3ジャンルを掛け合わせ、ハイブリッド音像を狙う。

| 曲 | クロス組成 |
|---|---|
| Crave the quiet | Djent × Celtic Folk × Classical |
| Only you remains | Aggressive Metal × Dark Hybrid Idol Pop |
| Storm Party | modern metalcore × dark synth pop × kawaii idol vocals |
| Almost Connected | City Pop × Cyberpunk Synth |
| Bloomer | Djent × Dark Pop × synth-metal |
| fake love | Industrial Metal × Dark Orchestral × Experimental J-Rock |
| Don't Reset Me | Progressive Metal × Industrial |
| Neon Fracture | Cyberpunk Metal × Alternative Metal × EDM |

→ "× を使ったジャンル合成"がCKの最大のシグネチャ。

### 1-3. セクション別演出指示の明文化
[Intro] [Verse] [Chorus] [Bridge] 各々に**個別の演出ディレクション**を付ける。

- 例 (fake love):
  - `Intro: fragile whisper + reversed piano, almost empty space`
  - `Verse: jazzy dark piano with loose groove, calm but eerie`
  - `Pre-Chorus: tension rises → abrupt cut (near silence)`
  - `Chorus: violent drop — djent guitars, blast beats`
  - `Breakdown: mechanical hits → explosive scream`

→ TenJRはバンド全体の音像を1ブロックで指定するのに対し、CKは**シネマ的なシーン台本**として書く。

### 1-4. ボーカル指示の精密化
ボーカルだけで5〜10要素を指定。

- 例 (Only you remains): `Verse: breathy sultry low alto female vocal, soft airy whisper tone, intimate and controlled, Chorus: explosive powerful belting, edgy emotional release, Bridge: whisper-dark close vocal`
- 例 (Crave the quiet): `Layered Male Vocals, Male Vocalist Only, Deep And Warm Tone, Whisper Vocal On Chorus, Emotional Delivery, Vocal Breath Space`

→ セクションごとに「囁き ↔ ベルト」のダイナミクス対比を明示。

### 1-5. メタヘッダー型 (Almost Connected)
プロンプト冒頭に **TITLE / THEME / VOCAL / BPM / KEY** をラベル形式で記述する独自書式。

```
TITLE : Glass City
THEME : 夜の都市・孤独・切なさ／癖ある女
VOCAL : Half-Sung Half-Spoken, Smooth Emotional, Mellow
BPM   : 150 / KEY : Minor
```

→ 8曲中1曲のみだがCKの実験的姿勢が表れる。

### 1-6. ネガティブプロンプトは控えめ
TenJRの「No XXX」連発と異なり、CKは**減算の言い回し**を使う。

- `EDM elements reduced to subtle atmospheric layer` (Only you remains)
- `no flashy synth leads, minimal "sparkle"` (同上)
- `Sparse Arrangement` (Crave the quiet)

→ 「禁止」ではなく「最小化/抑制」で表現する。

---

## 2. 歌詞構造パターン

### 2-1. 「囁き ↔ 爆発」のダイナミクス対比
全曲で[Whisper/Spoken Verse] → [Build] → [Belt/Scream Chorus] → [Whisper Outro] の山型構造。

- Storm Party: `[verse 1 - spoken/whisper]` → `[chorus - powerful belt]` → `[breakdown - aggressive shout]`
- fake love: `[Intro] (whisper)` → `[Chorus] cut it / break it / (stop)` → `(SCREAM) SAY IT DIFFERENT`
- Crave the quiet: `[Outro] just the quiet, just this…`

### 2-2. グリッチ/反復モチーフを歌詞に埋め込む
タイトルや単語自体を分断・反復し、エフェクト化する。

- `don't re—reset me / don't re—reset me / I repeat you / I repeat you` (Don't Reset Me)
- `fake love / same voice / fake love / no choice` (fake love)
- `NEON… FRACTURE… / DON'T DISAPPEAR / NEON… FRACTURE… / STAY HERE` (Neon Fracture)

→ 言葉を**ループ化されたコード片**として扱う。

### 2-3. 「沈黙」を歌詞に書く
無音/間を構造として明文化。AIに"演奏しない時間"を作らせる。

- `[Twist (Silence)] (…silence)` (Don't Reset Me)
- `(silence)` (fake love)
- `[Bridge – Twist / Drop Out → Emotional] Silence… / No code, no sound` (Neon Fracture)

→ 沈黙が"楽器の一つ"として扱われる。

### 2-4. 短句2-3語の畳みかけ (英語)
英語短句を `/` で区切って並べ、機械的なリズムを作る。

- `you move / like you know me / too smooth / too closely` (fake love)
- `same line / same noise` (同上)
- `cut it / break it / (stop)` (同上)

→ TenJRの「日本語7モーラ畳みかけ」に対するCK版。

### 2-5. デジタル/サイバー語彙の体系
全曲で共通する**ボキャブラリーバンク**:

`signal, frequency, static, glitch, code, data, screen, wire, pixel, neon, system, reset, refresh, feed, network, ghost, machine, layer, frame, sync, capture, fracture`

→ "テクノロジーが感情を媒介する"世界観の統一。

### 2-6. テーマ的に「孤独 × デジタル」が支配的
- Crave the quiet: 静寂を肯定する
- Almost Connected: 都会の孤独を観察する
- fake love: 偽りの愛
- Don't Reset Me: 既読放置からの依存
- Neon Fracture: デジタル空間での繋がり

→ CKの世界観: **"接続の中の孤独"**。

### 2-7. 終わり方の3パターン
| パターン | 例 |
|---|---|
| 囁き Outro | `just the quiet, just this…` (Crave) |
| 自己完結のスポークン | `Don't read into it.` (Almost Connected) |
| グリッチフェード | `…still loading / …still you` (Don't Reset Me) |

---

## 3. ジャンル分布

| ジャンル軸 | 曲数 | 代表曲 |
|---|---|---|
| Djent / Progressive Metal | 4 | Crave, Bloomer, Don't Reset, fake love |
| Cyberpunk / Synth | 4 | Almost Connected, Bloomer, Neon Fracture, Don't Reset |
| Idol Pop / Kawaii | 2 | Only you remains, Storm Party |
| Industrial | 3 | fake love, Don't Reset Me, Neon Fracture |
| City Pop | 1 | Almost Connected |
| Folk / Classical | 1 | Crave the quiet |

→ 中核は **Djent × Cyberpunk × Industrial**。そこに Idol Pop / City Pop / Folk を実験的にクロス。

---

## 4. テンポ/キーの傾向

| 曲 | BPM | Key |
|---|---|---|
| Crave the quiet | 150 | (Minor) |
| Only you remains | 150 | Minor |
| Storm Party | 150 | B minor |
| Almost Connected | 150 | Minor |
| Bloomer | 145 | Minor |
| fake love | 155 | C# Minor |
| Don't Reset Me | (未記載) | — |
| Neon Fracture | 140 | Minor |

→ **140-155 BPMのMinor Key**に強く集中。TenJRの極端な二極化と対照的に、CKは**狭い帯域に統一**する傾向。
