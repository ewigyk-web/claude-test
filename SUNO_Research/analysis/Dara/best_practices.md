# ベストプラクティス — Dara

## 1. 目標アーティストを明確に設定する

Daraは「米津玄師サウンドの再現」が一貫した目標。

→ プロンプトを書く前に、**「誰のような音にしたいか」を1人決める**。決まれば全要素 (ボーカル/楽器/ミックス/歌詞) がその一点に向かって絞り込める。

## 2. ネガティブ・カタログを大量に並べる

```
‑generic hard rock, ‑metal, ‑metalcore, ‑punk rock, ‑pop punk,
‑acoustic ballad, ‑soft piano ballad, ‑lo-fi, ‑demo recording,
‑thin mix, ‑sparse arrangement, ‑muddy mix, ‑weak bass,
‑buried drums, ‑buried vocals, ‑generic R&B, ‑trap beat,
‑cheerful festival, ‑bright happy pop, ‑major-key anthem,
‑hero anime theme, ‑tokusatsu theme,
‑wall of guitars, ‑power chord rhythm guitar
```

→ 30〜50タグ並べることで、**「あり得ない方向」を全部消す**。Sunoの解釈ブレを最小化。

## 3. ネガティブの「3層構造」で書く

```
[層1: ジャンル排除]
‑metal, ‑trap, ‑dubstep, ‑reggae

[層2: ミックス不備排除]
‑muddy mix, ‑thin mix, ‑buried vocals, ‑weak bass

[層3: 演出方向の排除]
‑cheerful, ‑triumphant, ‑anime hero theme, ‑bombastic trailer
```

→ 段階的に絞り込むと、AIが「何を作るべきか」より「何を作るべきでないか」で正解に近づく。

## 4. ラベル形式の構造化プロンプト

```
genre: "Drum and Bass, Electronic Rock, Modern, 2020s Sound"
language: "Japanese"
instrumentation: "Heavy slap bass, Piano-driven, Synth bass, ..."
production: "High energy, Punchy, Modern production, Tight mix, Loud"
mood: "Intense, Powerful, Chaotic, Emotional tension, Inner conflict"
bpm: 170
key: "Minor"
exclude: "Metal, hard rock, screaming, ..."
```

→ 要素別にカテゴリ化。Sunoが解釈しやすい。

## 5. [QUALITY: MAX] [REALISM: MAX] の呪文タグ

```
[QUALITY: MAX]
[REALISM: MAX]
```

→ 公式機能ではないが、AIに最高出力を促す心理的指示。プロンプト冒頭に置く。

## 6. BPMを必ず数値指定

```
bpm: 145
116 BPM with driving pulse
~160 BPM (3/4 waltz)
```

→ Daraは8曲中7曲でBPM明示。**米津楽曲のテンポ感**を再現するには数値固定が有効。

## 7. Keyを意識する (Minor志向)

```
key: "Minor"
C Minor
Minor-key foundation with bittersweet color
```

→ 米津的な暗めの色調はMinor Keyで支える。

## 8. ソロボーカル徹底排除型の指定

```
Solo Dominant Vocal
strictly solo dominant male vocal
no choir, no backing vocals, no female vocal
No Backing Choir, No Rap Section
Clear Japanese Pronunciation, Enunciated Vocals
```

→ コーラス/バッキング/女性Voを排除して**孤独な歌唱**を実現。米津的な"ひとり"の音像。

## 9. 楽器の動的指示 (時系列制御)

```
Bass And Guitar Unison Only At Impact Moments
Guitar Enters In Stages
transitioning to distorted electric guitar in chorus
vulnerable whisper to powerful chest voice
restrained singing in verses, explosive passionate delivery in choruses
```

→ 楽器/ボーカルが**いつ/どう変化するか**を細かく書く。ダイナミクスの設計が音像の質を決める。

## 10. ハイファイ志向の語彙

```
Modern Polished Mix, Controlled Low-End, Clean Top-End
pristine high fidelity, modern EDM mastering
Wide But Tight Stereo Image
High Fidelity, Rich Low-End, Warm Mid-Range, Full Bodied Mix
```

→ デモ感/Lo-Fi感を完全否定し、**スタジオプロダクション最高級**を目指す。

## 11. 1曲1モチーフの歌詞設計

| モチーフ | テーマ展開 |
|---|---|
| 鬼灯 (ほおずき) | 闇に灯す赤い実 → 君を照らす光 |
| ブリキ男 (錫の男) | 心がない体 → 大鋸屑の心臓 |
| テンセグリティ | 張力で安定する構造 → 危うい関係 |
| 雪泥 | 溶け残る雪 → 終わった愛の残骸 |

→ **1曲につき1つの象徴**を選び、その隠喩で全編を貫く。

## 12. 米津スタイル比喩の作り方

公式: `抽象概念 + 物理的存在 = 比喩`

```
キミの言葉は しなやかなワイヤー (言葉=物体)
僕の言葉は ぎこちないフレーム (言葉=物体)
胸を叩いても 鳴るのは空洞の音 (心=楽器)
僕はまるで 鬼灯の殻 (自分=植物)
```

→ 抽象を物理に変換することで、**触れる感じ**の歌詞になる。

## 13. 日英コードスイッチは「ピンポイント英フック」

サビ全体を英語にしない。**1〜2行の決定的命題**だけを英語で置く。

```
枯れても咲く when I bleed
Down and out? I bloom when I'm down and out / 凛と咲く
Cause this is my story, right?
Why won't I let go? / 抗えない引力だ
Just an empty shell / Tin man walking
```

→ 米津的に**英語が"刃"のように刺さる**配置。日英のバランスは7:3 程度。

## 14. 反復は「動詞だけ入れ替え」で展開

```
Down and out? I fight when I'm down and out
Down and out? I burn when I'm down and out
Down and out? I rise when I'm down and out
Down and out? I bloom when I'm down and out
```

→ 同構文で動詞のみ進化させる。`fight → burn → rise → bloom` のように**強度を上げる**。

## 15. 古語/凛とした語彙を1曲に1ヶ所

```
凛と咲く
気高く咲き誇れ
誇りを胸に凛と
舞い散る あの日の欠片
```

→ 全編を古語にせず、**サビにスパイスとして1ヶ所**置く。米津的な格調感の出し方。

## 16. 自己への問いかけ・宣言

```
僕の声は僕のものだろ
僕の手は僕のものだろ
僕は僕のまま
これは欠陥なんかじゃない
```

→ 「僕」を主語に、自己を律する/問う/肯定する文型で**米津的自己定位**を再現。

## 17. 構造マーカーは半角[Verse][Chorus]統一

【】は使わない。**米津玄師の歌詞カード**に倣う。

---

## Dara流の哲学

> **「目標アーティストを決めろ。ネガティブで方向を絞れ。引き算で輪郭を作れ。」**

足し算で個性を作る他のアーティストと違い、Daraは**引き算の美学**。「米津でない方向」を全部消すことで、米津サウンドを浮かび上がらせる手法。

このアプローチが向く人:
- 目標とするアーティストが明確に存在する
- 自分の音より「○○のような音」を作りたい
- ネガティブを詳細に言語化できる
- ハイファイで完成度の高い音を目指す
- 文学的モチーフの一曲完結ストーリーが好き

**注意:**
- 自分のオリジナリティを出したいなら、Daraの手法は方向転換が必要
- 米津玄師以外のアーティストを目標にする場合、ネガリストを完全に書き直す必要あり
