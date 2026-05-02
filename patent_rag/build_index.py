# build_index.py
# Excelの特許データを読み込み、ChromaDBにインデックスを作成する

import pandas as pd
import chromadb
from chromadb.utils import embedding_functions
import os

# openpyxlのスタイルエラーを無視するパッチ
from openpyxl.descriptors.base import Set
_orig_set = Set.__set__
def _lenient_set(self, instance, value):
    try:
        _orig_set(self, instance, value)
    except ValueError:
        pass
Set.__set__ = _lenient_set

EXCEL_PATH = r"C:\Users\YutoYokoyama\OneDrive - Connected Robotics Inc\デスクトップ\配食システム調査\配食　ジェスチャー.xlsx"
DB_PATH = r"C:\Users\YutoYokoyama\OneDrive - Connected Robotics Inc\デスクトップ\claude test\patent_rag\db"

def build():
    print("Excelを読み込み中...")
    df = pd.read_excel(EXCEL_PATH, sheet_name="records")
    print(f"  {len(df)} 件の特許データを読み込みました")

    # 検索対象テキストを結合（名称＋要約＋AIサマリー）
    def make_text(row):
        parts = []
        for col in ["名称", "要約", "AIサマリー 一文要約 (JP)", "AIサマリー 保全 (JP)", "AIサマリー 課題 (JP)"]:
            if col in df.columns and pd.notna(row.get(col, "")):
                parts.append(str(row[col]))
        return " ".join(parts)

    texts = df.apply(make_text, axis=1).tolist()
    ids = [str(i) for i in range(len(df))]

    # メタデータ（検索結果に表示する情報）
    def make_meta(row):
        meta = {}
        for col in ["出願番号", "名称", "出願人", "出願日", "URL"]:
            if col in df.columns and pd.notna(row.get(col, "")):
                meta[col] = str(row[col])
        return meta

    metadatas = df.apply(make_meta, axis=1).tolist()

    # ChromaDB初期化（多言語対応の埋め込みモデル）
    print("埋め込みモデルを読み込み中（初回は数分かかります）...")
    ef = embedding_functions.SentenceTransformerEmbeddingFunction(
        model_name="paraphrase-multilingual-MiniLM-L12-v2"
    )

    os.makedirs(DB_PATH, exist_ok=True)
    client = chromadb.PersistentClient(path=DB_PATH)

    # 既存コレクションがあれば削除して再作成
    try:
        client.delete_collection("patents")
    except:
        pass
    collection = client.create_collection("patents", embedding_function=ef)

    print("インデックスを作成中...")
    # 50件ずつバッチ処理
    batch_size = 50
    for i in range(0, len(texts), batch_size):
        collection.add(
            documents=texts[i:i+batch_size],
            ids=ids[i:i+batch_size],
            metadatas=metadatas[i:i+batch_size],
        )
        print(f"  {min(i+batch_size, len(texts))}/{len(texts)} 件完了")

    print(f"\n完了！{len(df)} 件の特許をインデックスしました。")

if __name__ == "__main__":
    build()
