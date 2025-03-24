"use client";
import AmountSlider from "../ui/amountSlider";
import UsaIcon from "../ui/usaIcon";
import { useState } from "react";
import TransferData from "./TransferData";
import { CalendarDays } from "lucide-react";

export default function FastTransfer() {
  const [amount, setAmount] = useState(100);
  return (
    <div className="w-[38%] mr-6 font-sans my-6 px-6 py-6 h-full border rounded-lg bg-section-gradient dark:bg-section-gradient-dark  border-[rgba(209,213,219,0.7)] dark:border-[rgba(255,255,255,0.10)]">
      <div className="flex w-full mb-8 justify-between items-center">
        <h4 className="text-lg">Fast Transfer</h4>
        <span className="text-sm text-blue-400 cursor-pointer">Learn more</span>
      </div>
      <div className="pb-3 mb-11 w-full flex items-center font-normal justify-between h-11  px-4 my-4 border-b border-gray-600">
        <div className="flex items-center">
          <CalendarDays className="w-8 h-8 mr-3 rounded-full bg-blue-500 flex justify-center items-center p-[7px] " />
          <div>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
        <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
      <form className="max-w-[24rem] mx-auto">
        <div className="flex mb-6">
          <button
            className="shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600"
            type="button"
          >
            <UsaIcon />
            USD
          </button>

          <div className="relative w-full">
            <input
              type="number"
              className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => {
                setAmount(Number(e.target.value));
              }}
              max={1000}
              min={10}
            />
          </div>
        </div>
        <AmountSlider value={amount} setValue={setAmount} />
      </form>
      <TransferData />
    </div>
  );
}
