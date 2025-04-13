import TradingChart from "./components/tradingChart";
import TradingPanel from "./components/tradingPanel";

export default function Trading() {
  return (
    <div className="w-full h-full pb-[1%] flex">
      <TradingChart />
      <TradingPanel />
    </div>
  );
}
