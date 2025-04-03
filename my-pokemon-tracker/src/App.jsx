import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";
import { useCardStore } from "./store/useCardStore";
import FilterUI from "./components/FilterList";
import "./index.css"

const App = () => {
  const [cards, setCards] = useState([]);
  const { huntedCards, tradedCards, soldCards, filters, setFilter, filteredCards, clearFilters, addCard } = useCardStore();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-4 text-center">Pokémon Card Tracker</h1>
        {/* Filter Section */}
        <FilterUI filters={filters} setFilter={setFilter} clearFilters={clearFilters} />
        <SearchBar onSearch={setCards} />
        <CardList cards={cards} onAddToList={(card) => addCard("huntedCards", card)} />
      </div>
    </div>
  );
};

export default App;

