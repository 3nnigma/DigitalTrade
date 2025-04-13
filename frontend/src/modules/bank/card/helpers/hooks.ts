
import { useMutation, useQuery } from "@tanstack/react-query";
import { Card } from "./utils";

// Mock API functions - in a real application, these would call actual API endpoints
const fetchCardFromAPI = async (id: string): Promise<Card | null> => {
  // For demo purposes, we'll simulate a network request
  await new Promise(resolve => setTimeout(resolve, 800));

  // Check if we're creating a new card
  if (id === "new") {
    return null;
  }

  // Mock data for an existing card
  const mockCard: Card = {
    id,
    cardType: "standard",
    provider: "visa",
    cardholderName: "John Doe",
    cardNumber: "4111 1111 1111 1234",
    expiryDate: "12/25",
    cvv: "123",
    virtual: true,
    contactless: true,
    // backgroundColor: "linear-gradient(135deg, #000000, #27272a)",
    // backgroundImage: "linear-gradient(135deg, #000000, #27272a)"
  };

  return mockCard;
};

const saveCardToAPI = async (card: Card): Promise<Card> => {
  // Simulate network request
  await new Promise(resolve => setTimeout(resolve, 1200));

  // In a real app, this would send the data to your backend
  return {
    ...card,
    id: card.id || crypto.randomUUID(),
  };
};

export function useFetchCard(id: string) {
  return useQuery({
    queryKey: ["card", id],
    queryFn: () => fetchCardFromAPI(id),
  });
}

export function useSaveCard() {
  return useMutation({
    mutationFn: saveCardToAPI,
  });
}
