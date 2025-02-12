"use client";

import { useState } from "react";
import { Logo } from "../Logo";
import { GenresList } from "./GenresList";
import { SearchInput } from "./SearchInput";
import { ThemeChangeButton } from "./ThemeChangeButton";

export const Header = () => {
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  return (
    <div>
      <div className="flex justify-between max-w-screen-xl m-auto my-3 ">
        {!isActiveSearch && <Logo color="#4338CA" />}
        <div className="flex gap-2 sm:w-2/3 justify-between">
          <div className="flex gap-3">
            <GenresList
              isActiveSearch={isActiveSearch}
              setIsActiveSearch={setIsActiveSearch}
            />
            <SearchInput
              isActiveSearch={isActiveSearch}
              setIsActiveSearch={setIsActiveSearch}
            />
          </div>
          <ThemeChangeButton
            isActiveSearch={isActiveSearch}
            setIsActiveSearch={setIsActiveSearch}
          />
        </div>
      </div>
    </div>
  );
};
