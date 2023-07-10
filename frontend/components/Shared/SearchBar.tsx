"use client";
import React, { useState } from "react";
import { SearchBarProps } from "@/types";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const SearchBar = ({ type, placeholder, name, id }: SearchBarProps) => {
  const [search, setSearch] = useState("");

  console.log(search);

  return (
    <div className="form__input relative max-w-[320px] md:max-w-[600px] lg:max-w-[800px] mx-auto ">
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        id={id}
        value={search}
        onChange={(e) => setSearch(() => e.target.value)}
        className="rounded-md w-full py-5 pl-10 focus:outline-none lg:rounded-full relative"
      />

      <label
        htmlFor={name}
        className="absolute top-1/2 right-3 -translate-y-1/2 text-black peer-focus:text-primary transition bg-none md:bg-black-light_gray p-4 rounded-full"
      >
        <Link href="/">{name === "search" ? <FaSearch /> : ""}</Link>
      </label>
    </div>
  );
};

export default SearchBar;
