import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Buscar anime..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: 10,
        width: "80%",
        maxWidth: 400,
        borderRadius: 6,
        border: "1px solid #ccc",
        marginBottom: 20,
      }}
    />
  );
}
