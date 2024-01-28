import React from "react";
import CardContainer from "./CardContainer";
import { getCardData } from "@/utils";
import { CardType } from "@/types";

const MainContainer = () => {
  const bookmarkData: CardType[] = getCardData("bookmarks");
  const convertFromPDF: CardType[] = getCardData("convFromPDF");
  const convertToPDF: CardType[] = getCardData("convToPDF");

  return (
    <main className="w-full  px-32 py-6 flex flex-col gap-10">
      <CardContainer heading="Your Bookmarks" cardData={bookmarkData} />
      <CardContainer
        heading="Convert From PDF"
        cardData={convertFromPDF}
        cardHovered
        silder
        headingBtn
      />
      <CardContainer heading="Convert to PDF" cardData={convertToPDF} />
    </main>
  );
};

export default MainContainer;
