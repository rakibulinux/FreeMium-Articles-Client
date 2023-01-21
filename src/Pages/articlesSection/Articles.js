import React from "react";
import { useContext } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { APIContext } from "../../contexts/APIProvider";
import ArticlesCard from "./articlesCard/ArticlesCard";

const Articles = () => {
  const { articles, articlesLoading } = useContext(APIContext);
  if (articlesLoading) {
    return <Spinner />;
  }
  return (
    <>
      {articles.map((data) => (
        <ArticlesCard data={data} key={data?._id}></ArticlesCard>
      ))}
    </>
  );
};

export default Articles;
