import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ArticleDetailsCard from "./articleDetailsCard/ArticleDetailsCard";

import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useState } from "react";
import Spinner from "../../../components/Spinner/Spinner";
import { useEffect } from "react";
import FollowButton from "../../FollowButton/FollowButton";
const ArticlesDetails = () => {
  // const [showFollow, setShowFollow] = useState(true);
  const [users, setUsers] = useState({});
  const articleData = useLoaderData();
  const { user } = useContext(AuthContext);

  const { writerImg, writerName, articleTitle, articleImg, userId, userEmail } =
    articleData;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/user/${userEmail}`)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, [userEmail, users]);

  if (!users) {
    return <Spinner />;
  }
  return (
    <div className="border-t-2 w-11/12 mx-auto">
      <div className="container mx-auto grid lg:grid-cols-3 sm:grid-cols-1">
        {/* left side content */}
        <div className=" border-r-2 col-span-2  ">
          <div className="mr-10 my-10">
            <ArticleDetailsCard articleData={articleData} />
          </div>
        </div>
        {/* right side content*/}
        <div className="mx-auto my-10 px-10 ">
          <Link to="/payment">
            <button className="bg-black text-white rounded-3xl py-3 px-2 w-9/12">
              Get unlimited access
            </button>
          </Link>
          {/* wirtter info card */}
          <div className="card-body px-0">
            {/* avater start */}
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={writerImg} alt="img" />
              </div>
            </div>
            {/* avater end */}
            <h2 className="card-title text-sm c">{writerName}</h2>
            <p>{users?.following?.length} Followers</p>
            <p className="text-sm">
              Aussie Blogger with 500M+ views — Writer for CNBC & Business
              Insider. Inspiring the world through Personal Development and
              Entrepreneurship — timdenning.com/mb Follow
            </p>
            <div className="card-actions ">
              {users && (
                <FollowButton
                  user={user}
                  users={users}
                  userId={userId}
                  userEmail={userEmail}
                  followingId={user?.email}
                  unfollowingId={user?.email}
                />
              )}
              <Link className="bg-gray-500 border-0 rounded-full p-2">
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

            <div className="flex ">
              <div className="">
                <div className="flex items-center gap-2 my-3">
                  <img
                    src={writerImg}
                    alt={writerName}
                    className="w-6 h-6 rounded-full"
                  />
                  <span>{writerName}</span>
                </div>
                <div>
                  <h1
                    className="text-xl font-bold"
                    dangerouslySetInnerHTML={{ __html: articleTitle }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 my-3">
                <img
                  src={articleImg}
                  alt={articleTitle}
                  className="w-24 h-20"
                />
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
