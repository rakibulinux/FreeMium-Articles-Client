import React from "react";
import Spinner from "../../../components/Spinner/Spinner";
import MyStorie from "./MyStories/MyStorie";
const Published = ({ myStories }) => {
  if (!myStories) {
    return <Spinner />;
  }

  return (
    <div>
      {!myStories?.length && (
        <p className="p-20">You haven’t published any public stories yet.</p>
      )}
      {myStories?.map((story) => (
        <MyStorie story={story} key={story?._id} />
      ))}
    </div>
  );
};

export default Published;
