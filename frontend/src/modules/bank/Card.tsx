"use client";

import { useState } from "react";
import { create } from "zustand";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/inputs/input";
import { Label } from "@/components/ui/inputs/label";
import { Switch } from "@/components/ui/futures/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/inputs/select";
import { Button } from "@/components/ui/buttons/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download, Edit2 } from "lucide-react";

// Card types with their characteristics
const CARD_TYPES = {
  STANDARD: {
    name: "Standard",
    colors: ["slate", "zinc", "stone"],
    chipPosition: "left",
    maxLimit: 5000,
  },
  PREMIUM: {
    name: "Premium",
    colors: ["blue", "indigo", "violet"],
    chipPosition: "left",
    maxLimit: 10000,
  },
  PLATINUM: {
    name: "Platinum",
    colors: ["emerald", "teal", "cyan"],
    chipPosition: "right",
    maxLimit: 25000,
  },
  BLACK: {
    name: "Black",
    colors: ["zinc", "stone", "neutral"],
    chipPosition: "right",
    maxLimit: 50000,
  },
};

type CardType = keyof typeof CARD_TYPES;
type CardColor = string;
type CardDesign = "minimal" | "wave" | "gradient" | "dots";

// Zustand store for card state
interface CardState {
  cardholderName: string;
  setCardholderName: (name: string) => void;
  cardNumber: string;
  setCardNumber: (number: string) => void;
  expiryDate: string;
  setExpiryDate: (date: string) => void;
  cardType: CardType;
  setCardType: (type: CardType) => void;
  cardColor: CardColor;
  setCardColor: (color: CardColor) => void;
  cardDesign: CardDesign;
  setCardDesign: (design: CardDesign) => void;
  contactless: boolean;
  setContactless: (value: boolean) => void;
  holographic: boolean;
  setHolographic: (value: boolean) => void;
  customMessage: string;
  setCustomMessage: (message: string) => void;
  resetCard: () => void;
}

const useCardStore = create<CardState>((set) => ({
  cardholderName: "JANE A. SMITH",
  setCardholderName: (name) => set({ cardholderName: name.toUpperCase() }),
  cardNumber: "•••• •••• •••• 1234",
  setCardNumber: (number) => set({ cardNumber: formatCardNumber(number) }),
  expiryDate: "12/28",
  setExpiryDate: (date) => set({ expiryDate: formatExpiryDate(date) }),
  cardType: "PREMIUM" as CardType,
  setCardType: (type) => set({ cardType: type }),
  cardColor: "blue",
  setCardColor: (color) => set({ cardColor: color }),
  cardDesign: "gradient" as CardDesign,
  setCardDesign: (design) => set({ cardDesign: design }),
  contactless: true,
  setContactless: (value) => set({ contactless: value }),
  holographic: true,
  setHolographic: (value) => set({ holographic: value }),
  customMessage: "",
  setCustomMessage: (message) =>
    set({ customMessage: message.toUpperCase().slice(0, 20) }),
  resetCard: () =>
    set({
      cardholderName: "JANE A. SMITH",
      cardNumber: "•••• •••• •••• 1234",
      expiryDate: "12/28",
      cardType: "PREMIUM",
      cardColor: "blue",
      cardDesign: "gradient",
      contactless: true,
      holographic: true,
      customMessage: "",
    }),
}));

// Helper functions
function formatCardNumber(value: string): string {
  // Remove any non-digit characters
  const digits = value.replace(/\D/g, "");

  // Limit to 16 digits
  const truncated = digits.slice(0, 16);

  // Add spaces every 4 digits
  const formatted = truncated.replace(/(\d{4})/g, "$1 ").trim();

  // For preview purposes, mask all but the last 4 digits
  if (truncated.length > 4) {
    const lastFour = truncated.slice(-4);
    return `•••• •••• •••• ${lastFour}`;
  }

  return formatted;
}

function formatExpiryDate(value: string): string {
  // Remove any non-digit characters
  const digits = value.replace(/\D/g, "");

  // Limit to 4 digits (MMYY)
  const truncated = digits.slice(0, 4);

  if (truncated.length >= 2) {
    // Format as MM/YY
    const month = truncated.slice(0, 2);
    const year = truncated.slice(2);
    return `${month}/${year}`;
  }

  return truncated;
}

export default function BankCardCustomizer() {
  const [isEditing, setIsEditing] = useState(false);
  const {
    cardholderName,
    setCardholderName,
    cardNumber,
    setCardNumber,
    expiryDate,
    setExpiryDate,
    cardType,
    setCardType,
    cardColor,
    setCardColor,
    cardDesign,
    setCardDesign,
    contactless,
    setContactless,
    holographic,
    setHolographic,
    customMessage,
    setCustomMessage,
    resetCard,
  } = useCardStore();

  const handleDownload = () => {
    // In a real application, this would generate and download the card design
    // For this demo, we'll just show an alert
    alert(
      "Your card design has been saved! In a real application, this would generate a downloadable file or submit to a card creation API.",
    );
  };

  return (
    <div className="flex flex-col space-y-8 w-full max-w-6xl mx-auto p-4">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold">Bank Card Customizer</h1>
        <p className="text-muted-foreground">
          Design your personalized bank card with our interactive tool
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Card Preview */}
          <div className="relative w-full max-w-md mx-auto">
            <div
              className={cn(
                "aspect-[1.586/1] w-full rounded-xl overflow-hidden shadow-xl perspective-card relative",
                holographic && "holographic-effect",
              )}
            >
              {/* Card background with design */}
              <div
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  getCardDesignClass(cardDesign, cardColor),
                )}
              />

              {/* Card content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                {/* Bank logo and card type */}
                <div className="flex justify-between items-start">
                  <div className="font-bold text-xl text-white opacity-80">
                    NextBank
                  </div>
                  <div className="text-white font-medium opacity-80">
                    {CARD_TYPES[cardType].name}
                  </div>
                </div>

                {/* Chip and contactless */}
                <div
                  className={cn(
                    "flex mt-6",
                    CARD_TYPES[cardType].chipPosition === "left"
                      ? "justify-start"
                      : "justify-end",
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-8 bg-yellow-300/90 rounded-md border border-yellow-600/30 shadow chip-effect">
                      <div className="grid grid-cols-4 grid-rows-4 h-full w-full p-1">
                        {Array(16)
                          .fill(0)
                          .map((_, i) => (
                            <div
                              key={i}
                              className="bg-yellow-500/40 rounded-sm"
                            />
                          ))}
                      </div>
                    </div>
                    {contactless && (
                      <div className="text-white">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 12C6 8.68629 8.68629 6 12 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M9 12C9 10.3431 10.3431 9 12 9"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M3 12C3 7.02944 7.02944 3 12 3"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card number */}
                <div className="text-white font-mono text-xl mt-4 tracking-wider">
                  {cardNumber}
                </div>

                {/* Card holder info and expiry */}
                <div className="flex justify-between items-end mt-4">
                  <div className="flex flex-col">
                    <div className="text-white/70 text-xs">CARD HOLDER</div>
                    <div className="text-white font-medium tracking-wider">
                      {cardholderName}
                    </div>
                    {customMessage && (
                      <div className="text-white/80 text-xs mt-1 italic">
                        {customMessage}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-white/70 text-xs">VALID THRU</div>
                    <div className="text-white font-medium">{expiryDate}</div>
                  </div>
                </div>
              </div>

              {/* Card issuer logo */}
              <div className="absolute bottom-6 right-6">
                <div className="text-white font-bold italic opacity-80">
                  VISA
                </div>
              </div>
            </div>

            {/* Control buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <Button
                variant="outline"
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2"
              >
                {isEditing ? <CheckCircle size={16} /> : <Edit2 size={16} />}
                {isEditing ? "Done" : "Edit Card"}
              </Button>
              <Button
                onClick={handleDownload}
                className="flex items-center gap-2"
              >
                <Download size={16} />
                Save Design
              </Button>
              <Button variant="ghost" onClick={resetCard}>
                Reset
              </Button>
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="cardholderName">Cardholder Name</Label>
                  <Input
                    id="cardholderName"
                    value={cardholderName}
                    onChange={(e) => setCardholderName(e.target.value)}
                    placeholder="Enter your name"
                    maxLength={26}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number Preview</Label>
                  <Input
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="Enter card number"
                    maxLength={19}
                    disabled
                  />
                  <p className="text-xs text-muted-foreground">
                    Displayed for preview only. For security, we use masked
                    numbers.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="customMessage">Custom Message</Label>
                    <Input
                      id="customMessage"
                      value={customMessage}
                      onChange={(e) => setCustomMessage(e.target.value)}
                      placeholder="Optional personal message"
                      maxLength={20}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="cardType">Card Type</Label>
                  <Select
                    value={cardType}
                    onValueChange={(value) => setCardType(value as CardType)}
                  >
                    <SelectTrigger id="cardType">
                      <SelectValue placeholder="Select a card type" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(CARD_TYPES).map((type) => (
                        <SelectItem key={type} value={type}>
                          {CARD_TYPES[type as CardType].name} - Up to $
                          {CARD_TYPES[
                            type as CardType
                          ].maxLimit.toLocaleString()}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <Label>Color</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {CARD_TYPES[cardType].colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setCardColor(color)}
                        className={cn(
                          "h-8 rounded-md transition-all",
                          cardColor === color
                            ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                            : "opacity-70 hover:opacity-100",
                        )}
                      >
                        <div
                          className={cn(
                            "h-full w-full rounded-md",
                            getColorSwatch(color),
                          )}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cardDesign">Design Style</Label>
                  <Select
                    value={cardDesign}
                    onValueChange={(value) =>
                      setCardDesign(value as CardDesign)
                    }
                  >
                    <SelectTrigger id="cardDesign">
                      <SelectValue placeholder="Select a design" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minimal">Minimal</SelectItem>
                      <SelectItem value="wave">Wave</SelectItem>
                      <SelectItem value="gradient">Gradient</SelectItem>
                      <SelectItem value="dots">Dots</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="contactless"
                    checked={contactless}
                    onCheckedChange={setContactless}
                  />
                  <Label
                    htmlFor="contactless"
                    className="flex items-center gap-2"
                  >
                    <span>Contactless</span>
                    <span className="inline-flex">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12C6 8.68629 8.68629 6 12 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M9 12C9 10.3431 10.3431 9 12 9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M3 12C3 7.02944 7.02944 3 12 3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="holographic"
                    checked={holographic}
                    onCheckedChange={setHolographic}
                  />
                  <Label htmlFor="holographic">Holographic Effect</Label>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Instructions when not editing */}
      {!isEditing && (
        <div className="lg:col-span-1 space-y-4 mt-6">
          <h3 className="text-lg font-medium">How to customize your card</h3>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Click on "Edit Card" to start customizing</li>
            <li>Choose your card type, color and design style</li>
            <li>Add your personal details</li>
            <li>Toggle additional features like contactless payment</li>
            <li>When you're happy with your design, click "Save Design"</li>
          </ol>
          <p className="text-sm text-muted-foreground mt-4">
            Your personalized card will be processed and delivered within 7-10
            business days.
          </p>
        </div>
      )}

      {/* Add this style tag for the holographic effect */}
      <style jsx global>{`
        .perspective-card {
          transform-style: preserve-3d;
          transition: transform 0.2s ease;
        }

        .perspective-card:hover {
          transform: rotateY(5deg) rotateX(5deg);
          box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.3);
        }

        .holographic-effect {
          position: relative;
          overflow: hidden;
        }

        .holographic-effect::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(45deg);
          animation: holographic 3s linear infinite;
        }

        .chip-effect {
          position: relative;
          overflow: hidden;
        }

        @keyframes holographic {
          0% {
            transform: translateX(-50%) translateY(-50%) rotate(0deg);
          }
          100% {
            transform: translateX(50%) translateY(50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

// Helper function to get design classes
function getCardDesignClass(design: CardDesign, color: CardColor) {
  switch (design) {
    case "minimal":
      return cn(
        "bg-gradient-to-br from-black to-gray-800",
        getColorAccent(color),
      );
    case "wave":
      return cn(
        "bg-gradient-to-br from-black to-gray-800 wave-pattern",
        getColorAccent(color),
      );
    case "dots":
      return cn(
        "bg-gradient-to-br from-black to-gray-800 dots-pattern",
        getColorAccent(color),
      );
    case "gradient":
    default:
      return cn(
        `bg-gradient-to-br from-${color}-900 via-${color}-800 to-black`,
      );
  }
}

// Helper function to get color swatches
function getColorSwatch(color: string) {
  return `bg-gradient-to-br from-${color}-600 to-${color}-900`;
}

// Helper function to get color accents
function getColorAccent(color: string) {
  return `after:absolute after:bottom-0 after:left-0 after:right-0 after:h-2 after:bg-${color}-500`;
}
