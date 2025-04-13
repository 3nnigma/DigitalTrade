"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/common/charts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/inputs/select";
import { useState } from "react";
const chartData = [
  { date: "2024-09-01", desktop: 222, mobile: 150 },
  { date: "2024-09-02", desktop: 97, mobile: 180 },
  { date: "2024-09-03", desktop: 167, mobile: 120 },
  { date: "2024-09-04", desktop: 242, mobile: 260 },
  { date: "2024-09-05", desktop: 373, mobile: 290 },
  { date: "2024-09-06", desktop: 301, mobile: 340 },
  { date: "2024-09-07", desktop: 245, mobile: 180 },
  { date: "2024-09-08", desktop: 409, mobile: 320 },
  { date: "2024-09-09", desktop: 59, mobile: 110 },
  { date: "2024-09-10", desktop: 261, mobile: 190 },
  { date: "2024-09-11", desktop: 327, mobile: 350 },
  { date: "2024-09-12", desktop: 292, mobile: 210 },
  { date: "2024-09-13", desktop: 342, mobile: 380 },
  { date: "2024-09-14", desktop: 137, mobile: 220 },
  { date: "2024-09-15", desktop: 120, mobile: 170 },
  { date: "2024-09-16", desktop: 138, mobile: 190 },
  { date: "2024-09-17", desktop: 446, mobile: 360 },
  { date: "2024-09-18", desktop: 364, mobile: 410 },
  { date: "2024-09-19", desktop: 243, mobile: 180 },
  { date: "2024-09-20", desktop: 89, mobile: 150 },
  { date: "2024-09-21", desktop: 137, mobile: 200 },
  { date: "2024-09-22", desktop: 224, mobile: 170 },
  { date: "2024-09-23", desktop: 138, mobile: 230 },
  { date: "2024-09-24", desktop: 387, mobile: 290 },
  { date: "2024-09-25", desktop: 215, mobile: 250 },
  { date: "2024-09-26", desktop: 75, mobile: 130 },
  { date: "2024-09-27", desktop: 383, mobile: 420 },
  { date: "2024-09-28", desktop: 122, mobile: 180 },
  { date: "2024-09-29", desktop: 315, mobile: 240 },
  { date: "2024-09-30", desktop: 454, mobile: 380 },
  { date: "2024-10-01", desktop: 165, mobile: 220 },
  { date: "2024-10-02", desktop: 293, mobile: 310 },
  { date: "2024-10-03", desktop: 247, mobile: 190 },
  { date: "2024-10-04", desktop: 385, mobile: 420 },
  { date: "2024-10-05", desktop: 481, mobile: 390 },
  { date: "2024-10-06", desktop: 498, mobile: 520 },
  { date: "2024-10-07", desktop: 388, mobile: 300 },
  { date: "2024-10-08", desktop: 149, mobile: 210 },
  { date: "2024-10-09", desktop: 227, mobile: 180 },
  { date: "2024-10-10", desktop: 293, mobile: 330 },
  { date: "2024-10-11", desktop: 335, mobile: 270 },
  { date: "2024-10-12", desktop: 197, mobile: 240 },
  { date: "2024-10-13", desktop: 197, mobile: 160 },
  { date: "2024-10-14", desktop: 448, mobile: 490 },
  { date: "2024-10-15", desktop: 473, mobile: 380 },
  { date: "2024-10-16", desktop: 338, mobile: 400 },
  { date: "2024-10-17", desktop: 499, mobile: 420 },
  { date: "2024-10-18", desktop: 315, mobile: 350 },
  { date: "2024-10-19", desktop: 235, mobile: 180 },
  { date: "2024-10-20", desktop: 177, mobile: 230 },
  { date: "2024-10-21", desktop: 82, mobile: 140 },
  { date: "2024-10-22", desktop: 81, mobile: 120 },
  { date: "2024-10-23", desktop: 252, mobile: 290 },
  { date: "2024-10-24", desktop: 294, mobile: 220 },
  { date: "2024-10-25", desktop: 201, mobile: 250 },
  { date: "2024-10-26", desktop: 213, mobile: 170 },
  { date: "2024-10-27", desktop: 420, mobile: 460 },
  { date: "2024-10-28", desktop: 233, mobile: 190 },
  { date: "2024-10-29", desktop: 78, mobile: 130 },
  { date: "2024-10-30", desktop: 340, mobile: 280 },
  { date: "2024-10-31", desktop: 178, mobile: 230 },
  { date: "2024-11-01", desktop: 178, mobile: 200 },
  { date: "2024-11-02", desktop: 470, mobile: 410 },
  { date: "2024-11-03", desktop: 103, mobile: 160 },
  { date: "2024-11-04", desktop: 439, mobile: 380 },
  { date: "2024-11-05", desktop: 88, mobile: 140 },
  { date: "2024-11-06", desktop: 294, mobile: 250 },
  { date: "2024-11-07", desktop: 323, mobile: 370 },
  { date: "2024-11-08", desktop: 385, mobile: 320 },
  { date: "2024-11-09", desktop: 438, mobile: 480 },
  { date: "2024-11-10", desktop: 155, mobile: 200 },
  { date: "2024-11-11", desktop: 92, mobile: 150 },
  { date: "2024-11-12", desktop: 492, mobile: 420 },
  { date: "2024-11-13", desktop: 81, mobile: 130 },
  { date: "2024-11-14", desktop: 426, mobile: 380 },
  { date: "2024-11-15", desktop: 307, mobile: 350 },
  { date: "2024-11-16", desktop: 371, mobile: 310 },
  { date: "2024-11-17", desktop: 475, mobile: 520 },
  { date: "2024-11-18", desktop: 107, mobile: 170 },
  { date: "2024-11-19", desktop: 341, mobile: 290 },
  { date: "2024-11-20", desktop: 408, mobile: 450 },
  { date: "2024-11-21", desktop: 169, mobile: 210 },
  { date: "2024-11-22", desktop: 317, mobile: 270 },
  { date: "2024-11-23", desktop: 480, mobile: 530 },
  { date: "2024-11-24", desktop: 132, mobile: 180 },
  { date: "2024-11-25", desktop: 141, mobile: 190 },
  { date: "2024-11-26", desktop: 434, mobile: 380 },
  { date: "2024-11-27", desktop: 448, mobile: 490 },
  { date: "2024-11-28", desktop: 149, mobile: 200 },
  { date: "2024-11-29", desktop: 103, mobile: 160 },
  { date: "2024-11-30", desktop: 446, mobile: 400 },
  { date: "2024-12-01", desktop: 283, mobile: 310 },
  { date: "2024-12-02", desktop: 412, mobile: 380 },
  { date: "2024-12-03", desktop: 289, mobile: 220 },
  { date: "2024-12-04", desktop: 155, mobile: 170 },
  { date: "2024-12-05", desktop: 368, mobile: 330 },
  { date: "2024-12-06", desktop: 419, mobile: 420 },
  { date: "2024-12-07", desktop: 258, mobile: 290 },
  { date: "2024-12-08", desktop: 412, mobile: 350 },
  { date: "2024-12-09", desktop: 293, mobile: 250 },
  { date: "2024-12-10", desktop: 194, mobile: 190 },
  { date: "2024-12-11", desktop: 310, mobile: 280 },
  { date: "2024-12-12", desktop: 257, mobile: 320 },
  { date: "2024-12-13", desktop: 477, mobile: 510 },
  { date: "2024-12-14", desktop: 224, mobile: 200 },
  { date: "2024-12-15", desktop: 189, mobile: 170 },
  { date: "2024-12-16", desktop: 331, mobile: 350 },
  { date: "2024-12-17", desktop: 400, mobile: 470 },
  { date: "2024-12-18", desktop: 115, mobile: 150 },
  { date: "2024-12-19", desktop: 292, mobile: 230 },
  { date: "2024-12-20", desktop: 367, mobile: 400 },
  { date: "2024-12-21", desktop: 161, mobile: 180 },
  { date: "2024-12-22", desktop: 134, mobile: 160 },
  { date: "2024-12-23", desktop: 470, mobile: 450 },
  { date: "2024-12-24", desktop: 276, mobile: 290 },
  { date: "2024-12-25", desktop: 410, mobile: 380 },
  { date: "2024-12-26", desktop: 159, mobile: 150 },
  { date: "2024-12-27", desktop: 420, mobile: 500 },
  { date: "2024-12-28", desktop: 112, mobile: 140 },
  { date: "2024-12-29", desktop: 398, mobile: 370 },
  { date: "2024-12-30", desktop: 284, mobile: 240 },
  { date: "2024-12-31", desktop: 468, mobile: 430 },
  { date: "2025-01-01", desktop: 198, mobile: 220 },
  { date: "2025-01-02", desktop: 273, mobile: 310 },
  { date: "2025-01-03", desktop: 334, mobile: 270 },
  { date: "2025-01-04", desktop: 455, mobile: 450 },
  { date: "2025-01-05", desktop: 511, mobile: 500 },
  { date: "2025-01-06", desktop: 405, mobile: 320 },
  { date: "2025-01-07", desktop: 187, mobile: 180 },
  { date: "2025-01-08", desktop: 245, mobile: 220 },
  { date: "2025-01-09", desktop: 315, mobile: 290 },
  { date: "2025-01-10", desktop: 297, mobile: 320 },
  { date: "2025-01-11", desktop: 228, mobile: 200 },
  { date: "2025-01-12", desktop: 361, mobile: 370 },
  { date: "2025-01-13", desktop: 277, mobile: 250 },
  { date: "2025-01-14", desktop: 457, mobile: 480 },
  { date: "2025-01-15", desktop: 167, mobile: 210 },
  { date: "2025-01-16", desktop: 234, mobile: 170 },
  { date: "2025-01-17", desktop: 303, mobile: 240 },
  { date: "2025-01-18", desktop: 250, mobile: 260 },
  { date: "2025-01-19", desktop: 220, mobile: 210 },
  { date: "2025-01-20", desktop: 115, mobile: 290 },
  { date: "2025-01-21", desktop: 280, mobile: 320 },
  { date: "2025-01-22", desktop: 340, mobile: 350 },
  { date: "2025-01-23", desktop: 240, mobile: 270 },
  { date: "2025-01-24", desktop: 260, mobile: 190 },
  { date: "2025-01-25", desktop: 350, mobile: 150 },
  { date: "2025-01-26", desktop: 410, mobile: 260 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Income",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Expenses",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function ChartProto() {
  const [timeRange, setTimeRange] = useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const now = new Date();
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    now.setDate(now.getDate() - daysToSubtract);
    return date >= now;
  });

  return (
    <Card className="mx-4 mt-4">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Your Financial Data</CardTitle>
          <CardDescription>
            Showing total incomes and expenses
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg sm:ml-auto"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[251px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
