import { useQuery } from "@tanstack/react-query";
import React, { createContext, useState } from "react";

export const APIContext = createContext();

const APIProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const {
    
    data: categoryButton,
    isLoading: isCategoryLoading,
    refetch: reFetchCategory,
  } = useQuery({
    queryKey: ["categoryButton"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/categoryButton`
      );
      const data = await res.json();
      return data;
    },
  });

  const {
    data: articles,
    isLoading: articlesLoading,
    refetch: articlesRefetch,
  } = useQuery({
    queryKey: ["allArticles", searchResults],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/allArticles`);
      const data = await res.json();
      return data;
    },
  });
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  //get reported item 
  const {data:reportedItems=[],isLoading:reportLoading,refetch:reportRefetch}=useQuery({  
    queryKey:['reportedItem'],
    queryFn:async()=>{
        const res = await fetch(`${process.env.REACT_APP_API_URL}/reportedItem`)
        const data = await res.json();
        return data;
      }
      
    })
  const apiInfo = {
    categoryButton,
    isCategoryLoading,
    reFetchCategory,
    articles,
    articlesLoading,
    articlesRefetch,
    searchResults,
    setSearchResults,
    isDarkMode,
    setIsDarkMode,
    toggleDarkMode,
    reportedItems,
    reportLoading,
    reportRefetch
  };
  return <APIContext.Provider value={apiInfo}>{children}</APIContext.Provider>;
};

export default APIProvider;
