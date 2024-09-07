import {
  Bitcoin,
  ChartNoAxesCombinedIcon,
  ChartPie,
  Chrome,
  DollarSign,
  Euro,
  Facebook,
  Github,
  Landmark,
  Palette,
  PoundSterling,
  RussianRuble,
  ShieldCheck,
  Twitch,
  Twitter,
} from "lucide-react";
import { animate } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";

export const Skeleton = ({ stype }: { stype: "1" | "2" | "3" }) => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    // @ts-ignore
    animate(sequence, {
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, []);
  if (stype == "1") {
    return (
      <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
        <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
          <Container className="h-12 w-12 circle-2">
            <Github className="h-6 w-6 dark:text-white" />
          </Container>
          <Container className="h-12 w-12 circle-2">
            <Twitch className="h-6 w-6 dark:text-white" />
          </Container>
          <Container className="h-12 w-12 circle-2">
            <Twitter className="h-6 w-6 dark:text-white" />
          </Container>
          <Container className="h-12 w-12 circle-2">
            <Chrome className="h-6 w-6 dark:text-white" />
          </Container>
          <Container className="h-12 w-12 circle-2">
            <Facebook className="h-6 w-6 dark:text-white" />
          </Container>
        </div>
      </div>
    );
  } else if (stype == "2") {
    return (
      <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
        <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
          <Container className="h-12 w-12 circle-2">
            <PoundSterling className="h-6 w-6 dark:text-white" />
          </Container>
          <Container className="h-12 w-12 circle-2">
            <DollarSign className="h-6 w-6 dark:text-white" />
          </Container>
          <Container className="h-12 w-12 circle-2">
            <Bitcoin className="h-6 w-6 dark:text-white" />
          </Container>
          <Container className="h-12 w-12 circle-2">
            <Euro className="h-6 w-6 dark:text-white" />
          </Container>
          <Container className="h-12 w-12 circle-2">
            <RussianRuble className="h-6 w-6 dark:text-white" />
          </Container>
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
        <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
          <Container className="h-12 w-12 circle-2">
            <Landmark className="h-6 w-6 dark:text-white" />
          </Container>
          <Container className="h-12 w-12 circle-2">
            <ChartPie className="h-6 w-6 dark:text-white" />
          </Container>
          <Container className="h-12 w-12 circle-2">
            <ChartNoAxesCombinedIcon className="h-6 w-6 dark:text-white" />
          </Container>
          <Container className="h-12 w-12 circle-2">
            <ShieldCheck className="h-6 w-6 dark:text-white" />
          </Container>
          <Container className="h-12 w-12 circle-2">
            <Palette className="h-6 w-6 dark:text-white" />
          </Container>
        </div>
      </div>
    );
  }
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className,
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className,
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]",
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className,
      )}
    >
      {children}
    </div>
  );
};
