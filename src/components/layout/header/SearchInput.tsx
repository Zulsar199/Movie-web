import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const SearchInput = () => {
  return (
    <div className="flex h-9 gap-[10px] items-center border px-3 rounded-md ">
      <Search size={16} />
      <Input
        placeholder="Search..."
        className="h-7 focus-visible:ring-0 border-0 outline-none rounded-none"
      />
    </div>
  );
};
