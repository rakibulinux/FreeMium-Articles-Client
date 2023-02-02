import React from "react";
import { useContext } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { APIContext } from "../../contexts/APIProvider";
import StaffPicksStory from "./StaffPicksStory";
// import { useLoaderData } from 'react-router-dom';

const StaffPicks = () => {
  const { isDarkMode, articles, articlesLoading } = useContext(APIContext);
  if (articlesLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <div>
        <h1
          className={
            isDarkMode
              ? "my-5 text-lg font-semibold text-white"
              : "my-5 text-lg font-semibold text-gray-900"
          }
        >
          Staff Picks
        </h1>
        {articles.map((article) => (
          <StaffPicksStory key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default StaffPicks;
