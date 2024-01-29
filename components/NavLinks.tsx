import { appLinks } from "@/constants/links";
import { getNavLinks } from "@/utils";
import { link } from "fs/promises";
import Link from "next/link";
import React from "react";

const NavLinks = () => {
  const links = getNavLinks();
  return (
    <nav className="px-3 mt-4">
      <ul className="flex justify-center gap-10">
        {links.map((link: any) => (
          <li key={link.id} className="text-[12px] font-[500]">
            <Link href={appLinks.navLinkGT} target="_blank">
              {" "}
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
