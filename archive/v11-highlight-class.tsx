"use client";

import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  let [count, setCount] = useState(100);

  return (
    <div className="mb-20 p-20">
      <button
        className="rounded bg-gray-700 px-3 py-2 font-medium text-white"
        onClick={() => setCount(count + 1)}
      >
        Update
      </button>

      <div className="mt-20 grid grid-cols-3">
        <Highlight
          trigger={count}
          className="overflow-hidden rounded-lg border border-white/[0.15] bg-gray-900 p-3 text-sky-500 shadow transition md:px-4 md:py-5"
          highlight="bg-sky-500 text-white duration-[50ms]"
          highlightEnd="duration-1000"
        >
          <dt className="truncate text-sm font-medium text-white/50">
            Total hits
          </dt>
          <dd className="relative origin-center truncate text-lg font-semibold tabular-nums md:mt-2 md:text-xl md:tracking-tight">
            {count}
          </dd>
        </Highlight>
      </div>
    </div>
  );
}

function Highlight({ children, trigger, highlight, highlightEnd, className }) {
  let [isHighlighted, setIsHighlighted] = useState(false);
  let ref = useRef<HTMLDivElement>(null);

  let cn = `${className} ${isHighlighted ? highlight : highlightEnd}`;

  useEffect(() => {
    setIsHighlighted(true);
  }, [trigger]);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("transitionend", () => {
        setIsHighlighted(false);
      });
    }
  }, []);

  return (
    <div ref={ref} className={cn}>
      {children}
    </div>
  );
}
