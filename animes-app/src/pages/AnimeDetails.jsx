import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function AnimeDetails() {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}`)
      .then((res) => res.json())
      .then((data) => setAnime(data.data));
  }, [id]);

  if (!anime) return <h2>Carregando...</h2>;

  return (
    <div style={{ padding: 20 }}>
      <Link to="/">⬅ Voltar</Link>

      <h1>{anime.title}</h1>

      <img
        src={anime.images.jpg.large_image_url}
        alt={anime.title}
        style={{ width: 300, borderRadius: 10 }}
      />

      <p><strong>Sinopse:</strong> {anime.synopsis}</p>
      <p><strong>Episódios:</strong> {anime.episodes}</p>
      <p><strong>Score:</strong> ⭐ {anime.score}</p>
    </div>
  );
}
