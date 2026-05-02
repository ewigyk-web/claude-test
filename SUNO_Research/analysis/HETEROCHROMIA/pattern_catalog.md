# パターンカタログ — HETEROCHROMIA

対象: `artists/HETEROCHROMIA/` 配下 7曲。★付きなし。

楽曲リスト:
- Hollow (Dark Japanese alt rock × Visual-Kei, 95-105 BPM)
- Pale maiden to death (Dark experimental metal × post-metal × industrial)
- 人格操作⭐︎洗脳催眠試験薬 (Dark minimal piano × experimental alt rock)
- 少女地獄 (Rock × eerie synth × distorted)
- ア・イ・シ・テ・ル (Psychedelic Kayō × Neo Romantic, BPM 140)
- Monster (Experimental alt rock × art-pop × math-rock)
- 帝国の朝 (Japanese minor key restrained, 戦争/死)

---

## 1. プロンプト構造パターン

### 1-1. 「全曲共通の固定ネガリスト」
HETEROCHROMIAの最大シグネチャ。**全7曲のプロンプト末尾に同一の排除指示**が貼り付けられる。

```
‑300Hz-500Hz mud, ‑boxiness, ‑phase cancellation, ‑monophonic sub,
‑frequency masking, ‑vocal gasps, ‑humming, ‑artifacts, ‑hiss, ‑noise
```

→ Daraと違い、**ジャンル排除ではなく音響処理の不備排除**。「mud / boxiness / phase cancellation / artifacts」など**ミキシング・マスタリング用語**でAIにクリーンな仕上がりを要求する。

→ 7曲全てに使い回されている → **テンプレ化された自分用の固定排除リスト**。

### 1-2. ラベル+ブロック型のプロンプト構造
4-5要素を独立したラベルで分割:

例 (Hollow):
```
[Structure]
Intro:clean guitar with delay/reverb, soft ambient fade-in
Verse:intimate female vocal, whispery and restrained
Pre-chorus:tension builds, light drums, breathy unstable tone
Chorus:emotional peak, widened distorted guitars, melodic but aching
...

[Vocals]
Female vocal, clear and delicate, airy and unstable

[Sound]
Guitar-centered with deep reverb/delay

[Mix]
Wide stereo, soft compression, dynamic, slightly raw
```

→ Daraの`genre/instrumentation/production/mood`型と類似だが、HETEROCHROMIAは**[Structure]に進行を、[Vocals]/[Sound]/[Mix]に各論を**書く独自配置。

### 1-3. 進行のセクション別ブロック記述
[Intro → Verse → Pre-chorus → Chorus → Bridge → Final chorus → Outro] の各段階で**1行ずつ音響を変化させる**。

Meikai Soulより細かく、Pre-metal/post-metal的な構造設計。

例 (Pale maiden to death):
```
Intro—ambient drone
Verse—whisper + minimal clean
Build—noise, unstable layering
Climax—extreme metal, scream dominance
Void—near silence, breath, residual noise
Final—collapsing repetition into static
```

→ 「Build → Climax → Void → Final」のような**実験的進行語彙**を使う。

### 1-4. 「Whisper → Scream」のボーカル多層指定
すべての楽曲で**ボーカルレイヤー**を細かく指定。

| 指定 | 出典 |
|---|---|
| `whisper→controlled cry` | Hollow |
| `Whisper—close, breathy / Clean—fragile / Scream—distorted` (3層) | Pale maiden to death |
| `Whispered female vocal, intimate and fragile / Whisper to emotional belting transition` | 人格操作 |
| `female vocal whispers and screams` | 少女地獄 |
| `Soft whispery low register→sudden soaring high notes→delicate falsetto→emotional belt` | Monster |

→ **囁き ↔ 絶叫**の対比、複数音域の精密指定が一貫。

### 1-5. 「美しさ × 不安定」の同居指定
- `slight pitch instability allowed` (人格操作)
- `airy and unstable` (Hollow)
- `Elastic phrasing, slightly behind or ahead of the beat` (Monster)
- `subtle vibrato` (Hollow)

→ 完璧な美声でなく、**揺らぎを残した美しさ**を志向。

### 1-6. 「Almost like praying, not singing」の祈り志向
人格操作で明示される独自指示:
```
Almost like praying, not singing
```

→ 歌唱ではなく**祈り/呟き**として捉える指示。

### 1-7. ジャンルが実験的・文学的
他アーティストと比較しても**実験/前衛**寄り:
- Dark experimental metal × post-metal × industrial (Pale maiden)
- Dark minimal piano × experimental alt rock (人格操作)
- Experimental alt rock × art-pop × math-rock (Monster)
- Psychedelic Kayō × Neo Romantic (ア・イ・シ・テ・ル)

→ 「歌謡曲」を実験音楽で再解釈する独自路線。

### 1-8. 楽器の重みづけ
ピアノ・ヴァイオリン・クリーンギター中心。ヘヴィメタル的ギターは限定的。

頻出楽器:
- piano (sparse chords / felt piano / 棚撃 percussive)
- clean guitar with delay/reverb
- low strings / violin
- minimal drums / heartbeat-like pulse

→ kedaruge的な**繊細楽器**志向だが、Daraやkedarugeほど大規模ではなく**ミニマル**。

### 1-9. 「Drum-driven」「Keep it concise」など端的指示の混入
Daraの`[QUALITY: MAX]`に近い、AIへの指示語が混じる:
- `Keep it concise and finish within 3 minutes` (少女地獄)
- `Do not become pop, Avoid catchy hooks` (人格操作)

→ AIに対する**メタ指示**を素直にプロンプトに書く。

### 1-10. ジャンル外語彙の追加 (anime/romantic等)
プロンプト末尾に脈絡なく追加されるタグ:
- `romantic, mellow, anime` (Pale maiden)
- `anime's song, anime` (帝国の朝)
- `4/4 Kick, Disco, mellow` (ア・イ・シ・テ・ル — 突発的なDisco)

→ Sunoの解釈を**広げるための無造作タグ**。意図的な実験。

---

## 2. 歌詞構造パターン

### 2-1. 文学的・耽美的テーマの徹底
全7曲に共通する世界観:

| テーマ | 曲 |
|---|---|
| 死/儚さ/消失 | 帝国の朝, 雪泥(類似), Hollow |
| 自我崩壊/狂気 | 人格操作, Pale maiden to death |
| 人/化物の境界 | Monster, 少女地獄 |
| 壊れた愛 | ア・イ・シ・テ・ル |
| 儚い少女像 | Hollow, Pale maiden, 人格操作 |

→ 太宰治・夢野久作的世界観 (NOTES自己評価で明示)。

### 2-2. 「美しさ × 死」の対比モチーフ
- `美しいものだけが / 最後は星に残ればいい` (Hollow)
- `美しい私のままで / 愛と死を` (Pale maiden)
- `お花畑で会いましょう / 試験薬は嗤う` (人格操作)
- `生きている限り人は / 何か望んでしまうだろうか` (帝国の朝)

→ **「美」と「死」を等価にする**頽廃的詩学。

### 2-3. リフレインの「壊れ方」の3パターン

| 種類 | 例 |
|---|---|
| 否定の三連 | `違う！違う！違う！ / 嫌だ！嫌だ！嫌だ！` (少女地獄) |
| 欲望の連射 | `欲しがって…欲しがって…欲しがって… / 生かされて…` (Pale maiden) |
| 「だけどもう…多分…きっと…」未完結 | Pale maiden の繰り返し |

→ **言葉が壊れていく/未完結のまま消える**手法を多用。

### 2-4. 古い歌謡曲メロディ × 現代ロック
NOTESで自己分析:
- 「少し古い歌謡曲風のメロディ。それをロックにしている。」(Hollow)
- 「メロディ自体は古い歌謡曲っぽいんだけど、それを補うくらいの伴奏と、そして美しい声」(少女地獄, ア・イ・シ・テ・ル)

→ **昭和歌謡 × 実験ロック**のハイブリッドが一貫した手法。

### 2-5. 自己崩壊/二重の自我
- `壊れはじめているのは / 世界だろうか　私だろうか` (人格操作)
- `愛すだろうか　殺すだろうか` (人格操作)
- `自分自身　壊れても / 自分自身　治せない` (少女地獄)
- `人間に成りたくて / 生きている / 人間に成れなくて / 生きている` (Monster)

→ **二項対立の問い**を「Aだろうか／Bだろうか」の形式で繰り返す。

### 2-6. 「ア・イ・シ・テ・ル」式の言葉解体
タイトル自体に中黒を挟み、**意味の解体**を視覚化。

```
ア•イ•シ•テ•ルは壊れてる
```

→ 言葉の意味を「壊す」テーマ自体を文字組で表現。

### 2-7. 鏡像/視線/異色のモチーフ (アーティスト名と連動)
HETEROCHROMIA = 虹彩異色症 (左右の目の色が違う)。歌詞に**鏡/異色/分裂した自我**が頻出:

- `鏡に映る目が / 左右で違って見えた / それだけが / まだ…私の証明` (人格操作)
- `見透かされる心 / 笑顔の仮面　ひび割れる` (Monster)
- `鏡に映った 不恰好な体` (Monster, ※他アーティストでも類似)

→ **アーティスト名のテーマ的具現化** (=異色の目で見る歪んだ世界)。

### 2-8. 文体の「…」「・」装飾
歌詞中に三点リーダや中黒を頻繁に使用。**沈黙/未完結/解体**を視覚的に表現。

- `多分…きっと…` (Pale maiden)
- `欲しがって…欲しがって…` (Pale maiden)
- `そればかり…` (少女地獄)
- `酒をくれ…薬をくれ…もう手遅れ…` (Monster)
- `ア•イ•シ•テ•ル` (ア・イ・シ・テ・ル)

→ 句読点と記号で**詩のリズム**を作る。

### 2-9. 構造マーカーは控えめ/省略
[Verse 1] [Chorus] のような明示マーカーが少ない。**自由律詩的**な配置。

→ 楽曲構造をAIに委ね、歌詞は文学作品として独立させる。

### 2-10. 「逃げ場のない閉鎖空間」の舞台装置
- 病院 (人格操作 — 「白い壁」「透明な管」「試験薬」)
- 戦地 (帝国の朝 — 「明日、飛ぶ」)
- 舞台 (Monster — 「道化の華を演じてる」)
- 異界 (Hollow — 「望んだ世界に人などいない」)

→ 各曲が**閉ざされた場所**を舞台にする。

---

## 3. ジャンル分布

| ジャンル軸 | 曲数 | 代表曲 |
|---|---|---|
| Dark Alt Rock / Visual-Kei | 3 | Hollow, 少女地獄, Monster |
| Experimental Metal / Post-Metal | 1 | Pale maiden to death |
| Minimal Piano / Ambient | 1 | 人格操作 |
| Psychedelic Kayō (歌謡) / Neo Romantic | 1 | ア・イ・シ・テ・ル |
| Restrained Cinematic | 1 | 帝国の朝 |
| Math Rock / Art Pop | 1 | Monster |

→ 中核は **Dark Alt Rock × Experimental × 歌謡再解釈**。

---

## 4. テンポ/キー/ボーカル

### BPM
- Hollow: 95-105
- ア・イ・シ・テ・ル: 140
- その他: 未指定 or 相対表現 (`Slow tempo`, `Unstable tempo`)

### Key
- 全曲 Minor (`minor key foundation`)

### ボーカル
**全曲 女性ボーカル**。共通指定:
- `fragile, intimate, breathy`
- `airy and unstable`
- `whisper to scream / cry / belt`
- `subtle vibrato, slight pitch instability allowed`
- `Almost like praying, not singing`
