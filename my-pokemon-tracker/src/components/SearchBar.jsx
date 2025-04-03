import React, { useState } from "react";
import { fetchPokemonCards } from "../api";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (query.trim().length > 2) {
      const results = await fetchPokemonCards(query);
      onSearch(results);
    }
  };

  return (
    <div className="flex gap-2 p-4">
      <input
        className="border rounded-lg p-2 w-full"
        color="red"
        type="text"
        placeholder="Search for a Pokémon card..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;  