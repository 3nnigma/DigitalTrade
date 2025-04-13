"use client";

import {
  Banknote,
  ChartNoAxesGantt,
  Info,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { Graphs } from "./ui/graphs";
import { NumberTicker } from "@/components/ui/futures/numberTicker";
import { Button } from "@/components/ui/buttons/button";
import { ChartProto } from "@/app/chart";
import Link from "next/link";
import { BentoGridThirdDemo } from "@/modules/dashboard/components/introduction";
import { useAuthStore } from "@/modules/auth/store";
import { BarCharts } from "@/components/common/barChart";
import { TableExample } from "./components/table";

const stats = [
  {
    title: "Your Balance",
    amount: 0,
    icon: Banknote,
    isBalance: true,
  },
  {
    title: "Total Income",
    amount: 84.4,
    icon: TrendingUp,
    btn: (
      <Button variant="outline" className="font-sans">
        Replenish
      </Button>
    ),
    url: "/payment",
  },
  {
    title: "Total Expenses",
    amount: 56.5,
    icon: TrendingDown,
    btn: (
      <Button variant="outline" className="font-sans">
        Withdrawal
      </Button>
    ),
    url: "/withdrawal",
  },
];

export default function Dashboard() {
  const user = useAuthStore((state) => state.user);

  stats[0].amount = Number(user?.balance) || 0;
  const income = stats[1].amount;
  const expenses = stats[2].amount;
  const currentBalance = stats[0].amount;

  const initialBalance = currentBalance + expenses - income;

  const percentageChange = (
    ((currentBalance - initialBalance) / (income + initialBalance)) *
    100
  ).toFixed(2);

  return (
    <div className="flex w-full h-full">
      <div className="w-[75%] h-full">
        <div className="flex w-full h-48">
          {stats.map((item, index) => (
            <div
              key={index}
              className="relative h-[180px] p-6 w-[33%] rounded shadow-inner mx-4 border-[rgba(209, 213, 219, 0.7)] bg-section-gradient dark:bg-section-gradient-dark dark:border-[rgba(255,255,255,0.10)]"
            >
              <h4 className="flex w-full h-6 items-center">
                {
                  <item.icon className="rounded bg-[#ffffff30] p-1 w-8 h-8 mr-3" />
                }
                {item?.title}
              </h4>
              <div className="flex items-end justify-between">
                <div>
                  <div className="text-3xl flex mt-9 items-center">
                    <span className="opacity-70 mr-[6px]">$</span>
                    {(item.amount && (
                      <NumberTicker
                        value={Number(item.amount)}
                        decimalPlaces={2}
                      />
                    )) || (
                      <span className="inline-block tabular-nums font-bold tracking-wider text-black dark:text-white">
                        0.00
                      </span>
                    )}
                  </div>
                  <p className="opacity-80 text-sm font-normal mt-1.5">
                    Calculated from last week
                  </p>
                </div>
                {item?.isBalance && (
                  <div
                    className={`w-[108px] ml-24 font-mono font-normal mb-1.5 h-5 flex justify-center items-center rounded-lg ${Number(percentageChange) > 0 ? "text-chart3 dark:bg-[hsla(221.2,83.2%,53.3%,0.19)]" : Number(percentageChange) < 0 ? "text-red-500 bg-[rgba(248,113,113,0.14)]" : "text-gray-400 bg-[rgba(156,163,175,0.3)]"}`}
                  >
                    <span className="mr-2">
                      {(percentageChange == "NaN"
                        ? Number("0").toFixed(2)
                        : percentageChange) + "%"}{" "}
                    </span>
                    {Number(percentageChange) > 0 ? (
                      <TrendingUp />
                    ) : Number(percentageChange) < 0 ? (
                      <TrendingDown />
                    ) : (
                      <ChartNoAxesGantt />
                    )}
                  </div>
                )}
                <Link href={item?.url || "#"}>{item?.btn}</Link>
              </div>
              <Info size={18} className="absolute top-7 right-6" />
            </div>
          ))}
        </div>
        {/* <ChartProto /> */}
        <BarCharts />
        <div className="px-4 w-full mt-4 flex ">
          <TableExample />
        </div>
      </div>
      <div className="w-[23%]">
        <div className="h-[380px] flex flex-col mb-3 w-full rounded shadow-inner mx-4 border-[rgba(209, 213, 219, 0.7)] bg-section-gradient dark:bg-section-gradient-dark dark:border-[rgba(255,255,255,0.10)] p-4">
          <div className="font-sans text-xl w-full flex justify-center border-[rgba(209, 213, 219, 0.7)] border-b pb-2 dark:border-[#ffffff24]">
            Total income and expenses
          </div>
          <Graphs />
          <div className="mt-2 mb-8">
            <span>Trending up by 2.5% this month</span>
            <p className="text-sm opacity-60 font-normal mt-1.5">
              Showing total incomes / expenses for the last 6 months
            </p>
          </div>
          <div className="flex justify-center items-center border-[rgba(209, 213, 219, 0.7)] pt-3 border-t dark:border-[#ffffff24]">
            <div className="flex justify-center items-center">
              <div className="w-4 h-4 mr-2 rounded bg-chart1" />
              <span>Income</span>
            </div>
            <div className="flex justify-center items-center ml-8">
              <div className="w-4 h-4 mr-2 rounded bg-chart2" />
              <span>Expenses</span>
            </div>
          </div>
        </div>
        <div className="h-[575px] w-full rounded shadow-inner mx-4 border-[rgba(209, 213, 219, 0.7)] bg-section-gradient dark:bg-section-gradient-dark dark:border-[rgba(255,255,255,0.10)] ">
          <BentoGridThirdDemo />
        </div>
      </div>
    </div>
  );
}
