import { GoDotFill } from "react-icons/go";
import { carouselData } from "./Data/carouselData";

interface CarouselDotsProps {
  setCurrentIndex: (index: number) => void;
}

export default function CarouselDots({ setCurrentIndex }: CarouselDotsProps) {
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
        <GoDotFill
          size="1.1rem"
          color="white"
          className="hover:-translate-y-1"
        />
      </div>
    );
  });
}
