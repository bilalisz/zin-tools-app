import { TypographyLarge, TypographyMuted } from "@/components/ui/Typography";
import { FooterLinkType } from "@/types";
import Link from "next/link";
import React from "react";

type PropsType = {
  heading: string;
  linkCollection: FooterLinkType[] | undefined;
};

const FooterLinks: React.FC<PropsType> = ({ heading, linkCollection }) => {
  return (
    <div className="flex flex-col gap-6">
      <TypographyLarge>{heading}</TypographyLarge>
      <ul className="flex flex-col gap-4">
        {linkCollection?.map((link) => (
          <li key={link.id}>
            <Link href={link.url}>
              <TypographyMuted>{link.label}</TypographyMuted>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
