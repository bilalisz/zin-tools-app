import React from "react";
import { TypographyLarge } from "@/components/ui/Typography";
import { FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="px-10 flex items-center gap-7">
      <TypographyLarge>Follow us</TypographyLarge>
      <FaYoutube className="text-gray-700 text-lg" />
      <FaTwitter className="text-gray-700 text-lg" />
      <FaFacebookF className="text-gray-700 text-lg" />
    </div>
  );
};

export default SocialMedia;
