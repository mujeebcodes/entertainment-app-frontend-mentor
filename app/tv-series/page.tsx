"use client";
import { useDataContext } from "@/DataContext";
import ItemCard from "@/components/ItemCard";
import SearchBar from "@/components/SearchBar";

const TVSeries = () => {
  const context = useDataContext();
  if (!context) {
    throw new Error("No data provided");
  }
  const { mediaData } = context;
  const tvSeries = mediaData?.filter((media) => media.category === "TV Series");

  return (
    <div>
      <SearchBar placeholder="Search for TV series" />
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tvSeries?.map((show) => (
          <ItemCard key={show.title} item={show} />
        ))}
      </div>
    </div>
  );
};
export default TVSeries;
