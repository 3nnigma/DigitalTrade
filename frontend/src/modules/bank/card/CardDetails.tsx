import {
  CreditCard,
  Award,
  Percent,
  DollarSign,
  ShieldCheck
} from "lucide-react";
import { useCardStore } from "./helpers/store";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

export default function CardDetails() {
  const { card } = useCardStore();

  if (!card) return null;

  const { cardType } = card;

  // Card benefits based on card type
  const cardBenefits = {
    standard: {
      creditLimit: "$5,000",
      rewards: "1% cashback on all purchases",
      annualFee: "$0",
      features: ["Fraud protection", "Zero liability", "Online banking"]
    },
    gold: {
      creditLimit: "$10,000",
      rewards: "2% on dining and gas, 1% on everything else",
      annualFee: "$95",
      features: ["Travel insurance", "Extended warranty", "24/7 concierge"]
    },
    premium: {
      creditLimit: "$20,000",
      rewards: "3% on travel, 2% on dining, 1% on everything else",
      annualFee: "$195",
      features: ["Airport lounge access", "Hotel upgrades", "Premium concierge"]
    },
    black: {
      creditLimit: "$50,000+",
      rewards: "5% on travel, 3% on dining, 1.5% on everything else",
      annualFee: "$495",
      features: ["Global lounge access", "Elite status", "Personal assistant"]
    }
  };

  const benefits = cardBenefits[cardType as keyof typeof cardBenefits] || cardBenefits.standard;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <CreditCard className="w-5 h-5 mr-2" />
          {cardType.charAt(0).toUpperCase() + cardType.slice(1)} Card Benefits
        </CardTitle>
        <CardDescription>
          Features and benefits for your {cardType} card
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="p-4 border rounded-lg">
            <div className="flex items-center mb-2">
              <DollarSign className="w-4 h-4 mr-2 text-primary" />
              <h3 className="font-medium">Credit Limit</h3>
            </div>
            <p>{benefits.creditLimit}</p>
          </div>

          <div className="p-4 border rounded-lg">
            <div className="flex items-center mb-2">
              <Percent className="w-4 h-4 mr-2 text-primary" />
              <h3 className="font-medium">Rewards</h3>
            </div>
            <p>{benefits.rewards}</p>
          </div>

          <div className="p-4 border rounded-lg">
            <div className="flex items-center mb-2">
              <Award className="w-4 h-4 mr-2 text-primary" />
              <h3 className="font-medium">Annual Fee</h3>
            </div>
            <p>{benefits.annualFee}</p>
          </div>

          <div className="p-4 border rounded-lg">
            <div className="flex items-center mb-2">
              <ShieldCheck className="w-4 h-4 mr-2 text-primary" />
              <h3 className="font-medium">Features</h3>
            </div>
            <ul className="pl-5 list-disc">
              {benefits.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
