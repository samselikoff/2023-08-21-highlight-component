"use client";

import { useState } from "react";

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
          trigger={[count]}
          start={{
            backgroundColor: "rgb(14 165 233 / 0)",
            color: "rgb(14 165 233)",
            transition: { duration: 0.075 },
          }}
          end={{
            backgroundColor: "rgb(14 165 233 / 0.75)",
            color: "rgb(255 255 255)",
            transition: { duration: 1 },
          }}
          className="overflow-hidden rounded-lg border border-white/[0.15] p-3 text-sky-500 shadow transition md:px-4 md:py-5"
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
