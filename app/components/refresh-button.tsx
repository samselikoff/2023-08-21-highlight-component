"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export default function RefreshButton({ children }: { children: ReactNode }) {
  let router = useRouter();

  return (
    <button
      onClick={() => {
        router.refresh();
      }}
      className="rounded bg-gray-700 px-3 py-2 font-medium text-white"
    >
      {children}
    </button>
  );
}
