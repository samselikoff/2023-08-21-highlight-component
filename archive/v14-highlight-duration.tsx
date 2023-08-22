"use client";

import { useEffect, useState } from "react";

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
        <Highlight trigger={[count]} duration={75} className="group">
          <div className="overflow-hidden rounded-lg border border-white/[0.15] p-3 text-sky-500 shadow transition duration-1000 group-data-[state=on]:bg-sky-500 group-data-[state=on]:text-white group-data-[state=on]:duration-75 md:px-4 md:py-5">
            <dt className="truncate text-sm font-medium text-white/50">
              Total hits
            </dt>
            <dd className="relative origin-center truncate text-lg font-semibold tabular-nums md:mt-2 md:text-xl md:tracking-tight">
              {count}
            </dd>
          </div>
        </Highlight>
      </div>
    </div>
  );
}

function Highlight({ children, trigger, duration, className }) {
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
