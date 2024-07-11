type Thumbnail = {
  small: string;
  medium?: string;
  large: string;
};

type Thumbnails = {
  trending?: Thumbnail;
  regular: Thumbnail;
};

export type MediaItem = {
  title: string;
  thumbnail: Thumbnails;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
};
