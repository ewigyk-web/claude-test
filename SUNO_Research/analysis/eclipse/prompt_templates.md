# プロンプトテンプレート — eclipse (ジャンル別)

`{}` を埋めて使う。eclipseの実例から抽出。
**特徴: プロンプト省略+ネガ活用+歌詞勝負。**

---

## A. 完全に空

### PROMPT欄
```
(空)
```

→ Sunoに完全委任。歌詞勝負の曲に。eclipseで2曲採用 (cracked self / その先へ)。

---

## B. ネガティブのみで方向指定

### PROMPT欄
```
‑Growl, ‑Metal, ‑Lo-fi, ‑Distorted, ‑Male Vocals, ‑Dark, ‑Aggressive
```

→ 排除したい方向を並べることで間接的に方向指定。

**応用テンプレ:**
```
{排除したいボーカル: ‑Male Vocals or ‑Female Vocals}
{排除したいジャンル: ‑Metal, ‑Pop, ‑EDM 等}
{排除したいトーン: ‑Dark, ‑Aggressive, ‑Cheerful}
{排除したい質感: ‑Lo-fi, ‑Distorted, ‑Saturated}
```

---

## C. キーワード単独

### PROMPT欄
```
{特殊楽器1個 or 特殊技法1個}
```

例:
- `electric sitar`
- `Trill/Rolled R`
- `slap guitar`
- `talk box`
- `theremin`

→ 1要素を強調し、残りは委任。

---

## D. 共通ネガリスト流用

### PROMPT欄
```
‑300Hz-500Hz mud, ‑boxiness, ‑phase cancellation, ‑monophonic sub,
‑frequency masking, ‑vocal gasps, ‑humming, ‑artifacts, ‑hiss, ‑noise
```

→ HETEROCHROMIA共通ネガリストの流用。音響処理品質の保証用。

---

## E. 特殊技法詳細プロンプト (Whisper Me Closer型)

### PROMPT欄
```
Steel-string Acoustic Guitar, hard slap guitar playing,
Technical guitar playing, Progressive,
Minimal percussion, Melodic double bass,
Dreamlike space, Extremely clear left and right sound field,
A little reverb
```

→ 特殊技法を使う場合のみ詳細記述。楽器+技法+空間感の3層。

---

## F. ファンタジー詳細プロンプト (Ephemeral Bloom型)

### PROMPT欄
```
Ambient, Ethereal, Folk, Experimental, Dream Pop,
Melancholy, Mysterious, Dramatic, Futuristic,
Female Vocals, Prominent Hiccup Vocals, Whispered Vocals, Falsetto,
Deep Reverb, Wide Stereo, Floating, Airy, Delicate Melody,
Cinematic, Hiccup singing technique, Celtic music
```

→ ジャンル+ムード+ボーカル技法+空間感の4要素を平坦に列挙。

---

## 共通: 歌詞構造テンプレ (eclipse流)

### G-1. 「劣等感→自己肯定」アーク型

```
[Verse 1]
{比較社会の場面、傷つく自我 4-8行}

[Pre-Chorus]
{違和感の蓄積、緊張ビルド 2-4行}
{(英語1行を刺す)}

[Chorus]
{中心命題: 「それでも僕は」型 4-6行}
{タイトル/キーフレーズの反復}

[Verse 2]
{場面の進行 or 視点強化}

[Chorus 2]
{Chorus 1の変奏}

[Bridge]
{転換、希望の兆し}

[Final Chorus]
{自己肯定の宣言 + 拡張}

[Outro]
{囁きで消える / 短い宣言}
```

### G-2. 文学オマージュ型 (アルジャーノン型)

```
[Verse 1]
{原作の場面描写 4-8行}

[Pre-Chorus]
{主人公の感情}

[Chorus]
{「咲き誇る○○の花よ」式の祈り命題 4-6行}

[Verse 2]
{原作の進行}

[Bridge]
{祈りの言葉}
{La la la... の歌唱フレーズ}

[Chorus]
{Chorus 1の変奏}

[Outro]
{原作のキーキャラ/モチーフへの呼びかけ}
{おやすみ / Sayonara 等で消える}
```

### G-3. 日英対訳併記型

```
{英語フル歌詞}

🐧Japanese lyric  (or  ⭐日本版です～)
{日本語フル歌詞}
```

→ 同じ歌詞を英日両方で書く。再生成時に言語切替可能。

### G-4. 反復畳みかけ型 (忘却のロンド)

```
[Verse 1]
{4行で世界観提示}

[Chorus]
{同語4連反復: 「○○ ○○ ○○ ○○ {名詞}」}
{もう1組4連反復}

[Verse 2]
{Verse 1の変奏}

[Chorus]
{Chorus 1の変奏}
```

→ 催眠的/崩壊的印象を作る時に。

---

## 重要: eclipseを再現するチェックリスト

- [ ] プロンプトを「空 / 1単語 / ネガのみ」のいずれかにする勇気を持ったか
- [ ] 詳細を書くなら「特殊技法」がある時だけにしたか
- [ ] 自分の楽器スキルに自信があるか (なければ詳細プロンプト推奨)
- [ ] 歌詞テーマを「比較社会の劣等感→自己肯定」に絞ったか
- [ ] 文学オマージュ (既存物語) を活用したか
- [ ] 日英対訳を併記したか (任意)
- [ ] 英語コードスイッチを「ピンポイント1-2行」に絞ったか
- [ ] アウトロを「囁きで消える」形にしたか
- [ ] 「劣等感の語彙」(比べる / 違う / 弱い / 影) を入れたか
- [ ] 「自己肯定の語彙」(羽ばたく / 越えていく / ここにいる) を入れたか

---

## 流用Tips

- **プロンプト空の検証法**: 同じ歌詞でプロンプト空 vs 詳細 を比較生成し、空のほうが良ければそのまま採用。
- **ネガのみ戦略の限界**: AI生成では明確な方向指示の方が安定する場合も多い。**ネガ7-10個**を目安に。
- **特殊技法プロンプト**: `slap` `hiccup` `Trill/Rolled R` 等のSuno解釈可能な技法名を覚えておく。
- **文学オマージュ**: 著作権に注意。原作のセリフをそのまま使わず、世界観だけ借りる。
- **日英対訳の効率化**: 日本語で書いてからAIに英訳させる手も。再生成時に言語選択肢が広がる。
