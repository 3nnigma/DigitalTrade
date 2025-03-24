import React from "react";
import { cn } from "@/lib/utils";
import { OrbitingCirclesDemo } from "./orbitingIcons";
import { AnimatedBeamMultipleOutputDemo } from "./beamSection";
import Image from "next/image";
import { InfoBlocks, infoBlocks } from "../ui/notifyBlocks";

export function BlockSections() {
  const features = [
    {
      title: "Keep an eye on the movement of currencies ",
      description:
        "Track changes in the exchange rates of currencies, cryptocurrencies and stocks in real time. Manage your investment portfolio using our user-friendly interface and get access to up-to-date market information.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Market Insights and Trands",
      description:
        "Access real-time market trends and optimize your portfolio with advanced diversification tools.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Use with other services",
      description:
        "Combine your finances with integration with finance services, exchangers, and other applications.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Analyze your financial data",
      description:
        "Analyze financial indicators, track income and expenses, and manage your budget using our dashboard. Make informed decisions to improve your financial condition.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Loaded with powerful tools
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From seamless trade execution to comprehensive market analysis, our
          platform's APIs handle every financial need. It even helps you
          optimize and refine your strategies with ease.
        </p>
      </div>

      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className=" h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left mx-0 md:text-sm my-2",
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex gap-10 h-full">
      <div className="w-full  mx-auto  group h-full">
        <div className="flex flex-1 w-full h-full flex-col   ">
          <OrbitingCirclesDemo />
        </div>
      </div>
    </div>
  );
};

export const SkeletonThree = () => {
  return <AnimatedBeamMultipleOutputDemo />;
};

export const SkeletonTwo = () => {
  return (
    <div className="relative flex flex-col items-start p-1 pt-8 gap-6 h-full overflow-hidden">
      {infoBlocks.map((item, idx) => (
        <InfoBlocks {...item} key={idx} />
      ))}
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent ">
      <Image src={"/3dcharts.png"} width={320} height={320} alt="charts" />
    </div>
  );
};
