"use client";

import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const NavBarLink = ({
  label,
  link,
  icon,
}: {
  label: string;
  link: string;
  icon: ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <a
      href={link}
      aria-label={label}
      color="default"
      className={`group hover:bg-dark dark:hover:bg-light bg-light dark:bg-dark hover:text-tertiary relative flex justify-start gap-2 rounded-full p-3 shadow-md transition-all ${pathname === link && "bg-light dark:bg-dark text-secondary dark:text-tertiary"}`}>
      {icon}

      <p className="bg-dark absolute left-16 w-auto min-w-max origin-left scale-0 rounded-md p-2 shadow-md transition-all duration-100 group-hover:scale-100">
        {label}
      </p>
    </a>
  );
};

export default NavBarLink;
