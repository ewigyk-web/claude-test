# search.py
# お題を入力して関連特許を検索し、結果をExcelに保存する

import chromadb
from chromadb.utils import embedding_functions
import pandas as pd
from datetime import datetime
import os

DB_PATH = r"C:\Users\YutoYokoyama\OneDrive - Connected Robotics Inc\デスクトップ\claude test\patent_rag\db"
SAVE_DIR = r"C:\Users\YutoYokoyama\OneDrive - Connected Robotics Inc\デスクトップ\claude test\patent_rag\results"

def search(query: str, n_results: int = 10):
    ef = embedding_functions.SentenceTransformerEmbeddingFunction(
        model_name="paraphrase-multilingual-MiniLM-L12-v2"
    )
    client = chromadb.PersistentClient(path=DB_PATH)
    collection = client.get_collection("patents", embedding_function=ef)

    results = collection.query(query_texts=[query], n_results=n_results)

    rows = []
    for i in range(len(results["ids"][0])):
        meta = results["metadatas"][0][i]
        score = 1 - results["distances"][0][i]  # コサイン類似度（高いほど関連）
        rows.append({
            "スコア": round(score, 4),
            "出願番号": meta.get("出願番号", ""),
            "名称": meta.get("名称", ""),
            "出願人": meta.get("出願人", ""),
            "出願日": meta.get("出願日", ""),
            "URL": meta.get("URL", ""),
        })

    df = pd.DataFrame(rows)

    # 結果をExcelに保存
    os.makedirs(SAVE_DIR, exist_ok=True)
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    safe_query = query[:30].replace("/", "").replace("\\", "").replace(":", "")
    filename = f"{SAVE_DIR}\\{timestamp}_{safe_query}.xlsx"
    df.to_excel(filename, index=False)

    print(f"\n【検索クエリ】{query}")
    print(f"【結果 上位{n_results}件】")
    print(df.to_string(index=False))
    print(f"\n結果を保存しました: {filename}")
    return df

if __name__ == "__main__":
    print("特許RAG検索システム")
    print("=" * 40)
    query = input("検索お題を入力してください: ")
    n = input("取得件数 (デフォルト10): ").strip()
    n = int(n) if n.isdigit() else 10
    search(query, n)
