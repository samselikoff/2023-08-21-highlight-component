"use client";

import { useState } from "react";

export default function Home() {
  let [count, setCount] = useState(100);

  let ref = useHighlight([count], {
    transition: { duration: 1 },
    animation: {
      backgroundColor: ["rgb(14 165 233 / 0.75)", "rgb(14 165 233 / 0)"],
      color: ["white", "default"],
    },
  });

  return (
    <div className="p-20 mb-20">
      <button
        className="bg-gray-700 text-white font-medium px-3 py-2 rounded"
        onClick={() => setCount(count + 1)}
      >
        Update
      </button>

      <div className="grid grid-cols-3 mt-20">
        <div
          ref={ref}
          className="overflow-hidden rounded-lg border border-white/[0.15] p-3 md:px-4 md:py-5 shadow text-sky-500
            [--highlight-to:theme(colors.gray.900)]
            [--highlight-from:theme(colors.sky.500)]
          "
        >
          <dt className="truncate text-sm font-medium text-white/50">
            Total hits
          </dt>
          <dd className="relative md:mt-2 text-lg md:text-xl tabular-nums font-semibold md:tracking-tight origin-center truncate">
            {count}
          </dd>
        </div>
      </div>
    </div>
  );
}
