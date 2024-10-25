"use client";;
import { useMemo, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function FadeText({
  direction = "up",
  className,

  framerProps = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { type: "spring" } },
  },

  text
}) {
  const directionOffset = useMemo(() => {
    const map = { up: 10, down: -10, left: -10, right: 10 };
    return map[direction];
  }, [direction]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const axis = direction === "up" || direction === "down" ? "y" : "x";

  const FADE_ANIMATION_VARIANTS = useMemo(() => {
    const { hidden, show, ...rest } = framerProps;

    return {
      ...rest,
      hidden: {
        ...(hidden ?? {}),
        opacity: hidden?.opacity ?? 0,
        [axis]: hidden?.[axis] ?? directionOffset,
      },
      show: {
        ...(show ?? {}),
        opacity: show?.opacity ?? 1,
        [axis]: show?.[axis] ?? 0,
      },
    };
  }, [directionOffset, axis, framerProps]);

  return (
    (<motion.div
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      variants={FADE_ANIMATION_VARIANTS}
      ref={ref}>
      <motion.div className={className} dangerouslySetInnerHTML={{ __html: text }} />
    </motion.div>)
  );
}
