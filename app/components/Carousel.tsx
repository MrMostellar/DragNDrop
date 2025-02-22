import React from "react";

export default function Carousel() {
  return (
    <div
      id="container"
      className="bg-black min-w-[80vw] min-h-[60vh] flex items-center justify-center rounded-3xl"
    >
      <div id="controls" className="bg-[#333333] w-[79vw] h-[59vh] rounded-3xl">
        <div id="content"></div>
      </div>
    </div>
  );
}
