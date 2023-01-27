import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
function FollowButton({ user, userId, followingId, userEmail, unfollowingId }) {
  const [isFollowing, setIsFollowing] = useState(false);

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
          className="btn btn-sm rounded-full bg-gray-500 border-0 text-white"
        >
          Unfollow
        </button>
      ) : (
        <button
          onClick={handleFollow}
          className="btn btn-sm rounded-full bg-gray-500 border-0 text-white"
        >
          Follow
        </button>
      )}
    </div>
  );
}

export default FollowButton;
