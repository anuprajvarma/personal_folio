"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="w-full">
      <div className="sm:w-[40rem] w-full m-auto flex justify-between items-center px-2">
        <nav className={`cursor-pointer w-full flex`}>
          <ul className="flex text-2xl w-full justify-between sm:justify-start flex-row gap-4">
            <li
              className={`hover:bg-[var(--bg)] rounded-md p-2 ${
                pathname == "/" ? "font-bold" : "font-normal"
              }`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`hover:bg-[var(--bg)] rounded-md p-2 ${
                pathname == "/about" ? "font-bold" : "font-normal"
              }`}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className={`hover:bg-[var(--bg)] rounded-md p-2 ${
                pathname == "/blog" ? "font-bold" : "font-normal"
              }`}
            >
              <Link href="/blog">Blog</Link>
            </li>
            <li
              className={`hover:bg-[var(--bg)] rounded-md p-2 ${
                pathname == "/resume" ? "font-bold" : "font-normal"
              }`}
            >
              <Link href="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
