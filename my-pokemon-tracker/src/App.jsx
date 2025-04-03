import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";
import { useCardStore } from "./store/useCardStore";

const App = () => {
  const [cards, setCards] = useState([]);
  const { addCard } = useCardStore();

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-4xl font-bold text-red-500">Tailwind is working!</h1>
      <h1 className="text-xl font-bold mb-4">Pokémon Card Tracker</h1>
      <SearchBar onSearch={setCards} />
      <CardList cards={cards} onAddToList={(card) => addCard("huntedCards", card)} />
    </div>
  );
};

export default App;