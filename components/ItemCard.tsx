import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MediaItem } from "@/types";
import Image from "next/image";
import BookmarkItem from "./BookmarkItem";

const ItemCard = ({
  trending,
  item,
}: {
  trending?: boolean;
  item: MediaItem;
}) => {
  const { title, year, rating, category, thumbnail, isBookmarked } = item;
  if (trending) {
    return (
      <Card className="w-60 md:w-[470px] relative overflow-hidden">
        <div className="absolute bottom-3 left-3 z-10 text-white">
          <CardDescription className="font-medium">{`${year} . ${category} . ${rating}`}</CardDescription>
          <CardTitle className="font-medium">{title}</CardTitle>
        </div>
        <BookmarkItem isBookmarked={isBookmarked} />
        <CardContent className="p-0">
          <img
            alt={title}
            src={thumbnail.trending?.large!}
            className="w-full h-full object-cover"
          />
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card className="relative min-w-40 md:min-w-56 lg:min-w-72 rounded-lg">
        <CardContent className="p-0">
          <img alt={title} src={thumbnail.regular.large!} className="w-full" />
        </CardContent>
        <div className="">
          <CardDescription className="font-medium">{`${year} . ${category} . ${rating}`}</CardDescription>
          <CardTitle className="font-medium">{title}</CardTitle>
        </div>
        <BookmarkItem isBookmarked={isBookmarked} />
      </Card>
    );
  }
};
export default ItemCard;
