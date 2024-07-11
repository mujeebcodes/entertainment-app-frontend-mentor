import Link from "next/link";
import BookmarkIcon from "./icons/BookmarkIcon";
import HomeIcon from "./icons/HomeIcon";
import MoviesIcon from "./icons/MoviesIcon";
import TvSeriesIcon from "./icons/TVSeriesIcon";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const currentPath = usePathname();

  return (
    <div className="flex gap-4 lg:flex-col">
      <Link href="/">
        <HomeIcon href="/" currentPath={currentPath} />
      </Link>
      <Link href="/movies">
        <MoviesIcon href="/movies" currentPath={currentPath} />
      </Link>
      <Link href="/tv-series">
        <TvSeriesIcon href="/tv-series" currentPath={currentPath} />
      </Link>

      <Link href="/bookmarks">
        <BookmarkIcon href="/bookmarks" currentPath={currentPath} />
      </Link>
    </div>
  );
};
export default NavItems;
