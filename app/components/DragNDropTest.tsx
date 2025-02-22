"use client";
import React, { useRef, DragEvent } from "react";

export default function DragNdDropTest() {
  const dragItemRef = useRef<HTMLElement | null>(null);

  const handleDragStart = (e: DragEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    e.dataTransfer.setData("text/plain", "");
    dragItemRef.current = target;
  };

  const handleDragOver = (e: DragEvent<HTMLElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: DragEvent<HTMLElement>) => {
    const target = dragItemRef.current;
    if (!target) return;
    const x = e.clientX - target.offsetWidth / 4;
    const y = e.clientY - target.offsetHeight / 4;
    target.style.left = x + "px";
    target.style.top = y + "px";
  };

  return (
    <div
      className="bg-black h-screen w-screen"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div
        className="absolute border-[2px] min-w-[10vw] min-h-[5vh] flex justify-center items-center bg-yellow-600"
        draggable="true"
        onDragStart={handleDragStart}
      >
        Drag me
      </div>
    </div>
  );
}
