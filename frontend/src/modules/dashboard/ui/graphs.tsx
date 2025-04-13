
"use client";

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/common/charts";
const chartData = [{ month: "january", income: 1260, expenses: 570 }];

const chartConfig = {
  income: {
    label: "Income",
    color: "hsl(var(--chart-1))",
  },
  expenses: {
    label: "Expenses",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Graphs() {
  const totalVisitors = chartData[0].income + chartData[0].expenses;

  return (
    <div className="w-full relative h-[55%]">
      <ChartContainer
        config={chartConfig}
        className="absolute h-[300px] w-full"
      >
        <RadialBarChart
          data={chartData}
          endAngle={180}
          innerRadius={110}
          outerRadius={160}
        >
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) - 27.5}
                        className="fill-foreground text-2xl font-bold"
                      >
                        ${totalVisitors.toLocaleString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) - 7.5}
                        className="fill-muted-foreground"
                      >
                        Total Balance
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
          <RadialBar
            dataKey="income"
            stackId="a"
            cornerRadius={5}
            fill="var(--color-income)"
            className="stroke-transparent stroke-2"
          />
          <RadialBar
            dataKey="expenses"
            fill="var(--color-expenses)"
            stackId="a"
            cornerRadius={5}
            className="stroke-transparent stroke-2"
          />
          d
        </RadialBarChart>
      </ChartContainer>
    </div>
  );
}
