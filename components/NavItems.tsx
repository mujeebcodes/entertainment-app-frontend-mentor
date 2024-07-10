import Link from "next/link";
import Bookmark from "./icons/Bookmark";
import Home from "./icons/Home";
import Movies from "./icons/Movies";
import TvSeries from "./icons/TvSeries";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const currentPath = usePathname();

  return (
    <div className="flex gap-x-4">
      <Link href="/">
        <Home href="/" currentPath={currentPath} />
      </Link>
      <Link href="/movies">
        <Movies href="/movies" currentPath={currentPath} />
      </Link>
      <Link href="/tv-series">
        <TvSeries href="/tv-series" currentPath={currentPath} />
      </Link>

      <Link href="/bookmarks">
        <Bookmark href="/bookmarks" currentPath={currentPath} />
      </Link>
    </div>
  );
};
export default NavItems;
