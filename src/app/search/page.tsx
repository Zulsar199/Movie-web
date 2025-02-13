"use client";

import { MovieCard } from "@/components/MovieCard";
import { getSearchedMovies } from "@/utils";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("value") || "";
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [totalResults, setTotalResults] = useState<number>(0);

  useEffect(() => {
    getSearchedMovies(searchValue, 1).then((response) => {
      setSearchResults(response?.results);
      setTotalResults(response?.total_results);
    });
  }, [searchValue]);

  return (
    <div className="max-w-screen-xl m-auto space-y-8">
      <p className="text-3xl font-semibold">Search results</p>
      <p className="text-xl font-semibold">{`${totalResults} results for "${searchValue}"`}</p>
      <div className="grid grid-cols-4 justify-between gap-12">
        {searchResults.map((result) => (
          <MovieCard key={result.id} movie={result} />
        ))}
      </div>
    </div>
  );
}
