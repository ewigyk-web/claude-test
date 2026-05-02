# パターンカタログ — Yuto (my_songs)

対象: `my_songs/` 配下 25曲。

---

## 1. 楽曲分類

### 1-1. オリジナル vs REMIX
| 種別 | 曲数 | 主な曲 |
|---|---|---|
| オリジナル | 17 | 創造せえよ、灰色のHEART、SORA、Break Through、雨がきた、LIKE LIKE LIKE、1000 Ears 1000 Eyes、SUNO讃歌、Dear Listeners、低意識上等ロック、LIVEに行こうぜ、Come on Let's Dance、終日SUNO、Hello My Dear、Tesoro y Colmillo、混沌、呑め日本晴れ、俺が作ったことにしたい |
| REMIX | 8 | Cloud OverDrive (kedaruge), 孤独は旧びたり (BOHVNNON), Don't Reset Me (CK), Antidote ×2 (Bloomer), Welcome to my world, Hello My Dear, Regeneration |

→ **REMIXが約3分の1**。他者の曲を素材に再構築するスタンス。

### 1-2. 楽曲の系統
| 系統 | 曲 |
|---|---|
| **熱血J-Rock/Anime Opening系** | LIKE LIKE LIKE, Break Through, SUNO讃歌, SORA, 1000 Ears 1000 Eyes |
| **HYDE/L'Arc-en-Ciel系** | 灰色のHEART, Tesoro y Colmillo |
| **和ロック (shamisen/taiko)** | 呑め日本晴れ, 孤独は旧びたり, 混沌, 終日SUNO |
| **プログレ/instrumental** | Cloud OverDrive, Antidote ~We won't be falling forever~ |
| **Jazz-rock / rap-rock** | LIVEに行こうぜ, Break Through, 俺が作ったことにしたい |
| **Future Bass / Jersey Club / DnB** | Come on Let's Dance, Welcome to my world, Antidote ~The sky keeps opening~ |
| **デジタル/工業/エモ** | Don't Reset Me, Regeneration, 雨がきた |
| **シンプル/直球** | 低意識上等ロック, Dear Listeners, Hello My Dear |

→ **8系統に網羅的に分散**。1ジャンル特化型ではない。

---

## 2. プロンプト構造パターン

### 2-1. プロンプトの長さに極端な振れ幅
| 長さ | 曲 |
|---|---|
| 極小 (1-10語) | 低意識上等ロック (`female vocals, melodic, guitar, emo`) |
| 短文 (10-30語) | Hello My Dear, 雨がきた, SUNO讃歌, 1000 Ears (空) |
| 中文 (30-100語) | LIVEに行こうぜ, Antidote, Tesoro y Colmillo, Welcome to my world |
| 長文 (100-300語) | 創造せえよ, 灰色のHEART, Break Through, SORA, Regeneration, 呑め日本晴れ, 孤独は旧びたり, 混沌 |
| 巨大 (日本語) | Don't Reset Me (700+文字の漢字多め日本語) |

→ **書式統一は無い**。曲ごとに最適スタイルを試行する**実験者の特徴**。

### 2-2. 「他アーティストの手法を試す」習慣
NOTESに明記:
- `他人のプロンプトをパクる！！` (呑め日本晴れ)
- `歌詞中のメタタグの一部は、とある巨匠の真似です。メタタグ入れたり、プロンプトに音楽と関係ないワードを入れると、AIが本気出しやすくなるらしい` (創造せえよ)
- `skaliquid drum and bassというジャンルを初めて知ったその日に使ってみた` (終日SUNO)
- `プロンプト字数制限対策のために漢字多めの日本語でプロンプト作成` (Don't Reset Me)

→ 学習プロセスをNOTESに刻む**研究者的姿勢**。

### 2-3. en-dashネガ多用
複数曲で `‑shout, ‑scream, ‑growl` 系のネガを末尾に追加:
- 創造せえよ, 呑め日本晴れ, 混沌, Tesoro y Colmillo, 孤独は旧びたり, 終日SUNO, Don't Reset Me

→ Daraの大量ネガリストほどではないが、**シャウト/グロウル排除の固定パターン**を持つ。

### 2-4. シーン/場所の記述
AIに情景を想起させる手法:
- `Yokohama Minatomirai` (SORA)
- `Roppongi Hills at 1 am` (Come on Let's Dance)
- `shinjuku kabukicho in heavy rain` (雨がきた)
- `[year: 2050][date: February-31][location: Neo Shinagawa]` (創造せえよ)
- `midnight caffeine, broken mirror reflection, neon rain on asphalt` (Regeneration)

→ **kedaruge/CK的なシーン記述**を取り入れている。

### 2-5. 歌詞内メタタグの活用
歌詞中に音響・年代・複雑度などのメタ情報を埋め込む:
```
[year: 2050][date: February-31][location: Neo Shinagawa]
[loss-less audio][layered][wide dynamic range]
[melody complexity level: 1.1]
[rhythm complexity level: 1.5]
[chord complexity level: 1.7]
```
(創造せえよ末尾)

→ 「とある巨匠の真似」と明記されており、**他アーティストの研究結果を実装**している。

### 2-6. 多言語プロンプト
Don't Reset Me は**漢字多めの日本語プロンプト**で記述。文字数制限対策として実装。

```
技巧的プログレメタル×工業音楽×電子ロック融合, 複雑切分リフ, 低音化七弦級ギター...
```

### 2-7. ボーカル指定の精密化
複数曲で「kobushi turns / Rolled R consonants」など**和洋融合的な唱法指定**:
- `Female vocal: sharp, very sultry, decadent, exaggerated vibrato, frequent kobushi turns, Rolled R consonants` (混沌, 孤独は旧びたり, 終日SUNO, 呑め日本晴れ)

→ 同一フレーズを複数曲で**テンプレ流用**している。

---

## 3. 歌詞構造パターン

### 3-1. SUNOコミュニティへの自己言及テーマ
| 曲 | テーマ |
|---|---|
| 創造せえよ | AIに頼りすぎる自分への説教 |
| LIKE LIKE LIKE | 通知が来ない辛さ (SUNOユーザー共感) |
| 俺が作ったことにしたい | SUNOユーザーの本音 |
| 終日SUNO | SUNO中毒 |
| SUNO讃歌 | SUNOのCM曲狙い |
| 1000 Ears, 1000 Eyes | フォロワー500人達成曲 |
| Welcome to my world | 仕事とSUNOの日常 |
| Don't Reset Me (歌詞) | 既読放置の依存 |

→ **SUNOコミュニティ向けの自己言及的歌詞**が大きな比重 (8/25曲)。Yutoのオリジナル曲が当たる理由はここにある。

### 3-2. 「自己卑下 → 発奮」のアーク
- LIKE LIKE LIKE: 「通知なんて来やしない」 → 「音はここで光る」
- 創造せえよ: 「ゼロから作り方忘れた」 → 「もう一回 壁を壊せ」
- 雨がきた: 「もう限界の予告」 → 「鈍った心拍 逆に燃えていくよ」
- 1000 Ears, 1000 Eyes: 「比べては沈む夜」 → 「もう独りじゃない」
- Break Through: 「一番深いどんぞこ」 → 「ぶち破れ 貫いてやれ」

→ eclipse の「劣等感→自己肯定」と類似。**SNS時代の比較疲れ**を起点にする。

### 3-3. 仕事/生活への直球テーマ
- LIVEに行こうぜ (ライブ参加)
- Welcome to my world (仕事漬け)
- 終日SUNO (有給SUNO中毒)
- 呑め日本晴れ (社畜と祭り)
- 低意識上等ロック (堕落生活肯定)

→ **等身大の生活感**を歌詞にする。ランジェリーの社会批評/etc.とは違う、もっと**個人的な日常**。

### 3-4. 多言語コードスイッチの実験
Tesoro y Colmillo は5言語混合 (日本語+英語+スペイン語+ドイツ語+ロシア語):
```
ゆらり thin skin, dim light クヨクヨ deep inside
まだ cold まだ sore Ich atme 青い棘
言えない no lo sé
ほどけない この fever но я жива 花の影
```

→ **HYDE × Co Shu Nieのコラボ曲にInspire** されたとNOTESにあり、**他アーティストの実験を吸収**している。

### 3-5. 「もう一回」「ゼロから」の反復モチーフ
複数曲で同じ語彙が登場:
- 「もう一回 もう一回 もう一回」(Regeneration)
- 「ゼロから もう一度」(創造せえよ)
- 「再生 再生 再生」(LIKE LIKE LIKE)
- 「まだ行けるだろ」(呑め日本晴れ)
- 「まだやれるだろ まだ鳴らせるだろ」(Welcome to my world)

→ **粘り強い再生/再起**がアーティスト固有のモチーフ。

### 3-6. 構造マーカーは半角[Section]統一
ほぼ全曲が `[Verse 1] [Chorus] [Bridge]` の半角英語マーカー。【】はほぼ未使用。

### 3-7. 影響元アーティストへの言及
NOTESに明記:
- DAITA / SIAM SHADE (Cloud OverDrive)
- HYDE / L'Arc-en-Ciel (灰色のHEART, Tesoro y Colmillo)
- UVERworld (Break Through, SORA)
- HYDE × Co Shu Nie (Tesoro y Colmillo)
- メガテラゼロ (Dear Listeners)

→ J-Rock黄金期 (90-2000年代) のアーティストを参照する**懐古傾向**。

---

## 4. ジャンル分布

| ジャンル軸 | 曲数 | 代表曲 |
|---|---|---|
| Modern J-Rock / Alt Rock | 8 | LIKE LIKE LIKE, SUNO讃歌, Break Through, SORA, 1000 Ears, Dear Listeners, Hello My Dear, Cloud OverDrive |
| 和ロック (Wa-Rock) | 4 | 呑め日本晴れ, 孤独は旧びたり, 混沌, 終日SUNO |
| Rap-Rock / Crossover | 3 | 創造せえよ, Break Through, Antidote |
| Future Bass / Jersey Club / DnB | 3 | Come on Let's Dance, Welcome to my world, 終日SUNO |
| Instrumental Progressive | 2 | Cloud OverDrive, Antidote ~We won't be falling forever~ |
| Industrial / Electronic | 2 | Don't Reset Me, Regeneration |
| HYDE系 | 2 | 灰色のHEART, Tesoro y Colmillo |
| Punk / Indie / Emo | 2 | 低意識上等ロック, 雨がきた |

→ **ロック中心の網羅型**。Meikai Soulに似るが、Yutoはより**現代的/電子的**な要素も多い。

---

## 5. テンポ/キー/ボーカル

### BPM
明示は半数程度:
- 132 (Welcome to my world)
- 135 (Cloud OverDrive)
- 140 (Antidote ~We won't be falling forever~)
- 148 (SORA)
- 150 (LIKE LIKE LIKE, SUNO讃歌, Dear Listeners)
- 180 (灰色のHEART)

→ **148-150 BPM が主軸**。Anime Opening系の標準テンポ。

### Key
明示はSORA (D flat major) のみ。

### ボーカル
| 種別 | 曲数 |
|---|---|
| 男性Vo | 13 |
| 女性Vo | 9 |
| Twin/Duet | 3 |

→ **男性Vo中心**だが、女性Vo/Duetも積極的に試している。

---

## 6. NOTES欄の自己評価
全25曲中ほぼ全曲でNOTESに自己評価/制作裏話を残す:

- `オリジナル曲でなんだかんだ一番人気` (創造せえよ)
- `再生数はダントツ一位。ラルク人気のおかげ` (灰色のHEART)
- `SUNOユーザーの共感を得られた様子` (LIKE LIKE LIKE)
- `サビのメロディは奇蹟` (Regeneration)
- `ギターの音色が一番良いかも知れない` (Dear Listeners)
- `Hooksで出したらダントツ一位` (Come on Let's Dance)

→ **再生数/反応**を意識的に記録するマーケティング志向。Meikai Soul/dvupと類似。
