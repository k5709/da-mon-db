import { create } from "zustand";

export const useCardStore = create((set) => ({
  huntedCards: [],
  tradedCards: [],
  soldCards: [],
  
  // Filter States
  filters: {
    set: "",
    rarity: "",
    type: "",
    releaseDate: "",
  },

  // Action to add cards
  addCard: (list, card) => set((state) => ({
    [list]: [...state[list], card]
  })),

  // Action to remove cards
  removeCard: (list, cardId) => set((state) => ({
    [list]: state[list].filter((card) => card.id !== cardId)
  })),

  // Action to update filters
  setFilter: (filterName, value) => set((state) => ({
    filters: { ...state.filters, [filterName]: value }
  })),

  // Action to clear all filters
  clearFilters: () => set({
    filters: {
      set: "",
      rarity: "",
      type: "",
      releaseDate: "",
    }
  }),
  
  // Derived state to filter cards based on filters
  filteredCards: (state) => {
    const { set, rarity, type, releaseDate } = state.filters;
    let filtered = [...state.huntedCards, ...state.tradedCards, ...state.soldCards];
    
    if (set) {
      filtered = filtered.filter((card) => card.set === set);
    }

    if (rarity) {
      filtered = filtered.filter((card) => card.rarity === rarity);
    }

    if (type) {
      filtered = filtered.filter((card) => card.types.includes(type));
    }

    if (releaseDate) {
      filtered = filtered.filter((card) => card.releaseDate && card.releaseDate.startsWith(releaseDate));
    }

    return filtered;
  },
}));