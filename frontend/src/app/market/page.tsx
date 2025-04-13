import Stats from "./stats";
import TradingViewTimeline from './markets'
import Footer from "@/modules/home/components/footer";

export default function MarketPage() {
  return <div>
    <Stats />
    <TradingViewTimeline   />
    <Footer />
  </div>
}
