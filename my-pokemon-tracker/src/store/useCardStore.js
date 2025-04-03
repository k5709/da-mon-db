import { create } from "zustand";

export const useCardStore = create((set) => ({
  huntedCards: [],
  tradedCards: [],
  soldCards: [],
  
  addCard: (list, card) => set((state) => ({
    [list]: [...state[list], card]
  })),

  removeCard: (list, cardId) => set((state) => ({
    [list]: state[list].filter((card) => card.id !== cardId)
  }))
}));