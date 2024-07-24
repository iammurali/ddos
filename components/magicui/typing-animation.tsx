"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";


interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

const font = Poppins({weight: ["400"], subsets: ["latin"] });

export default function TypingAnimation({
  text,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [i, setI] = useState<number>(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [duration, i]);

  return (
    <h1
      className={cn(
        font.className,
        "font-display text-center text-2xl md:text-2xl lg:text-4xl font-bold leading-[3.5rem] tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {displayedText ? displayedText : text}
    </h1>
  );
}
