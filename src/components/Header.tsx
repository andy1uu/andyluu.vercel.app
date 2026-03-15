import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => (
  <header className="Header flex h-16 w-full items-center justify-center px-8 py-2 sm:justify-between">
    <h1 className="text-primary hidden text-3xl font-bold sm:block">
      Andy Luu
    </h1>
    <div className="flex gap-2">
      <ThemeSwitcher />
      <a
        className="Header-ResumeButton bg-primary flex rounded-full px-6 py-2 text-lg font-bold"
        href="https://drive.google.com/file/d/14jQkMz4zJ9IJBpXst4hy9C43MgZiOn7r/view?usp=sharing"
        target="_blank"
        rel="noreferrer">
        Resume
      </a>
    </div>
  </header>
);

export default Header;
