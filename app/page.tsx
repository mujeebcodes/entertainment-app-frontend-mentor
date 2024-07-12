"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import data from "@/data.json";
import { MediaItem } from "@/types";
import Trending from "@/components/Trending";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const [trending, setTrending] = useState<MediaItem[]>([]);
  useEffect(() => {
    const trendingItems = data.filter((item) => item.isTrending);

    setTrending(trendingItems);
  }, []);
  return (
    <div className="overflow-hidden">
      <Trending items={trending} />
    </div>
  );
}
