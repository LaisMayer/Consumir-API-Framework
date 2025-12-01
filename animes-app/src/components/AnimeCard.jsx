import React from "react";
import { Link } from "react-router-dom";

export default function AnimeCard({ anime }) {
  return (
    <Link to={`/anime/${anime.mal_id}`} style={{ textDecoration: "none" }}>
      <div style={styles.card}>
        <img src={anime.images.jpg.image_url} alt={anime.title} style={styles.img} />
        <h3 style={styles.title}>{anime.title}</h3>
        <p style={styles.score}>⭐ {anime.score}</p>
      </div>
    </Link>
  );
}

const styles = {
  card: {
    background: "#fff",
    padding: 10,
    borderRadius: 8,
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    cursor: "pointer",
    width: 200,
  },
  img: {
    width: "100%",
    borderRadius: 6,
  },
  title: {
    fontSize: 16,
    marginTop: 8,
    color: "#333",
  },
  score: {
    marginTop: 4,
    color: "#555",
  },
};
