"use client";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

type Mode = "dark" | "light";

export default function ColorScheme() {
  const [mode, setMode] = useState<Mode>();

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const colorScheme = event.matches ? "dark" : "light";
        setMode(colorScheme);
      });
  }, []);
  return (
    <div>
      <FontAwesomeIcon icon={faMoon} />
      <span className="dark:text-white ml-2">Dark Mode</span>
    </div>
  );
}
