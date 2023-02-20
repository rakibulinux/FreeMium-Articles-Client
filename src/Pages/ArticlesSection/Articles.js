import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import Spinner from "../../components/Spinner/Spinner";
import { APIContext } from "../../contexts/APIProvider";
import ArticlesCard from "./ArticlesCard/ArticlesCard";

const Articles = () => {
  const [savedArticles, setSavedArticles] = useState([]);
  const { fetchAPI, searchResults } = useContext(APIContext);

  const {
    isLoading,
    refetch,
    data: articles,
  } = useQuery(["allArticles"], () =>
    fetchAPI(`${process.env.REACT_APP_API_URL}/allArticles`)
  );
  if (isLoading) {
    return <Spinner />;
  }
  const handleSave = (data) => {
    setSavedArticles([...savedArticles, data]);
    console.log("data save");
    fetch(`${process.env.REACT_APP_API_URL}/save-article`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success(`Saved article`);
      });
  };

  const handleDelete = (id) => {
    // console.log(id);
    toast.success("successfully Unsave");
    console.log("data delete");
    fetch(
      `${process.env.REACT_APP_API_URL}/save-article/delete-article/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("successfully Unsave");
        }
      });
  };
  return (
    <>
      {searchResults?.length === 0 &&
        articles.map((data) => (
          <ArticlesCard
            data={data}
            key={data?._id}
            handleSave={handleSave}
            handleDelete={handleDelete}
          ></ArticlesCard>
        ))}
      {searchResults?.length >= 0 &&
        searchResults.map((data) => (
          <ArticlesCard data={data} key={data?._id}></ArticlesCard>
        ))}
    </>
  );
};

export default Articles;
