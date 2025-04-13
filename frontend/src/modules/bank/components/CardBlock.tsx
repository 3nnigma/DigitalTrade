"use client"

import { HandCoins, Wallet, Coins, LayoutList } from "lucide-react";
import Shadow from "../ui/shadow";
import Link from "next/link";
import CardPreview from "../card/CardPreview";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useCardStore } from "../card/helpers/store";
import { useFetchCard } from "../card/helpers/hooks";

const payments = [
  {
    title: "Send",
    icon: <HandCoins size={22} />,
    link: "/replenish",
  },
  {
    title: "Replenish",
    icon: <Wallet size={22} />,
    link: "/replenish",
  },
  {
    title: "Crypto",
    icon: <Coins size={22} />,
    link: "/replenish",
  },
  {
    title: "More",
    icon: <LayoutList size={22} />,
    link: "/replenish",
  },
];

export default function CardBlock() {
  const params = useParams();
  const cardId = params.id as string;

  const {
    setEditing,
    initializeCard,
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
      initializeCard(null);
      setEditing(true);
    }
  }, [card, initializeCard, isLoading, isError, cardId, setEditing]);

  return (
    <div className="flex h-[320px] rounded-lg border  bg-section-gradient dark:bg-section-gradient-dark  border-[rgba(209,213,219,0.7)] dark:border-[rgba(255,255,255,0.10)]">
      <div className="flex pt-4  flex-col items-end w-[40%] h-full ">
        <div className="mb-3.5 pl-20 flex justify-between w-full items-center">
          <h4> My wallet</h4>
          <div className="inline rounded-md bg-blue-500/15 px-2  py-0.5 text-blue-500 text-sm">
            Platinum Card
          </div>
        </div>
        <div className="w-[430px] relative">
        <CardPreview />
        </div>
      </div>
      <div className="w-[57%] ml-10 h-full  overflow-hidden px-20  flex justify-between relative ">
        <div className="w-full z-10 h-full flex items-center justify-center flex-col">
          <div className="w-5/6">
            <div className="w-full flex justify-between  items-center">
              Personal Account{" "}
              <Link href="bank/card/124">
              <button className="bg-gradient-to-br h-9 px-4 mt-5 text-sm rounded-lg from-[rgba(185,225,255,0.21)] font-semibold to-[#51b1f91c] text-white">
                + Add Card
              </button>{" "}
              </Link>
            </div>
            <span className="text-4xl flex">
              <p className="font-normal mr-0.5 text-3xl mb-1 pt-1">$</p>
              1,820.50
            </span>
          </div>
          <div className="w-5/6 flex justify-between mt-8">
            {payments.map((p) => (
              <Link href={p.link} key={p.title} className="text-center">
                <div className="h-16 flex justify-center items-center rounded-full  bg-[#40404066] aspect-square">
                  {p.icon}
                </div>
                <span className="text-sm mt-3 text-neutral-300 opacity-90 font-sans">
                  {p.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <Shadow />
      </div>
    </div>
  );
}
