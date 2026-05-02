# プロンプトテンプレート — ランジェリー (ジャンル別)

`{}` を埋めて使う。ランジェリーの実例から抽出。
**特徴: プロンプトは極限まで簡素にし、歌詞で勝負する。**

---

## A. ミニマル省力型 (基本テンプレ)

### PROMPT欄
```
{ジャンル1}, {ジャンル2}, {ジャンル3}
```

例:
- `pop rock, punk, indie`
- `anthemic, rock, pop rock`
- `indie, spoken word, drum and bass`

→ 3〜5タグだけ。それ以上は書かない。

---

## B. PROMPT空 + Persona利用

### PROMPT欄
```
(空)
```

### NOTES欄
```
Persona {Persona名} を使用
```

→ 保存済みPersonaを呼ぶ方式。プロンプト記述ゼロで楽曲生成。

---

## C. 単一ジャンルだけ指定

### PROMPT欄
```
drum and bass
```

→ 1ワードのみ。残りは歌詞とAIの自由解釈に委ねる。

---

## D. ジャンルタグ冗長重ね型

### PROMPT欄
```
acoustic guitar, acoustic, electric guitar, indie pop, pop, japanese, rap, indie, electric
```

→ 同じカテゴリのタグを意図的に重複させる (acoustic / acoustic guitar)。

---

## E. アンセム系メロディックハードコア

### PROMPT欄
```
upbeat melodic hardcore, singalong, positive
```

→ 3タグ。詳細は歌詞の英語シャウト (HAND IN HAND等) で担保。

---

## F. ボーカル性別だけ指定

### PROMPT欄
```
{ジャンル1}, {ジャンル2}, female vocals
```
or
```
{ジャンル1}, {ジャンル2}, shouty male vocals
```

→ 性別と1〜2語のテンション指定だけ。トーンや質感は書かない。

---

## G. 高速ラップ型 (例外的に詳細指定)

### PROMPT欄
```
rap, Japanese alternative rock rap, modern J-rock, fast tempo, BPM 175-185,
emotional, intense, minimal, emotional, strong, rapid, rhythmic,
alternative rock, j-rock, rock
```

→ 12曲中唯一の詳細プロンプト。**ラップ精度が必要な時のみ**この粒度。

---

## H. 「相対指定」型 (BPM未明示でテンポ感だけ伝える)

### PROMPT欄
```
slower tempo, acoustic focused, minimal arrangement
```

→ BPMの数値ではなく、`slower` / `faster` / `mid-tempo` で相対指定。

---

## 共通: 歌詞構造テンプレ (ランジェリー流)

```
【Aメロ】
{日常スケッチ or 状況描写 4-8行}

【Bメロ】
{緊張ビルド or 視点ズーム 4行}

【サビ】
{キーフレーズ + メタファー 4-8行}
{タイトルや繰り返し語を1-2回}

【2番Aメロ】
{Aメロの変奏。新しい角度}

【2番Bメロ】
{Bメロの強化}

【サビ2】
{サビの変奏。比喩を発展}

【Cメロ】(任意)
{設問 or 哲学的問いかけ}

【ラスサビ】
{サビの最大拡張版。意味を深める}

【アウトロ】
{静かな余韻 or アーティスト名/モチーフ語のサインオフ}
```

---

## 重要: 歌詞のチェックリスト (ランジェリー風を再現するため)

- [ ] 全角【】で構成マーカーを書いたか
- [ ] 「君と僕」の二人称が中核にあるか
- [ ] 対句構造 (2行 or 4行並列) を1ヶ所以上入れたか
- [ ] 設問形式 (「〜ですか？」) を1ヶ所以上入れたか
- [ ] 現代用語 (サブスク/SNS/規約等) でメタファーを作ったか
- [ ] 自分のアーティスト固有モチーフを最低1曲で多義的に使い回しているか
- [ ] 過度な英語コードスイッチを避けたか (英語は装飾程度に)
- [ ] BPM/Keyを書かない勇気があるか

---

## 流用Tips

- **書きすぎない勇気**: ランジェリー方式を真似るなら、プロンプトに10タグ以上書かない。
- **歌詞で勝負**: 音響的こだわりは諦め、歌詞の世界観に全振り。
- **再生成耐性**: BPM未指定なので、気に入った世代を保存し、再生成は別物として扱う割り切り。
- **Persona併用**: 自分の声を1度作って保存しておき、以降のプロンプトはタグだけにする運用。
