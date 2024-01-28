"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { CardType } from "@/types";

type PropsType = {
  cardData: CardType;
  hovered?: boolean;
};

const CustomCard: React.FC<PropsType> = ({ cardData, hovered = false }) => {
  const { icon, title, description } = cardData;
  const [show, setShow] = useState<boolean>(false);
  return (
    <Card
      className="card-cnt"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Image
        src={`/icons/${icon}.svg`}
        width={60}
        height={60}
        alt={`image-${icon}`}
      />
      <CardTitle className="text-[16px]">{title}</CardTitle>
      <CardDescription className="text-[10px] text-left text-muted-foreground">
        {description}
      </CardDescription>
      {hovered && show ? (
        <button className="save-icon">
          <img src="/icons/save-card.png" width={28} height={28} />
        </button>
      ) : null}
    </Card>
  );
};

export default CustomCard;
