"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Repeat, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/buttons/button";
import { cn } from "@/lib/utils";
import { useCardStore } from "./helpers/store";
import CardFront from "./components/cardFront";
import CardBack from "./components/cardBack";
import CardDetails from "./CardDetails";

export default function CardView() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showNumber, setShowNumber] = useState(false);
  const { card } = useCardStore();

  if (!card) return null;

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-full max-w-md perspective-1000">
          <motion.div
            className={cn(
              "relative w-full h-56 transition-all duration-500 preserve-3d",
              "sm:h-64"
            )}
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.1, stiffness: 100 }}
          >
            <div className="absolute inset-0 backface-hidden">
              <CardFront showNumber={showNumber} />
            </div>
            <div
              className="absolute inset-0 backface-hidden"
              style={{ transform: "rotateY(180deg)" }}
            >
              <CardBack />
            </div>
          </motion.div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <Repeat className="w-4 h-4 mr-2" />
            {isFlipped ? "Show Front" : "Show Back"}
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowNumber(!showNumber)}
          >
            {showNumber ? (
              <>
                <EyeOff className="w-4 h-4 mr-2" />
                Hide Number
              </>
            ) : (
              <>
                <Eye className="w-4 h-4 mr-2" />
                Show Number
              </>
            )}
          </Button>
        </div>
      </div>

      <CardDetails />
    </div>
  );
}
