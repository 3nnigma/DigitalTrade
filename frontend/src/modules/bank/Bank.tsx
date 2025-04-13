import { MoreHorizontal } from "lucide-react";
import CardBlock from "./components/CardBlock";
import FastTransfer from "./components/FastTransfer";
import MarketView from "./components/MarketView";
import StatePanel from "./components/statePanel/StatePanel";
import CardPreview from "./card/CardPreview";

export default function BankApplication() {
  return (
    <div className="flex h-[98%] w-full">
      <div className="h-full  w-[calc(100%-29%)] pr-8 pl-5 ">
        <CardBlock />
        <div className="flex h-[calc(100%-360px)]">
          <FastTransfer />
          <div className="w-[60%] my-6 h-full border rounded-lg bg-section-gradient dark:bg-section-gradient-dark  border-[rgba(209,213,219,0.7)] dark:border-[rgba(255,255,255,0.10)]">
            <div className="w-full px-5 items-center h-[7.45%] flex justify-between">
              <span>Market View</span>
              <MoreHorizontal size={20} className="cursor-pointer"/>
            </div>
            <div className="w-full h-[92%] ">
              <MarketView />
            </div>
          </div>
        </div>
      </div>
      <StatePanel />
    </div>
  );
}
