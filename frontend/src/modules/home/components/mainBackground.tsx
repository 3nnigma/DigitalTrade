import {
  ArrowRight,
  ArrowUpRight,
  GlobeLock,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AuroraBackground } from "../ui/auroraBgEffect";
import GlowText from "../ui/gloxText";
import { Button } from "@/components/ui/button";
import CryptoMarquee from "../ui/cryptoMarquee";

export default function MainBackground() {
  return (
    <div className="w-full flex items-center flex-col h-screen">
      <div className="h-[85%] relative w-[95%] rounded-full ">
        <div className="absolute z-50 inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:35px_34px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_-10%,#000_55%,transparent_100%)]" />
        <AuroraBackground className="absolute top-0 flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background dark:shadow-[0_15px_25px_-10px_rgba(255,255,255,0.3)] md:shadow-xl">
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
            <div className="flex absolute rounded-full px-4 items-center bg-[#bfbfbf24] font-medium py-1 font-sans -top-40 opacity-70 justify-between">
              <GlobeLock size={16} className="mr-2" /> Unlock Your Way With Us!{" "}
              <ArrowRight size={14} className="ml-2" />
            </div>
            <GlowText className="text-2xl sm:text-3xl lg:text-6xl mb-6 font-medium">
              <span className="space tracking-wider">
                One-click for financial building
              </span>
            </GlowText>
            <p className="mb-8 text-center leading-7 text-base md:text-[1.125rem] md:leading-[1.5] opacity-85 font-normal">
              Make transactions, buy cryptocurrencies, analyze your
              financial condition in a couple of minutes.
            </p>
            <div>
              <Button
                variant="outline"
                className="relative rounded-full px-8 z-[99]"
              >
                Open App <ArrowUpRight size={18} className="ml-2" />
              </Button>
              <Link href="/auth/register">
                <Button className="relative rounded-full ml-4 px-8 z-[99]">
                  Get Started
                </Button>
              </Link>
            </div>

          </motion.div>
          {/* <div className="absolute px-8 bottom-6 w-full flex items-center justify-between">
            <div className="flex items-center opacity-90">
              <Github size={20} className="mx-1.5 w-7 h-7 rounded-full bg-neutral-500/50 flex justify-center items-center p-1.5"/>
              <Facebook size={20} className="mx-1.5 w-7 h-7 rounded-full bg-neutral-500/50 flex justify-center items-center p-1.5"/>
              <Twitter size={20} className="mx-1.5 w-7 h-7 rounded-full bg-neutral-500/50 flex justify-center items-center p-1.5"/>
            </div>
            <span className="flex text-sm items-center opacity-80 animate-pulse">
              Scroll to Explore
              <ArrowDown size={18} className="ml-2 mt-1 animate-bounce"/>
            </span>
          </div> */}
        </AuroraBackground>
      </div>
      <CryptoMarquee />
    </div>
  );
}
