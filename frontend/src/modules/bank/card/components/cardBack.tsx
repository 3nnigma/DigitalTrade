
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useCardStore } from "../helpers/store";
import { cn } from "@/lib/utils";
import { getCardTypeClasses } from "../helpers/cardUtils";

interface CardBackProps {
  isPreview?: boolean;
}

export default function CardBack({ isPreview = false }: CardBackProps) {
  const [showCVV, setShowCVV] = useState(false);
  const { card } = useCardStore();

  if (!card) return null;

  const {
    cardType,
    cvv,
    backgroundColor,
    backgroundImage,
  } = card;

  const cardTypeClasses = getCardTypeClasses(cardType);

  return (
    <div
      className={cn(
        "relative overflow-hidden w-full h-full rounded-xl flex flex-col justify-between",
        "shadow-lg transition-all duration-300",
        cardTypeClasses,
        isPreview && "origin-top"
      )}
      style={{
        backgroundColor: backgroundColor || undefined,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Magnetic strip */}
      <div className="w-full h-12 mt-6 bg-black/80" />

      <div className="px-4 py-6 space-y-3">
        <div className="flex items-center justify-between">
          <div className="w-3/4 space-y-1">
            <div className="flex justify-between bg-white/80 h-8 rounded items-center px-3">
              <span className="text-xs text-gray-500">Signature</span>
              <div className="w-16 h-4 bg-gray-100 rounded-sm" />
            </div>
          </div>

          <div className="relative flex items-center">
            <div className="p-2 bg-white rounded">
              <p className="font-mono text-sm font-medium">
                {showCVV ? (cvv || "123") : "•••"}
              </p>
            </div>
            <button
              onClick={() => setShowCVV(!showCVV)}
              className="p-1 ml-1 text-white rounded-full hover:bg-white/20"
            >
              {showCVV ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
