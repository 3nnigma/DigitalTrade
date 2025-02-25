
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GlowingImage() {
  return (
    <motion.div
      initial={{ filter: "drop-shadow(-10px 15px 15px rgba(59,130,246,0.5))" }}
      animate={{
        filter: [
          "drop-shadow(-10px 15px 15px rgba(59,130,246,0.6))",
          "drop-shadow(0px 15px 20px rgba(59,130,246,0.5))",
          "drop-shadow(-10px 15px 15px rgba(59,130,246,0.6))",
        ],
        transition: { duration: 4, repeat: Infinity, ease: "linear" }
      }}
      className="flex justify-center items-center border-l border-r border-[rgba(75,85,99,0.36)] mx-12 mb-6"
    >
      <Image
        src="/graphics3d.png"
        alt="card"
        width={280}
        height={280}
      />
    </motion.div>
  );
}
