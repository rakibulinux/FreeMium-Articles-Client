import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ArticleDetailsCard from "./ArticleDetailsCard/ArticleDetailsCard";


import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useState } from "react";
import Spinner from "../../../components/Spinner/Spinner";
import { useEffect } from "react";
import FollowButton from "../../FollowButton/FollowButton";
import GetUnlimitedAccessButton from "../../../components/GetUnlimitedAccessButton/GetUnlimitedAccessButton";
import SubscribButton from './../SubscribButton/SubscribButton';
import { APIContext } from "../../../contexts/APIProvider";
const ArticlesDetails = () => {
  // const [showFollow, setShowFollow] = useState(true);
  const [users, setUsers] = useState({});
  const articleData = useLoaderData();
  const { user } = useContext(AuthContext);
  const { isDarkMode } = useContext(APIContext);
  
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
    <div className="border-t-[1px] w-11/12 mx-auto">
      <div className="container mx-auto lg:grid lg:grid-cols-3 grid-cols-1">
        {/* left side content */}
        <div className="border-r-0 lg:border-r-[1px] col-span-2  ">
          <div className="mr-10 my-10">
            <ArticleDetailsCard articleData={articleData} />
          </div>
        </div>
        {/* right side content*/}
        <div className="lg:mx-auto my-10 lg:px-10 text-center lg:text-start">
          <Link to="/payment">
            <GetUnlimitedAccessButton text={"Get unlimited access"} />
          </Link>
          {/* wirtter info card */}
          <div className="card-body justify-center lg:justify-start px-0">
            {/* avater start */}
            <div className="avatar justify-center lg:justify-start">
              <div className="w-24 rounded-full">
                <img src={writerImg} alt="img" />
              </div>
            </div>
            {/* avater end */}
            <h2 className={isDarkMode ?"lg:card-title text-sm text-gray-300 font-bold":"lg:card-title text-sm text-gray-900 font-bold"}>{writerName}</h2>
            <p className={isDarkMode ?"text-font-semibold text-gray-200":"text-font-semibold text-gray-900"}>{users?.following?.length} Followers</p>
            <p className="text-sm">
              Aussie Blogger with 500M+ views — Writer for CNBC & Business
              Insider. Inspiring the world through Personal Development and
              Entrepreneurship — timdenning.com/mb Follow
            </p>
            <div className="card-actions justify-center lg:justify-start">
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

              {/* <Link className="bg-gray-500 border-0 rounded-full p-2">
                <EnvelopeIcon className="h-4 w-4 text-white " />
              </Link> */}
              <SubscribButton
              user={user}
              // users={users}
              userId={userId}
              userEmail={userEmail}
              subscribId={user?.email}
              unsubscribId={user?.email}
              writerName={writerName}
              >
              </SubscribButton>
            </div>
          </div>
          {/* more form section */}
          <div className="">
            <h1 className={isDarkMode ?"text-xl font-semibold text-gray-300":"text-xl font-semibold text-black"}>
              More form Freemium
            </h1>
            {/* dremo writter card */}

            <div className="flex flex-col lg:flex-row">
              <div>
                <div className="flex justify-center items-center gap-2 my-3">
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
