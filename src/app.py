from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from math import radians, sin, cos, sqrt, atan2
import random

app = Flask(__name__)
CORS(app)

# Load dataset
df = pd.read_csv("Assets/Dataset.csv")

# Add mock coordinates (Replace with real ones if available)
random.seed(42)
df["Latitude"] = [30.3165 + random.uniform(-0.03, 0.03) for _ in range(len(df))]
df["Longitude"] = [78.0322 + random.uniform(-0.03, 0.03) for _ in range(len(df))]

def recommend_ngos(lat, lng, interests):
    query = " ".join(interests)
    vectorizer = TfidfVectorizer()
    tfidf_matrix = vectorizer.fit_transform(df["Services Provided"].fillna(""))
    query_vec = vectorizer.transform([query])
    df["Service Score"] = cosine_similarity(query_vec, tfidf_matrix).flatten()

    def haversine(lat1, lon1, lat2, lon2):
        R = 6371
        dlat, dlon = radians(lat2 - lat1), radians(lon2 - lon1)
        a = sin(dlat/2)**2 + cos(radians(lat1)) * cos(radians(lat2)) * sin(dlon/2)**2
        return 2 * R * atan2(sqrt(a), sqrt(1 - a))

    df["Distance (km)"] = df.apply(lambda row: haversine(lat, lng, row["Latitude"], row["Longitude"]), axis=1)

    # Sort by distance only
    df_sorted = df.sort_values(by="Distance (km)", ascending=True)
    top5_names = df_sorted.head(5)["NGO Name"].tolist()
    df_sorted["is_top5"] = df_sorted["NGO Name"].isin(top5_names)

    return df_sorted[["NGO Name", "Services Provided", "Latitude", "Longitude", "Distance (km)", "is_top5"]].rename(
        columns={"NGO Name": "name", "Services Provided": "services", "Latitude": "latitude", "Longitude": "longitude"}
    ).to_dict(orient="records")

@app.route("/api/match-ngos", methods=["POST"])
def match_ngos():
    data = request.json
    lat, lng = data["lat"], data["lng"]
    interests = data["interests"]
    return jsonify(recommend_ngos(lat, lng, interests))

@app.route("/api/all-ngos", methods=["GET"])
def all_ngos():
    return jsonify(df[["NGO Name", "Services Provided", "Latitude", "Longitude"]].rename(
        columns={"NGO Name": "name", "Services Provided": "services"}
    ).to_dict(orient="records"))

if __name__ == "__main__":
    app.run(debug=True)