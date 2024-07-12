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

const ItemCard = ({
  trending,
  item,
}: {
  trending: boolean;
  item: MediaItem;
}) => {
  const { title, year, rating, category, thumbnail } = item;
  if (trending) {
    return (
      <Card className="w-60 md:w-[470px] relative overflow-hidden">
        <div className="absolute bottom-3 left-3 z-10 text-white">
          <CardDescription className="font-medium">{`${year} . ${category} . ${rating}`}</CardDescription>
          <CardTitle className="font-medium">{title}</CardTitle>
        </div>
        <CardContent className="p-0">
          <img
            alt={title}
            src={thumbnail.trending?.large!}
            className="w-full h-full object-cover"
          />
        </CardContent>
      </Card>
    );
  }
  return <Card></Card>;
};
export default ItemCard;
