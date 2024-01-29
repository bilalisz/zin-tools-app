import { TypographyH3 } from "@/components/ui/Typography";
import React from "react";
import CustomCard from "./CustomCard";
import { CardType } from "@/types";
import CustomSilder from "./CustomSilder";
import Link from "next/link";
import { appLinks } from "@/constants/links";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type PropsType = {
  heading: string;
  cardData: CardType[];
  cardHovered?: boolean;
  silder?: boolean;
  headingBtn?: boolean;
};

const CardContainer: React.FC<PropsType> = ({
  cardData,
  heading,
  cardHovered = false,
  silder = false,
  headingBtn = false,
}) => {
  return (
    <section>
      <div className="flex justify-between items-center">
        <TypographyH3>{heading}</TypographyH3>
        {headingBtn ? (
          <Link
            href={appLinks.allCards}
            target="_blank"
            className="text-[12px] font-semibold px-3 py-2 rounded-full bg-gray95 flex gap-1 items-center"
          >
            ALL
            <MdOutlineKeyboardArrowRight className="h-5 w-5" />
          </Link>
        ) : null}
      </div>
      <div className="flex justify-start gap-[25px] mt-2">
        {silder || cardData.length > 5 ? (
          <CustomSilder cardData={cardData} />
        ) : (
          cardData.map((card) => (
            <CustomCard key={card.id} cardData={card} hovered={cardHovered} />
          ))
        )}
      </div>
    </section>
  );
};

export default CardContainer;
