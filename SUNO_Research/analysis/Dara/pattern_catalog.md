# パターンカタログ — Dara

対象: `artists/Dara/` 配下 8曲。★付きなし。

楽曲リスト:
- The Antidote (Cinematic Cyber Art-Pop, 116 BPM)
- Beast (Alt Rock + Electronic, 136 BPM)
- 鬼灯 (Japanese nocturnal sorrow, 82-88 BPM, Minor)
- テンセグリティ (Future Bass J-Pop + Alt Rock, 145 BPM)
- 雪泥 (Cinematic Harmonic Piano, 95 BPM, C Minor)
- ブリキ男 (Alt nu-jazz rock, atmospheric art pop)
- モノクロのくせにまだ眩しい (Emotional J-Rock, 3/4 waltz ~160 BPM)
- LIFE (Drum and Bass, 170 BPM, Minor, no guitars)

---

## 1. プロンプト構造パターン

### 1-1. 「米津玄師サウンドの追求」が最大の方向性
NOTES欄に**8曲中6曲**で「声もメロディも米津玄師なのよ」と明記。Daraの楽曲設計は**特定アーティスト (米津玄師) のサウンド再現**を目標としている。

1曲のみ例外: `あれ、まだ米津玄師じゃない時の曲だ` (モノクロ) → 試行錯誤の記録として残されている。

### 1-2. 「en-dash (-)」によるネガティブカタログ化
プロンプトの**過半数がネガティブ指示**。1曲あたり10〜50個の `-XXX` を並べる。

例 (The Antidote):
```
‑generic hard rock, ‑metal, ‑metalcore, ‑punk rock, ‑pop punk,
‑acoustic ballad, ‑soft piano ballad, ‑lo-fi, ‑demo recording,
‑thin mix, ‑sparse arrangement, ‑muddy mix, ‑weak bass,
‑buried drums, ‑buried vocals, ‑generic R&B, ‑trap beat, ‑dubstep drop,
‑brostep, ‑cheerful festival, ‑carnival parade, ‑bright happy pop,
‑major-key anthem, ‑hero anime theme, ‑tokusatsu theme, ‑superhero theme,
‑marching band fanfare, ‑lead trumpet, ‑trumpet solo, ‑fanfare trumpet,
‑triumphant trumpet, ‑horn section lead, ‑brass band, ‑overly bright horns,
‑bombastic orchestral trailer, ‑overly dramatic soundtrack,
‑wall of guitars, ‑power chord rhythm guitar
```

→ 35+ のネガを並べることで、**「米津でない方向」を全部排除**する戦略。

### 1-3. ネガティブの3層構造
ネガリストには段階がある:
1. **対象外ジャンル排除**: -metal, -trap, -dubstep, -reggae 等
2. **ミックスの不備排除**: -muddy mix, -thin mix, -buried vocals
3. **演出の方向性排除**: -cheerful, -triumphant, -anime hero theme 等

→ 排除対象を**段階的に絞り込む**ことで方向性を確定。

### 1-4. ラベル形式プロンプト
後半曲で確立された構造化フォーマット:

```
genre: "Drum and Bass, Electronic Rock, Modern, 2020s Sound"
language: "Japanese"
instrumentation: "Heavy slap bass, Piano-driven, ..."
production: "High energy, Punchy, Modern production, ..."
mood: "Intense, Powerful, Chaotic, Emotional tension, Inner conflict"
bpm: 170
key: "Minor"
```

→ Suno標準のメタデータ風書式。LIFE / ブリキ男で採用。CKのメタヘッダーに近いがDara特有のkey:value記法。

### 1-5. [QUALITY: MAX] [REALISM: MAX] タグ
LIFE で使用される独自タグ。

```
[QUALITY: MAX]
[REALISM: MAX]
```

→ 出力品質を最大化する**呪文タグ**。Suno公式機能ではないが、AIに最高出力を促す心理的指示。

### 1-6. BPM明示が標準
| 曲 | BPM |
|---|---|
| 鬼灯 | 82-88 |
| 雪泥 | 95 |
| The Antidote | 116 |
| Beast | 136 |
| テンセグリティ | 145 |
| モノクロ | ~160 (3/4 waltz) |
| LIFE | 170 |
| ブリキ男 | 未記載 |

→ 8曲中7曲でBPM指定。**米津楽曲のテンポ感**を意識した設計。

### 1-7. Keyを指定する曲もある
- 雪泥: C Minor
- LIFE: Minor
- 鬼灯: Minor-key foundation

→ 他アーティスト (ほぼ未指定) と比べて**Key意識が高い**。Minor志向が一貫。

### 1-8. ボーカル指定の徹底排除型
- `Solo Dominant Vocal` (Beast)
- `No Backing Choir, No Rap Section` (Beast)
- `strictly solo dominant male vocal` (テンセグリティ)
- `no choir, no backing vocals, no female vocal, no brass` (テンセグリティ)
- `Clear Japanese Pronunciation, Enunciated Vocals` (Beast, 雪泥)

→ **ソロ男性ボーカル徹底**。コーラス/バッキング/女性Voを排除して、米津的な孤独な歌唱を実現。

### 1-9. 楽器の「動的指示」
他アーティストと違い、楽器が**いつ/どう変化するか**を細かく指定。

- `Bass And Guitar Unison Only At Impact Moments` (Beast)
- `Guitar Enters In Stages` (Beast)
- `transitioning to distorted electric guitar in chorus` (ブリキ男)
- `vulnerable whisper to powerful chest voice` (テンセグリティ)
- `restrained singing in verses, explosive passionate delivery in choruses` (テンセグリティ)

→ ダイナミクスの**時系列制御**が精密。

### 1-10. ハイファイ志向の語彙
- `Modern Polished Mix, Controlled Low-End, Clean Top-End` (Beast)
- `pristine high fidelity, modern EDM mastering` (テンセグリティ)
- `High Fidelity, Rich Low-End, Warm Mid-Range, Full Bodied Mix, Polished Production` (雪泥)

→ デモ感/Lo-Fi感を完全否定し、**スタジオプロダクション最高級**を目指す。

---

## 2. 歌詞構造パターン

### 2-1. 文学的モチーフによるタイトル
タイトルが詩的・象徴的。

| 曲 | モチーフの正体 |
|---|---|
| The Antidote | 解毒剤 (毒を抱きながら咲く) |
| Beast | 正論モンスター |
| 鬼灯 | ほおずき (闇に灯る赤い実) |
| テンセグリティ | 構造工学の概念 (張力で安定) |
| 雪泥 | せつでい (溶け残る雪) |
| ブリキ男 | オズの魔法使いの錫の木こり |
| モノクロのくせにまだ眩しい | 形容矛盾の長文タイトル |
| LIFE | 単純概念で逆に重い |

→ **モチーフを1つ決めて1曲を建てる**米津的手法。

### 2-2. 米津玄師スタイルの比喩
具象 → 抽象、抽象 → 具象 の**比喩の往復**。

例:
- `胸を叩いても 鳴るのは空洞の音 / 錆びたブリキで出来た僕の体` (ブリキ男 — 比喩で自己描写)
- `キミの言葉は しなやかなワイヤー / 僕の言葉は ぎこちないフレーム` (テンセグリティ — 関係を構造で表現)
- `僕はまるで 鬼灯の殻 / 誰にも気付かれず 朽ちていくだけ` (鬼灯 — 自己と植物の重ね)

→ 抽象概念を**物理的存在に変換**し、それで自分を語る手法。

### 2-3. 日英コードスイッチのサビ
英語フレーズが**詩的命題**として配置される。

- `I'm on the brink of the brink / 枯れても咲く when I bleed` (The Antidote)
- `Down and out? I bloom when I'm down and out / 凛と咲く` (The Antidote)
- `Cause this is my story, right?` (Beast)
- `Why won't I let go? / 抗えない引力だ` (テンセグリティ)
- `Something's off / I don't know where I stand` (LIFE)
- `Just an empty shell / Tin man walking` (ブリキ男)

→ 英語は**1〜2行の決定的命題**として置かれる。サビ全体英語ではなく、ピンポイント挿入。

### 2-4. 自己への問いかけ・宣言
「僕」を主語に、自己を律する/問う/肯定する文型。

- `僕の声は僕のものだろ` (Beast)
- `僕の手は僕のものだろ` (Beast)
- `僕は僕のまま` (The Antidote)
- `これは欠陥なんかじゃない` (The Antidote)
- `これは僕の報いだ` (鬼灯)

→ 米津楽曲にも頻出する**「僕」の自己定位**。

### 2-5. 反語/疑問形のサビ
- `しまえない君は 胸の引き出しのど真ん中` (モノクロ)
- `心がないなら 軽いはずだろ` (ブリキ男)

→ 答えを与えず、**疑問を読者に投げる**構造。

### 2-6. 古語・凛とした語彙
- `凛と咲く` (The Antidote)
- `誇りを胸に凛と咲く` (The Antidote)
- `気高く咲き誇れ` (The Antidote)
- `舞い散る あの日の欠片` (雪泥)

→ 漢語・古語の格調高い語彙が散見される。

### 2-7. 反復するキーフレーズ
サビでフレーズを反復し、感情を畳みかける。

- `This poison's part of me` × 6 (The Antidote)
- `Down and out? I XXX when I'm down and out` × 4 + bloom × 1 (The Antidote)
- `しまえない君は 胸の引き出しのど真ん中` × 3 (モノクロ)
- `Something's off` × 4 (LIFE)
- `軋む関節に 油を差して` × 3 (ブリキ男)

→ 単に繰り返すのではなく、**動詞を入れ替える**(I fight / I burn / I rise / I bloom)技法。

### 2-8. 構造マーカーは半角[Verse][Chorus]
全8曲で半角英語マーカー使用。【】は使用なし。**米津玄師の歌詞カード風**。

### 2-9. ストーリーの「再帰」構造
1番Verse/Chorus と 2番Verse/Chorus で**同じ景色を別角度で描く**。

例 (鬼灯):
- 1番: 君が苦しむ姿を見て、自分の影を捨てる
- 2番: 君を闇から救い出すために、自分が痛みを引き受ける
→ 1番=観察、2番=決意 で展開。

### 2-10. アーティスト固有のシンボル使い回し (限定的)
ランジェリー (「ランジェリー」)、kedaruge (「軌道/螺旋」) のように複数曲を貫くシンボルは限定的。**1曲1モチーフ**で完結する独立性が高い。

---

## 3. ジャンル分布

| ジャンル軸 | 曲数 | 代表曲 |
|---|---|---|
| Cinematic / Atmospheric Art Pop | 3 | The Antidote, 雪泥, ブリキ男 |
| Alternative Rock + Electronic | 3 | Beast, テンセグリティ, モノクロ |
| Drum and Bass | 1 | LIFE |
| Nu-Jazz Rock | 1 | ブリキ男 |
| Future Bass | 1 | テンセグリティ |
| 3/4 Waltz J-Rock | 1 | モノクロ |
| 純Piano Ballad | 1 | 雪泥 |

→ 中核は **Cinematic Art Pop × Alt Rock × Electronic**。米津玄師の楽曲スタイルに対応。

---

## 4. テンポ/キー/ボーカル

### BPM分布
鬼灯 82 → 雪泥 95 → The Antidote 116 → Beast 136 → テンセグリティ 145 → モノクロ 160 → LIFE 170

→ **80〜170 BPMの広い帯域**を均等にカバー。米津玄師の楽曲幅に対応。

### Key
- Minor明示: 雪泥 (C Minor), LIFE (Minor), 鬼灯 (Minor foundation)
- 残りはMinor暗示

→ **Minor Key中心**の暗めの色調。

### ボーカル
**ソロ男性ボーカル**が圧倒的多数。コーラス/バッキング/女性Voを徹底排除。

頻出指定:
- `Solo Dominant Vocal` / `strictly solo dominant male vocal`
- `Clear Japanese Pronunciation, Enunciated Vocals`
- `vulnerable whisper to powerful chest voice` (ダイナミクス)
- `emotional clear male vocal`
