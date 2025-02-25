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
import CardProviders from "./components/cardProviders";
import { Button } from "@/components/ui/button";

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
const btnStyle = "w-1/3 h-full  opacity-60 cursor-pointer";

export default function BankApplication() {
  return (
    <div className="flex h-[98%]  w-full">
      <div className="h-full w-[calc(100%-28%)] pr-5">
        <div className="w-full h-[340px] bg-gray-200 rounded-lg border-[rgba(209,213,219,0.7)] overflow-hidden border flex relative shadow-inner bg-section-gradient dark:bg-section-gradient-dark dark:border-[rgba(255,255,255,0.10)]">
          <div className="flex justify-center items-end pb-12 h-full w-2/5">
            <div className="bg-[#488acd33] border-[#488acd00] shadow-sm shadow-[#488acd70] border rounded-2xl">
              <Image
                src="/card.png"
                alt="card"
                width={360}
                height={360}
                className="rounded-2xl -translate-y-6  -rotate-3"
              />
            </div>
          </div>
          <div className="w-3/5 z-10 h-full flex px-48 justify-center items-center flex-col">
            <div className="w-full">
              <div className="w-full flex justify-between items-center">
                Personal Account <Button size="sm">+ Add Card</Button>{" "}
              </div>
              <span className="text-4xl flex"><p className="font-normal mr-0.5 text-3xl pt-1">$</p>18,200.40</span>
            </div>
            <div className="w-full flex justify-center mt-8">
              {payments.map((p) => (
                <Link href={p.link} key={p.title} className="text-center mx-7">
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
          <div className="absolute top-[-75%] left-[45%] w-[600px] blur-[250px] bg-[#0253d180]">
            <svg
              width="937"
              height="401"
              viewBox="0 0 937 401"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_f_1687_31389)">
                <path
                  d="M437 -4.5C437 -86.6299 414.296 -167.161 371.398 -237.197C328.499 -307.233 267.075 -364.047 193.911 -401.363C120.748 -438.678 38.6932 -455.042 -43.1874 -448.648C-125.068 -442.253 -203.587 -413.348 -270.07 -365.126C-336.553 -316.905 -388.412 -251.243 -419.918 -175.396C-451.423 -99.5497 -461.349 -16.47 -448.598 64.6641C-435.848 145.798 -400.917 221.829 -347.665 284.355C-294.413 346.882 -224.913 393.471 -146.844 418.975L-8.5 -4.5H437Z"
                  fill="#5865F2"
                  fill-opacity="0.5"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_f_1687_31389"
                  x="-954"
                  y="-950"
                  width="1891"
                  height="1868.98"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  ></feBlend>
                  <feGaussianBlur
                    stdDeviation="250"
                    result="effect1_foregroundBlur_1687_31389"
                  ></feGaussianBlur>
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="h-full relative p-6 w-[28%] border-[rgba(209,213,219,0.7)] border shadow-inner rounded-[32px] bg-section-gradient dark:bg-section-gradient-dark dark:border-[rgba(255,255,255,0.10)]">
        <div className="curved top-[-2px]"></div>
        <div className="curved bottom-[-2px] rotate-180"></div>
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
          <div className="flex justify-center mt-6 mb-3 font-sans text-sm items-center">
            <div className="w-2/3  flex justify-center items-center  bg-[rgba(55,55,59,0.86)] pb-[6px] px-1 h-10 rounded-full">
              <button className={btnStyle + " rounded-tl-full rounded-bl-full"}>
                Pie Chart
              </button>
              <button className={btnStyle}>Bar Chart</button>
              <button
                className={
                  btnStyle +
                  " rounded-tr-full rounded-br-full rounded-tl-full rounded-bl-full bg-[rgba(70,73,79,0.9)] shadow shadow-gray-600 !opacity-100"
                }
              >
                AI Sphere
              </button>
            </div>
          </div>
          <GraphicsModel />

          <CardProviders />
        </div>
      </div>
    </div>
  );
}
