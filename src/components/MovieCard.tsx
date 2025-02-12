import { formatRate } from "@/utils";
import { Star } from "lucide-react";

type MovieCardProps = {
  movie: Movie;
  page?: number;
};

export const MovieCard = (props: MovieCardProps) => {
  const { movie } = props;

  return (
    <div className="space-y-1 w-full rounded-lg bg-secondary overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-[340px]"
      />
      <div className="p-2 h-[95px]  w-full">
        <div className="flex">
          <Star color="yellow" fill="yellow" />
          <p>
            {formatRate(movie.vote_average)} <span>/10</span>
          </p>
        </div>
        <p>{movie.title}</p>
      </div>
    </div>
  );
};
