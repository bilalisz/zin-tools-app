import React from "react";
import SocialMedia from "./SocialMedia";
import FooterLinks from "./FooterLinks";
import { getFooterLinks, getGeneralLinks } from "@/utils";
import { TypographyH2 } from "@/components/ui/Typography";
import Link from "next/link";
import { BiMoon } from "react-icons/bi";

const Footer = () => {
  const footerLinks = getFooterLinks();
  const generalLinks = getGeneralLinks();
  return (
    <footer className="my-footer">
      <SocialMedia />
      <hr className="m-6" />
      <div className="py-5 px-10 flex gap-20">
        <FooterLinks
          heading="Internal Links"
          linkCollection={footerLinks.internal}
        />
        <FooterLinks
          heading="Internal Links"
          linkCollection={footerLinks.enterprise}
        />
        <FooterLinks
          heading="Internal Links"
          linkCollection={footerLinks.internal}
        />
        <FooterLinks
          heading="Internal Links"
          linkCollection={footerLinks.enterprise}
        />
      </div>
      <hr className="m-6" />
      <div className="flex justify-between items-center px-8">
        <div className="  flex items-center gap-4">
          <Link
            href="https://similarwatch.com"
            target="_blank"
            className="flex gap-1"
          >
            <TypographyH2>Similar</TypographyH2>
            <TypographyH2 className="bg-gray-800 text-white rounded-lg px-4 text-[18px]">
              Watch
            </TypographyH2>
          </Link>
          <ul className="flex gap-4">
            {generalLinks.map((link) => (
              <li key={link.id} className="text-[10px] text-muted-foreground">
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="moon-icon">
          <BiMoon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
