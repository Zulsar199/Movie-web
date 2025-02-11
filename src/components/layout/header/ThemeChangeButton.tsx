"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeChangeButton = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  const renderIcon = () => {
    if (isDark) {
      return <Sun />;
    }
    return <Moon />;
  };

  return (
    <Button className="w-9 h-9" onClick={toggleTheme} variant={"outline"}>
      {renderIcon()}
    </Button>
  );
};
