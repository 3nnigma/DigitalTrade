
import StockView from "@/modules/bank/components/StockView";
import TradingViewWidget from "@/modules/trading/TradingViewWidget"

export default function Trading() {
  return <div className="w-full bg-red-500 h-[90vh]">
    {/* <TradingViewWidget /> */}
    <StockView />
  </div>;
}
