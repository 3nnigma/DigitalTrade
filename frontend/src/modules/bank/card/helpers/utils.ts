import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  CreditCard,
  CreditCard as Visa,
  CreditCard as Mastercard,
  CreditCard as AmexIcon
} from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type CardType = "standard" | "gold" | "premium" | "black";
export type CardProvider = "visa" | "mastercard" | "amex" | "discover";

export interface Card {
  id?: string;
  cardType: CardType;
  provider: CardProvider;
  virtual: boolean;
  contactless: boolean;
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  backgroundColor?: string;
  backgroundImage?: string;
}
