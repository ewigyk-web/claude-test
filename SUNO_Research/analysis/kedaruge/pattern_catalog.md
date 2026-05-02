# パターンカタログ — kedaruge

対象: `artists/kedaruge/` 配下 11曲。★付きなし。

楽曲リスト:
- Journey (DnB × Cute Electronic, woodwind)
- Astral (Kawaii Future Bass × Math Rock × Art Rock)
- Bi-Ga-Gi-Go (Lo-Fi Hip Hop Jazzy, 完全擬音歌詞)
- Diorama (Woodwind Dubstep, 童話×哲学)
- Oblivion (Cinematic Piano × Glitch hop, gothic)
- Spark (Experimental Acoustic Art Rock)
- Flora (Experimental Minimal Future Bass, 色彩哲学)
- Hide & Seek (Future Bass woodwind, 童話×科学)
- 知性の暴走 (Complex IDM)
- Spectrum (Glitch dream hop — Flora同歌詞別アレンジ)
- Cloud Drive (Complex IDM × Math Rock)

---

## 1. プロンプト構造パターン

### 1-1. 「音楽用語の高密度カタログ」型
TenJR/CK/音色/ランジェリーの誰とも違う。**プロエンジニア級の専門用語**を連射する。

頻出専門タグ:
- `granular synthesis` / `FM bell tones` / `analog bass modwheel`
- `sidechained ghost pads` / `tape saturation` / `microcut edits`
- `binaural depth` / `3D soundstage` / `extreme stereo width`
- `polymeter` / `off-grid shuffled swing` / `asymmetrical micro-beats`
- `granular synth stabs` / `reverse piano` / `glass harp` / `handpan`

→ 音色やCKよりさらに専門度が高い。**音響制作の語彙そのもの**。

### 1-2. ラベル形式 (Style/Mood/Energy/Beat/Instrument/FX/Vocal)
半角[ ]ラベルで音楽要素をカテゴリ別に分割記述。

```
[Style: Drum and Bass, Cute Electronic]
[Mood: Euphoric, Airy, Playful]
[Energy: Floating]
[Beat: Fast Breakbeat]
[Instrument: Flute, Clarinet, Piccolo, Soft Pads, Sub Bass]
[FX: Reverb, Delay, Filter Sweeps, Sparkle Textures]
[Vocal: Sweet, Light, Feminine]
```

→ Journey, Oblivion, Flora, Hide & Seek 等で採用。CKのメタヘッダー型と類似だが、要素が音響工学寄り。

### 1-3. ハイブリッド ジャンル合成 (3軸クロス)

| 曲 | ジャンルクロス |
|---|---|
| Astral | Kawaii Future Bass × Math Rock × Experimental Art Rock |
| Bi-Ga-Gi-Go | Jazzy Lo-Fi Hip Hop (jazz chords 7/9/11/13) |
| Diorama | Woodwind Ensemble × Heavy Dubstep |
| Spark | Experimental Acoustic × Body Percussion × Art Rock |
| Spectrum | Experimental Glitch × Dream Hop |
| Cloud Drive | Complex IDM × Math Rock × Broken Breakbeats |

→ 全曲この合成構造。中核は**Future Bass / IDM / Glitch / Math Rock**で固定。

### 1-4. 木管+低音の固有楽器パレット
ほぼ全曲に**flute, clarinet, oboe, bassoon** などの木管が登場。これに**sub bass / wobble bass**が対比的に乗る。

→ "ふわふわ × ズシン" の対比設計が音響面のシグネチャ。

### 1-5. 「無音」「沈黙」「停止」を構造に組み込む
- `Frequent silence cuts, hard stops, glitch edits, and reverse reverb` (Astral)
- `dynamic contrast between silence and impact` (Diorama)
- `silence breaks, sidechain pumping` (知性の暴走)
- `sudden dropouts` (Cloud Drive)

→ CKの「沈黙を歌詞に書く」と異なり、kedarugeは**プロンプト段階で沈黙を構造に組み込む**。

### 1-6. ネガティブプロンプトは部分的
明示禁止が出るのは2曲のみ:
- `No accordion, banjo, harp, brass, or strings` (Astral)
- `No aggressive elements — keep everything smooth, chill, and emotionally rich` (Bi-Ga-Gi-Go)
- `‑Electric Guitar, ‑Brass Sections, ‑Orchestral Strings` (Diorama — マイナス記号で除外)

→ ハイフン記号 `‑` で除外を表す独自記法。

### 1-7. 「進行設計」を文章で書く
「最初は静か → 徐々にビルド → 爆発 → 戻る」の動的ストーリーを文で記述。

例 (Spark):
```
Begins as a fragile, intimate acoustic ballad with lots of space and silence,
... Gradually builds tension and emotional —focus on dynamics, breath
Chorus explodes into raw emotion: ...
Immediately after the chorus, strip everything back to the original quiet, fragile acoustic ballad,
Just before the final chorus, raise the pitch by a semitone to emphasize the emotional build-up
```

→ ピッチ転調指示まで含む。映画音楽のディレクションに近い。

---

## 2. 歌詞構造パターン

### 2-1. 科学・哲学用語の詩化
専門語を比喩として大量投入。これがkedarugeの最大シグネチャ。

頻出語彙:
- 物理/数学: エントロピー、位相空間、力学的揺らぎ、紫外線の減衰、光合成、屈折、波の影、座標系、二重の螺旋
- 哲学/論理: クオリア、シミュラクラ、アポリア、パラドクス、ロゴス、イデア、トポロジカル、シンポジウム、パラダイムシフト
- 生物: ニューロン、古生代、植物の群生、腐葉土、層位学
- その他: スペクトル、ジオラマ、エントロピー、シミュラクラ

→ 1曲あたり3〜10語の専門語が散りばめられる。

### 2-2. 「定義 / 反定義」の対句
冒頭から定義論争を仕掛ける。

例 (Flora / Spectrum):
```
「白」は欠落か　あるいは全能か
網膜を穿つ　虚無の結晶
定義を剥げば　単なる波の影
意識を染めれば　固有の受難
```

→ 哲学テーゼで歌詞をオープン。リスナーに思考を強制する。

### 2-3. 童話 × 科学の融合
童心モチーフと専門用語を意図的に並置する。

例 (Diorama):
- `積み木の街は エントロピーの果て / お砂糖の雨に 濡れて消えるよ`
- `赤い三輪車 どこへ行くの？ / クオリアの影を 踏みつけながら`

例 (Hide & Seek):
- `（もういいかい？） / 虚空から響く 不思議な周波数のお返事`
- `天球儀の座標系 もうただの石ころ`
- `力学的揺らぎを伴う、ぼくらの大冒険`

→ 「無邪気さ」と「知性」の同居がkedaruge世界観の核。

### 2-4. ルビ (読み替え) で多義化
- `色（うつり）は牢獄 / 彩（かざり）は救済` (Flora / Spectrum)

→ ランジェリーと同手法だが、kedargueは**漢字を音楽的読みに当て直す**ことで二重意味を作る。

### 2-5. 括弧書きの「内的呟き」
歌詞本文と並行して、`( )` 内に独白や効果を書く。

- `（あしおと、ふたつ、みっつ）` (Astral)
- `（もういいかい？）` `（ばいばい、またね）` (Hide & Seek)
- `（こわくない、こわくないよ）` (Hide & Seek)
- `（ねえ、どこに隠れたの？）` (Hide & Seek)

→ メインボーカルの裏で囁かれる物語のレイヤー。

### 2-6. 完全擬音/造語歌詞 (Bi-Ga-Gi-Go)
ボーカルパートが**意味を持たない音そのもの**になる極端実験。

```
Bi-Ga-Gi-Go.
Zuri, Topo, Ra.
Ta-Ki-To, Fooo.
Nu-Ro-Me-Ni.
```

歌詞内の効果音表記:
- `スーーーーーーー` `ザリ……ザリ……` `パキッ。パキッ。スパーク。`
- `ガラン！ガラン！ガランガランガランｶﾞﾗﾝ！`
- `シー、ハハッ♪`

→ 言葉の意味を解体し、**音として再構築**する。Sound Poetryの手法。

### 2-7. リフレインを「単一行 × 列挙」で構築
Floraのサビは8行が全て独立した命題。

```
薄紅は振動
菫は溶解
翡翠は胎動
琥珀は凍結
深緑は収束
山吹は抱擁
色（うつり）は牢獄
彩（かざり）は救済
```

→ 「主語 + は + 抽象動詞/名詞」の同型8連。**辞書の項目のような提示形式**。

### 2-8. 構成マーカーは半角 [Verse 1] [Chorus]
ランジェリーの全角【】とは異なり、kedarugeは英語表記を使う。【】併用は1曲のみ (Bi-Ga-Gi-Go の【Verse】【Chorus】【End】)。

### 2-9. 「軌道 / 螺旋 / 旅路」のモチーフ反復
複数曲で共通の概念モチーフが現れる。

| モチーフ | 出典 |
|---|---|
| 軌道 (orbit) | Astral, Cloud Drive, Diorama |
| 螺旋 (spiral) | Oblivion (奈落の螺旋), Cloud Drive (二重の螺旋) |
| 迷宮 / 階段 | Oblivion (歪んだ迷宮の階段) |
| 階段 / 旅路 | Astral, Journey |
| 隠れ家 / 森 | Hide & Seek, Diorama |
| 鳥籠 / 檻 | Oblivion (静まりかえる銀の鳥籠) |

→ アーティスト固有の象徴体系。

### 2-10. オノマトペの「文字加工」
通常表記と半角カタカナを混ぜて視覚的にも音を表現。

- `ボコ。ボコ。ボコボコﾎﾞｺﾎﾞｺ。` (Bi-Ga-Gi-Go)
- `ガラン！ガラン！ガランガランガランｶﾞﾗﾝ！` (Bi-Ga-Gi-Go)

→ 全角→半角への遷移で**音圧が小さくなる/エコーする**ことを視覚で表現。

---

## 3. ジャンル分布

| ジャンル軸 | 曲数 | 代表曲 |
|---|---|---|
| Future Bass / Kawaii Future Bass | 4 | Journey, Astral, Flora, Hide & Seek |
| IDM / Glitch hop | 3 | 知性の暴走, Spectrum, Cloud Drive |
| Drum and Bass | 2 | Journey, Cloud Drive |
| Math Rock / Art Rock | 3 | Astral, Spark, Cloud Drive |
| Dubstep | 2 | Diorama, (Oblivion部分) |
| Cinematic Piano | 1 | Oblivion |
| Lo-Fi Hip Hop Jazzy | 1 | Bi-Ga-Gi-Go |
| Acoustic Art Rock | 1 | Spark |

→ 中核は **Future Bass × IDM × Glitch × Math Rock**。木管楽器を全曲に配置することで音色シグネチャを保つ。

---

## 4. テンポ/キー/ボーカル

### BPM明示
ほぼ無し。テンポ感を**形容詞 (`fast`, `slow build`, `floating`)** で記述。

### Key明示
無し。

### ボーカル指定
- `Sweet, Light, Feminine` (Journey)
- `Fragile, ethereal vocals with a playful yet detached, abstract tone` (Astral)
- `Emotional high-pitched sweet female vocals` (Oblivion)
- `Intense, expressive vocals with a slightly unstable, emotional delivery` (Spark)

→ 女性ボーカル中心、**fragile / ethereal / emotional** が共通形容詞。
