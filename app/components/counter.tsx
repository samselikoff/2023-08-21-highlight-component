"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Counter({ value }: { value: number }) {
  let v = useSpring(value, { bounce: 0, duration: 1500 });
  let display = useTransform(v, Math.round);

  useEffect(() => {
    v.set(value);
  }, [v, value]);

  return <motion.span>{display}</motion.span>;
}
