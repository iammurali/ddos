"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import Particles from "@/components/magicui/particles";
import TypingAnimation from "./magicui/typing-animation";

export const ParticlesComp = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <div className="relative flex overflow-hidden w-full h-screen flex-col items-center justify-center">
      <TypingAnimation
          duration={100}
          className="text-lg font-bold text-black dark:text-white"
          text="Remember, every failure is just a step towards your next epic disaster."
        />
      <Particles
        className="absolute inset-0 w-screen min-h-screen"
        quantity={200}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
};
