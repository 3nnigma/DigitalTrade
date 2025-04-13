import { BentoGrid, BentoGridItem } from "../ui/bentoGrid";
import { AlignLeft, Landmark } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/buttons/button";
import Link from "next/link";

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="w-full px-8 pt-6">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon}
        />
      ))}
      <div className="mt-6 border-[rgba(209, 213, 219, 0.7)] border-t pt-5 dark:border-[#ffffff24]">
        <div className="flex items-center">
          <Landmark className="w-8 h-8 rounded bg-gradient-to-tr from-blue-500 to-blue-700 p-1.5"/>
          <span className="ml-2 font-sans text-lg">
            DigitalBank
          </span>
        </div>
        <div className="flex mt-4 justify-between">
        <p className="text-sm opacity-80 font-normal">
          Make transfers and payments more convenient
        </p>
        <Link href="/app/bank"><Button variant="outline" className="ml-5">Get started</Button></Link>
        </div>
      </div>
    </BentoGrid>
  );
}


const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] mb-4  flex-col space-y-2"
    >
      <motion.div  className="text-2xl font-sans mt-1 border-gray-500 group-hover/bento:translate-y-1.5  group-hover/bento:translate-x-20 w-2/3 font-bold transition duration-300 mb-5">
        All in one application
      </motion.div>

      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-zinc-900"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-800" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-[70%] ml-auto bg-white dark:bg-zinc-900"
      >
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-800" />
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-zinc-900"
      >
        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-violet-400 to-indigo-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-800" />
      </motion.div>
      <motion.div
             variants={variantsSecond}
             className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-[85%] ml-auto bg-white dark:bg-zinc-900"
           >
             <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-800" />
             <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-300 to-sky-600 flex-shrink-0" />
           </motion.div>
    </motion.div>
  );
};

const items = [
  {
    title: "Everything you need for finances",
    description: (
      <span className="text-sm">
        Experience the full power of trading with our services
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <AlignLeft className="h-5 w-5 text-neutral-500" />,
  }
]
