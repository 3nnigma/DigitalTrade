"use client";

import { BlockSections } from "./components/blockSections";
import { IntroSections } from "./components/introSections";
import MainBackground from "./components/mainBackground";
import { TimelineBlock } from "./components/timelineBlock";

export default function Homepage() {
  return (
    <>
      <MainBackground />
      <BlockSections />
      <TimelineBlock />
      <IntroSections />
    </>
  );
}
