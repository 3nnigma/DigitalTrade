"use client";

import {
  ArrowRight,
  Coins,
  Home,
  Settings2,
  UserRoundCheck,
} from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ReactNode, useLayoutEffect } from "react";

const steps = [
  {
    icon: <Home size={14} />,
    text: "Sign up your account",
  },
  {
    icon: <UserRoundCheck size={14} />,
    text: "Setup your workspace",
  },
  {
    icon: <Settings2 size={14} />,
    text: "Build your capital",
  },
];

export default function AuthLayout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  const { theme, setTheme } = useTheme();
  useLayoutEffect(() => {
    if (theme !== "dark") {
      setTheme("dark");
    }
  });
  return (
    <div className="w-full h-screen flex justify-center items-center bg-[rgb(33,35,46)]">
      <div className="w-[85%] h-[90%] from-[hsl(0,5.3%,11.2%)] to-[#1b1217] shadow-lg shadow-background/70 bg-gradient-to-b rounded-xl flex">
        <div className="w-[60%] h-[93%] p-8 flex flex-col relative justify-between text-white m-9 rounded-2xl bg-[url('/eth-bg2.jpg')] bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between w-full">
            <div className="flex items-center">
              The Finances Way
              <span className="ml-4 h-[1.1px] w-16 bg-white rounded-full"></span>
            </div>
            <Link
              href="/"
              className="items-center flex bg-[#ededed26] font-sans rounded-full px-3 py-1 text-sm"
            >
              Back To Website <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          <div className="pl-44 pb-10 font-sans">
            <ul className="relative flex flex-col md:flex-row gap-2">
              {steps.map((step, index) => (
                <li key={index} className="md:shrink text-center md:basis-0 flex-1 group flex gap-x-2 md:block">
                  <div className="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
                    <span className="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-neutral-700 dark:text-white">
                      {step.icon}
                    </span>
                    <div className="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
                  </div>
                  <div className="grow md:grow-0 md:mt-1 pb-5">
                    <span className="block text-sm font-medium text-gray-800 dark:text-white">
                      Step {index + 1}
                    </span>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}

              <li className="md:shrink md:basis-0 flex-1 group flex gap-x-2 md:block">
                <div className="min-w-7 min-h-7 flex flex-col items-center md:w-full md:inline-flex md:flex-wrap md:flex-row text-xs align-middle">
                  <span className="size-7 flex justify-center items-center shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full dark:bg-neutral-700 dark:text-white">
                    <Coins size={14} />
                  </span>
                  <div className="mt-2 w-px h-full md:mt-0 md:ms-2 md:w-full md:h-px md:flex-1 bg-gray-200 group-last:hidden dark:bg-neutral-700"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}
