import React from "react";
import { Link } from "react-router-dom";

const ArticlesCard = ({ data }) => {
  const {
    articleDetails,
    articleRead,
    articleSubmitDate,
    articleTitle,
    writerImg,
    writerName,
    articleImg,
    _id,
  } = data;
  const descriptionSlice =
    articleDetails.length > 170
      ? articleDetails.slice(0, 170) + "..."
      : articleDetails;
  // console.log(descr)
  /*
  <div class="card w-[750px] mt-7 mx-auto bg-base-100 shadow-xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48  / w-[25px] rounded-full" src="/img/building.jpg" alt="Modern building architecture">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline / text-[22px] font-semibold text-gray-800">Incredible accomodation for your team</a>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div>
  */
  return (
    <div>
      
      <Link to={`/${_id}`}>
        <div className="my-7 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="card-body md:flex">
            <div className="flex items-center">
              {/* blog auther img */}
              <img className="rounded-full" src={writerImg} alt="" />
              
              <h3 className="ml-2 font-bold text-gray-900">{writerName}</h3>
            </div>
            <div className="grid" style={{ gridTemplateColumns: "4fr 2fr" }}>
              <div>
                <h1 className="text-2xl font-semibold text-gray-800">
                  {articleTitle}
                </h1>
                <p className="text-base mt-3 text-[#757575] font-semibold sm:none md:block">
                  {descriptionSlice}
                </p>
              </div>
              {/* blog right img */}
              <div className="flex justify-center items-center p-2 ">
                <img className="" src={articleImg} alt="" />
              </div>
            </div>
            <div className="flex items-center">
              <span className="block text-gray-700 font-semibold">
                {articleSubmitDate}
              </span>
              <span className="block ml-3 text-red-500 font-semibold">
                {articleRead}-read
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticlesCard;
