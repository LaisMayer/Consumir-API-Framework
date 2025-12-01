import React, { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeCard";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [animes, setAnimes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
      .then((res) => res.json())
      .then((data) => setAnimes(data.data))
      .catch(() => console.log("Erro ao carregar animes"));
  }, [search]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1> Animes</h1>

      <SearchBar value={search} onChange={setSearch} />

      <div style={styles.grid}>
        {animes.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
};
