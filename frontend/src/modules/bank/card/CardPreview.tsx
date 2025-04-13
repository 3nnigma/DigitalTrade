"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Repeat } from "lucide-react";
import { Button } from "@/components/ui/buttons/button";
import { useCardStore } from "./helpers/store";
import { useForm } from "react-hook-form";
import CardFront from "./components/cardFront";
import CardBack from "./components/cardBack";

export default function CardPreview() {
  const [isFlipped, setIsFlipped] = useState(false);
  const { card } = useCardStore();
  const form = useForm();

  // Subscribe to form changes to ensure preview updates
  form.watch();

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-full max-w-sm perspective-1000">
        <motion.div
          className="relative w-full h-56 transition-all duration-500 preserve-3d"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.1,  stiffness: 100 }}
        >
          <div className="absolute inset-0 backface-hidden">
            <CardFront isPreview={true} />
          </div>
          <div
            className="absolute inset-0 backface-hidden"
            style={{ transform: "rotateY(180deg)" }}
          >
            <CardBack isPreview={true} />
          </div>
        </motion.div>
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <Repeat className="w-4 h-4 mr-2" />
        {isFlipped ? "Show Front" : "Show Back"}
      </Button>
    </div>
  );
}
