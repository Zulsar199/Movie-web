"use client";

import { DynamicPagination } from "@/components/DynamicPagination";
import { MovieCard } from "@/components/MovieCard";
import { CATEGORIES } from "@/constants";
import { getMoviesByCategory } from "@/utils";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const params = useParams();

  const [moviesByCategory, setMoviesByCategory] = useState<Movie[]>([]);
  const [totalPage, setTotalPage] = useState<number>(1);

  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const getCategoryLabel = (category: string) => {
    return CATEGORIES.find((c) => c.name === category)?.label;
  };

  useEffect(() => {
    getMoviesByCategory(params.category as string, currentPage).then(
      (response) => {
        setMoviesByCategory(response?.results);
        setTotalPage(response?.total_pages);
      }
    );
  }, [currentPage]);

  return (
    <div className="max-w-screen-xl m-auto">
      <p className="my-8 text-3xl font-semibold">
        {getCategoryLabel(params.category as string)}
      </p>

      <div className="grid grid-cols-5 gap-8 mb-4">
        {moviesByCategory?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>

      <DynamicPagination total_page={totalPage} />
    </div>
  );
}
