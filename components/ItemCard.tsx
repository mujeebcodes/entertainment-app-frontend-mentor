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
      <Card className="w-60 md:w-[470px] relative">
        <div className="absolute">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{`${year} . ${category} . ${rating}`}</CardDescription>
        </div>
        <CardContent>
          {/* <Image alt={title} src={thumbnail.trending?.large!} width="240" /> */}
          <div className="w-full">
            <img alt={title} src={thumbnail.trending?.large!} />
          </div>
        </CardContent>
      </Card>
    );
  }
  return <Card></Card>;
};
export default ItemCard;
