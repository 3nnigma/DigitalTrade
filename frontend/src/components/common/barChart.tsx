"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./charts";
const chartData = [
  { date: "2025-04-01", finance: 350, shopping: 100, debtPayments: 80 },
  { date: "2025-04-02", finance: 500, shopping: 150, debtPayments: 90 },
  { date: "2025-04-03", finance: 270, shopping: 220, debtPayments: 40 },
  { date: "2025-04-04", finance: 600, shopping: 120, debtPayments: 110 },
  { date: "2025-04-05", finance: 380, shopping: 200, debtPayments: 130 },
  { date: "2025-04-06", finance: 480, shopping: 90, debtPayments: 100 },
  { date: "2025-04-07", finance: 350, shopping: 180, debtPayments: 85 },
  { date: "2025-04-08", finance: 530, shopping: 130, debtPayments: 95 },
  { date: "2025-04-09", finance: 450, shopping: 210, debtPayments: 70 },
  { date: "2025-04-10", finance: 550, shopping: 170, debtPayments: 120 },
  { date: "2025-04-11", finance: 620, shopping: 140, debtPayments: 110 },
  { date: "2025-04-12", finance: 400, shopping: 230, debtPayments: 90 },
  { date: "2025-04-13", finance: 540, shopping: 100, debtPayments: 80 },
  { date: "2025-04-14", finance: 590, shopping: 150, debtPayments: 105 },
  { date: "2025-04-15", finance: 470, shopping: 180, debtPayments: 110 },
  { date: "2025-04-16", finance: 330, shopping: 200, debtPayments: 90 },
  { date: "2025-04-17", finance: 500, shopping: 220, debtPayments: 100 },
  { date: "2025-04-18", finance: 620, shopping: 160, debtPayments: 115 },
  { date: "2025-04-19", finance: 420, shopping: 190, debtPayments: 95 },
  { date: "2025-04-20", finance: 570, shopping: 210, debtPayments: 130 },
  { date: "2025-04-21", finance: 480, shopping: 170, debtPayments: 110 },
  { date: "2025-04-22", finance: 500, shopping: 200, debtPayments: 100 },
  { date: "2025-04-23", finance: 600, shopping: 160, debtPayments: 90 },
  { date: "2025-04-24", finance: 450, shopping: 230, debtPayments: 80 },
  { date: "2025-04-25", finance: 490, shopping: 180, debtPayments: 85 },
  { date: "2025-04-26", finance: 530, shopping: 150, debtPayments: 120 },
  { date: "2025-04-27", finance: 460, shopping: 140, debtPayments: 100 },
  { date: "2025-04-28", finance: 600, shopping: 210, debtPayments: 95 },
  { date: "2025-04-29", finance: 510, shopping: 180, debtPayments: 110 },
  { date: "2025-04-30", finance: 550, shopping: 200, debtPayments: 100 },
];

interface ChartConfigItem {
  label: string;
  color: string;
}

interface ChartToolConfig {
  finance: ChartConfigItem;
  shopping: ChartConfigItem;
  debtPayments: ChartConfigItem;
}

const chartConfig = {
  finance: {
    label: "Finance",
    color: "#3b89f6",
  },
  shopping: {
    label: "Shopping",
    color: "#6cb3ee",
  },
  debtPayments: {
    label: "Debt Payments",
    color: "rgb(156, 138, 220)",
  },
} satisfies ChartConfig;


export function BarCharts() {
  return (
    <div className="mx-4">
      <Card className=" mt-4 w-full">
        <CardHeader className="flex-row justify-between">
          <div>
          <CardTitle className="mb-1">Transactions' Categories</CardTitle>
          <CardDescription>Analyze your expenses history</CardDescription>
          </div>
          <div className="flex text-sm mr-3">
            {Object.keys(chartConfig).map((key) => (
              <div className="items-center flex mx-2 opacity-70 hover:opacity-100 cursor-pointer transition" key={key}>
                <span
                  className="h-3 w-3 rounded mr-1.5"
                  style={{ background: chartConfig[key as keyof ChartToolConfig].color }}
                />
                {chartConfig[key as keyof ChartToolConfig].label}
              </div>
            ))}
          </div>
        </CardHeader>
        <CardContent className="w-full">
          <ChartContainer className="max-h-72 w-full" config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} stroke="#aeaeae1f"/>
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  return new Date(value).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                  });
                }}
              />
              <Bar
                dataKey="finance"
                stackId="a"
                fill="var(--color-finance)"
                radius={[0, 0, 4, 4]}
              />
              <Bar
                dataKey="shopping"
                stackId="a"
                fill="var(--color-shopping)"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="debtPayments"
                stackId="a"
                fill="var(--color-debtPayments)"
                radius={[4, 4, 0, 0]}
              />
              <ChartTooltip
                content={<ChartTooltipContent indicator="line" />}
                cursor={false}
                defaultIndex={1}
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
