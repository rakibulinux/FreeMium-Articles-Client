import React, { useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import Spinner from "../../components/Spinner/Spinner";
import { APIContext } from "../../contexts/APIProvider";
import ArticlesCard from './ArticlesCard/ArticlesCard';

const Articles = () => {
    const [savedArticles, setSavedArticles] = useState([]);
    const { articles, articlesLoading, searchResults } = useContext(APIContext);
    if (articlesLoading) {
        return <Spinner />;
    }
     const handleSave = data => {
         setSavedArticles([...savedArticles, data]);
         console.log("data click");



    
    fetch(`http://localhost:5000/save-article`, {
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

    return (
        <>
            {searchResults?.length === 0 &&
                articles.map((data) => (
                    <ArticlesCard data={data} key={data?._id}
                    handleSave={handleSave}
                    
                    
                    ></ArticlesCard>
                ))}
            {searchResults?.length >= 0 &&
                searchResults.map((data) => (
                    <ArticlesCard data={data} key={data?._id}
                    
                    ></ArticlesCard>
                ))}
        </>
    );
};

export default Articles;