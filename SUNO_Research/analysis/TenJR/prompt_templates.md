# プロンプトテンプレート (ジャンル別)

`{}` を埋めて使う。TenJRの実例から抽出。

---

## A. デジタルハードコア / メロディックハードコアパンク

### PROMPT欄
```
Explosive digital hardcore punk, BPM {200-220},
AI-generated digital hardcore rock band with raw human spirit,
Solid, tight, aggressive distortion guitars (Explorer + Les Paul),
{fast palm-muted / downstroke-driven} riffs with gritty amp tone,
Heavy growling overdriven distortion bass (Freedom Custom Guitar Research style),
layered with thick Heavy Fuzz Bass for overwhelming low-end pressure,
Punchy tight kick drum, fast cracking snare (TAMA kit, Zildjian cymbals),
Fast 16th-note hi-hats, occasional blast beats,
Raspy, dirty, aggressive distortion vocals,
{shouted verses / melodic catchy choruses},
Layered gang vocals in chorus for singalong energy,
Crushing wall-of-sound mix, no clean polish, raw human feel
```

### LYRICS欄ヘッダー
```
[Title: {曲名}]
[Style: explosive digital hardcore, BPM{xxx}.]
[Preserve original vocal melody and phrasing strictly.]

[AI-generated digital hardcore rock band with raw human spirit.]
[Guitars: Explorer + Les Paul, raw, aggressive, {riff特性}.]
[Bass: Freedom Custom Guitar Research style, growling, layered with heavy fuzz bass.]
[Drums: TAMA kit + Zildjian, tight kick, explosive snare, 16th-note hats.]
[Vocals: hoarse, dirty distortion, gang vocals in chorus.]
[No clean polish — raw, noisy, aggressive, human.]

【Verse 1】
...
```

---

## B. ライブ再現バージョン

### PROMPT欄
```
Live version of "{曲名}" by AI-generated digital hardcore rock band with raw human spirit,
BACK LINE, Explosive {ジャンル} performance,
{楽器/トーン指定はテンプレAから流用},
Slight microphone feedback at the intro,
Natural underground venue reverb,
Crowd of around {人数} people reacting loudly, shouting and clapping along,
No studio polish, raw, loud, tight, aggressive underground live energy
```

### Lock指示 (LYRICS欄冒頭に必須)
```
[The original BPM, key, structure, arrangement, and song length must remain exactly the same.]
[Absolutely no changes to the arrangement.]
[No remixing, no restructuring, no added sections, no extended intro, no extended outro.]
[Faithful live reproduction of the original composition.]
```

---

## C. アコースティック / 弾き語り

### PROMPT欄
```
Studio acoustic-focused version of "{曲名}",
Keep the original melody, key, tempo, and song structure strictly unchanged,
Pure acoustic studio arrangement, organic, warm, natural sound,
Focus on wood resonance and string texture,
Single acoustic guitar only (fingerstyle preferred),
Rich, detailed fingerpicking with natural dynamics,
Captured with close microphones, emphasizing string noise and body resonance,
No effects except very subtle natural room reverb,
{Male/Female} vocal, very close-mic,
Soft, slightly husky and breathy tone, intimate and emotional but restrained,
Natural vocal imperfections allowed,
No piano, no pads, no bass, no drums,
No electric instruments, no distortion, no digital elements,
No overproduction, no artificial polish,
Pure, honest, acoustic performance
```

---

## D. 高速カバー (BPM加速 + melody保護)

### PROMPT欄
```
Cover version of "{原曲名}" by {原作者},
Respect the original song while transforming it into a high-speed {ジャンル} version at BPM{xxx},
Strictly preserve the original vocal melody, phrasing, and emotional flow,
Do not change the melody,
Keep the core structure and section order recognizable, even at high speed,
No remix-style rearrangement — this is a faithful but intensified cover,
{楽器テンプレAから流用},
Preserve the original's {形容詞列}, but amplify everything into violent, overwhelming sonic pressure,
Raw, loud, compressed, in-your-face mix
```

---

## E. インダストリアル / ジャングル系 (低BPM)

### PROMPT欄
```
AI-generated digital hardcore industrial rock band with raw human spirit,
BPM {90-100},
Explosive digital hardcore mixed with industrial rock, built on a jungle rhythm track,
Strong underground and street atmosphere throughout the song,
Solid, tight, aggressive distorted guitars with Explorer and Les Paul style tones,
Heavy, overdriven, growling distorted bass in the style of Freedom Custom Guitar Research,
Powerful, tight kick drum and raw, bouncing snare, human and physical drum feel,
Drums inspired by TAMA, with sharp cymbals inspired by Zildjian,
Jungle beat forms the rhythmic foundation,
with dark, dirty industrial aggression layered on top,
Raspy, dirty, distorted vocals, low to mid-range, aggressive,
No clean singing, heavy, loud, uncompromising sound
```

---

## 共通: 歌詞構造テンプレ

```
【Verse 1】
{4行 / 各7-8モーラの日本語、または短い英語句}

【Pre-Chorus 1】
{緊張を作る2-4行、英→日 or 日→英の橋渡し}

【Chorus 1】
{英語のフック2行}
{日本語の感情1-2行}
{英語のフック2行}
{日本語の感情1-2行}

【Verse 2】
{Verse1の変奏}

【Bridge】
{視点転換 or 静→動の対比}

【Final Chorus】
{Chorus拡張版}

{2行リフレイン × 3-4回でアウトロ}
```
