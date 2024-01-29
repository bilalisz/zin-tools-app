import React from "react";
import Link from "next/link";
import NavLinks from "@/components/NavLinks";
import { Input } from "@/components/ui/input";
import { appLinks } from "@/constants/links";
import { IoMdSearch } from "react-icons/io";

const Header = () => {
  return (
    <header className="shadow-md pb-3 mb-5">
      <div className="header-cnt px-2">
        <Link className="logo-cnt" href={appLinks.rootLink} target="_blank">
          <img src="/icons/logo.png" alt="logo" className="w-10 h-10" />
          <h1>ZinTools</h1>
        </Link>
        <div className="search-cnt ">
          <input
            className="search-input"
            placeholder="Search for Movies, TV Shows, Themes & Cast"
          />
          <button>
            <IoMdSearch className="w-7 h-7 mx-2 border-l-2 pl-2" />
          </button>
        </div>
        <div className="action-cnt ">
          <Link href="#">Log in</Link>
          <Link href="#" className="signup-btn">
            Sign up
          </Link>
        </div>
      </div>
      <NavLinks />
    </header>
  );
};

export default Header;
