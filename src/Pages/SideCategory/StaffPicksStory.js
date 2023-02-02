import React from "react";
const StaffPicksStory = ({ article }) => {
  const { articleTitle, writerName, writerImg } = article;
  const title = articleTitle.replace(/<[^>]+>/g, "");
  return (
    <div>
      <div className="flex mt-3 mb-3">
        <img
          className="w-10 h-10 rounded-full"
          src={writerImg}
          alt={writerName}
        />
        <h2 className="font-semibold text-sm ml-3">{writerName}</h2>
      </div>
      <h1
        className="font-bold"
        dangerouslySetInnerHTML={{
          __html: title.slice(0, 70),
        }}
      />
    </div>
  );
};

export default StaffPicksStory;
