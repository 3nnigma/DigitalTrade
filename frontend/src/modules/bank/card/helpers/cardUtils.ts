import { Card, CardProvider } from "./utils";
import {
  CreditCard,
  CreditCard as Visa,
  CreditCard as MastercardIcon,
  CreditCard as AmexIcon,
  CreditCard as DiscoverIcon
} from "lucide-react";

export function getCardTypeClasses(cardType: string) {
  switch (cardType) {
    case "standard":
      return "bg-slate-800";
    case "gold":
      return "bg-amber-600";
    case "premium":
      return "bg-purple-800";
    case "black":
      return "bg-black";
    default:
      return "bg-slate-800";
  }
}

export function getCardProviderLogo(provider: CardProvider) {
  switch (provider) {
    case "visa":
      return Visa;
    case "mastercard":
      return MastercardIcon;
    case "amex":
      return AmexIcon;
    case "discover":
      return DiscoverIcon;
    default:
      return CreditCard;
  }
}

export function generateCardNumber(provider: CardProvider): string {
  // Generate a valid looking card number based on provider
  // This is just for display purposes, not for actual card validation
  let prefix = "";

  switch (provider) {
    case "visa":
      prefix = "4";
      break;
    case "mastercard":
      prefix = "5" + Math.floor(Math.random() * 5 + 1);
      break;
    case "amex":
      prefix = "3" + (Math.random() > 0.5 ? "4" : "7");
      break;
    case "discover":
      prefix = "6011";
      break;
    default:
      prefix = "4";
  }

  // Fill the rest with random digits
  const length = provider === "amex" ? 15 : 16;
  const remainingLength = length - prefix.length;

  let number = prefix;
  for (let i = 0; i < remainingLength; i++) {
    number += Math.floor(Math.random() * 10);
  }

  // Format the card number
  if (provider === "amex") {
    return `${number.substring(0, 4)} ${number.substring(4, 10)} ${number.substring(10)}`;
  }

  return `${number.substring(0, 4)} ${number.substring(4, 8)} ${number.substring(8, 12)} ${number.substring(12)}`;
}

export function generateCVV(provider: CardProvider): string {
  // Generate a 3 or 4 digit CVV (AMEX uses 4)
  const length = provider === "amex" ? 4 : 3;
  let cvv = "";

  for (let i = 0; i < length; i++) {
    cvv += Math.floor(Math.random() * 10);
  }

  return cvv;
}
