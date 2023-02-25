import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import Spinner from "../../../components/Spinner/Spinner";
import { APIContext } from "../../../contexts/APIProvider";
import { deleteArticle, saveArticle } from "../../../store/savedArticlesSlice";
import ArticlesCard from "../../ArticlesSection/ArticlesCard/ArticlesCard";
import axios from "axios";
function Search({ searchPlaceholder, propsStyle }) {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSearchResults = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/search/${query}`
      );
      setArticles(response.data.articles);
      setSuggestions(response.data.suggestions);
    };
    if (query.length > 0) {
      fetchSearchResults();
    } else {
      setArticles([]);
      setSuggestions([]);
    }
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

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
  console.log(articles);
  return (
    <>
      <form onSubmit={handleInputChange} className="hidden md:block">
        <div
          className={`relative ${propsStyle} text-gray-600 focus-within:text-gray-400`}
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            name="q"
            className="py-2 text-sm text-gray-900 border rounded-3xl pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
            placeholder={searchPlaceholder}
            autoComplete="on"
          />
        </div>
      </form>
      {/* {suggestions.length > 0 && (
        <ul>
          {suggestions.map((article) => (
            <li key={article._id}>{article.title}</li>
          ))}
        </ul>
      )} */}
      {articles.map((data) => (
        <ArticlesCard
          data={data}
          key={data?._id}
          handleSave={handleSave}
          handleDelete={handleDelete}
        ></ArticlesCard>
      ))}
    </>
  );
}

export default Search;
