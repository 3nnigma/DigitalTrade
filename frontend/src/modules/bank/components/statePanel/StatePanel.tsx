import { MoreHorizontal, Calendar } from "lucide-react";
import GraphicsModel from "./graphicsModel";
import CardProviders from "./CardProviders";

const btnStyle = "w-1/3 h-full  opacity-60 cursor-pointer"
export default function StatePanel() {
  return (
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
          <div className="w-2/3  flex justify-center items-center bg-[#d8d8d8db] dark:bg-[rgba(55,55,59,0.86)] pb-[6px] px-1 h-10 rounded-full">
            <button className={btnStyle + " rounded-tl-full rounded-bl-full"}>
              Pie Chart
            </button>
            <button className={btnStyle}>Bar Chart</button>
            <button
              className={
                btnStyle +
                " rounded-tr-full rounded-br-full rounded-tl-full rounded-bl-full bg-[#e5e5e5e5] dark:bg-[rgba(70,73,79,0.9)] shadow shadow-gray-400 dark:shadow-gray-600 !opacity-100"
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
  );
}
