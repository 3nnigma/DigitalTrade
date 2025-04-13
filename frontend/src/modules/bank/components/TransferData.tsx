import { Button } from "@/components/ui/buttons/button";
import { CircleHelp } from "lucide-react";

export default function TransferData() {
  return (
    <div className="flex flex-col mt-16 text-sm font-normal font-sans">
      <div className="flex pb-3 border-b px-2 border-zinc-700">
        <span className="w-24 text-neutral-400">From</span>
        <div className="flex w-full justify-between">
          <p>Mastercard **** 1252</p>
          <p>$1820.50</p>
        </div>
      </div>
      <div className="flex pb-3 border-b mt-8 px-2 border-zinc-700">
        <span className="w-24 text-neutral-400">To</span>
        <div className="flex w-full justify-between">
          <p>5002 1892 4215 1252</p>
        </div>
      </div>
      <div className="flex pb-3 border-b justify-between mt-8 px-2 border-zinc-700">
        <div className="flex mr-16">
          <span className="w-20 text-neutral-400">Amount</span>
          <p>$424.00</p>
        </div>
        <div className="flex w-44">
          <span className="w-12 text-neutral-400">CVV</span>
          <p>• • •</p>
        </div>
        <CircleHelp size={20} className="cursor-pointer text-blue-400"/>
      </div>
      <Button className="bg-gradient-to-r h-10 from-[#69a4ff] mt-10 font-sans to-[#0060ff] text-white text-base">
        Transfer
      </Button>
    </div>
  );
}
