import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import ArticlesCard from "../../ArticlesSection/ArticlesCard/ArticlesCard";
import { useDispatch } from "react-redux";
import { deleteArticle, saveArticle } from "../../../store/savedArticlesSlice";
import { toast } from "react-hot-toast";
import { APIContext } from "../../../contexts/APIProvider";

function SearchResults() {
  const { query } = useContext(APIContext);
  const [searchResults, setSearchResults] = useState([]);
  const dispatch = useDispatch();
  const handleSave = (data) => {
    dispatch(saveArticle(data))
      .then(() => {
        console.log("data saved");
        toast.success("Saved article");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  const handleDelete = (id) => {
    dispatch(deleteArticle(id))
      .then(() => {
        console.log("data deleted");
        toast.success("Successfully Unsave");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };
  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query) {
        return;
      }
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/search/query=${query}`
      );
      setSearchResults(response?.data?.articles);
    };

    fetchSearchResults();
  }, [query]);
  console.log(searchResults);
  return (
    <div>
      {searchResults &&
        searchResults.map((data) => (
          <ArticlesCard
            data={data}
            key={data?._id}
            handleSave={handleSave}
            handleDelete={handleDelete}
          />
        ))}
    </div>
  );
}

export default SearchResults;
