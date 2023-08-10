"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";

type Mode = "dark" | "light";

function MainHeader() {
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
    <header className="sticky top-0 bg-white  shadow-md p-4 dark:bg-dark-blue">
      <div className="flex justify-between items-center mx-auto max-w-7xl px-4">
        <h1 className="text-black text-lg font-extrabold dark:text-white">
          Where in the word?
        </h1>
        <div>
          <FontAwesomeIcon icon={faMoon} />
          <span className="dark:text-white ml-2">Dark Mode</span>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
