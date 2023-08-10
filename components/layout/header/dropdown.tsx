"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const Dropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const region = searchParams?.get("region") || "";

  return (
    <div className="relative inline-block text-left w-48">
      <button
        className="w-full bg-white dark:bg-dark-blue  text-white text-sm py-2 px-4 rounded inline-flex items-center justify-between"
        onClick={() => {
          setOpen((prevOpen) => !prevOpen);
        }}
      >
        <span>{region || "Filter by Region"}</span>
        <svg
          className="fill-current h-4 w-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
        </svg>
      </button>
      <div
        className={`transition origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 dark:bg-dark-blue ${
          isOpen ? "scale-100" : "scale-0"
        }`}
      >
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {REGIONS.map((region) => (
            <Link
              key={region}
              onClick={() => {
                setOpen(false);
              }}
              href={{
                pathname: "/search",
                query: { region, q: searchParams?.get("q") },
              }}
              className="block px-4 py-2 text-sm text-gray-700 dark:text-white  hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              {region}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
