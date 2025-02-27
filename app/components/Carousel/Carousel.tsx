"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CarouselDots from "./CarouselDots";
import CarouselCards from "./CarouselCards";
import { carouselCards } from "./Data/carouselData";

const iconSize = "1.4rem";
const iconColor = "white";
const iconStyles = "hover:size-[1.5rem]";

export interface CarouselProps {
  carouselData: carouselCards[];
}

export default function Carousel({ carouselData }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleClickPrevious = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => {
    currentIndex === 0
      ? setCurrentIndex(carouselData.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };

  const handleClickNext = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    currentIndex === carouselData.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="flex min-h-[60vh] min-w-[75vw] rounded-3xl bg-black p-2 lg:min-h-[75vh]">
      <div className="relative flex flex-1 items-center justify-center">
        <div
          className="absolute left-4 z-10 flex flex-1"
          onClick={handleClickPrevious}
        >
          <FaChevronLeft
            color={iconColor}
            size={iconSize}
            className={iconStyles}
          />
        </div>
        <CarouselCards data={carouselData} currentIndex={currentIndex} />
        <div className="relative right-4 z-10" onClick={handleClickNext}>
          <FaChevronRight
            color={iconColor}
            size={iconSize}
            className={iconStyles}
          />
        </div>
        <div className="absolute bottom-4 z-10 flex">
          <CarouselDots
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
      </div>
    </div>
  );
}
