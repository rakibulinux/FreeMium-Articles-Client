import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { APIContext } from "./../../contexts/APIProvider";
import WhoToFollowUsers from "./WhoToFollowUsers";

const WhoToFollow = () => {
  const { isDarkMode, threeUsers } = useContext(APIContext);
  return (
    <div className="">
      <h1
        className={
          isDarkMode
            ? "my-8 text-lg font-semibold text-white"
            : "my-8 text-lg font-semibold text-gray-900"
        }
      >
        Who to follow
      </h1>
      <div className="flex justify-between flex-col">
        {threeUsers?.map((users) => (
          <WhoToFollowUsers
            key={users?._id}
            users={users}
            isDarkMode={isDarkMode}
          />
        ))}
        <Link className={isDarkMode ? "text-gray-200" : "font-semibold"} to="">
          See more suggession
        </Link>
      </div>
    </div>
  );
};

export default WhoToFollow;
