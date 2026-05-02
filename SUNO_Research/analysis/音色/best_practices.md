# ベストプラクティス — 音色 (Neiro)

## 1. ボーカル指示は「キャラ + 質感 + ネガ」の3段構え

```
{キャラ路線}: cute Japanese female voice, soft and airy, slightly sleepy deadpan tone (Neiro-style)
{質感詳細}: gentle sparkle on the highs, breathy, warm, emotional
{ネガ}: no harsh treble, no bright metallic edges, no aggressive distortion
```

→ ポジティブ指示だけでは「他のキャラ性」がにじみ出てしまう。**他キャラを排除するネガを必ず添える**。

## 2. 同一ボーカルでキャラを切り替える「排除型ネガプロ」

| 狙い | 排除すべき要素 |
|---|---|
| クール路線 | `Absolutely no cutesy inflection or idol tone` |
| 強気ロック | `not too cute, not too soft` |
| ゲーム可愛い | `Not Sexy, Not Deep` |
| 和繊細 | `NOT powerful, NOT aggressive` |
| Jersey透明rap | `Cute but not childish` |

→ 「自分が普段出すキャラ」を**他楽曲の指示から推測してブロック**する。

## 3. セクション別に独立指示を書く

```
Verse1 = glitchy 8bit pulses, cool detached vocal
Hook1  = bright chip arps + strong vocals with bitcrushed harmony
Verse2 = airy bells, soft pads, warm breathy vocal
Bridge = rising pads, shimmering arps, floating voice
Final  = uplifting hyper-saw + powerful emotional vocal
```

→ 1曲を5幕構成のドラマとして設計。Verse2や Final で楽器・ボーカルを変化させる。

## 4. ジャンルは「× で2-3軸」クロス

| 例 | 効果 |
|---|---|
| `Emotional chipcore × future bass hybrid` | チップチューンに感情の上物 |
| `Jersey Club × Kawaii Jersey × Sugar Pop Trap` | 跳ね系 + 可愛さの密度 |
| `Japanese Mythic HipHop × Dark Wa-Rap` | 和楽器ベースのHipHop |
| `Japanese HipHop × icy UK drill` | クールラップに冷たい質感 |

→ 全曲この合成パターン。CKと共通する効果。

## 5. フックは「擬音 + タイトル + 掛け声」の三点セット

| 曲 | フック構成 |
|---|---|
| B連打 | `BBBB BBBB…` (擬音) → `B連打` (タイトル) |
| Ratta-tta! | `Ratta-tta!` (擬音 + タイトル一体) |
| クリティカルヒット | `Critical Hit！(ぴこっ)` (タイトル + ゲーム効果音) |
| Bite the Bullet | `(Woah-oh, woah-oh)` (観客コール) → `Bite the Bullet!` |

→ サビフックを"耳で覚える擬音"にすると、AIも反復しやすい。

## 6. 日英対訳を併記する

```
{日本語フル歌詞}

*☼*―――――*☼*―――――*☼*―――――*☼*

『曲名』 — English Lyrics (Singable Version)
{英語フル歌詞}
```

→ 1ファイルに両言語入れる。再生成時にどちらでも歌わせられる。

## 7. アーティスト名を歌詞に埋め込む

```
わたしがいなくなった世界で
今日も弱い子 よしよししているの？
…
もっとぶち上げるNeiroの宇宙
```

→ Vチューバー/アイドル運用なら、自分の名前を1曲に1-3回入れて世界観を固定。

## 8. ネガティブ表現の強度は「全大文字」で書ける

```
NOT powerful, NOT aggressive, translucent and delicate presence
```

→ 通常の `not` よりも強く効く印象。`Absolutely no XXX` も同様の強調。

## 9. 構造マーカーは小文字 [verse1] [hook] が音色流

`[Verse 1]` `[Chorus]` ではなく `[verse1]` `[hook]` で統一すると、ラフな雰囲気が出る。
→ Final hook、Pre Chorus2 等の派生も小文字で揃える。

## 10. 「カウンター/反逆」テーマの構造

```
A. 抑圧の描写 (Verse)
   ↓
B. 自分の声/武器の宣言 (Pre-Chorus / Hook)
   ↓
C. 反転の決意 (Bridge)
   ↓
D. 解放のフック (Final Hook + Outro宣言)
```

→ 音色の歌詞テーマ装置。「綺麗な言葉を使え」 → 「知るかよ うるせぇな」のような直接反論を1曲のどこかに必ず置く。

---

## 流用Tips (音色式まとめ)

- 同じボーカルで複数キャラを使い分けたい → **排除型ネガプロ**を必ず添える
- 1曲をドラマチックに → **セクション別独立指示**
- 多言語展開 → **日英対訳併記**を最初から組み込む
- フックの記憶定着 → **擬音 + タイトル + 効果音**の三点セット
