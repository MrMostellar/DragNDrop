"use client";
import { carouselCards, carouselData } from "./Data/carouselData";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CarouselDots from "./CarouselDots";
import CarouselCards from "./CarouselCards";

const iconSize = "1.4rem";
const iconColor = "white";
const iconStyles = "hover:size-[1.5rem]";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleClickPrevious = () => {};

  const handleClickNext = () => {};

  return (
    <div className="flex min-h-[50vh] min-w-[75vw] rounded-3xl bg-black p-2">
      <div className="relative flex flex-1 items-center justify-center">
        <div className="absolute left-4 z-10">
          <FaChevronLeft
            color={iconColor}
            size={iconSize}
            className={iconStyles}
          />
        </div>
        <div className="flex flex-1">
          <CarouselCards data={carouselData} currentIndex={currentIndex} />
        </div>
        <div className="absolute right-4 z-10">
          <FaChevronRight
            color={iconColor}
            size={iconSize}
            className={iconStyles}
          />
        </div>
        <div className="absolute bottom-4 z-10 flex">
          <CarouselDots />
        </div>
      </div>
    </div>
  );
}
