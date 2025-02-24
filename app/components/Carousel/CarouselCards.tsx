import Image from "next/image";
import React from "react";
import { CarouselProps } from "./Carousel";

const styles = "static flex flex-1 bg-gray-500 m-1";
const imgStyles = "object-cover rounded-3xl";

export default function CarouselCards({ data, currentIndex }: CarouselProps) {
  return (
    <div className={styles}>
      <Image
        src={data[currentIndex].imgURL}
        alt={data[currentIndex].imgAlt}
        fill
        className={imgStyles}
      />
    </div>
  );
}
