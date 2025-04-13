import { Nfc as ContactlessIcon } from "lucide-react";
import { useCardStore } from "../helpers/store";
import { cn } from "@/lib/utils";
import { getCardTypeClasses, getCardProviderLogo } from "../helpers/cardUtils";

interface CardFrontProps {
  showNumber?: boolean;
  isPreview?: boolean;
}

export default function CardFront({ showNumber = false, isPreview = false }: CardFrontProps) {
  const { card } = useCardStore();

  if (!card) return null;

  const {
    cardType,
    provider,
    cardholderName,
    cardNumber,
    expiryDate,
    contactless,
    virtual,
    backgroundColor,
    backgroundImage,
  } = card;

  const ProviderLogo = getCardProviderLogo(provider);
  const cardTypeClasses = getCardTypeClasses(cardType);

  // Masked card number (show last 4 digits)
  const displayNumber = showNumber
    ? cardNumber || "XXXX XXXX XXXX XXXX"
    : `•••• •••• •••• ${(cardNumber || "XXXX").slice(-4)}`;

  return (
    <div
      className={cn(
        "relative overflow-hidden w-full h-full rounded-xl p-6 flex flex-col justify-between",
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
      {/* Card shine effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />

      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-1">
          {virtual && (
            <span className="px-2 py-1 text-xs font-medium uppercase bg-white/30 rounded-sm backdrop-blur-sm">
              Virtual
            </span>
          )}
          {contactless && (
            <ContactlessIcon className="w-6 h-6 text-white/80" />
          )}
        </div>

        <div className="w-12 h-12">
          {ProviderLogo && <ProviderLogo className="w-full h-full text-white" />}
        </div>
      </div>

      <div className="space-y-4">
        <div className="font-mono text-lg text-white md:text-xl">{displayNumber}</div>

        <div className="flex justify-between">
          <div className="space-y-1">
            <p className="text-xs text-white/70">Cardholder Name</p>
            <p className="font-medium text-white uppercase">
              {cardholderName || "YOUR NAME"}
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-white/70">Expires</p>
            <p className="font-medium text-white">{expiryDate || "MM/YY"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
