"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { createUrl } from "@/lib/utils";

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setSearchValue(searchParams?.get("q") || "");
  }, [searchParams, setSearchValue]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }

    router.push(createUrl("/search", newParams));
  }

  return (
    <form onSubmit={onSubmit} className="relative w-1/4">
      <input
        type="text"
        name="search"
        placeholder="Search for countries..."
        autoComplete="off"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-full h-12 rounded-lg border bg-white px-4 py-2 text-sm text-black placeholder:text-neutral-500 dark:border-transparent dark:bg-dark-blue dark:text-white dark:placeholder:text-neutral-400 pl-12"
      />
      <div className="absolute left-4 top-0 mr-3 flex h-full items-center">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </form>
  );
}
