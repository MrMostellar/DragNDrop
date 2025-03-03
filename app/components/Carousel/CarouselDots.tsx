import { GoDot, GoDotFill } from "react-icons/go";
import { carouselData } from "./Data/carouselData";

interface CarouselDotsProps {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  color: string;
  size: string | number;
}

export default function CarouselDots({
  setCurrentIndex,
  currentIndex,
  color,
  size,
}: CarouselDotsProps) {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.getAttribute("data-id");
    if (id !== null) {
      setCurrentIndex(Number(id));
    }
  };

  return carouselData.map((element) => {
    return (
      <div
        data-id={element.id}
        key={element.id}
        className="p-1"
        onClick={handleClick}
      >
        {currentIndex === element.id ? (
          <GoDotFill
            size={size}
            color={color}
            className="hover:-translate-y-1"
          />
        ) : (
          <GoDot size={size} color={color} className="hover:-translate-y-1" />
        )}
      </div>
    );
  });
}
