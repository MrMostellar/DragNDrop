import React from "react";
import { GoDotFill } from "react-icons/go";
import { carouselData } from "./Data/carouselData";

export default function CarouselDots() {
  return carouselData.map((element) => {
    return (
      <div key={element.id} className="p-1">
        <GoDotFill
          size="1.1rem"
          color="white"
          className="hover:-translate-y-1"
        />
      </div>
    );
  });
}
