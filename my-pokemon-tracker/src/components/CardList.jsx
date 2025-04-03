import React from "react";

const CardList = ({ cards, onAddToList }) => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {cards.map((card) => (
        <div key={card.id} className="border rounded-lg p-2 text-center">
          <img src={card.images.small} alt={card.name} className="w-full" />
          <h2 className="text-sm mt-2">{card.name}</h2>
          <button className="mt-2 bg-green-500 text-white px-2 py-1 rounded"
            onClick={() => onAddToList(card)}>
            Add to List
          </button>
        </div>
      ))}
    </div>
  );
};
export default CardList;