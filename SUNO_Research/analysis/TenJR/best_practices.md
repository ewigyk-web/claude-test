# ベストプラクティス（こう書くとこうなる集）

## 1. 音色を「実機材名」で固定する

| こう書くと | こうなる |
|---|---|
| `distortion guitars (Explorer + Les Paul) with gritty live amp tone` | 太く中域の張ったメタル/ハードコアの王道トーン |
| `Heavy growling overdriven distortion bass (Freedom Custom Guitar Research style)` | ベースが楽曲の主役級まで前に出る |
| `TAMA drum kit, Zildjian cymbals cutting sharply through the mix` | スネアが抜け、シンバルがミックス上部で切れる |

→ 「genre + adjective」より「実機材 + 質感形容詞」のほうが安定する。

## 2. ネガティブプロンプトは「3類型」で使い分ける

| 目的 | 書き方 |
|---|---|
| 仕上げを荒らしたい | `No studio polish`, `No clean polish — keep it raw, noisy, aggressive, and human` |
| 楽器を絞りたい | `No piano, no pads, no bass, no drums` (アコ曲で有効) |
| 構造を守りたい | `No remixing, no restructuring, no added sections, no extended intro, no extended outro` |

→ ネガを混ぜず、目的別に1ブロックずつ書く。

## 3. カバー/再生成では「Lock指示」を冒頭に置く

```
[Strictly preserve the original vocal melody, phrasing, and emotional flow.]
[Do not change the melody.]
[Keep the original BPM, key, structure, arrangement, and song length exactly.]
```

→ Sunoは"指示が後ろにあるほど弱い"傾向があるため、保護したい属性は冒頭に固める。

## 4. シーン描写でミックス/質感を誘導する

| 書き方 | 引き出される質感 |
|---|---|
| `Performed in a 300-capacity underground live house. Low ceiling, dense heat` | 自然なルームリバーブ、密度のあるライブ感 |
| `Crowd of around 300 people shouting and clapping along` | 観客SE、合いの手の入り |
| `Close-mic, emphasizing string noise and body resonance` | ギターの弦ノイズ、ボディ感 |

→ ミックス用語より物理空間描写のほうがAIに伝わりやすい。

## 5. 歌詞の「日英コードスイッチ」設計

パターン: 英語フック → 日本語感情 → 英語フック → 日本語感情

```
Craving distortion!!!
あの鼓動を　もう一度刻め
Craving distortion!!!
胸を焦がす　轟よ
```

→ サビの輪郭は英語の短語で、感情の核は日本語で。AIは英語のリズム解釈が安定するため、フックは英語推奨。

## 6. ライブ感を出す3点セット

```
[Slight microphone feedback at the intro.]
[Natural underground venue reverb.]
[Crowd of around 300 people reacting loudly.]
```

→ フィードバック+空間+観客。3点揃うとスタジオ録音感が消える。

## 7. ボーカルの質感は「形容詞4連」で固定

例: `Rough shouting distortion vocal with breath, strain, and raw live intensity`

→ 単一形容詞では弱い。`{物理状態} + {動作} + {ジャンル} + vocal with {質感1}, {質感2}, {質感3}` の構文。

## 8. 構造マーカーを日英混在で書く

`【Verse 1】` `【Pre-Chorus 1】` `【Chorus 1】` `【Bridge】` `【Final Chorus】`

→ 全角括弧でも認識される。番号付きのほうが構造が安定する。

## 9. PROMPT欄とLYRICS欄の二重記述

PROMPT欄: 1段落に詰めて書く（カンマ区切り）。
LYRICS欄冒頭: 同内容を `[行頭]` 形式で再掲。

→ TenJRはこれを全曲で実施。反映率の保険として有効。

## 10. アウトロは「2行リフレインの3〜4連」

```
Goodbye, my overdue youth
Goodbye, my beautiful rock and roll
（×4回）
```

→ AIに自然なフェードアウトを促せる。最終Chorusの前後に必ず置くと収まりが良い。
