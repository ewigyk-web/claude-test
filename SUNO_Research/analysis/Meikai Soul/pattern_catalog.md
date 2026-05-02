# パターンカタログ — Meikai Soul

対象: `artists/Meikai Soul/` 配下 11曲。★付きなし。

楽曲リスト:
- 夜を越えた光 (Enka × J-metal × thrash × speed × indie folk)
- New City (J-rock × grunge × post-punk)
- About to Make Noise (Raw punk, 英語)
- No Coffee (Neurofunk DnB × Rock-pop × City pop)
- I just want to know (J-rock × post-hardcore × garage punk, twin vocals)
- 糸の影 (Denpa × Triple Shamisen × Taiko)
- Into the dark (Dark hard rock / J-rock / metal, BPM 155)
- Little Sparks (Britpop × Alt Rock, BPM 140, 英日混合)
- 風の道 (Krautrock × Shamisen × Koto × J-rock)
- Don't wake me up (1990s Britpop, 英語)
- 最後の叫び (Taiko × Shamisen × Heavy Metal × Industrial Gothic)

---

## 1. プロンプト構造パターン

### 1-1. 「過剰ジャンルクロス」型
1曲に**5〜7ジャンル**を並列指定する。Meikai Soulの最大シグネチャ。

| 曲 | クロス組成 |
|---|---|
| 夜を越えた光 | Enka × Progressive J-metal × Indie Folk Rock × Thrash Metal × Speed Metal |
| New City | Punchy fuzz bass × J-rock × Grunge × Post-Punk |
| No Coffee | Neurofunk DnB × Rock-pop × Southern Guitar × City-pop synth × Post-rock |
| I just want to know | J-rock × Post-hardcore × Garage Punk × Modern Japanese Rock × Slightly Emo |
| 糸の影 | Denpa × Triple Shamisen × Taiko × Shakuhachi (No guitars/synths) |
| 風の道 | Krautrock × Alt Pop × J-rock × Hard Rock × Shamisen × Koto |
| 最後の叫び | Heavy Metal × Hard Rock × Blues Rock × Psychedelic Funk × Industrial Gothic × Crust Punk × Denpa × 和楽器 |

→ 他のアーティスト (TenJR=単軸、CK=2-3軸) と比較しても、**異常な数のジャンル並列**。

### 1-2. シネマ的アレンジ進行記述
[Verse → Pre-Chorus → Chorus → Bridge → Final Chorus] の各段階で**音響をどう変えるか**を文章で指定する。

例 (夜を越えた光):
```
Verses crawl with fragile, near-broken female lead and distant young scream echoes,
Pre-chorus builds with low chants, tom pulses, rising urgency,
Chorus explodes into fast thrash/speed intensity with double-kick drums,
chaotic riffs, and soaring emotional vocals,
Bridge drops to steel guitar drones and cracked voice,
rebuilding into an explosive final chorus
```

→ kedarugeも進行記述するが、Meikai Soulはより**演奏ニュアンス (crawl, explodes, rebuilding)** が多い。

### 1-3. 和楽器の積極投入
全11曲中、和楽器が登場するのは **5曲** (糸の影、風の道、最後の叫び、+ 2曲の言及)。

頻出楽器:
- shamisen (三味線) — 主役級として使用
- taiko (太鼓) — 打楽器の柱
- shakuhachi (尺八) — 装飾旋律
- koto (琴) — Krautrockに混在

特徴的記述:
- `three shamisen playing simultaneously in contrasting rhythms` (糸の影)
- `pure controlled chaos, No guitars, no synths` (糸の影)
- `screaming gritty female vocals blended with Japanese chants` (最後の叫び)

→ 「**和×ロック**」を繰り返し試みるアーティスト。

### 1-4. BPM明示は部分的
| 曲 | BPM |
|---|---|
| Into the dark | 155 |
| Little Sparks | 140 |
| その他 | 未指定 (相対表現: `mid-to-fast`, `fast and erratic` 等) |

→ 11曲中2曲のみ数値指定。残りはテンポ感を形容詞で書く。

### 1-5. ボーカル指示の多様性
1アーティストでこれほど多様なボーカル指定を持つのは稀。

| ボーカル指示 | 曲 |
|---|---|
| Fragile, near-broken female + young scream echoes | 夜を越えた光 |
| Raw, raspy male, apathy ↔ anger | New City |
| Gritty shouted male | About to Make Noise |
| Fast vocal flows + deadpan ↔ gang shouts | No Coffee |
| Twin vocals: gritty male verse / soaring female chorus | I just want to know |
| Female with denpa-style melody, sudden pitch jumps, kawaii ↔ unhinged | 糸の影 |
| Gritty male, raspy with fear edge | Into the dark |
| Raspy emotive female | Little Sparks |
| Close-mic female + breathy bridge | 風の道 |
| Energetic emotional male, slight nasal tone | Don't wake me up |
| Screaming gritty female + Japanese chants | 最後の叫び |

→ **男性 / 女性 / Twin / 英日 / Denpa / 演歌**まで、楽曲ごとに完全別人格。

### 1-6. ネガティブプロンプトは曲ごとに使い分け
- `No guitars, no synths, pure controlled chaos` (糸の影 — 和楽器のみで完成)
- `no synth, no modern pop` (Don't wake me up — ヴィンテージ徹底)
- `No アグレッシブ要素` 系の使用は無し

→ ネガプロは**装置の限定**目的が中心。

### 1-7. アナログ/ヴィンテージ語彙
- `analog recording, vintage tone` (Don't wake me up)
- `raw yet polished analog warmth with subtle tube amp overdrive` (Little Sparks)
- `noisy analog synths` (最後の叫び)

→ デジタル先鋭さよりも**バンドサウンドの真空管的温度感**を志向。

### 1-8. 英語 + 日本語のプロンプト混在は無し
プロンプトはほぼ英語。kedaruge同様の専門用語型だが、より**プレイヤー視点 (riff / palm-muted / double-kick)** の表現。

---

## 2. 歌詞構造パターン

### 2-1. 王道ロック歌詞テーマ
歌詞のキーワードが**伝統的ロックの語彙**で固定される。

頻出語彙:
- 夜 / 闇 / 光 / 朝
- 叫び / 声 / 鼓動
- 諦めない / 越える / 立ち上がる
- 痛み / 傷 / 涙
- 自由 / 真実 / 秘密
- 道 / 歩く / 走る

→ 12,000曲時代の現代K-Rockや90年代J-Rockの語彙ど真ん中。難解さは無く、**直球のエモーション**。

### 2-2. 「夜 → 光」の構造
半数以上の曲が「**夜の苦難 → 朝の光**」という王道アーク。

- 夜を越えた光: 「夜を越えた光が今 / この胸を 照らしてる」
- 風の道: 「自由は ここにある / 息を吸えば / 生きてる意味が / 胸で鳴る」
- New City: 「終わりじゃない / ただ 間違った始まり / それでも… / それでいい」

→ 困難 → 越境 → 救済 の三段構造。

### 2-3. 構成マーカーの混在
- 半角 [Verse 1] [Chorus] (英語) — 6曲
- 全角 【Verse 1】【Chorus】(日本語) — 3曲 (New City, I just want to know)
- 両方併用 — 1曲

→ 楽曲ごとに**マーカー記法を切り替える**柔軟性。

### 2-4. 英日コードスイッチの3パターン

| パターン | 例 |
|---|---|
| 英タイトル + 日本語サビ | Step into the dark, 闇を追いかけ (Into the dark) |
| 英フック + 日本語Verse | Little sparks, they bleed through / 果てしない青の中で (Little Sparks) |
| 完全英語 | Walls are thin, the sound is loud (About to Make Noise) |
| 完全日本語 | 風よ 連れていけ (風の道) |

→ 楽曲ごとに**言語比率を完全制御**。

### 2-5. コミカル路線も持つ (No Coffee)
真面目な王道ロックばかりではない。**自虐ユーモア**を爆発させる曲も。

- `マイコーヒー　フィニッシュ！ (フィニッシュ！)`
- `[Final Line – 爆発] 夢だったあああああ！！！！！`
- `自販機前で　悟り開き / ボタン全部　押しても反応ない`

→ 1アーティストの中でシリアス↔コメディの**振れ幅が大きい**。

### 2-6. 反復フックの強度
サビでタイトル/キーフレーズを2-4回反復し、徹底的に脳に刻む。

- `Step into the dark` × 4 + `Step into the dark… 'Til the end`
- `Don't wake me up / Don't wake me up / Don't wake me up`
- `It's the same dream every night` × 3
- `マイコーヒー フィニッシュ！` × 6

→ 90年代スタジアムロック式の反復強度。

### 2-7. Bridgeでの「視点反転」
Bridgeで歌詞のトーンを反転させ、ラスサビの解放を強調する。

例 (Don't wake me up):
```
[Bridge]
If you're not real
Then why does it hurt?
If you're not mine
Then why does it work?
```
→ 「ない」の反復で疑念を強化、ラスサビで肯定へ転換。

### 2-8. 設問形式 (ランジェリーと共通)
- `何が君を 幸せにする？` (I just want to know)
- `If you're not real / Then why does it hurt?` (Don't wake me up)
- `これが生きることなら / 痛くても ここにいたい` (New City)

→ 問いを軸にした構造を採用するが、ランジェリーほど多用はしない。

### 2-9. NOTES欄に**曲評**を必ず書く
他アーティストはNOTESを空欄にすることが多いが、Meikai Soulは:

- `このひとの本気のギターは天才的！` (夜を越えた光)
- `三味線もすげえ` (糸の影)
- `三味線もギターもすげぇ` (風の道)
- `サビのメロディがすごい良い！` (Don't wake me up)
- `まさに理想的な和ロック。` (最後の叫び)

→ アーティストが**自作を率直に評価する記録**として活用。

---

## 3. ジャンル分布

| ジャンル軸 | 曲数 | 代表曲 |
|---|---|---|
| J-rock / Hard Rock / Metal | 5 | 夜を越えた光、New City、I just want to know、Into the dark、最後の叫び |
| 和楽器系 (Shamisen/Taiko/Koto/Shakuhachi) | 4-5 | 糸の影、風の道、最後の叫び、夜を越えた光(部分) |
| Punk / Hardcore | 2 | About to Make Noise、(I just want to know要素) |
| Britpop / Alt Rock | 2 | Little Sparks、Don't wake me up |
| Drum and Bass / Neurofunk | 1 | No Coffee |
| Krautrock / Motorik | 1 | 風の道 |
| Industrial / Gothic | 1 | 最後の叫び |
| Denpa | 2 | 糸の影、最後の叫び |

→ 中核は **J-Rock × Metal × 和楽器**。Britpopとパンクが副軸。

---

## 4. テンポ/キー/その他

### BPM
| 曲 | BPM |
|---|---|
| Into the dark | 155 |
| Little Sparks | 140 |
| その他 | 未指定 (mid-to-fast / fast and erratic / midtempo accelerating) |

### Key
全曲未指定。

### ボーカル性別
- 男性中心: 5曲
- 女性中心: 4曲
- Twin (男女): 2曲 (I just want to know、夜を越えた光部分)

→ ジャンルが多様な分、ボーカル性別もバランス。
