"use client";

import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

export default function HighlightFMRenderProp({
  children,
  trigger = [],
  duration,
  variants,
  className = "",
}: {
  children: ({ isHighlighting }: { isHighlighting: boolean }) => ReactNode;
  trigger: any[];
  duration: number;
  variants: any;
  className?: string;
}) {
  let [isHighlighting, setIsHighlighting] = useState(false);

  useEffect(() => {
    setIsHighlighting(true);

    let id = setTimeout(() => {
      setIsHighlighting(false);
    }, duration);

    return () => {
      clearTimeout(id);
    };
  }, [duration, ...trigger]);

  return (
    <motion.div
      animate={isHighlighting ? "on" : "off"}
      variants={variants}
      className={className}
    >
      {children()}
    </motion.div>
  );
}
