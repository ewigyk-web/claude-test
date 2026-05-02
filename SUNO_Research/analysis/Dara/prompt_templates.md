# プロンプトテンプレート — Dara (ジャンル別)

`{}` を埋めて使う。Daraの実例から抽出。
**特徴: 「米津玄師サウンド」を目指す引き算プロンプティング。**

---

## A. Cinematic Cyber Art-Pop + ネガカタログ (The Antidote型)

### PROMPT欄
```
Cinematic Japanese cyber art-pop with dark orchestral electro-pop and alternative dance-rock,
Marching drumline snares with marimba patterns and low drum impacts and tight live kit
and electronic bass and piano-synth pulses and minor piano voicings
and chromatic bass movement and shadowy strings,
{116} BPM with driving pulse and syncopated drum breaks and nimble stop-start accents,
Dense high-fidelity cinematic mix with deep controlled low end and crisp percussion and glossy digital space,
Dark tense rebellious energy with minor-key catharsis and restrained bloom-from-darkness release,

‑generic hard rock, ‑metal, ‑metalcore, ‑punk rock, ‑pop punk,
‑acoustic ballad, ‑soft piano ballad, ‑lo-fi, ‑demo recording,
‑thin mix, ‑sparse arrangement, ‑muddy mix, ‑weak bass,
‑buried drums, ‑buried vocals, ‑generic R&B, ‑trap beat, ‑dubstep drop,
‑brostep, ‑cheerful festival, ‑carnival parade, ‑bright happy pop,
‑major-key anthem, ‑hero anime theme, ‑tokusatsu theme,
‑marching band fanfare, ‑bombastic orchestral trailer,
‑wall of guitars, ‑power chord rhythm guitar
```

→ ポジティブ + 35+ネガティブの長文型。

---

## B. Alt Rock + Electronic + 大量排除 (Beast型)

### PROMPT欄
```
Alternative Rock + Electronic Hybrid, Dark, Urgent, {136} BPM, 4/4,
Sampled-Like Staccato String Motif Intro, Reverse Texture Accent,
String Hook Leads Intro, Strings Stay Tight And Dry (Not Orchestral),
Tight Live-Style Drums Layered With Subtle Programmed Percussion,
Straight Driving Groove, Sparse Drum Fills, Dry Punchy Snare,
Focused Kick, Eighth-Note Hi-Hat Pulse,
Drop Tuning Guitar, Palm Muted Riffs,
Guitar Enters In Stages, Bass And Guitar Unison Only At Impact Moments,
Subtle Turntable Texture And FX, Tight Quantized Rhythm,
Dynamic Contrast, Restrained Verses Explosive Choruses,
Solo Dominant Vocal, Clear Japanese Pronunciation, Enunciated Vocals,
No Backing Choir, No Rap Section,
Modern Polished Mix, Controlled Low-End, Clean Top-End, Wide But Tight Stereo Image,

‑Acoustic, ‑Soft, ‑Slow, ‑Ballad, ‑Sweet, ‑Lo-Fi, ‑Thin Mix,
‑Pure Metal, ‑Thrash Metal, ‑Death Metal, ‑Symphonic Metal, ‑Gothic Rock, ‑Visual Kei,
‑Organic Loose Drums, ‑Drum Solo, ‑Blast Beat, ‑Double Bass Drum,
‑Busy Drums, ‑Constant Crash Cymbals, ‑Fast Drum Fills,
‑Busy Arrangement, ‑Melodramatic Arrangement, ‑Guitar Solo,
‑Screamo, ‑Jazz, ‑Folk, ‑Constant Energy,
‑Retro Synth, ‑Vintage Synthesizer, ‑80s Synth,
‑Trance Arp, ‑EDM Supersaw, ‑Synth Brass, ‑Chiptune Lead,
‑Lush String Pads, ‑Violin Lead Melody, ‑Grand Orchestral Strings,
‑Choir, ‑Backing Vocals
```

→ Cap-Case併記タグ + 動的指示 + 大量ネガ。

---

## C. ラベル形式 + [QUALITY: MAX] (LIFE型)

### PROMPT欄
```
[QUALITY: MAX]
[REALISM: MAX]

genre: "{ジャンル1, ジャンル2, Modern, 2020s Sound}"
language: "Japanese"
instrumentation: "{楽器列挙}, No guitars / No piano など排除"
production: "High energy, Punchy, Modern production, Tight mix, Loud, Clean, Polished, Deep bass, Heavy low-end"
mood: "{形容詞4-6個}"
bpm: {数値}
key: "Minor"
```

→ Suno標準メタデータ風。最も簡潔。

---

## D. ラベル形式 + exclude (ブリキ男型)

### PROMPT欄
```
genre: "{ジャンル1, ジャンル2, ジャンル3}"
instrumentation: "{楽器の動的記述: ... transitioning to ... in chorus}"
production: "{High-fidelity, wide cinematic, deep sub-bass, dynamic contrast}"
mood: "{形容詞列挙}"
exclude: "{排除ジャンル/要素をカンマ区切り}", ‑{追加排除1}, ‑{追加排除2}
```

→ ラベル形式 + en-dash追加排除のハイブリッド。

---

## E. Cinematic Piano Ballad (雪泥型)

### PROMPT欄
```
Cinematic, Harmonic Piano, Laid-Back 16-Beat, BPM {95}, {C Minor},
Melodic, Emotional, Chromatic Bass, Soft Drums, Deep Kick,
Mysterious, Sultry, Enigmatic, Film Score Feel, Floating Atmosphere,
Subtle Strings, Vocoder Accents, Not Standard Ballad,
Japanese Lyrics, Clear Japanese Pronunciation, Enunciated Vocals,
High Fidelity, Rich Low-End, Warm Mid-Range, Full Bodied Mix, Polished Production
```

→ Cap-Case列挙のみ。ネガなし。バラード系で使う。

---

## F. Future Bass J-Pop + ソロVo徹底 (テンセグリティ型)

### PROMPT欄
```
Future Bass J-Pop, Alternative Rock Fusion, Massive Synth Drops, Explosive Dynamic Shifts

Sound: Huge modern EDM production, massive distorted synth bass, heavy 808 sub bass,
tight live rock drums layered with punchy electronic kick and crisp snare,
aggressive electric guitar and bass unison riffs, dramatic atmospheric synth pads,
extreme quiet-to-loud contrast, dynamic buildup,
strictly solo dominant male vocal, emotional clear male vocal,
vulnerable whisper to powerful chest voice,
restrained singing in verses, explosive passionate delivery in choruses,
catchy pop melody,
no piano, no choir, no backing vocals, no female vocal, no brass, no acoustic folk, no jazz,
sub-driven low end with clean punch, wall of sound in chorus, sidechain compression,
pristine high fidelity, modern EDM mastering, Japanese clear diction, bpm: {145},

‑Heavy Metal, ‑Classic Rock, ‑Retro, ‑70s, ‑80s, ‑Disco, ‑Screaming,
‑Acoustic Folk, ‑Relaxed, ‑Smooth Jazz, ‑Lofi, ‑Ambient,
‑Crowd Noise, ‑Flat Dynamics, ‑Piano, ‑Jazz Accordion, ‑Country
```

---

## G. Japanese Nocturnal Sorrow (鬼灯型)

### PROMPT欄
```
Japanese nocturnal sorrow song, Prayerful and solemn,
Slow 4/4 pulse around {82 to 88} BPM, Low pulse and restrained lift,
Deep night atmosphere, Minor-key foundation with bittersweet color,
Intimate lead vocal, Subtle piano fragments, low strings, distant clean guitar,
restrained live drums, soft bass,
Cinematic depth without sentimentality,
Human, fragile, and quietly devastating,

‑wedding ballad, ‑inspirational, ‑uplifting anthem, ‑bright pop, ‑glossy pop,
‑sentimental piano ballad, ‑gospel, ‑choir, ‑triumphant climax,
‑EDM, ‑techno, ‑house, ‑trance, ‑trap, ‑rap, ‑metal, ‑hyperpop,
‑jazz, ‑neo soul, ‑funk, ‑swing, ‑fusion, ‑crowd chants, ‑ad-libs
```

---

## H. [Section]ブロック型 (モノクロ型)

### PROMPT欄
```
[Style Emotional J-Rock / Alt Rock, dark 3/4 waltz ~{160} BPM, guitar-focused,
7-string low-B riffs, 5-string bass, melodic Japanese male vocal,
destructive and emotional, heavy guitar FX (delay, reverb, chorus, phaser, flanger, fuzz, wah)]

[Chorus Song starts in 3/4 with full band, strong kick on beat 1,
low-tuned power chords, destroy-style 7-string riffs, big hook]

[Destroy Guitar Riff Short 3/4 instrumental riff after first chorus,
brutal low-B chugs, phaser + fuzz + wah, tight drums and bass]

[Verse 3/4, same tempo, drums continue,
guitars drop to clean arpeggios with stereo delay and chorus,
fragile but regretful vocal]

[Pre-Chorus Short intense build, melodic bass,
muted picking guitars with tremolo, tension rising into the chorus]

[Bridge Dark 3/4 section, tremolo-picked low-B with delay and phaser,
feedback swells, tom-heavy drums, desperate confessional vocal]

[Final Chorus Longest and most emotional 3/4 chorus]
```

→ セクションごとのアレンジを個別ブロックで指定。

---

## 共通: 歌詞構造テンプレ (Dara流 — 米津式)

```
[Verse 1]
{場面/状況描写、抽象を物理化した比喩 6-8行}

[Pre-Chorus]
{緊張ビルド、自己への問い 2-4行}

[Chorus 1]
{タイトルモチーフ + 日本語感情}
{英語ピンポイントフック (1-2行)}
{反復フレーズ (動詞入れ替え)}

[Verse 2]
{Verse 1の対概念 or 視点反転}

[Pre-Chorus 2]
{Pre 1の変奏}

[Chorus 2]
{Chorus 1の変奏}

[Bridge]
{視点強化 or 自己への決定的宣言 4-6行}
{古語/凛とした語彙を1ヶ所}

[Final Chorus / Outro]
{Chorus拡張版 or 余韻のサインオフ}
```

---

## 重要: Daraを再現するチェックリスト

- [ ] 目標とする既存アーティストを1人決めたか
- [ ] BPM/Keyを数値で明示したか
- [ ] ネガティブを最低10タグ以上書いたか (en-dash `-` or `no XXX`)
- [ ] ソロボーカル (バッキング/コーラス排除) を指定したか
- [ ] 楽器の動的指示 (`Enters In Stages`, `Only At Impact`等) を入れたか
- [ ] ハイファイ語彙 (pristine high fidelity / polished) を使ったか
- [ ] 歌詞のモチーフ (1曲1象徴) を決めたか
- [ ] 抽象を物理化する比喩を最低3つ使ったか
- [ ] 日英コードスイッチをサビにピンポイント挿入したか
- [ ] 反復フレーズで動詞だけ入れ替える展開を作ったか
- [ ] 古語/凛とした語彙を1ヶ所入れたか
- [ ] 構造マーカーは半角[Verse][Chorus]に統一したか
- [ ] NOTES欄に目標アーティスト/評価を1行残したか

---

## 流用Tips

- **米津以外の目標**: テンプレを真似る場合、ネガリストを完全に書き直す必要あり (例: King Gnu目標なら -punk -lo-fi -ballad...のリストを再構築)。
- **ネガリスト圧縮**: 50タグは多すぎる場合がある。20タグ程度に絞ると Suno が処理しやすい。
- **ラベル形式 vs 長文形式**: 長文 (The Antidote型) は表現の柔軟さ、ラベル (LIFE型) は要素管理のしやすさ。曲ごとに使い分け。
- **米津模倣の注意**: 「らしい」音にはなるが、本物にはならない。**自分なりの解釈**を加える余地を残すこと。
