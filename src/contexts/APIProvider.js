import { useQuery } from "@tanstack/react-query";
import React, { createContext } from "react";

export const APIContext = createContext();
const APIProvider = ({ children }) => {
  const {
    data: categoryButton,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["categoryButton"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/categoryButton`
      );
      const data = res.json();
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
      const data = res.json();
      return data;
    },
  });

  const apiInfo = {
    categoryButton,
    isLoading,
    refetch,
    articles,
    articlesLoading,
    articlesRefetch,
  };
  return <APIContext.Provider value={apiInfo}>{children}</APIContext.Provider>;
};

export default APIProvider;
