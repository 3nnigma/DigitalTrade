
import { create } from "zustand";
import { Card, CardType, CardProvider } from "./utils";
import { generateCardNumber, generateCVV } from "./cardUtils";

interface CardState {
  card: Card | null;
  isEditing: boolean;
  hasCard: boolean;
  setEditing: (isEditing: boolean) => void;
  updateCard: (card: Card) => void;
  initializeCard: (card: Card | null) => void;
}

const defaultCard: Card = {
  cardType: "standard",
  provider: "visa",
  cardholderName: "",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
  virtual: false,
  contactless: true,
};

export const useCardStore = create<CardState>((set) => ({
  card: null,
  isEditing: false,
  hasCard: false,

  setEditing: (isEditing) => set({ isEditing }),

  updateCard: (card) => set({
    card,
    hasCard: true,
  }),

  initializeCard: (card) => {
    if (card) {
      set({
        card,
        hasCard: true,
        isEditing: false,
      });
    } else {
      // Create a new card with default values
      const newCard: Card = {
        ...defaultCard,
        cardNumber: generateCardNumber("visa"),
        cvv: generateCVV("visa"),
      };

      set({
        card: newCard,
        hasCard: false,
        isEditing: true,
      });
    }
  },
}));
