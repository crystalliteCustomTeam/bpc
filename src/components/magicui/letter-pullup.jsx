"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/utils";

export default function LetterPullup({
  className,
  words,
  delay
}) {
  const letters = words.split("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * (delay ? delay : 0.05), // By default, delay each letter's animation by 0.05 seconds
      },
    }),
  };

  return (
    (<span className="inline-flex justify-center" ref={ref}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          custom={i}
          className={cn(
            "",
            className
          )}>
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.span>
      ))}
    </span>)
  );
}
