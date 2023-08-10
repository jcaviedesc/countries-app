"use client";

import React from "react";
import { usePathname } from "next/navigation";

const hiidenRoutes = ["country"];
export default function Filters({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHiidenComponent = hiidenRoutes.some((route) =>
    pathname.includes(route)
  );
  return isHiidenComponent ? null : (
    <div className="mx-auto max-w-7xl px-4 mt-16">{children}</div>
  );
}
