"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Coins, MoreVertical, Percent } from "lucide-react";

interface CheckmarkProps {
  size?: number;
  strokeWidth?: number;
  color?: string;
  className?: string;
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        delay: i * 0.2,
        type: "spring",
        duration: 1.5,
        bounce: 0.2,
        ease: "easeInOut",
      },
      opacity: { delay: i * 0.2, duration: 0.2 },
    },
  }),
};

export function Checkmark({
  size = 100,
  strokeWidth = 2,
  color = "currentColor",
  className = "",
}: CheckmarkProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      initial="hidden"
      animate="visible"
      className={className}
    >
      <title>Animated Checkmark</title>
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        stroke={color}
        variants={draw}
        custom={0}
        style={{
          strokeWidth,
          strokeLinecap: "round",
          fill: "transparent",
        }}
      />
      <motion.path
        d="M30 50L45 65L70 35"
        stroke={color}
        variants={draw}
        custom={1}
        style={{
          strokeWidth,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          fill: "transparent",
        }}
      />
    </motion.svg>
  );
}

export default function CurrencyTransfer({amount, totalFee, totalAmount}: {amount: string, totalFee: string, totalAmount: string}) {
  const [paymentDateTime, setPaymentDateTime] = useState<{
    time: string;
    date: string;
  }>();

  useEffect(() => {
    const fullDate = new Date();
    setPaymentDateTime({
      time: fullDate.toLocaleTimeString(),
      date: fullDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    });
  }, []);

  return (
    <Card className="w-[440px] font-sans font-medium mx-auto px-10 pt-12 h-[580px] mb-24 min-h-[320px] flex flex-col  backdrop-blur-xs">
      <div className="space-y-3 flex flex-col items-center justify-center">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.4,
            ease: [0.4, 0, 0.2, 1],
            scale: {
              type: "spring",
              damping: 15,
              stiffness: 200,
            },
          }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 blur-xl bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
            />
            <Checkmark
              size={80}
              strokeWidth={4}
              color="rgb(16 185 129)"
              className="relative z-10 dark:drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]"
            />
          </div>
        </motion.div>
        <motion.div
          className="space-y-2 text-center w-full"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
          }}
        >
          <motion.h2
            className="text-lg text-[rgb(16,185,129)] tracking-tighter font-semibold uppercase"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.4 }}
          >
            Success payment!
          </motion.h2>
          <motion.h2
            className="pb-4 text-foreground/85"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Your payment has been successfully done
          </motion.h2>
          <motion.div className="py-6 border-t border-gray-500"
            initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 1.2,
                            duration: 0.4,
                            ease: [0.4, 0, 0.2, 1],
                          }}>
            <div className="flex justify-between items-center w-full">
              <p className="text-foreground/65">Payment date</p>
              <span>{paymentDateTime?.date}</span>
            </div>
            <div className="flex justify-between mt-3 items-center w-full">
              <p className="text-foreground/65">Send time</p>
              <span>{paymentDateTime?.time}</span>
            </div>
            <div className="flex justify-between mt-3 items-center w-full">
              <p className="text-foreground/65">Payment method</p>
              <span>Bank Card</span>
            </div>
          </motion.div>

          <div className="flex items-center gap-4">
            <motion.div
              className="flex-1 dark:bg-zinc-700/50 bg-zinc-50/50 rounded-xl relative p-3 border dark:border-zinc-600/50 border-zinc-200/50 backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.2,
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <MoreVertical className="absolute top-4 right-3 cursor-pointer opacity-80 hover:opacity-100" width={20} height={20}/>

              <div className="flex flex-col items-start gap-2">
                <div className="space-y-1.5">
                  <span className="text-xs font-medium flex items-center gap-1.5">
                    <Coins width={12} height={12}/>
                    Amount
                  </span>
                  <div className="flex items-center gap-2.5 group transition-all">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 dark:bg-white shadow-lg border border-zinc-700 dark:border-zinc-300 text-sm font-medium text-zinc-100 dark:text-zinc-900 group-hover:scale-105 transition-transform">
                      $
                    </span>
                    <span className="font-medium tracking-tight">
                      {amount} USD
                    </span>
                  </div>
                </div>
                <div className="w-full h-px bg-linear-to-r from-transparent via-zinc-700 dark:via-zinc-300 to-transparent" />
                <div className="space-y-1.5">
                  <span className="text-xs font-medium flex items-center gap-1.5">
                    <Percent width={12} height={12}/>
                    Total Fee
                  </span>
                  <div className="flex items-center gap-2.5 group transition-all">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-900 dark:bg-white shadow-lg border border-zinc-700 dark:border-zinc-300 text-sm font-medium text-zinc-100 dark:text-zinc-900 group-hover:scale-105 transition-transform">
                      $
                    </span>
                    <span className="font-medium tracking-tight">
                      {totalFee} USD
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="w-full text-xs pt-1.5 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.4 }}
          >
            Total amount: {totalAmount} USD
          </motion.div>
        </motion.div>
      </div>
    </Card>
  );
}
