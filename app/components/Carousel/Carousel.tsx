"use client";

import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CarouselDots from "./CarouselDots";
import CarouselCards from "./CarouselCards";
import { carouselCards } from "./Data/carouselData";
export interface CarouselProps {
  carouselData: carouselCards[];
  color?: string;
  size?: string | number;
}

export default function Carousel({ carouselData, color, size }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const iconSize = size ? size : "1.4rem";
  const iconColor = color ? color : "white";
  const iconStyles = "hover:size-[1.5rem]";

  const handleKeyDown = (e: KeyboardEvent) => {
    const target = e.key;
    if (target === "ArrowLeft") {
      handlePrevious();
    } else if (target === "ArrowRight") {
      handleNext();
    }
  };

  const handlePrevious = () => {
    currentIndex === 0
      ? setCurrentIndex(carouselData.length - 1)
      : setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    currentIndex === carouselData.length - 1
      ? setCurrentIndex(0)
      : setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    const interval = setInterval(() => {
      if (!isHovered) {
        handleNext();
      }
    }, 5000);
    return () => {
      clearInterval(interval);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, isHovered]);

  return (
    <div
      className="flex min-h-[60vh] min-w-[75vw] rounded-3xl bg-transparent/40 p-2 lg:min-h-[75vh] xl:min-w-[60vw]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className="relative flex flex-1 items-center justify-center">
        <div
          className="absolute left-4 z-10 flex flex-1"
          onClick={handlePrevious}
        >
          <FaChevronLeft
            color={iconColor}
            size={iconSize}
            className={iconStyles}
          />
        </div>
        <CarouselCards data={carouselData} currentIndex={currentIndex} />
        <div className="relative right-4 z-10" onClick={handleNext}>
          <FaChevronRight
            color={iconColor}
            size={iconSize}
            className={iconStyles}
          />
        </div>
        <div className="absolute bottom-4 z-10 flex">
          <CarouselDots
            color={iconColor}
            size={iconSize}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
      </div>
    </div>
  );
}
