import { Logo } from "../Logo";
import { GenresList } from "./GenresList";
import { SearchInput } from "./SearchInput";
import { ThemeChangeButton } from "./ThemeChangeButton";

export const Header = () => {
  return (
    <div>
      <div className="flex justify-between max-w-screen-xl m-auto my-3">
        <Logo color="#4338CA" />
        <div className="flex gap-3">
          <GenresList />
          <SearchInput />
        </div>
        <ThemeChangeButton />
      </div>
    </div>
  );
};
