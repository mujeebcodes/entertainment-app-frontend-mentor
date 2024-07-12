import { MediaItem } from "@/types";
import ItemCard from "./ItemCard";

const Recommended = ({ items }: { items: MediaItem[] }) => {
  if (items && items.length > 0) {
    return (
      <div>
        <h1 className="text-xl font-thin">Recommended for you</h1>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <ItemCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    );
  }
};
export default Recommended;
