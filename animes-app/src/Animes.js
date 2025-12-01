import React, { useState, useEffect } from "react";

export default function Animes() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [busca, setBusca] = useState("");

  async function buscarAnimes(termo = "naruto") {
    try {
      setLoading(true);

      const url = `https://api.jikan.moe/v4/anime?q=${termo}&limit=20`;
      const resposta = await fetch(url);
      const dados = await resposta.json();

      setAnimes(dados.data || []);
    } catch (erro) {
      console.error("Erro ao buscar animes:", erro);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    buscarAnimes(); 
  }, []);

  function handleBuscar() {
    if (busca.trim() === "") return;
    buscarAnimes(busca);
  }

  return (
    <div
      style={{
        padding: 30,
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          fontSize: 32,
          textAlign: "center",
          marginBottom: 30,
          color: "#222",
        }}
      >
        🎌 Animes
      </h2>

    
      <div
        style={{
          marginBottom: 30,
          display: "flex",
          gap: 10,
          maxWidth: 600,
          marginInline: "auto",
        }}
      >
        <input
          type="text"
          placeholder="Buscar anime..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          style={{
            padding: 12,
            flex: 1,
            borderRadius: 8,
            border: "1px solid #ccc",
            fontSize: 16,
          }}
        />

        <button
          onClick={handleBuscar}
          style={{
            padding: "12px 20px",
            backgroundColor: "#5a2be7",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Buscar
        </button>
      </div>

      {loading && (
        <p style={{ textAlign: "center", fontSize: 18 }}>
           Carregando animes...
        </p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 25,
          padding: "0 15px",
        }}
      >
        {animes.map((anime) => (
          <div
            key={anime.mal_id}
            style={{
              backgroundColor: "#fff",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <img
              src={anime.images.jpg.image_url}
              alt={anime.title}
              style={{
                width: "100%",
                height: 300,
                objectFit: "cover",
              }}
            />

            <div style={{ padding: 15 }}>
              <h3 style={{ margin: "10px 0", fontSize: 18, color: "#222" }}>
                {anime.title}
              </h3>

              <p style={{ fontSize: 14, margin: "5px 0" }}>
                ⭐ <strong>Score:</strong> {anime.score || "N/A"}
              </p>

              <p style={{ fontSize: 14, margin: "5px 0" }}>
                🎬 <strong>Episódios:</strong>{" "}
                {anime.episodes || "Desconhecido"}
              </p>

              <button
                onClick={() =>
                  window.open(anime.url, "_blank")
                }
                style={{
                  marginTop: 12,
                  width: "100%",
                  padding: 12,
                  backgroundColor: "#5a2be7",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                Ver detalhes
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Nenhum resultado */}
      {animes.length === 0 && !loading && (
        <p style={{ textAlign: "center", marginTop: 20, fontSize: 18 }}>
          😕 Nenhum anime encontrado.
        </p>
      )}
    </div>
  );
}
