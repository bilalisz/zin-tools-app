import React from "react";
import Link from "next/link";
import NavLinks from "@/components/NavLinks";
import { Input } from "@/components/ui/input";
import { appLinks } from "@/constants/links";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <div className="header-cnt">
        <Link className="logo-cnt" href={appLinks.rootLink}>
          <img src="/icons/logo.png" alt="logo" className="w-10 h-10" />
          <h1>ZinTools</h1>
        </Link>
        <div className="search-cnt ">
          <Input
            className="search-input"
            placeholder="Search for Movies, TV Shows, Themes & Cast"
          />
          <button>
            <FaSearch className="w-5 h-5 mx-2 border-l-2 pl-2" />
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
