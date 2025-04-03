 export const fetchPokemonCards = async (query) => {
    const res = await fetch(`https://api.pokemontcg.io/v2/cards?q=name:${query}`);
    const data = await res.json();
    return data.data || [];
  };

 ;