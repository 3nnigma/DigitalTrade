"use client";

import { BlockSections } from "./components/blockSections";
import DeviceSection from "./components/deviceSection";
import Footer from "./components/footer";
import MainBackground from "./components/mainBackground";
import { TimelineBlock } from "./components/timelineBlock";
import Futures from "./ui/furutes";

export default function Homepage() {
  return (
    <div>
      <MainBackground />
      <TimelineBlock />
      <BlockSections />
      <Futures />
      <DeviceSection />
      <Footer />
    </div>
  );
}
