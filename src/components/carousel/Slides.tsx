"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getMoviesByCategory } from "@/utils";
import { useEffect, useState } from "react";
import { Slide } from "./Slide";
import Autoplay from "embla-carousel-autoplay";

export const Slides = () => {
  const [popularMovie, setPopularMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMoviesByCategory("popular").then((response) => {
      setPopularMovies(response.results);
    });
  }, []);

  return (
    <div>
      <Carousel
        className="w-screen h-[600px]"
        plugins={[Autoplay({ delay: 5000 })]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {popularMovie.map((movie, index) => {
            const imageUrl =
              process.env.NEXT_PUBLIC_TMDB_IMAGE_SERVICE_URL +
              "/original" +
              movie.backdrop_path;
            return (
              <CarouselItem key={index} className="h-[600px] ">
                <Slide movie={movie} imageUrl={imageUrl} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-12 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-12 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
};
