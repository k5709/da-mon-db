import React from "react";

const CardList = ({ cards, onAddToList }) => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div 
            key={card.id} 
            className="border rounded-xl p-4 shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            {/* Card Image */}
            <img 
              src={card.images.small} 
              alt={card.name} 
              className="w-full h-48 object-contain rounded-lg"
            />

            {/* Card Name */}
            <h2 className="text-xl font-semibold mt-3 text-gray-800">{card.name}</h2>

            {/* Card Details */}
            <div className="mt-2 text-gray-600 text-sm">
              <p><span className="font-semibold">Set:</span> {card.set || "Unknown"}</p>
              <p><span className="font-semibold">Rarity:</span> {card.rarity || "Unknown"}</p>
              <p><span className="font-semibold">HP:</span> {card.hp || "N/A"}</p>
            </div>

            {/* Evolution Info */}
            {card.evolvesFrom && (
              <p className="text-gray-600 text-sm mt-1">
                <span className="font-semibold">Evolves From:</span> {card.evolvesFrom}
              </p>
            )}

            {/* Attacks */}
            {card.attacks.length > 0 && (
              <div className="mt-3">
                <p className="text-gray-800 font-semibold">Attacks:</p>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {card.attacks.map((attack, index) => (
                    <li key={index}>{attack.name} ({attack.damage} DMG)</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Weaknesses */}
            {card.weaknesses.length > 0 && (
              <div className="mt-3">
                <p className="text-red-500 font-semibold">Weaknesses:</p>
                <ul className="list-disc list-inside text-sm text-red-500">
                  {card.weaknesses.map((weakness, index) => (
                    <li key={index}>{weakness.type} ({weakness.value})</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Price Info */}
            {card.prices.market ? (
              <p className="text-sm text-gray-800 font-semibold mt-3">
                Market Price: <span className="text-green-600">${card.prices.market.toFixed(2)}</span>
              </p>
            ) : (
              <p className="text-sm text-gray-500 mt-3">Price unavailable</p>
            )}

            {/* Add to List Button */}
            <button 
              className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all"
              onClick={() => onAddToList(card)}
            >
              Add to List
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;