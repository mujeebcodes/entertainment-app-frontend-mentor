"use client";

import { Bookmark } from "lucide-react";

const BookmarkItem = ({ isBookmarked }: { isBookmarked: boolean }) => {
  return (
    <div className="absolute w-8 h-8 right-4 top-3 rounded-full bg-secondary/50 flex items-center justify-center cursor-pointer">
      <Bookmark className={`w-4 h-4 ${isBookmarked && "fill-white"}`} />
    </div>
  );
};
export default BookmarkItem;
