import { Slides } from "@/components/carousel/Slides";
import { MoviesByCategory } from "@/components/MoviesByCategory";
import { CATEGORIES } from "@/constants";

export default function Home() {
  return (
    <div className="h-fit">
      <Slides />
      {CATEGORIES.map((category) => (
        <MoviesByCategory
          key={category.name}
          name={category.name}
          label={category.label}
        />
      ))}
    </div>
  );
}
