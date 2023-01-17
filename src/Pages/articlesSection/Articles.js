import React from "react";
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner/Spinner";
import ArticlesCard from "./articlesCard/ArticlesCard";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/allArticles`)
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);
  if (!articles) {
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
