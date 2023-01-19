import React from "react";
import { useContext } from "react";
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { APIContext } from "../../contexts/APIProvider";
import ArticlesCard from "./articlesCard/ArticlesCard";

const Articles = () => {
  const { articles, articlesLoading } = useContext(APIContext);
  // const [articles, setArticles] = useState([]);
  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_URL}/allArticles`)
  //     .then((res) => res.json())
  //     .then((data) => setArticles(data));
  // }, [articles]);
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
