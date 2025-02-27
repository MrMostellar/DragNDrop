import Image from "next/image";
import React from "react";
import Loading from "../Loading";

interface CarouselCardProps {
  data: { imgURL: string; imgAlt: string }[];
  currentIndex: number;
}

export default function CarouselCards({
  data,
  currentIndex,
}: CarouselCardProps) {
  return (
    <div className="m-1 flex flex-1 bg-gray-500">
      {data ? (
        <Image
          src={data[currentIndex].imgURL}
          alt={data[currentIndex].imgAlt}
          fill
          className="rounded-3xl object-cover"
        />
      ) : (
        <Loading />
      )}
    </div>
  );
}
