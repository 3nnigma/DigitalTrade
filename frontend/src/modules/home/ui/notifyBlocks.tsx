import { cn } from "@/lib/utils";
import { BarChart, ChartLine, ChartPie } from "lucide-react";
import { ReactNode } from "react";

interface Item {
  name: string;
  description: string;
  icon: string;
  symb: ReactNode;
}

const infoBlocks = [
  {
    name: "Market Overview",
    description: "Track market trends and insights",
    icon: "🏦",
    symb: <ChartPie className="absolute text-indigo-400 bottom-4 right-4" size={20} />,
  },
  {
    name: "Historical Data",
    description: "Analyze past trends and performance",
    icon: "🗓️",
    symb: <ChartLine className="absolute bottom-4 text-red-300 right-4" size={20} />,
  },
  {
    name: "Portfolio Diversification",
    description: "Minimize risks with portfolio analysis",
    icon: "🗃️",
    symb: <BarChart className="absolute text-emerald-400 bottom-4 right-4" size={20} />,
  },
];

const InfoBlocks = ({ name, description, icon, symb }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-24 w-full max-w-[400px] overflow-hidden rounded-2xl p-3.5",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_#308aff24] dark:[box-shadow:0_40px_80px_-10px_#98c1ff29_inset]",
      )}
    >
      <div className="flex flex-col pl-2.5 gap-3">
        <div className="flex size-10 items-center bg-gradient-to-tl from-[#1546d9ba] to-[#acd4ff] justify-center rounded-xl">
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
          </figcaption>
          <p className="text-sm max-w-[60%] font-normal dark:text-white/60">
            {description}
          </p>
        </div>
        {symb}
      </div>
    </figure>
  );
};

export { infoBlocks, InfoBlocks };
