"use client";
import { useDataContext } from "@/DataContext";
import ItemCard from "@/components/ItemCard";
import SearchBar from "@/components/SearchBar";

const Movies = () => {
  const context = useDataContext();
  if (!context) {
    throw new Error("No data provided");
  }
  const { mediaData } = context;
  const movies = mediaData?.filter((media) => media.category === "Movie");

  return (
    <div>
      <SearchBar placeholder="Search for movies" />
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies?.map((movie) => (
          <ItemCard key={movie.title} item={movie} />
        ))}
      </div>
    </div>
  );
};
export default Movies;
