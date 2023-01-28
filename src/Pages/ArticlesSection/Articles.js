import React from "react";
import { useContext } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { APIContext } from "../../contexts/APIProvider";
import ArticlesCard from "./ArticlesCard/ArticlesCard";

const Articles = () => {
  const { articles, articlesLoading, searchResults } = useContext(APIContext);
  if (articlesLoading) {
    return <Spinner />;
  }
  return (
    <>
      {searchResults?.length === 0 &&
        articles.map((data) => (
          <ArticlesCard data={data} key={data?._id}></ArticlesCard>
        ))}
      {searchResults?.length >= 0 &&
        searchResults.map((data) => (
          <ArticlesCard data={data} key={data?._id}></ArticlesCard>
        ))}
    </>
  );
};

export default Articles;
