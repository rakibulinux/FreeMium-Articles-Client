import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import WhoToFollow from './../../SideCategory/WhoToFollow';
import { APIContext } from './../../../contexts/APIProvider';

const RefineRecommendations = () => {
  const {isDarkMode} = useContext(APIContext);
  return (
    <div className="container mx-auto mt-14 py-10">
      <div className="flex row">
        <div className=" basis-3/4 mb-10">
          <div className="leading-loose">
            <h1 className="text-5xl font-bold">Refine recommendations</h1>
            <p className={isDarkMode ? "mt-5 text-gray-100":"mt-5 text-gray-900"}>
              Adjust recommendations by updating what you’re following, your
              reading history, and who you’ve muted.
            </p>
          </div>
          <div className={isDarkMode ? "tabs mt-10 text-gray-100":"tabs mt-10 text-gray-900"}>
            <Link className={isDarkMode ?"tab text-gray-100 tab-bordered tab-active":"tab text-gray-900 tab-bordered tab-active"}>Following</Link>
            <Link className={isDarkMode ?"tab tab-bordered text-gray-100":"tab tab-bordered text-gray-900"}>Reading history</Link>
            <Link className={isDarkMode ?"tab tab-bordered text-gray-100":"tab tab-bordered text-gray-900"}>Muted</Link>
            <Link className={isDarkMode ?"tab tab-bordered text-gray-100":"tab tab-bordered text-gray-900"}>Suggestions</Link>
            <Link className={isDarkMode ?"tab tab-bordered text-gray-100":"tab tab-bordered text-gray-900"}>Security and apps</Link>
          </div>
        </div>
        <div className="divider divider-horizontal "></div>
        <aside className="basis-1/4 px-8 hidden md:block lg:block leading-loose">
          <WhoToFollow></WhoToFollow>
        </aside>
      </div>
    </div>
  );
};

export default RefineRecommendations;
