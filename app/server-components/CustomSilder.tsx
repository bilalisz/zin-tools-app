import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardType } from "@/types";
import CustomCard from "./CustomCard";

type PropsType = {
  cardData: CardType[];
};

const CustomSilder: React.FC<PropsType> = ({ cardData }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-full px-2"
    >
      <CarouselContent className="flex gap-5">
        {cardData.map((card) => (
          <CarouselItem key={card.id} className="basis-[201px] pr-5">
            <div className="py-1">
              <CustomCard cardData={card} hovered={true} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-[1rem]" />
      <CarouselNext className="-right-[1rem]" />
    </Carousel>
  );
};

export default CustomSilder;
