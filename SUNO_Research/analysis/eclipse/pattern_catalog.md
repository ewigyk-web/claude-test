# パターンカタログ — eclipse

対象: `artists/eclipse/` 配下 8曲。★付きなし。

楽曲リスト:
- アルジャーノンに花束を (PROMPT: ネガのみ7タグ)
- 朝は来る (PROMPT: `Trill/Rolled R` のみ)
- cracked self... (PROMPT: 空)
- Whisper Me Closer slap guitar arrangement (PROMPT: 詳細楽器指定)
- 忘却のロンド (PROMPT: `electric sitar` のみ)
- Ephemeral Bloom (PROMPT: 詳細、Hiccup vocals/Celtic)
- Re Still, I Remain (PROMPT: HETEROCHROMIA共通ネガと同型)
- その先へ (PROMPT: 空)

---

## 1. プロンプト構造パターン

### 1-1. 「プロンプト極簡 or 空」型
eclipse最大のシグネチャ。**8曲中5曲**でプロンプトが空 or 1-3単語のみ。

| プロンプトの長さ | 曲数 | 例 |
|---|---|---|
| 完全に空 | 2 | cracked self... / その先へ |
| 1-3単語のみ | 3 | 朝は来る (`Trill/Rolled R`) / 忘却のロンド (`electric sitar`) |
| ネガのみ | 1 | アルジャーノンに花束を |
| 共通ネガ流用 | 1 | Re Still, I Remain |
| 詳細記述 | 2 | Whisper Me Closer / Ephemeral Bloom |

→ ランジェリーと同じ「**書かない哲学**」だが、eclipseは**ネガとキーワード単独**を使い分ける独自運用。

### 1-2. 「ネガティブのみ」で方向性を出す
アルジャーノンに花束を のプロンプト全文:
```
‑Growl, ‑Metal, ‑Lo-fi, ‑Distorted, ‑Male Vocals, ‑Dark, ‑Aggressive
```

→ **ポジティブ指示ゼロ**でネガティブだけで「優しい/明るい/女性Vo/クリーン」を**間接的に指定**する超ミニマル戦略。

### 1-3. 単一キーワードプロンプト
「特殊な楽器/技法を1つ指定するだけ」のパターン:
- `Trill/Rolled R` (朝は来る) — 巻舌歌唱の指定
- `electric sitar` (忘却のロンド) — 楽器1つで方向付け

→ **1要素を強調**し、残りはAIに委ねる極小プロンプト。

### 1-4. HETEROCHROMIA共通ネガリストの流用
Re Still, I Remain では HETEROCHROMIA と全く同じネガリスト:
```
‑300Hz-500Hz mud, ‑boxiness, ‑phase cancellation, ‑monophonic sub,
‑frequency masking, ‑vocal gasps, ‑humming, ‑artifacts, ‑hiss, ‑noise
```

→ HETEROCHROMIAと**何らかの繋がり**(同一作者 or 教え合い等)が示唆される。または同じリストが流通している。

### 1-5. 楽器/技法に詳細指定する2例外曲

**Whisper Me Closer (詳細プロンプト):**
```
Steel-string Acoustic Guitar, hard slap guitar playing,
Technical guitar playing, Progressive,
Minimal percussion, Melodic double bass,
Dreamlike space, Extremely clear left and right sound field,
A little reverb
```

**Ephemeral Bloom (詳細プロンプト):**
```
Ambient, Ethereal, Folk, Experimental, Dream Pop,
Melancholy, Mysterious, Dramatic, Futuristic,
Female Vocals, Prominent Hiccup Vocals, Whispered Vocals, Falsetto,
Deep Reverb, Wide Stereo, Floating, Airy, Delicate Melody,
Cinematic, Hiccup singing technique, Celtic music
```

→ プロンプトを書く時は**特殊技法 (slap / hiccup) を明示**する。

### 1-6. ボーカル指定は控えめ
ほとんどの曲でボーカル質感の指定なし。`Female Vocals` や `Whispered Vocals` 程度。

---

## 2. 歌詞構造パターン

### 2-1. 「劣等感 → 自己肯定」のアーク
半数以上の楽曲がこの心理的アーク。

| 曲 | 起 (劣等感) | 結 (肯定) |
|---|---|---|
| 朝は来る | 「鏡の奥に弱い僕がいる」 | 「いつか羽ばたく / 僕の空へと向かうため」 |
| cracked self | 「I'm just a failure」 | (現状の脆さで終わる) |
| Re Still, I Remain | 「ただの影なんかじゃない」 | 「I'm not lost, I'm not broken」 |
| その先へ | 「壊れそうな光でいい」 | 「止まるな 止まるな」 |

→ **比較社会で傷ついた自我が、最後に立ち上がる**構造。

### 2-2. 文学作品/概念のオマージュ
- アルジャーノンに花束を → ダニエル・キイス小説の歌詞化
- Ephemeral Bloom → 環境終末ファンタジー
- 忘却のロンド → 共依存と意識崩壊

→ **既存の文学/物語**から発想する手法。Daraの「米津玄師」とは違うが、**文化的参照を歌詞の核にする**点で共通。

### 2-3. 日英対訳併記 (3曲で実装)
忘却のロンド、Ephemeral Bloom、Re Still, I Remain で**英語版+日本語版**を完全併記。音色と同じ手法。

→ Sunoでの再生成時に英/日どちらでも歌わせられる。

### 2-4. 反復の「畳みかけ4連」
忘却のロンドの特徴的な手法:
```
回る 回る 回る 回る 記憶
消える 消える 消える 消える 世界
```

→ **同語4連反復**で意識崩壊を表現。音色の「BBBB」やCKの分断反復とは違う、**催眠的反復**。

### 2-5. 擬音アウトロ
Whisper Me Closer の最終行:
```
tunk… hush… mmh… stay… ahhh…
tunk… hush… mmh… stay… mmh…
```

→ 親密な接触音を**擬音化**してアウトロに配置。kedarugeの効果音歌詞とは違い、**官能的な囁き音**。

### 2-6. 日英コードスイッチ (Dara型)
英語が**1〜2行の決定的命題**として刺さる:

- `The gap between us, it's tearing me inside` (cracked self)
- `WHY AM I SO WEAK?! ひび割れた鏡` (cracked self)
- `Still I breathe… I'm here` (Re Still I Remain)
- `I'm not lost, I'm not broken` (Re Still I Remain)
- `still I crave / Red drops fall I can't behave` (忘却のロンド)

→ Daraと同様、**ピンポイント英語フック**。

### 2-7. 自然/文学的モチーフ
- アルジャーノン (ねずみ + 知性の花)
- Ephemeral Bloom (春/翼/古の森)
- 朝は来る (空/羽ばたく/雨)
- その先へ (夜/光/壊す)

→ **儚さ × 自然**の組み合わせが多い。

### 2-8. 構造マーカーは少数派
[Verse 1] [Chorus] のような明示マーカーが付くのは1-2曲のみ。**自由律的配置**。

### 2-9. 比較社会への問い
- `周りと比べて息を潜めて / 声を飲み込み目を伏せていた` (朝は来る)
- `比べてしまうんだ、毎日 / The gap between us` (cracked self)
- `誰かの定義に 合わせるほど / 消えないように ただ従ってた` (Re Still I Remain)

→ **SNS時代の比較疲れ**が背景にある等身大のテーマ。

### 2-10. アウトロでの「…」「おやすみ」「Sayonara」
- `アルジャーノン、おやすみ / また迷路の出口で会おう / おやすみ` (アルジャーノン)
- `Sayonara... my dear spring...` (Ephemeral Bloom)
- `still… still… I remain` (Re Still I Remain)
- `tunk… hush… mmh… stay… mmh…` (Whisper Me Closer)

→ **囁きで消える**アウトロが共通。HETEROCHROMIAと同様の手法。

---

## 3. ジャンル分布

eclipseはプロンプトが空/極小なので、Suno解釈に依存する曲が多い。NOTES/歌詞から推定:

| ジャンル軸 | 曲数 | 代表曲 |
|---|---|---|
| Alt Rock / J-Rock | 4 | 朝は来る、cracked self、Re Still I Remain、その先へ |
| Acoustic / Folk / Ambient | 2 | Whisper Me Closer、Ephemeral Bloom |
| 文学系バラード | 1 | アルジャーノンに花束を |
| Experimental Sitar Rock | 1 | 忘却のロンド |

---

## 4. テンポ/キー

全曲 BPM/Key 未指定。**完全にAI委任**。

---

## 5. アーティストの自己認識: ギタリスト

NOTES欄に**ギター技術への言及が頻出**:
- `流石ギタリストだけあってギターが上手い。プロンプトないくせに。` (cracked self)
- `ギターの音質が見事！` (Whisper Me Closer)
- `巻舌レイヤードヴォーカル スラップギター` (朝は来る)

→ アーティスト自身が**「ギタリスト」としての自己認識**を持つ。プロンプトを書かなくてもギター部分が成立するという**自分のスキルへの自信**が省略型プロンプトの背景。
