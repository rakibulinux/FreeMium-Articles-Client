import React, { useContext, useState } from "react";
import Spinner from "../../../components/Spinner/Spinner";
import { APIContext } from "../../../contexts/APIProvider";

function Search({searchPlaceholder, propsStyle}) {
  const [query, setQuery] = useState("");
  const { searchResults, setSearchResults } = useContext(APIContext);

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      `${process.env.REACT_APP_API_URL}/search?q=${query}`
    );
    const data = await res.json();
    setSearchResults(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="hidden md:block">
        <div className={`relative ${propsStyle} text-gray-600 focus-within:text-gray-400`}>
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
            autoComplete="off"
          />
        </div>
      </form>
    </>
  );
}

export default Search;
