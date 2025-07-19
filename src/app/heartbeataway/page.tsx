"use client";

import Aurora from "../components/ui-blocks/Backgrounds/Aurora/Aurora";
import BlurText from "../components/ui-blocks/TextAnimations/BlurText/BlurText";
import CircularText from "../components/ui-blocks/TextAnimations/CircularText/CircularText";
import CountUp from "../components/ui-blocks/TextAnimations/CountUp/CountUp";
import SplitText from "../components/ui-blocks/TextAnimations/SplitText/SplitText";
import TrueFocus from "../components/ui-blocks/TextAnimations/TrueFocus/TrueFocus";

export interface IPageProps {}

// Function to calculate days until August 10, 2025
function getDaysUntilTarget(): number {
  const targetDate = new Date("2025-09-10");
  const currentDate = new Date();
  const timeDifference = targetDate.getTime() - currentDate.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
  return Math.max(0, daysDifference); // Ensure we don't return negative numbers
}

export default function Page(props: IPageProps) {
  const daysRemaining = getDaysUntilTarget();

  return (
    <div className="flex relative flex-col items-center w-[100vw] h-[100dvh] overflow-hidden">
      <div className="absolute inset-0 -z-1">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.8}
          amplitude={0.2}
          speed={4}
        />
      </div>
      <p className="uppercase text-center text-sm text-white px-10 pt-5 z-10 opacity-80 mt-10">
        No matter how many days are left, I always feel that I am
      </p>
      <BlurText
        text="One Heartbeat Away From You"
        className="text-4xl font-semibold text-center mb-10 mt-2 px-10 text-white"
        delay={150}
        animateBy="words"
        direction="top"
      />
      <div className="relative">
        <CircularText
          text="MOHAMMAD❤FATIMA❤"
          onHover="speedUp"
          spinDuration={20}
          className="text-6xl font-semibold text-center text-gray-200"
        />

        <div className="flex justify-center items-center flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CountUp
            from={0}
            to={daysRemaining}
            separator=","
            direction="up"
            duration={1}
            className="text-6xl font-semibold text-center"
          />
          <p className="text-sm text-white uppercase opacity-60">days left</p>
        </div>
      </div>
      <div className="mt-auto mb-10">
        <TrueFocus
          sentence="I LOVE YOU"
          manualMode={false}
          blurAmount={5}
          borderColor="red"
          animationDuration={1}
          pauseBetweenAnimations={1}
        />
      </div>
    </div>
  );
}
