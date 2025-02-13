import { Input } from "@/components/ui/input";
import { Search, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { formatRate, getSearchedMovies } from "@/utils";
import { getImgUrl } from "@/utils/get-img-url";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export const SearchInput = ({
  setIsActiveSearch,
  isActiveSearch,
}: {
  isActiveSearch: boolean;
  setIsActiveSearch: (_isActiveSearch: boolean) => void;
}) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [style, setStyle] = useState(isActiveSearch ? "block" : "hidden");
  const handleClick = () => {
    setIsActiveSearch(true);
    setStyle("block");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    setStyle(isActiveSearch ? "block" : "hidden");
  }, [isActiveSearch]);

  useEffect(() => {
    getSearchedMovies(searchValue, 1).then((response) => {
      setSearchResults(response?.results);
    });
  }, [searchValue]);

  return (
    <div className="">
      <div className="flex h-9 gap-[10px] items-center border px-3 rounded-md ">
        <Search size={16} onClick={handleClick} />
        <Input
          onChange={handleInputChange}
          value={searchValue}
          placeholder="Search..."
          className={cn(
            "h-7 focus-visible:ring-0 border-0 outline-none rounded-none hidden sm:block",
            style
          )}
        />
      </div>
      {searchResults?.length > 0 && (
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-50 bg-white w-[580px] p-3 h-fit">
          {searchResults?.slice(0, 5).map((movie, index) => (
            <div key={index}>
              <div className="p-2 flex gap-4">
                <img
                  src={getImgUrl(movie.poster_path)}
                  className="w-[67px] h-[100px] rounded-md"
                />
                <div className="w-full space-y-3">
                  <div>
                    <p className="text-xl font-semibold">{movie.title}</p>
                    <div className="flex">
                      <Star size={16} fill="yellow" color="yellow" />
                      <p>
                        {formatRate(movie.vote_average)}
                        <span className="text-slate-400 text-xs">/10</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p>{movie.release_date.split("-")[0]}</p>
                    <Link href={`/detail/${movie.id}`}>See more</Link>
                  </div>
                </div>
              </div>
              <Separator className="my-4" />{" "}
            </div>
          ))}
          <Link href={`/search?value=${searchValue}`}>
            See all results for {`"${searchValue}"`}
          </Link>
        </div>
      )}
    </div>
  );
};
