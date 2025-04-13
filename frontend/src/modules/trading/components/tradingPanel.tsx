import {
  Bitcoin,
  CircleDollarSign,
  LayoutDashboard,
  Wallet,
  Wallet2,
} from "lucide-react";
import Interaction from "./interaction";
import { cn } from "@/lib/utils";

const assets = [
  { symbol: "BTC", percentage: 30, color: "bg-[#f7931a]" },
  { symbol: "ETH", percentage: 24, color: "bg-[#8e95b4]" },
  { symbol: "LTC", percentage: 14, color: "bg-[#6881ec]" },
];

export default function TradingPanel() {
  const cryptoTotal = assets.reduce((acc, cur) => acc + cur.percentage, 0);
  const fiatPercentage = Math.max(0, 100 - cryptoTotal);

  return (
    <div className="w-[24%]  h-full font-sans ml-5">
      <div className="w-full p-3 h-1/6 font-normal border rounded-md border-gray-400/40">
        <div className="flex justify-between items-center">
          <span className="flex items-center">
            <Wallet size={20} />
            <h4 className="ml-2">Wallet</h4>
          </span>
          <div className="flex items-center px-2 py-1 bg-gradient-to-t dark:from-zinc-700 shadow-inner shadow-gray-200 from-gray-200 to-gray-100 dark:shadow-zinc-700 dark:to-zinc-800 rounded-md w-20 text-sm">
            <CircleDollarSign size={18} />
            <p className="ml-2 font-semibold">USD</p>
          </div>
        </div>
        <div className="flex items-center text-xl my-4 font-bold">
          <div className="flex items-center">
            $2540.<span className="opacity-60">80</span>
          </div>
        </div>
        <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-gray-700">
          {assets.map((asset) => (
            <div
              key={asset.symbol}
              className={cn(asset.color, "h-full")}
              style={{ width: `${asset.percentage}%` }}
            />
          ))}
          {fiatPercentage > 0 && (
            <div
              className="bg-neutral-500/90 h-full"
              style={{ width: `${fiatPercentage}%` }}
            />
          )}
        </div>

        <div className="mt-2 flex text-sm text-foreground/80">
          {assets.map((asset) => (
            <div
              key={asset.symbol}
              style={{ width: `${Math.max(asset.percentage, 11)}%` }}
              className="flex items-center space-x-1 ml-1"
            >
              <span
                className={cn(asset.color, "w-2 h-2 rounded-full ")}
              />
              <span>{asset.symbol}</span>
            </div>
          ))}
          {fiatPercentage > 0 && (
            <div
              className="flex items-center justify-end space-x-1 mr-2"
              style={{ width: `${fiatPercentage}%` }}
            >
              <span className="bg-gray-500 w-2 h-2 rounded-full inline-block" />
              <span>USD</span>
            </div>
          )}
        </div>
      </div>
      <Interaction />
    </div>
  );
}
