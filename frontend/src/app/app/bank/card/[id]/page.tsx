"use client";

import { useParams } from "next/navigation";
import { useEffect } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/buttons/button";
import CardView from "@/modules/bank/card/CardContainer";
import CardEditor from "@/modules/bank/card/CardEditor";
import { useFetchCard } from "@/modules/bank/card/helpers/hooks";
import { useCardStore } from "@/modules/bank/card/helpers/store";

export default function CardPage() {
  const params = useParams();
  const cardId = params.id as string;

  const {
    isEditing,
    setEditing,
    initializeCard,
    hasCard
  } = useCardStore();

  const {
    data: card,
    isLoading,
    isError
  } = useFetchCard(cardId);

  useEffect(() => {
    if (card) {
      initializeCard(card);
    } else if (!isLoading && !isError && cardId === "new") {
      // For new cards, start with empty state
      initializeCard(null);
      setEditing(true);
    }
  }, [card, initializeCard, isLoading, isError, cardId, setEditing]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-2xl font-bold text-red-600">Error loading card</h1>
        <Button onClick={() => window.location.reload()}>Try again</Button>
      </div>
    );
  }

  return (
    <main className="container max-w-4xl px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center">
        {!hasCard || isEditing ? "Customize Your Card" : "Your Bank Card"}
      </h1>

      <div className="mb-6 space-y-6">
        {isEditing ? (
          <CardEditor />
        ) : (
          <div className="space-y-8">
            <CardView />
            <div className="flex justify-center">
              <Button onClick={() => setEditing(true)}>
                Edit Card
              </Button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
