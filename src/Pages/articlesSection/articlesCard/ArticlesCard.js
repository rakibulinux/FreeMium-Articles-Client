import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from './../../../contexts/AuthProvider';

const ArticlesCard = ({ data }) => {
  const {user} = useContext(AuthContext)
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
                <p className="text-base mt-3 text-[#757575] font-semibold sm:none md:block ">
                  {descriptionSlice}
                </p>
                {/*  */}
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
