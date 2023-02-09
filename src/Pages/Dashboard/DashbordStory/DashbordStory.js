// import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { FaCheck, FaTimes } from "react-icons/fa";
import { APIContext } from "../../../contexts/APIProvider";
import Spinner from "../../../components/Spinner/Spinner";
import DashboardStoriesTable from "./DashboardStoriesTable";

const DashbordStory = () => {
  const { articles, articlesLoading, articlesRefetch, isDarkMode } = useContext(APIContext);
  console.log(articles);
  if (articlesLoading) {
    return <Spinner />;
  }
  return (
    <div className={isDarkMode ? "" : ""}>
      <h2 className="text-4xl text-center font-bold m-5">All Articles</h2>
      <div
        className={
          isDarkMode
            ? "overflow-x-auto w-auto text-black-350 pr-6 scrollbar-hide"
            : "bg-base-100 overflow-x-auto w-auto pr-6 scrollbar-hide"
        }
      >
        <table
          // style={
          //   isDarkMode
          //     ? { backgroundColor: "#161B22 !important" }
          //     : { backgroundColor: "#fff !important" }
          // }
          className={
            isDarkMode
              ? "table w-full text-black-350 p-4"
              : "bg-base-100 text-black-350 table w-full"
          }
        >
          <thead className="scrollbar-hide">
          <tr>
        <th></th>
        <th className='text-xl'>Image</th>
        <th className='text-xl'>Story Title</th>
        <th className='text-xl hidden lg:table-cell p-0'>Category</th>
        <th className='text-xl hidden lg:table-cell p-0 '>Status</th>
        <th className='text-xl hidden lg:table-cell '>Date</th>
        <th className='text-xl'>Actions</th>
        
      </tr>
          </thead>
          {articles.map((article, idx) => (
            <DashboardStoriesTable
              key={article._id}
              article={article}
              idx={idx}
              isDarkMode={isDarkMode}
              articlesRefetch={articlesRefetch}
            />
          ))}
        </table>
        
      </div>
    </div>
  );
};

export default DashbordStory;
