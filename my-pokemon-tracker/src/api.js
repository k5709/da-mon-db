export const fetchPokemonCards = async (query) => {
  const res = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${query}`);
  const data = await res.json();

  return data.data.map((card) => ({
    id: card.id,
    name: card.name,
    images: card.images, 
    set: card.set?.name,
    rarity: card.rarity || "Unknown",
    types: card.types || [],
    attacks: card.attacks || [],
    weaknesses: card.weaknesses || [],
    resistances: card.resistances || [],
    hp: card.hp || "N/A",
    evolvesFrom: card.evolvesFrom || null,
    
    // Handling prices and ensuring they exist
    prices: {
      marketPrice: card.tcgplayer?.prices?.normal?.market || null ,
      holofoilMarketPrice: card.tcgplayer?.prices?.holofoil?.market || null,
      cardmarketPrice: card.cardmarket?.prices?.averagePrice || null
    },
  }));
};
