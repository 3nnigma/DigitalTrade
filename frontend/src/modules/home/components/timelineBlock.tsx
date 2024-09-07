import React from "react";
import { Timeline } from "./timeline";
import {
  Card,
  CardDescription,
  CardSkeletonContainer,
  CardTitle,
  Skeleton,
} from "../ui/introCards";
export function TimelineBlock() {
  const data = [
    {
      title: "Stocks and Companies",
      content: (
        <div>
          <Card className="mr-20">
            <CardSkeletonContainer>
              <Skeleton stype="1" />
            </CardSkeletonContainer>
            <CardTitle>Stock Market Insights</CardTitle>
            <CardDescription>
              Explore key insights and data on various stocks and companies,
              including performance metrics and trends.
            </CardDescription>
          </Card>
        </div>
      ),
    },
    {
      title: "Currencies",
      content: (
        <div>
          <Card className="ml-40">
            <CardSkeletonContainer>
              <Skeleton stype="2" />
            </CardSkeletonContainer>
            <CardTitle>Local Currency Data</CardTitle>
            <CardDescription>
              Stay updated with real-time exchange rates for major currencies,
              along with historical data and trends.
            </CardDescription>
          </Card>
        </div>
      ),
    },
    {
      title: "Functionality",
      content: (
        <div>
          <Card className="mr-40">
            <CardSkeletonContainer>
              <Skeleton stype="3" />
            </CardSkeletonContainer>
            <CardTitle>Feature Overview</CardTitle>
            <CardDescription>
              Discover the range of functionalities offered by the application,
              including trading tools, analytics, and account management.
            </CardDescription>
          </Card>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
