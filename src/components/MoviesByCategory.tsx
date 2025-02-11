"use client";

import { getMoviesByCategory } from "@/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

export const MoviesByCategory = () => {
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  useEffect(() => {
    getMoviesByCategory("upcoming").then((movies) =>
      setUpcomingMovies(movies.results)
    );
  }, []);
  return (
    <div className="max-w-screen-xl m-auto space-y-8 my-10">
      <div className="flex justify-between">
        <p className="font-bold text-xl">Upcoming</p>
        <Link href={"/category/upcoming"} className="flex items-center gap-2">
          See more{" "}
          <span>
            <ArrowRight size={16} />
          </span>
        </Link>
      </div>
      <div className="grid grid-cols-5 grid-rows-2 w-full gap-4 justify-between">
        {upcomingMovies.slice(0, 10).map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};
