"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeChangeButton = ({
  isActiveSearch,
  setIsActiveSearch,
}: {
  isActiveSearch: boolean;
  setIsActiveSearch: (_isActiveSearch: boolean) => void;
}) => {
  const { setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");
  const handleClose = () => {
    setIsActiveSearch(false);
  };
  const renderIcon = () => {
    if (isDark) {
      return <Sun />;
    }
    return <Moon />;
  };
  if (isActiveSearch) {
    return (
      <Button variant={"outline"} onClick={handleClose}>
        <X />
      </Button>
    );
  } else {
    return (
      <Button className="w-9 h-9" onClick={toggleTheme} variant={"outline"}>
        {renderIcon()}
      </Button>
    );
  }
};
