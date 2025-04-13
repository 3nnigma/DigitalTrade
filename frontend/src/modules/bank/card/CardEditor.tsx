
"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSaveCard } from "./helpers/hooks";
import { useCardStore } from "./helpers/store";
import { Button } from "@/components/ui/buttons/button";
import { Form } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Save, ChevronLeft } from "lucide-react";
import CardPreview from "./CardPreview";
import CardStyleForm from "./CardStyle";
import CardDetailsForm from "./components/cardDetailsForm";

const cardFormSchema = z.object({
  cardType: z.enum(["standard", "gold", "premium", "black"]),
  provider: z.enum(["visa", "mastercard", "amex", "discover"]),
  virtual: z.boolean(),
  contactless: z.boolean(),
  cardholderName: z.string().min(1, "Cardholder name is required"),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, "Invalid expiry date format"),
  backgroundColor: z.string().optional(),
  backgroundImage: z.string().optional(),
});

type CardFormValues = z.infer<typeof cardFormSchema>;

export default function CardEditorForm() {
  const [activeTab, setActiveTab] = useState("details");
  const { card, updateCard, setEditing, hasCard } = useCardStore();
  const { mutate: saveCard, isPending } = useSaveCard();

  const form = useForm<CardFormValues>({
    resolver: zodResolver(cardFormSchema),
    defaultValues: {
      cardType: card?.cardType || "standard",
      provider: card?.provider || "visa",
      virtual: card?.virtual || false,
      contactless: card?.contactless || true,
      cardholderName: card?.cardholderName || "",
      expiryDate: card?.expiryDate || "",
      backgroundColor: card?.backgroundColor || "",
      backgroundImage: card?.backgroundImage || "",
    },
  });

  function onSubmit(values: CardFormValues) {
    const updatedCard = {
      ...card,
      ...values,
      // Generate placeholder values for non-editable fields
      cardNumber: card?.cardNumber || "4111 1111 1111 1111",
      cvv: card?.cvv || "123",
    };

    saveCard(updatedCard, {
      onSuccess: () => {
        updateCard(updatedCard);
        setEditing(false);
      },
    });
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="col-span-3 md:col-span-1">
        <CardPreview />
      </div>

      <div className="col-span-3 md:col-span-2">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="w-full">
                <TabsTrigger value="details" className="flex-1">Card Details</TabsTrigger>
                <TabsTrigger value="style" className="flex-1">Card Style</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-4 pt-4">
                <CardDetailsForm form={form} />
              </TabsContent>

              <TabsContent value="style" className="space-y-4 pt-4">
                <CardStyleForm form={form} />
              </TabsContent>
            </Tabs>

            <div className="flex justify-between">
              {hasCard && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setEditing(false)}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              )}

              <Button
                type="submit"
                disabled={isPending || !form.formState.isValid}
                className="ml-auto"
              >
                {isPending ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Save className="w-4 h-4 mr-2" />
                )}
                {hasCard ? "Save Changes" : "Create Card"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
