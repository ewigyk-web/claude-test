# 改善提案 — Yuto

10アーティスト分析と Yuto 25曲の比較から導いた具体的提案。
**強みは継続しつつ、弱点を補強する**方針で記述。

---

## 1. プロンプト書式の「テンプレ化」

### 現状の課題
Yutoのプロンプトは曲ごとに書式がバラバラ:
- 4語のみ (低意識上等ロック)
- 巨大日本語 (Don't Reset Me)
- ラベル形式 (灰色のHEART)
- カンマ列挙 (LIVEに行こうぜ)

→ 試行錯誤の証拠ではあるが、**毎回ゼロから書いている**ため効率が悪い。

### 提案: 自分用「3パターンテンプレ」を確立する

**テンプレA: 短文型 (Sunoに委任系)**
```
{ジャンル1}, {ジャンル2}, {ボーカル性別}, {ムード形容詞2-3個}, {BPM}
‑shout, ‑scream, ‑growl
```
→ 5-10タグで完結。eclipse/ランジェリースタイル。

**テンプレB: ラベル型 (構造化系)**
```
[Style]: {ジャンル列挙}
[Mood]: {形容詞}
[Vocal]: {性別+質感+ボーカルテンプレ流用}
[Instrument]: {楽器列挙}
[Mix]: {production}
[Negative]: {-排除タグ}
```
→ Dara/CK/HETEROCHROMIA系。再現性高い。

**テンプレC: シネマ進行型 (ドラマチック系)**
```
{ジャンル1} × {ジャンル2} × {ジャンル3}, BPM {数値},
Verse: {ボーカル質感}
Pre-Chorus: {ビルド}
Chorus: {爆発}
Bridge: {視点反転}
Final Chorus: {最大}
{ボーカルテンプレ流用}
```
→ Meikai Soul/kedaruge系。叙事詩系の楽曲に。

→ 楽曲タイプに応じて**3つから選ぶ**だけで、書式の試行錯誤時間が大幅削減できる。

---

## 2. BPM/Keyを必ず書く習慣

### 現状の課題
BPM明示は約半数のみ。Key明示はSORA1曲のみ。

→ 同曲再生成時のテンポ揺らぎが大きい。

### 提案
- **BPMは必ず数値指定** (148 / 150 / 175 等)
- **Key も Minor or Major を最低限指定**

例: `BPM 150, Minor key with Major key chorus`

→ Daraが8曲中7曲で BPM 明示しているのと同じ習慣を確立する。

---

## 3. 「自分のシグネチャー楽器」を確立する

### 現状の課題
Yutoには**全曲共通の楽器シグネチャ**がない。
- TenJR = Explorer + Les Paul + Freedom + TAMA + Zildjian
- Meikai Soul = 三味線 + 太鼓
- kedaruge = 木管 + Sub Bass

→ Yuto は曲ごとに楽器が違いすぎて、**「Yutoの音」**が定まっていない。

### 提案
熱血J-Rock曲では下記固定セットを採用:
```
Bright cutting electric guitar (UVERworld TAKUYA∞ style guitar tone),
melodic bass with octave pumping, punchy aggressive J-rock drums,
saxophone accents (UVERworld signature),
cinematic strings or pads in background
```

→ 楽器名を固定することで、**「Yuto = ○○な音」**の認識が広まる。

---

## 4. ネガリストの「自分テンプレ」を強化

### 現状の課題
en-dashネガを使うが、毎回違う組み合わせ。

### 提案: Yuto固定ネガリストを2種類用意

**Yuto共通ネガ (常用)**
```
‑shout, ‑scream, ‑growl, ‑lo-fi, ‑muddy mix, ‑buried vocals
```

**Yuto熱血曲用追加ネガ**
```
‑acoustic ballad, ‑sweet pop, ‑major-key anthem, ‑generic R&B
```

**Yuto和ロック曲用追加ネガ**
```
‑western metal, ‑pop punk, ‑bright pop
```

→ HETEROCHROMIA共通ネガリスト + Dara排除カタログ の良いとこ取り。

---

## 5. 「アーティスト固有モチーフ」の意識的活用

### 既に持つモチーフ (継続強化)
- 「もう一回」「ゼロから」「再生」
- 比較疲れ → 自己肯定

### 提案: シンボルワード化
ランジェリーが「ランジェリー」、kedarugeが「軌道/螺旋」を多義シンボルとして使うように、Yutoも以下を**全曲を貫くシンボル**として運用:

候補:
- 「鳴らす」(自分が音を立てる)
- 「ピンクの丸」(SUNOの通知 = LIKE LIKE LIKEから)
- 「画面」(画面の向こう/画面越し/画面の中)

→ 1単語を3-5曲で意味を変えて使うと、世界観の連続性が出る。

---

## 6. 歌詞テーマの幅を広げる

### 現状の偏り
- 比較疲れ → 自己肯定 (5曲以上)
- SUNOコミュニティ自己言及 (8曲)
- 仕事と音楽の両立 (3-4曲)

### 提案
Yutoが**まだ書いていないテーマ**を意識的に開拓:

| テーマ | 参考 |
|---|---|
| 文学オマージュ | eclipse (アルジャーノン), Dara (米津玄師的モチーフ) |
| 童話×科学 | kedaruge (積み木 + エントロピー) |
| シュール日常 | ランジェリー (ランジェリー干した焼きそばパン) |
| 死/狂気/儚さ | HETEROCHROMIA |
| 戦争/特攻 | HETEROCHROMIA (帝国の朝) |
| 人と化物の境界 | HETEROCHROMIA (Monster) |

→ 1曲はSUNOコミュニティ向け、もう1曲は**完全に文学/詩的**というように、**テーマ多様性**を意識する。

---

## 7. ボーカル指定テンプレの整理

### 現状
複数曲で同じテンプレ流用 (kobushi turns / Rolled R) は良い習慣。
しかし**男性Vo用テンプレが固定化していない**。

### 提案: 男女別の固定テンプレを作る

**Yuto男性Vo熱血テンプレ (UVERworld/HYDE系)**
```
Passionate Japanese male rock vocal with wide range,
bright emotional tone, powerful high register,
expressive vibrato, emotional falsetto transitions,
strong chest voice belting,
slightly husky but clear timbre,
intense emotional delivery, live rock performance energy
```

**Yuto女性Vo HYDE風テンプレ**
```
Female vocalist with a strong desire to sing like HYDE,
androgynous tone, expressive, high falsetto in chorus,
airy and emotional, raspy and husky,
breath-heavy airy vocal
```

**Yuto和ロック女性Voテンプレ (既に確立)**
```
Female vocal: sharp, very sultry, decadent, exaggerated vibrato,
frequent kobushi turns, Rolled R consonants,
sneering phrasing, playful sarcasm
```

→ 3つから選ぶだけで安定する。

---

## 8. Daraの「引き算」を熱血曲に取り入れる

### 現状の課題
熱血J-Rock曲 (LIKE LIKE LIKE / Break Through / SUNO讃歌) は**ポジティブ指示中心**で、ネガリストが薄い。

### 提案
Dara型の大量ネガリストを熱血曲にも適用:

```
‑metal, ‑metalcore, ‑death metal, ‑acoustic ballad,
‑lo-fi, ‑muddy mix, ‑buried vocals, ‑muddy guitar,
‑generic R&B, ‑trap beat, ‑dubstep drop,
‑bombastic orchestral trailer, ‑hero anime theme
```

→ 「アニメOP風」なのに「-anime hero theme」を排除 (オマージュ過剰防止)、ジャンル/ミックス両方を絞り込む。

---

## 9. シネマ的アレンジ進行の徹底活用

### 現状
Regeneration では超詳細なセクション指示 (kedaruge/HETEROCHROMIAスタイル) が成功している。NOTESで「サビのメロディは奇蹟」と自己評価。

### 提案
熱血曲 (LIKE LIKE LIKE / SUNO讃歌 / 1000 Ears 1000 Eyes) でも**Regenerationスタイル**を試す:

```
Verse 1: vocals: intimate, close-mic feel, almost speaking
Pre-Chorus: vocals: chest voice, building urgency, voice cracking
Chorus: vocals: raw belt, slight rasp, passionate, ff
Bridge: vocals: fragile whisper, breath audible, ppp
Final: vocals: layered triple harmony, main voice raw and unhinged, fff
```

→ ダイナミクスの設計が音像の質を決める。

---

## 10. プロンプト「文字数管理」の徹底

### 現状の課題
Don't Reset Me は700+文字の日本語プロンプト。**SKILL.md規約 (1000文字以内) に近い**が他曲も曖昧。

### 提案
- **PROMPT 1000文字以内** (既にSKILL.mdに記載)
- **LYRICS 5000文字以内** (既にSKILL.mdに記載)
- **チェック習慣**: 制作後に文字数を数える (bash で `wc -c`)

→ ルール遵守を徹底することで、Sunoに最適化された分量を維持できる。

---

## 11. ジャンル特化型の「シリーズ化」

### 提案
全曲多ジャンル分散だと**自分のサウンドが認識されにくい**。
解決策: シリーズ化で連続性を出す:

- **「SUNO日記」シリーズ**: SUNOコミュニティ自己言及テーマ (LIKE LIKE LIKE / 創造せえよ / 終日SUNO の続編)
- **「Sora」シリーズ**: 横浜みなとみらい/UVERworld的熱血 (SORA / Break Throughの続編)
- **「Wa-Rock」シリーズ**: 和ロック系 (呑め日本晴れ / 孤独は旧びたり / 混沌)
- **「多言語実験」シリーズ**: Tesoro y Colmilloの続編

→ 「Yutoの○○シリーズ」が定着すると、フォロワーの期待値が形成される。

---

## 12. 影響元アーティストを「明示参照」する

### 現状
NOTESで影響元を書くが、プロンプトには反映されないことが多い。

### 提案
プロンプトに参照アーティストを直接書く (dvupスタイル):

```
Strongly inspired by DAITA (SIAM SHADE)  ← Cloud OverDrive で実装済み
HYDE (L'Arc-en-Ciel) influenced female vocal  ← 灰色のHEART で実装済み
UVERworld TAKUYA∞ style guitar  ← Break Through に追加すべき
```

→ Sunoはこれらの参照を解釈する場合がある。試す価値あり。

---

## 13. 「楽曲シリーズ番号」の運用

### 提案
NOTESに**シリーズ番号**を付ける:

```
[Series: SUNO日記 #5]
[Series: 和ロック #4]
[Series: 多言語実験 #2]
```

→ 自分自身の制作管理に役立ち、リスナーへの体系性も伝わる。

---

## 14. 「失敗曲」の記録

### 現状
NOTESには成功体験のみ。失敗は記録されていない。

### 提案
NOTESに **失敗の振り返り** を加える:

```
学び: メタタグ盛りすぎると曲調が崩壊する (この曲の場合)
学び: ジャンル6個クロスはSunoが解釈できなかった
学び: 多言語混合は3言語までが限界か
```

→ 学習速度が加速する。

---

## 15. 完全に書かない曲も試す

### 現状
プロンプト極小は4曲のみ。

### 提案
**eclipse/ランジェリースタイルの完全省略プロンプト**を意識的に試す:
- 1ヶ月に1曲は完全に空でやってみる
- 1単語 (`drum and bass` だけ) で試す

→ Sunoの自動解釈の精度を肌で知る。プロンプト過剰に頼る癖を矯正する。

---

## 優先順位 (ROI高い順)

1. **プロンプト3パターンテンプレ確立** (即効性、毎回の制作時間削減)
2. **BPM/Keyを必ず書く** (再生成の安定性向上)
3. **男女別ボーカルテンプレ整理** (ボーカルブレ解消)
4. **アーティスト固有モチーフ強化** (世界観の連続性)
5. **歌詞テーマの幅を広げる** (新たな鉱脈開拓)
6. **シリーズ化** (フォロワー期待値の形成)
7. **シネマ的アレンジ進行の熱血曲適用** (Regeneration成功の横展開)

---

## まとめ: Yutoの次の一歩

> **「強みを残しつつ、書式とテンプレを固定して、シリーズ化と歌詞テーマ拡張で次の段階へ。」**

Yutoは既に**多くの武器を持っている**。次に必要なのは「散らかった武器を整理する」こと。
- 3パターンプロンプトテンプレ
- 男女別ボーカルテンプレ
- BPM/Key必須化
- シリーズ命名

これらを確立するだけで、制作スピードと一貫性が劇的に向上する。
