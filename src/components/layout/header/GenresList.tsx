"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { fetchData } from "@/utils";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

export const GenresList = ({
  setIsActiveSearch,
  isActiveSearch,
}: {
  isActiveSearch: boolean;
  setIsActiveSearch: (_isActiveSearch: boolean) => void;
}) => {
  const [allGenres, setAllGenres] = useState<Genre[]>([]);
  useEffect(() => {
    fetchData("/genre/movie/list?language=en").then((response) => {
      setAllGenres(response?.genres);
    });
  }, []);
  return (
    <DropdownMenu>
      {isActiveSearch && (
        <DropdownMenuTrigger className="sm:hidden">
          <div className="flex border rounded-md px-4 py-2 text-sm items-center h-9">
            <ChevronDown size={16} />
          </div>
        </DropdownMenuTrigger>
      )}
      <DropdownMenuTrigger className="hidden sm:block">
        <div className="flex border rounded-md px-4 py-2 text-sm items-center h-9">
          <ChevronDown size={16} />
          <p>Genres</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[580px] p-5" align="start">
        <DropdownMenuLabel className="p-0">
          <p className="text-2xl font-semibold">Genres</p>
          <p className="font-normal">See lists of movies by genre</p>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="my-4" />
        <div className="flex flex-wrap gap-4">
          {allGenres?.map((genre) => (
            <div key={genre.id} className="w-fit hover:bg-transparent ">
              <Badge variant="outline" className="flex h-[22px]">
                <p>{genre.name}</p>
                <ChevronRight size={16} />
              </Badge>
            </div>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
