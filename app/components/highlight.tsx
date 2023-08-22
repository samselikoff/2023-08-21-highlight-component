"use client";

import { ReactNode, useEffect, useState } from "react";

export default function Highlight({
  children,
  trigger = [],
  duration,
  className,
}: {
  children: ReactNode;
  trigger: any[];
  duration: number;
  className: string;
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
    <div data-state={isHighlighting ? "on" : "off"} className={className}>
      {children}
    </div>
  );
}
