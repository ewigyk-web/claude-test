# ベストプラクティス — dvup

## 1. 参照アーティストを曲ごとに切り替える

dvupは曲ごとに異なるアーティストを参照:
- X JAPAN風 → Through the fire, Eternel
- BABY METAL風 → Black Nova
- 黒夢風 → ギルティ
- 90年代V系金字塔 → クローリー, 枯樹華ヲ生ズ
- 御本人ボイス → 緋ト蒼

→ Dara (1人を追求) と違い、**メタル/V系の中で目標を切り替える**。曲のテーマに応じて参照アーティストを選ぶ。

## 2. 「ライブ感タグ + ジャンル本体」の2段プロンプト

```
[1段目]
live performance, concert atmosphere, crowd noise, audience cheering,
call and response, raw sound, room reverb, energetic stage presence,
less polished mix, dark experimental metal, organic raw textures, psychological horror atmosphere

[空行]

[2段目]
symphonic melodic power metal, japanese showa kayou, fast tempo, female vocal,
neoclassical metal, dramatic orchestration, emotional strings, epic choir,
double bass drums, melodic guitar solo, lyrical melody
```

→ ライブ感を**最初に確立**してから、ジャンル詳細を書き加える。ステージ感が立ち上がる。

## 3. メタルサブジャンルを5-10個列挙

```
math core, chaotic hardcore, thrash metal, metallic hardcore, death thrash,
blast beats, double kick drums, dissonant riffs, fast tempo, melodic chorus,
aggressive screams, high energy, emotional intensity
```

→ メタル系統内で**多軸クロス**。Meikai Soulと違い、ジャンル軸はメタルから外さない。

## 4. ボーカルは4タイプから選ぶ

| タイプ | 指定例 |
|---|---|
| 男性デスボイス | `male death vocals, existential horror` |
| 男性クリーン高音 | `pure clean male vocal, soaring high-register with vibrato and falsetto, no scream, no growl` |
| 女性高音 sustained | `powerful high-range female vocal with clear tone and sustained high notes` |
| 女性 Sweet → Aggressive | `Female vocals shifting between sweet childish tones and aggressive, near-screaming delivery` |

→ メタル特化の中で**4タイプを楽曲ごとに使い分ける**。

## 5. BPM は範囲指定で書く

```
mid-tempo to slightly fast BPM (160–190)
185-200 BPM
130-150 BPM
85-95 BPM
210 BPM, switching to 150 BPM for the melodic parts
```

→ 単一値でなく**範囲**で指定。AIに余裕を持たせる。

## 6. 楽器はプレイヤー視点で書く

```
melodic twin lead guitars with less neo-classical shredding, more emotional phrasing
fast driving riffs with strong rhythmic focus rather than scale runs
fuzzy overdriven guitars playing simple but biting riffs, occasional octave riffs
down-tuned riffs, palm-muted chugs, crushing breakdowns
```

→ 単に「distorted guitar」でなく、**「何をどう弾くか」**まで指定。

## 7. オーケストラ的劇場感を入れる

```
dramatic orchestration, emotional strings, epic choir
anthemic and cinematic climax
solemn and theatrical production
cinematic sound design, rich reverb, powerful and immersive
```

→ シンフォニックメタル系では**オーケストラ要素**を必ず明示。

## 8. 歌詞は「闇 → 再生」のメタル王道アーク

```
Verse: 痛み・絶望の描写
   ↓
Pre-Chorus: 緊張・燃え上がり
   ↓
Chorus: 「Run with me」「I will rise」のメタル叙事詩宣言
   ↓
Final: 灰から立ち上がる
```

例 (Eternel):
- 起: `Frozen tears on broken ground`
- 結: `From the ashes I ascend / This is not the end`

## 9. メタル王道語彙バンクを使う

頻出英語語彙:
- Fire / Flame / Burning / Crimson / Scarlet
- Storm / Thunder / Rain / Ashes
- Wings / Fly / Soar / Rise / Ascend
- Eternity / Forever / Endless / Beyond
- Soul / Heart / Spirit / Faith / Vow
- Sacred / Divine / Holy / Curse

→ **英語メタル叙事詩語彙**を効果的に使う。

## 10. V系日本語の耽美漢字

V系/黒夢系曲では:
```
紅い花 / 蒼白い大地 / 十字架 / 虚無 / 空白
飼い主 / 死神 / 淫乱 / 支配 / 交配 / 支離滅裂
咲けない花 / 枯れた華 / 朽ちていく / 偽物
```

→ 黒夢/Dir en grey 的な**耽美漢字**を選ぶ。

## 11. サビは反復フックで畳みかけ

```
Run with me through endless pain × 4
Nova, nova × 12
Éternel — × 6
Na-na-na, ... × 4
```

→ 90年代スタジアムロック/メタル王道の徹底反復。

## 12. 異色実験を1曲は入れる

dvupは特異作を持つ:
- Metal Tiger: ロリポップ子守唄 × メタル
- SUNSCREEN FAILURE: 中東風 × ブラックユーモア (イカロス)

→ メタル枠内で**異種混合実験**を試みる。コレクターの遊び心。

## 13. 「子守唄構文」でホラーを書く

Metal Tiger の手法:
```
Hush now！Hush now！Hush now！
Tiny stars on painted walls
Clockwork shadows down the hall
Soft paws tap the metal floor
Don't look back—he's at the door

Na-na-na, sleep so tight
Metal tiger says good night
```

→ Twinkle Twinkle 系の優しい構文で**ホラーを書く**。SunoのVo指定を「Cute Loli Pop」にすることで、可愛さと恐怖が同居。

## 14. ブラックユーモアでメタルを書く

SUNSCREEN FAILURE の手法:
```
Look at me, I'm almost god
Borrowed wings, discount fraud
Selfie pose, halo bent
Burnt feathers, confidence
```

→ 神話 (イカロス) を**現代SNSのブラックジョーク**で再構築。

## 15. NOTES欄に「○○風味」評価を残す

dvupの記録習慣:
```
X JAPAN風味のシンフォニックメタル。
BABY METAL風味の女性ボーカル×シンフォニックメタル。
黒夢風味のボーカル×少し古めのロック
御本人ボイス。元ボーカルだからクソ上手い。
超名曲。90年代V系ロックの金字塔と言われても信じるくらい。
```

→ 自作の**参照アーティスト + 自己評価**を1行残す。後の解析や流用に役立つ。

## 16. 「色彩 × 生死」の対句タイトル

dvup固有のタイトル術:
- 緋ト蒼 = 緋色 × 蒼色
- 枯樹、華ヲ生ズ = 枯れる × 咲く

→ V系/メタル的な**対比構造**をタイトルに込める。

---

## dvup流の哲学

> **「メタルの全時代を集めろ。参照アーティストを切り替えろ。耽美と轟音を両立せよ。」**

Daraが単一モデル (米津玄師) を追求するのに対し、dvupはメタル/V系の**全方位コレクター**。各時代/サブジャンルの参照アーティストを使い分け、英語メタル叙事詩から黒夢的耽美まで自在に書く。

このアプローチが向く人:
- メタル/V系のあらゆるサブジャンルが好き
- X JAPAN / BABY METAL / 黒夢 / Dir en grey などの引き出しがある
- 英語メタル歌詞を書きたい
- 異色実験 (ロリポップ×メタル等) を試みたい
- 自分の音楽的引き出しの広さを示したい

**注意:**
- メタル枠から外れない (acoustic/ambientには弱い)
- ネガプロが薄いので、想定外方向への振れに注意
- 自賛系NOTESは客観評価とのバランスを意識
- BPM範囲指定なので、再生成時の揺らぎを許容する必要
