import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <>
      <Image
        src={"/images/Loader.png"}
        alt=""
        fill
        className="loading-animation object-cover"
      />
    </>
  );
}
