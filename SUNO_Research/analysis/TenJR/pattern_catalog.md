# パターンカタログ

対象: `artists/TenJR/` 配下 6曲 (★付きなし)。

---

## 1. プロンプト構造パターン

### 1-1. 「アイデンティティ宣言」を冒頭に置く
バンドの設定や立ち位置を1行で宣言してから、楽器/音色を列挙する。

- 例: `AI-generated digital hardcore rock band with raw human spirit` (Craving Distortion / Goodbye / Sever Gravity / MOTHER EARTH)
- 効果: 全曲に共通する"音像の核"を固定し、ジャンルを跨いでも声/質感が一貫する。

### 1-2. 楽器を「機材名 + 質感形容詞」で書く
抽象的なジャンル指定ではなく、実機材を持ち込むことでトーンを限定する。

| 楽器 | 指定例 | 出典 |
|---|---|---|
| Guitar | `Explorer + Les Paul`, `gritty live amp tone` | Craving Distortion 等 |
| Bass | `Freedom Custom Guitar Research style`, `growling overdriven` | Goodbye / MOTHER EARTH 等 |
| Drums | `TAMA drum kit, Zildjian cymbals` | Craving Distortion / Goodbye / MOTHER EARTH |

### 1-3. 「Lock指示」で再生成時の崩壊を防ぐ
カバー/リアレンジ系で多用。BPM・キー・構成・メロディを"変えるな"と明示する。

- `Keep the original melody, key, tempo, and song structure strictly unchanged` (エキザカム)
- `The original BPM, key, structure, arrangement, and song length must remain exactly the same` (Craving Distortion ライブ版)
- `Strictly preserve the original vocal melody, phrasing, and emotional flow. Do not change the melody.` (MOTHER EARTH cover)

### 1-4. ネガティブプロンプトの3類型
| 類型 | 例 | 出典 |
|---|---|---|
| 仕上げ拒否 | `No studio polish` / `No clean polish` / `Avoid clean polish` | Craving / Goodbye / MOTHER EARTH |
| 楽器排除 | `No piano, no pads, no bass, no drums` | エキザカム |
| 構造変更拒否 | `No remixing, no restructuring, no added sections` | Craving Live / MOTHER EARTH |

### 1-5. シーン描写でミックス感を誘導
場所・人数・反応を具体化することで空間系の質感を引き出す。

- `Crowd of around 300 people reacting loudly, shouting and clapping` (Craving Distortion)
- `Performed in a 300-capacity underground live house. Low ceiling, dense heat` (同上)
- `Captured with close microphones, emphasizing string noise and body resonance` (エキザカム)

### 1-6. ブラケット記法で"指示"と"歌詞"を分離
歌詞ブロックの先頭に`[ ... ]`でメタ指示を再掲し、`【Verse1】`等で構造を区切る。

- 全曲共通。プロンプト欄とLYRICS欄に同じ指示を二重に書くことで反映率を上げている。

---

## 2. 歌詞構造パターン

### 2-1. 日英コードスイッチ (TenJRの最大の特徴)
英語サビ + 日本語フレーズの折衷。サビのフックは英語の短いフレーズ、感情の核は日本語で配置。

- `Craving distortion!!! / あの鼓動を　もう一度刻め` (Craving Distortion)
- `Mother Earth / One life, one world / Mother Earth / すべては一つ` (MOTHER EARTH)
- `Sever the gravity, dive straight into hell` (英) ↔ `気にするな` (日) (Sever Gravity)

### 2-2. 短句の畳みかけ (4モーラ〜7モーラ系)
日本語パートは短い句を等拍で並べ、ハードコアのビートと合わせる。

- 例 (Sever Gravity): `光っているか / 尖っているか / 己をみるか / 空気を斬るか` — 全て7モーラで揃う
- 例 (Dope Pitch): `レイジなライフ / ヒートなライブ` — カタカナ語+リズム

### 2-3. 「Shout応答」のサビ構造
リードと合いの手が交互に来る掛け合い。ライブ感を歌詞段階で確保。

- `(Shout) Craving!!! / DISTORTION!!!` (Craving Distortion)
- `Do it! Do it! Fists up, scream it loud!` (同上)

### 2-4. リフレインの語尾繰り返しでアウトロ化
最終セクションで同じ2行を3〜4回繰り返し、フェードアウトを誘発。

- `Goodbye, my overdue youth / Goodbye, my beautiful rock and roll` × 4 (Goodbye)
- `Craving more… (DISTORTION!!!)` × 3 (Craving Distortion)
- `Never Mind` × 4 (Sever Gravity)

### 2-5. 漢字熟語による"硬度"演出
ハードコア系では漢字2〜4字熟語を多投。意味より音圧と視覚密度を重視。

- `承久の御子　断絶の束 / 暴虐傍若ロマンティック` (Dope Pitch)
- `感情の残骸 / 泥濘に浸るか` (Sever Gravity)
- `焦燥と茫漠 / 哀の残響` (エキザカム) ※バラードでは抑制的に使用

### 2-6. 押韻 (脚韻) の配置
- 英語パート: 強い脚韻 (`tight / tonight`, `loud / cried`, `lied / mind`) — Craving Distortion Aメロ
- 日本語パート: 母音韻 ("a"音連鎖、"o"音連鎖) で韻を取る
  - `転じろ汚点　痛みに機転 / 論じろ次点　飛び越え合点` (Dope Pitch) — "ten"音で4回

---

## 3. ジャンル別の語彙バンク

### 3-1. デジタルハードコア系 (5/6曲)
頻出語: `explosive`, `digital hardcore`, `aggressive distortion`, `growling`, `raspy`, `raw`, `tight`, `punchy`, `crushing`, `wall of sound`, `blast beats`, `16th-note`

### 3-2. アコースティック (1/6曲: エキザカム)
頻出語: `organic`, `warm`, `wood resonance`, `fingerstyle`, `close-mic`, `husky`, `breathy`, `intimate`, `restrained`, `human groove`

→ 同一アーティストでも「正反対の語彙バンクを使い分け」られている点が特徴。

---

## 4. テンポ指定の傾向

| 曲 | BPM | ジャンル |
|---|---|---|
| Goodbye, My Beautiful Rock and Roll | 210–220 | melodic hardcore punk |
| MOTHER EARTH (cover) | 210 | digital hardcore (高速化カバー) |
| Dope Pitch | 200 | digital hardcore punk |
| Sever Gravity | 93 | industrial / jungle |
| Craving Distortion | 未指定 (元曲固定) | digital hardcore live |
| エキザカム | 未指定 (元曲固定) | acoustic |

→ 高速 (200+) または 低速 (90台) の二極化。中速域は使われない。
