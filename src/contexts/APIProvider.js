import { useQuery } from "@tanstack/react-query";
import React, { createContext } from "react";

export const APIContext = createContext();
const APIProvider = ({ children }) => {
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
    queryKey: ["allArticles"],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/allArticles`);
      const data = await res.json();
      return data;
    },
  });

  const apiInfo = {
    categoryButton,
    isCategoryLoading,
    reFetchCategory,
    articles,
    articlesLoading,
    articlesRefetch,
  };
  return <APIContext.Provider value={apiInfo}>{children}</APIContext.Provider>;
};

export default APIProvider;
