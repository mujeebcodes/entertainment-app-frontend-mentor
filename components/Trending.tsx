import { MediaItem } from "@/types";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import ItemCard from "./ItemCard";

const Trending = ({ items }: { items: MediaItem[] }) => {
  if (items && items.length > 0) {
    return (
      <div>
        <h1 className="text-xl font-thin">Trending</h1>
        <ScrollArea className="py-6 w-full lg:w-5/6 overflow-x-auto">
          <div className="flex gap-x-4">
            {items.map((item) => (
              <ItemCard key={item.title} item={item} trending={true} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    );
  }
};
export default Trending;
