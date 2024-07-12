"use client";
import { usePathname } from "next/navigation";
import SearchIcon from "./icons/SearchIcon";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

const SearchBar = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="flex items-center gap-x-5 mt-5 mb-5">
      <Search className="" />
      <Input
        type="text"
        placeholder={placeholder}
        className="border-none outline-none focus:border-b-2 focus:border-red-500"
      />
    </div>
  );
};
export default SearchBar;
