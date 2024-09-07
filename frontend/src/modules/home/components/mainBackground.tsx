import DotPattern from "@/components/common/dotPattern";
import { ButtonGradient } from "@/components/ui/buttonGradient";
import { cn } from "@/lib/utils";
import { BookMarked } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AuroraBackground } from "../ui/auroraBgEffect";

export default function MainBackground() {
  return (
    <>
      <AuroraBackground className="absolute top-0 flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background dark:shadow-[0_15px_25px_-10px_rgba(255,255,255,0.3)] md:shadow-xl">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="relative flex flex-col items-center justify-center px-4"
        >
          <p className="z-10 mb-4 whitespace-pre-wrap text-center text-4xl font-medium tracking-tighter text-black dark:text-white">
            Start building your capital
          </p>
          <p className="text-gray-400 mb-8  max-w-[30rem] text-center leading-7 text-base md:text-[1.125rem] md:leading-[1.5] text-slate-11 font-normal">
            Make transactions, buy and sell cryptocurrencies, analyze your
            financial condition in a couple of minutes.
          </p>
          <Link href="/auth/login">
            <ButtonGradient content="Get started" />
          </Link>
        </motion.div>
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          )}
        />

        <span className="italic absolute bottom-3 flex justify-center items-center">
          Developed by Enigma
          <BookMarked className="ml-2" width={16} height={16} />
        </span>
      </AuroraBackground>
      <div className="w-full h-screen"></div>
    </>
  );
}
