import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ArticleDetailsCard from "./articleDetailsCard/ArticleDetailsCard";
import writerImg from "../../../Assets/img1.jpg";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
const ArticlesDetails = () => {
  const articleData = useLoaderData();
  return (
    <div className="border-t-2">
      <div className="container mx-auto grid lg:grid-cols-3 sm:grid-cols-1">
        {/* left side content */}
        <div className=" border-r-2 col-span-2  ">
          <div className="mr-10 my-10">
            <ArticleDetailsCard articleData={articleData} />
          </div>
        </div>
        {/* right side content*/}
        <div className="mx-auto my-10 px-10 ">
          <button className="btn btn-wide rounded-full text-white">
            Get unlimited access
          </button>
          {/* wirtter info card */}
          <div className="card-body px-0">
            {/* avater start */}
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={writerImg} alt="img" />
              </div>
            </div>
            {/* avater end */}
            <h2 className="card-title text-md c">Tim Denning</h2>
            <p>308K Followers</p>
            <p className="text-sm">
              Aussie Blogger with 500M+ views — Writer for CNBC & Business
              Insider. Inspiring the world through Personal Development and
              Entrepreneurship — timdenning.com/mb Follow
            </p>
            <div className="card-actions ">
              <button className="btn btn-sm rounded-full bg-gray-500 border-0 text-white">
                Follow
              </button>
              <Link className="  bg-gray-500 border-0 rounded-full p-2">
                <EnvelopeIcon className="h-4 w-4 text-white " />
              </Link>
            </div>
          </div>
          {/* more form section */}
          <div>
            <h1 className="text-xl font-semibold text-black">
              More form Freemium
            </h1>
            {/* dremo writter card */}
            <div className="hero  ">
              <div className="hero-content flex-col lg:flex-row ">
                {/* hero avater */}
                <div className="avatar">
                  <div className="w-16 rounded">
                    <img src={writerImg} alt="Tailwind-CSS-Avatar-component" />
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <p className="">Akshad Singi</p>
                    <div className="avatar ml-2">
                      <div className="w-6 rounded-full">
                        <img src={writerImg} alt="img" />
                      </div>
                    </div>
                  </div>
                  <h1 className="text-lg font-semibold">
                    12 Ways To Improve Your Finances in 2023.
                  </h1>
                </div>
              </div>
            </div>
            {/* demo writter end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesDetails;
