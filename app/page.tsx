import Carousel from "./components/Carousel/Carousel";
import { carouselData } from "./components/Carousel/Data/carouselData";

export default function Home() {
  return (
    <div className="">
      <main className="min-w-screen flex min-h-screen items-center justify-center bg-[#333333]">
        <Carousel carouselData={carouselData} />
      </main>
    </div>
  );
}
