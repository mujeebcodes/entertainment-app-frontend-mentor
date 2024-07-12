"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import data from "@/data.json";
import { MediaItem } from "@/types";
import Trending from "@/components/Trending";
import SearchBar from "@/components/SearchBar";
import Recommended from "@/components/Recommended";

export default function Home() {
  const [trending, setTrending] = useState<MediaItem[]>([]);
  const [recommended, setRecommended] = useState<MediaItem[]>([]);
  useEffect(() => {
    const trendingItems = data.filter((item) => item.isTrending);
    const recommendedItems = data.filter((item) => !item.isTrending);

    setTrending(trendingItems);
    setRecommended(recommendedItems);
  }, []);
  return (
    <div className="w-full">
      <SearchBar placeholder="Search for movies or TV series" />
      <Trending items={trending} />
      <Recommended items={recommended} />
    </div>
  );
}
