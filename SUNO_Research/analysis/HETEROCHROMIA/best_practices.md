# ベストプラクティス — HETEROCHROMIA

## 1. 「共通固定ネガリスト」を所持する

HETEROCHROMIAは全7曲に同一のネガリストを貼り付ける:

```
‑300Hz-500Hz mud, ‑boxiness, ‑phase cancellation, ‑monophonic sub,
‑frequency masking, ‑vocal gasps, ‑humming, ‑artifacts, ‑hiss, ‑noise
```

→ Daraのジャンル排除ネガと違い、**音響処理の不備を排除**する固定テンプレ。
→ 自分用の「品質保証ネガリスト」を作って毎回流用する効率化。

**用語解説:**
- `300Hz-500Hz mud` = 中低域の濁り
- `boxiness` = 箱鳴り
- `phase cancellation` = 位相打ち消し
- `monophonic sub` = モノラル化したサブ
- `frequency masking` = 周波数マスキング

## 2. ラベルブロック型でプロンプトを構造化

```
[Structure]
Intro:clean guitar with delay/reverb, soft ambient fade-in
Verse:intimate female vocal, whispery and restrained
Pre-chorus:tension builds
Chorus:emotional peak, widened distorted guitars
Bridge:atmospheric pads, slight dissonance
Final chorus:fuller, harmonies added
Outro:fade with echoing guitar

[Vocals]
Female vocal, clear and delicate, airy and unstable

[Sound]
Guitar-centered with deep reverb/delay

[Mix]
Wide stereo, soft compression, dynamic, slightly raw
```

→ Daraの`genre/instrumentation/production/mood`型と異なり、`Structure/Vocals/Sound/Mix` の4分類。

## 3. 進行を「実験的語彙」でブロック記述

```
Intro—ambient drone
Verse—whisper + minimal clean
Build—noise, unstable layering
Climax—extreme metal, scream dominance
Void—near silence, breath, residual noise
Final—collapsing repetition into static
```

→ 通常のVerse/Chorusでなく `Build / Climax / Void / Final` のような**前衛音楽的進行**を採用。

## 4. ボーカルは「Whisper → Clean → Scream」の3層で書く

```
Whisper—close, breathy, spoken inner monologue
Clean—fragile melodic line, narrow range, unstable pitch
Scream—distorted, saturated, glitch-processed, rupture points
Layers never align; offset rhythm/phrasing creates dissonance
```

→ 段階別に質感/役割/エフェクトを書き分ける。

## 5. 「美しさ + 不安定」の指示

```
slight pitch instability allowed
airy and unstable
Elastic phrasing, slightly behind or ahead of the beat
subtle vibrato
Breath noise clearly audible
```

→ 完璧な美声でなく、**揺らぎを残した美しさ**を志向。完璧さ排除がHETEROCHROMIAの核。

## 6. 「Almost like praying, not singing」の祈り志向

```
Almost like praying, not singing
```

→ 歌唱でなく**祈り**として捉える独自指示。Hymn / Prayer / Chant とは違う、内的な詠唱を狙う。

## 7. メタ指示を素直にプロンプトに書く

```
Keep it concise and finish within 3 minutes
Do not become pop, Avoid catchy hooks
Keep it abstract and cinematic
End fades into silence without resolution
```

→ AIへの**メタな注文**を遠慮せず明示。ポップ化を防ぐ。

## 8. 楽器パレットは繊細寄り

頻出楽器 (HETEROCHROMIA選定):
- piano (sparse chords / felt piano / percussive)
- clean guitar with delay/reverb
- low strings / violin
- minimal drums / heartbeat-like pulse
- ambient drone

→ ヘヴィメタル的密度を避け、**ミニマル+空間系**で構築。

## 9. Key は Minor 一択

全7曲がMinor Key。`minor key foundation` を必ず指定。

→ HETEROCHROMIAの世界観は**Minorで成立する**。Major Keyに振ると別人になる。

## 10. 歌詞テーマは「死/狂気/儚さ/壊れた愛」

頻出語彙バンク:
- 美しい / 儚い / 壊れる / 消える / 散る
- 愛 / 死 / 狂気 / 化物 / 人間
- 鏡 / 異色 / 仮面 / 影
- 砂時計 / 花 / 星 / 灰

→ **太宰治・夢野久作的世界観**を選ぶ。

## 11. 「美 × 死」の対比で1行作る

公式: `美しいもの + 死/消失 = HETEROCHROMIA詩学`

```
美しいものだけが / 最後は星に残ればいい
美しい私のままで / 愛と死を
お花畑で会いましょう / 試験薬は嗤う
燃え尽きながら / いつまでも
```

→ 美しさを称えながら同時に消失/死を予感させる。

## 12. リフレインは「壊れる」「未完結」で

```
違う！違う！違う！
嫌だ！嫌だ！嫌だ！

欲しがって…欲しがって…欲しがって…
生かされて…

だけどもう…
多分…きっと…
```

→ **言葉が崩壊していく**手法。三連否定 / 三点リーダの未完結 / 欲望の過剰反復。

## 13. 二項対立の問いを「Aだろうか／Bだろうか」で

```
壊れはじめているのは / 世界だろうか　私だろうか
愛すだろうか　殺すだろうか
人間に成りたくて / 生きている / 人間に成れなくて / 生きている
```

→ 答えのない二項対立を**疑問形のまま放置**する手法。

## 14. 中黒/三点リーダで意味を解体

```
ア•イ•シ•テ•ル
酒をくれ…薬をくれ…もう手遅れ…
明日…明日でなくてもいいけれど
```

→ **句読点と記号で詩のリズム**を作る。意味の解体を視覚化。

## 15. 「閉鎖空間」を舞台にする

楽曲の舞台選定:
- 病院 (人格操作 — 白い壁/透明な管)
- 戦地 (帝国の朝 — 明日、飛ぶ)
- 舞台 (Monster — 道化の華)
- 異界 (Hollow — 望んだ世界)

→ **逃げ場のない閉鎖空間**を選ぶことで、儚さと絶望が増す。

## 16. アーティスト名のテーマ的具現化

HETEROCHROMIA = 虹彩異色症。歌詞に「鏡 / 異色 / 分裂」を埋め込む。

```
鏡に映る目が / 左右で違って見えた / それだけが / まだ…私の証明
笑顔の仮面　ひび割れる
鏡に映った 不恰好な体
```

→ アーティスト名を**世界観の中核**として機能させる。

## 17. 古い歌謡曲メロディ × 現代実験音楽

NOTESで自己分析:
> 「メロディ自体は古い歌謡曲っぽいんだけど、それを補うくらいの伴奏と、そして美しい声」

→ 昭和歌謡的メロディを書きつつ、伴奏と音響を実験音楽で再構築する手法。

## 18. NOTES欄に文学的自己評価

```
声がまず美しいのと、少し古い歌謡曲風のメロディ。それをロックにしている。
に～んげん のフレーズ一つだけで価値がある。
太宰とか夢野久作のような小説が好きだったんだろうなと感じる。
年始にふさわしい爽やかな曲だけど、内容が文学的
```

→ Meikai Soul同様、自作評価を残す。HETEROCHROMIAの場合は**文学的観点から**書く。

---

## HETEROCHROMIA流の哲学

> **「美は壊れているからこそ美しい。歌うな、祈れ。」**

完璧/明るい/強いを志向する他のアーティストと正反対。**儚さ・不安定・崩壊**こそが美の核心という頽廃美学。共通ネガリストで音響品質を最高に保ちつつ、歌詞は太宰夢野的世界へ降りていく。

このアプローチが向く人:
- 太宰治・夢野久作的な文学が好き
- 古い歌謡曲を現代音楽に蘇らせたい
- Whisper↔Scream の振れ幅を使いこなしたい
- 「美しさ × 不安定」の繊細な美意識を追求
- Visual-Kei系の耽美ロックに親和性
- 「祈りのような歌唱」を実現したい

**注意:**
- ポジティブな曲は書きにくい (世界観が暗いため)
- BPM/Key未指定が多いので**Minor Keyだけは必ず明示**
- ジャンル多様性が高いため、サウンドの一貫性は歌詞テーマで担保する必要
