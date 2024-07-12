"use client";
import { createContext, useContext, useEffect, useState } from "react";
import data from "./data.json";
import { MediaItem } from "./types";

interface DataContextType {
  mediaData: MediaItem[] | undefined;
  //   toggleBookmark: (title: string) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const DataContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [mediaData, setMediaData] = useState<MediaItem[]>();

  useEffect(() => {
    setMediaData(data);
  }, []);
  return (
    <DataContext.Provider value={{ mediaData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);
export default DataContextProvider;
