# ベストプラクティス — kedaruge

## 1. 「音楽用語の高密度カタログ」でプロンプトを構築

| こう書くと | こうなる |
|---|---|
| `granular synthesis, FM bell tones, analog bass modwheel` | 粒子状の電子テクスチャ |
| `sidechained ghost pads, tape saturation` | アナログ機材の有機的圧縮感 |
| `polymeter, off-grid shuffled swing, asymmetrical micro-beats` | 不規則な拍節構造 |
| `binaural depth, 3D soundstage, extreme stereo width` | 立体的な音場 |
| `glass harp, handpan, reverse piano` | 異種楽器のテクスチャ |

→ ジャンル名だけでなく、**音響制作の現場用語**を並べる。プロエンジニアが書くようなプロンプト。

## 2. ラベル形式で要素を分割記述

```
[Style: Drum and Bass, Cute Electronic]
[Mood: Euphoric, Airy, Playful]
[Energy: Floating]
[Beat: Fast Breakbeat]
[Instrument: Flute, Clarinet, Piccolo, Soft Pads, Sub Bass]
[FX: Reverb, Delay, Filter Sweeps, Sparkle Textures]
[Vocal: Sweet, Light, Feminine]
```

→ Style/Mood/Energy/Beat/Instrument/FX/Vocal を独立したラベルで管理。Sunoが解釈しやすい。

## 3. 「木管 × Sub Bass」の対比楽器を固定する

```
Warm, organic woodwind ensemble (clarinet, bassoon, flute),
deep sub-bass, distorted growl bass, half-time rhythm, aggressive wobble bass
```

→ "ふわふわ × ズシン"の対比設計。ジャンル横断で適用可能。

## 4. ネガティブは「-」記号で短く

```
‑Electric Guitar, ‑Brass Sections, ‑Orchestral Strings
```

→ 通常の `No XXX` より短い。プロンプト文字数節約に有効。

## 5. 「進行設計」を文章ストーリーで書く

```
Begins as a fragile, intimate acoustic ballad with lots of space and silence,
... Gradually builds tension and emotional —focus on dynamics, breath
Chorus explodes into raw emotion: ...
Immediately after the chorus, strip everything back to the original quiet
Just before the final chorus, raise the pitch by a semitone
```

→ 静→動→静→転調 の流れを文章で記述。映画音楽の指示書として読める。

## 6. 「沈黙」をプロンプトに組み込む

```
Frequent silence cuts, hard stops, glitch edits, and reverse reverb
silence breaks, sidechain pumping, sparse to explosive arrangement
sudden dropouts
```

→ CKは歌詞に `(silence)` を書くが、kedarugeは**プロンプトで構造的沈黙を指定**。

## 7. 歌詞に科学・哲学用語を比喩として投入

| 用語 | 例 |
|---|---|
| エントロピー | `積み木の街は エントロピーの果て` |
| クオリア | `クオリアの影を 踏みつけながら` |
| シミュラクラ | `シミュラクラ クラ、クラ` |
| アポリア | `アポリアの 迷路を抜けて` |
| 位相空間 | `泣きむしで歪む 位相空間` |
| 力学的揺らぎ | `力学的揺らぎを伴う、ぼくらの大冒険` |
| ロゴス | `砕け散ったロゴス` |

→ 専門語を「比喩のスパイス」として使う。1曲に3〜10語が適量。

## 8. 童話と知性を意図的に同居させる

公式: `童心モチーフ + 専門用語`

| 童心モチーフ | 専門用語 | 結果 |
|---|---|---|
| 積み木の街 | エントロピーの果て | 崩壊する子ども時代 |
| 赤い三輪車 | クオリアの影 | 主観経験の哀愁 |
| もういいかい？ | 不思議な周波数のお返事 | かくれんぼの量子化 |
| ビスケットの断片 | 等隔の軌跡 | 道標の数学 |

→ "無邪気"と"知性"の温度差が世界観の核。

## 9. ルビで漢字を音楽的に読み替える

```
色（うつり）は牢獄
彩（かざり）は救済
未来（あす）
拳（コブシ）
```

→ ランジェリーと共通だが、kedarugeは**抽象概念の漢字に大和言葉の読み**を当てる傾向。

## 10. 括弧書きで「内的呟き」レイヤーを作る

```
[Pre-Chorus]
集めた水滴　宙を舞う
（もうすぐ、ひらくよ）

[Chorus]
あふれだす波に　身をまかせて
（そっと、ふれて、ほどける）
```

→ メインボーカルと並行する**囁きのトラック**。物語に二重構造を作る。

## 11. リフレインを「主語+は+抽象動詞」で連打

```
薄紅は振動
菫は溶解
翡翠は胎動
琥珀は凍結
深緑は収束
山吹は抱擁
色（うつり）は牢獄
彩（かざり）は救済
```

→ 辞書のような項目列挙形式。8連で完結する印象的サビ。

## 12. オノマトペで音圧を視覚表現

```
ボコ。ボコ。ボコボコﾎﾞｺﾎﾞｺ。
ガラン！ガラン！ガランガランガランｶﾞﾗﾝ！
シー、ハハッ♪
```

→ 全角→半角への遷移で**音圧の縮小/エコー**を視覚化。文字種そのものを音響表現に使う。

## 13. 同じ歌詞で「異音響アレンジ」を作る

Flora (Future Bass) と Spectrum (Glitch Dream Hop) は**同一歌詞**。
プロンプトのみ差し替えて、別アレンジ版を生成する研究的アプローチ。

→ 歌詞を固定し音響を実験するA/Bテスト方式。

## 14. アーティスト固有モチーフ反復

kedaruge頻出モチーフ:
- 軌道 / 螺旋 / 階段
- 迷宮 / 鳥籠 / 隠れ家
- 光 / スペクトル / 色
- 軌跡 / 旅路 / 森

→ 自分専用の「象徴ボキャブラリー」を5〜10語確立し、複数曲で使い回す。

---

## kedaruge流の哲学

> **「音響は工学で書け。歌詞は哲学童話で書け。」**

プロンプトには音響工学の語彙を、歌詞には科学哲学の比喩を。両者を木管楽器とサブベースの対比で接続することで、kedaruge特有の"知的童話"音像が生まれる。

このアプローチが向く人:
- 音響制作の知識がある (DAW/シンセ用語に詳しい)
- 哲学/科学/文学の語彙を比喩に使うのが好き
- 童話的世界観と実験的音響を両立したい
- Future Bass / IDM / Math Rock 系が好み
