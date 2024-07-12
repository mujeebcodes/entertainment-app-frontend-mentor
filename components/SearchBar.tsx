"use client";
import { usePathname } from "next/navigation";
import SearchIcon from "./icons/SearchIcon";
import { Input } from "./ui/input";

const SearchBar = ({ placeholder }: { placeholder: string }) => {
  const pathname = usePathname();

  return (
    <div>
      <SearchIcon />
      <Input />
    </div>
  );
};
export default SearchBar;
