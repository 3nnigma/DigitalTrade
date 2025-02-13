import {
  Calendar,
  ChartNoAxesGantt,
  ChevronDown,
  ChevronUp,
  Coins,
  HandCoins,
  LayoutList,
  MoreHorizontal,
  Wallet,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GraphicsModel from "./ui/graphicsModel";

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

export default function BankApplication() {
  return (
    <div className="flex h-full  w-full">
      <div className="h-full w-[calc(100%-28%)]"></div>
      <div className="h-full relative p-6 w-[28%] border-[rgba(209, 213, 219, 0.7)] shadow-inner rounded-[32px] bg-section-gradient dark:bg-section-gradient-dark dark:border-[rgba(255,255,255,0.10)]">
        <div className="curved top-0"></div>
        <div className="curved bottom-0 rotate-180"></div>
        <div className="w-full flex flex-col">
          <div className="w-full flex font-normal justify-between mb-4 font-sans text-lg">
            Your Statistics <MoreHorizontal className="cursor-pointer" />
          </div>
          <div className="flex justify-between items-center">
              <span className="text-3xl font-sans">$10,200.50</span>
            <div className="flex items-center font-normal font-sans">
              January - February
              <Calendar className="ml-3 opacity-55" size={20} />
            </div>
          </div>
          <GraphicsModel />
          <div className="w-full mt-5 flex justify-between px-1">
            {payments.map((p) => (
              <Link href={p.link} key={p.title} className="text-center">
                <div className="h-[52px] flex justify-center items-center rounded-xl  bg-[#40404066] aspect-square">
                  {p.icon}
                </div>
                <span className="text-xs mt-2 text-neutral-300 opacity-90 font-sans">
                  {p.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
