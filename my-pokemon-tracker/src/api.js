export const fetchPokemonCards = async (query) => {
  const res = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${query}`);
  const data = await res.json();

  return data.data.map((card) => ({
    id: card.id,
    name: card.name,
    images: card.images, 
    set: card.set?.name, // ✅ Set name (e.g., "Base Set")
    rarity: card.rarity || "Unknown", // ✅ Rarity (e.g., "Rare Holo")
    types: card.types || [], // ✅ Pokémon type(s) (e.g., ["Fire"])
    attacks: card.attacks || [], // ✅ Attack details (array)
    weaknesses: card.weaknesses || [], // ✅ Weaknesses (array)
    resistances: card.resistances || [], // ✅ Resistances (array)
    hp: card.hp || "N/A", // ✅ HP value (e.g., "120")
    evolvesFrom: card.evolvesFrom || null, // ✅ What Pokémon it evolves from
    prices: card.tcgplayer?.prices || card.cardmarket?.prices || {}, // ✅ Pricing info
  }));
};

