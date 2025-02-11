import { Slides } from "@/components/carousel/Slides";
import { MoviesByCategory } from "@/components/MoviesByCategory";

export default function Home() {
  return (
    <div className="h-fit">
      <Slides />
      <MoviesByCategory />
    </div>
  );
}
