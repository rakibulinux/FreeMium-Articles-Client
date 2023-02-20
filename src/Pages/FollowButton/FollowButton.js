import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { APIContext } from "../../contexts/APIProvider";
function FollowButton({ refetch, user, userId, followingId, classes }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const { isDarkMode } = useContext(APIContext);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/users/${userId}/following/${user?.email}`
      )
      .then((res) => {
        setIsFollowing(res.data.isFollowing);
      });
  }, [userId, user?.email]);

  const handleFollow = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/follow`, {
        userId,
        followingId,
      })
      .then((res) => {
        setIsFollowing(true);
        refetch();
        toast.success(`${followingId} Successfully followed user`);
      });
  };

  const handleUnfollow = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/unfollow`, {
        userId,
        unfollowingId: followingId,
      })
      .then((res) => {
        setIsFollowing(false);
        refetch();
        toast.success(`${followingId} Successfully unfollowed user`);
      });
  };

  // if (!userId) {
  //   return <Spinner />;
  // }

  return (
    <div>
      {isFollowing ? (
        <button
          onClick={handleUnfollow}
          className={
            isDarkMode
              ? `btn btn-sm bg-gray-100 hover:bg-gray-200 hover:text-gray-800 text-gray-900 rounded-full btn-outline ${classes}`
              : `btn btn-sm rounded-full bg-gray-500 border-0 text-white btn-outline ${classes}`
          }
        >
          Unfollow
        </button>
      ) : (
        <button
          onClick={handleFollow}
          className={
            isDarkMode
              ? `btn btn-sm bg-gray-100 hover:bg-gray-300 hover:text-gray-800 text-gray-900 rounded-full btn-outline ${classes}`
              : `btn btn-sm rounded-full bg-gray-500 border-0 text-white btn-outline ${classes}`
          }
        >
          Follow
        </button>
      )}
    </div>
  );
}

export default FollowButton;
