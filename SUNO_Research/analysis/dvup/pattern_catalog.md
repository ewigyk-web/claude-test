# パターンカタログ — dvup

対象: `artists/dvup/` 配下 9曲。★付きなし。

楽曲リスト:
- Through the fire (X JAPAN風シンフォニックメタル, 英語)
- Black Nova (BABY METAL風女性Vo × Symphonic, 210/150 BPM, 英語)
- ギルティ (黒夢風V系オルタナ, 160-190 BPM, 日本語)
- 緋ト蒼 (Progressive Death Metal, 御本人ボイス, 日英)
- Eternel (X JAPAN風メロディックスピードパワーメタル, 185-200 BPM, 英語)
- Metal Tiger (Cute Loli Pop × Heavy Chaotic Alt Metal, 英語)
- クローリー (90年代V系ロックの金字塔風, 男性Vo, 日英)
- SUNSCREEN FAILURE (中東風メロディハードロック, 130-150 BPM, 英語)
- 枯樹、華ヲ生ズ (V系金字塔風 mid-slow, 85-95 BPM, 日英)

---

## 1. プロンプト構造パターン

### 1-1. NOTES欄の「○○風味」評価が最大シグネチャ
**9曲中ほぼ全曲**で「○○風味」というアーティスト参照評がNOTESに記載される。

| 曲 | NOTES記述 |
|---|---|
| Through the fire | `X JAPAN風味のシンフォニックメタル。` |
| Black Nova | `BABY METAL風味の女性ボーカル×シンフォニックメタル。` |
| ギルティ | `黒夢風味のボーカル×少し古めのロック` |
| 緋ト蒼 | `御本人ボイス。元ボーカルだからクソ上手い。` |
| Eternel | `X JAPAN風味のシンフォニックメタル。` |
| Metal Tiger | `可愛い声だけどヘビーな曲` |
| クローリー | `超名曲。90年代V系ロックの金字塔と言われても信じるくらい。` |
| SUNSCREEN FAILURE | `中東風味のメロディのハードロックというのが変わっている。そして名曲。REMIX済。` |
| 枯樹、華ヲ生ズ | `超名曲。90年代V系ロックの金字塔と言われても信じるくらい。` |

→ Daraが**米津玄師1人**を目標にするのに対し、dvupは**複数の参照アーティスト**を使い分ける。X JAPAN / BABY METAL / 黒夢 / V系金字塔。

### 1-2. 「御本人ボイス」の存在
緋ト蒼に明示:
```
御本人ボイス。元ボーカルだからクソ上手い。
```

→ アーティスト自身が**元バンドボーカル**であることが明示される。9曲中1曲だけが御本人で、他8曲はAI模倣。

### 1-3. 「ライブ感タグ + ジャンル本体」の2段プロンプト
複数曲で採用される独自構造:

```
[1段目: ライブ感タグ]
live performance, concert atmosphere, crowd noise, audience cheering,
call and response, raw sound, room reverb, energetic stage presence, less polished mix,

[空行]

[2段目: ジャンル本体]
symphonic melodic power metal, japanese showa kayou, fast tempo, female vocal,
neoclassical metal, dramatic orchestration, emotional strings, epic choir,
double bass drums, melodic guitar solo, lyrical melody
```

→ ライブ感を**最初に確立**してから、ジャンル詳細を書き加える。Through the fire / Metal Tiger で採用。

### 1-4. メタルサブジャンルの過剰列挙
1曲に**5〜10のメタル系統サブジャンル**を並べる。Meikai Soulに似るが、dvupは**メタル系統に限定**。

例 (Black Nova):
```
math core, chaotic hardcore, thrash metal, metallic hardcore, death thrash,
blast beats, double kick drums, dissonant riffs, fast tempo, melodic chorus,
aggressive screams, high energy, emotional intensity
```

例 (緋ト蒼):
```
progressive death metal, avant-garde metal, atmospheric metal, technical death metal,
dissonant riffs, complex time signatures, male death vocals, existential horror,
dark ambient interludes, cinematic intensity, surreal atmosphere
```

→ メタル系統の**コレクター的網羅**。

### 1-5. BPM指定は範囲表記が多い
| 曲 | BPM |
|---|---|
| Black Nova | 210 (150 melodic) |
| ギルティ | 160-190 |
| Eternel | 185-200 |
| SUNSCREEN FAILURE | 130-150 |
| 枯樹、華ヲ生ズ | 85-95 |
| クローリー | slow to mid-tempo (相対) |
| その他 | 未指定 |

→ 単一値でなく**範囲**で指定するスタイル。

### 1-6. ボーカルの多様性 (4タイプ)

| タイプ | 曲 |
|---|---|
| 男性デスボイス | 緋ト蒼 |
| 男性クリーン高音 + falsetto | クローリー、枯樹華ヲ生ズ、SUNSCREEN FAILURE |
| 女性高音 + sustained | Through the fire, Eternel |
| 女性 sweet → aggressive scream | Black Nova, Metal Tiger |

→ メタル特化のなかで4タイプを使い分け。

### 1-7. 楽器指定の精密さ
- `melodic twin lead guitars with less neo-classical shredding, more emotional phrasing` (Eternel)
- `down-tuned riffs, palm-muted chugs, crushing breakdowns` (Metal Tiger)
- `dissonant riffs, complex time signatures` (緋ト蒼)
- `fuzzy overdriven guitars playing simple but biting riffs, occasional octave riffs` (ギルティ)

→ メタル系統に詳しい者の**プレイヤー視点指定**。

### 1-8. 「No XXX」型のネガはほぼ無し
他アーティストと違い、**en-dash**型ネガリストは無い。
唯一あるのは: `No neoclassical elements` (Metal Tiger), `no scream, no growl, no harsh vocal` (クローリー)

→ ジャンル排除より**ジャンル列挙で方向性を出す**。

### 1-9. 「Cinematic」「Theatrical」志向
- `dramatic orchestration, emotional strings, epic choir, anthemic and cinematic climax` (Eternel)
- `cinematic intensity, surreal atmosphere` (緋ト蒼)
- `solemn and theatrical production` (クローリー)
- `cinematic sound design, rich reverb, powerful and immersive` (枯樹華ヲ生ズ)

→ **オーケストラ的劇場感**を目指す。

### 1-10. 言語: 英語比率が高い
9曲中6曲が完全英語または英語中心:
- Through the fire / Black Nova / Metal Tiger / Eternel / SUNSCREEN FAILURE = 完全英語
- 緋ト蒼 / クローリー / 枯樹華ヲ生ズ = 日英混合
- ギルティ = 日本語のみ

→ **英語メタルが主軸**。日本語は黒夢系/V系の時のみ。

---

## 2. 歌詞構造パターン

### 2-1. 「闇 → 再生」のメタル王道アーク
- Through the fire: 「Run with me through endless pain / Through the thunder and the rain」
- Eternel: 「From the ashes I ascend / This is not the end」
- 緋ト蒼: 「絶望に沈み」 → 「それでも生きている」
- 枯樹、華ヲ生ズ: 「枯れていく…静かに…」 → 「美しいまま 壊れていく」

→ **「炎を越える / 灰から立ち上がる」**メタル必須テーマ。

### 2-2. メタル王道語彙バンク

頻出語彙:
- Fire / Flame / Burning / Crimson / Scarlet
- Storm / Thunder / Rain / Ashes
- Wings / Fly / Soar / Rise / Ascend
- Eternity / Forever / Endless / Beyond
- Soul / Heart / Spirit / Faith
- Sacred / Divine / Holy / Curse / Cursed

→ 英語メタル的な**叙事詩語彙**を多用。

### 2-3. 反復フックの徹底
サビでキーフレーズ/タイトルを徹底反復:
- `Run with me through endless pain` × 4 (Through the fire)
- `Nova, nova` × 12 (Black Nova)
- `Éternel —` × 6 (Eternel)
- `Na-na-na, ...` × 4 (Metal Tiger)
- `Look at me, I'm almost god` × 3 (SUNSCREEN FAILURE)

→ Meikai Soul/Daraと同じく**90年代スタジアムロック式の反復**。

### 2-4. V系日本語の漢字熟語
ギルティ、緋ト蒼、クローリー、枯樹華ヲ生ズで90年代V系的な漢字使い:
- `飼い主 / 死神 / 淫乱 / 支配 / 交配 / 支離滅裂` (ギルティ)
- `紅い花 / 蒼白い大地 / 十字架 / 虚無 / 空白` (緋ト蒼)
- `咲けない花 / 枯れた華 / 朽ちていく / 偽物` (枯樹)

→ **黒夢/Dir en grey 的な耽美漢字**。

### 2-5. 童話的ホラー (Metal Tiger)
ロリポップ + メタルの異種混合:
```
Hush now！Hush now！Hush now！
Tiny stars on painted walls
Clockwork shadows down the hall
Soft paws tap the metal floor
Don't look back—he's at the door
```

→ **Twinkle Twinkle 的子守唄構文**でホラーを書く独自手法。

### 2-6. ブラックユーモア (SUNSCREEN FAILURE)
イカロス神話を現代SNSのブラックジョークで再構築:
```
Look at me, I'm almost god
Borrowed wings, discount fraud
Selfie pose, halo bent
Burnt feathers, confidence
```

→ **メタル × 自虐コメディ**。Meikai SoulのNo Coffee的な異色作。

### 2-7. 構造マーカー: ほぼ無し
[Verse 1] [Chorus] のような明示マーカーが付く曲は少ない。**自由配置**が多い。

### 2-8. 日英コードスイッチの2パターン
- 完全英語フル + 完全日本語フル (Through the fire は英のみ、緋ト蒼は日英ブロック交互)
- 行内コードスイッチ (枯樹華ヲ生ズ: `I trace the scars beneath your skin / 咲けない花の名前を呼んだ`)

### 2-9. 「○○ to ○○」の対句タイトル
- 緋ト蒼 = 緋色 と 蒼色 の対比
- 枯樹、華ヲ生ズ = 枯れた木 と 咲く華 の対比

→ メタル/V系的な**色彩 × 生死**の対句。

### 2-10. NOTES欄の「超名曲」自賛
Meikai Soulと類似:
- 「超名曲」(緋ト蒼、クローリー、枯樹華ヲ生ズ)
- 「名曲」(SUNSCREEN FAILURE)
- 「クソ上手い」(緋ト蒼)

→ 自作評価を素直に残す習慣。

---

## 3. ジャンル分布

| ジャンル軸 | 曲数 | 代表曲 |
|---|---|---|
| Symphonic / Power Metal | 3 | Through the fire, Black Nova, Eternel |
| V系 / 黒夢 / 90年代V系 | 3 | ギルティ, クローリー, 枯樹華ヲ生ズ |
| Death / Progressive Metal | 1 | 緋ト蒼 |
| Math Core / Chaotic Hardcore | 1 | Black Nova |
| Cute Loli Pop × Metal | 1 | Metal Tiger |
| Middle Eastern × Hard Rock | 1 | SUNSCREEN FAILURE |

→ **すべてメタル/V系系統**。kedaruge/eclipseのようなacoustic/ambient系は皆無。

---

## 4. テンポ/キー/その他

### BPM
範囲指定多用:
- 高速: 185-210
- 中速: 130-190
- 低速: 85-95

### Key
明示は無いがプロンプトから**Minor推定**が多い (`minor key focus` クローリーで明示)。

### ボーカル性別
- 男性: 5曲
- 女性: 4曲

→ メタル特化のなかでバランス。

### 楽器シグネチャ
- Down-tuned distorted guitars
- Twin lead guitars
- Double bass drums / Blast beats
- Orchestral strings + Choir
- Atmospheric clean guitars (ballad系)
