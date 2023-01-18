import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../../contexts/AuthProvider";
import parse, { domToReact, htmlToDOM, Element } from "html-react-parser";
import Spinner from "../../../components/Spinner/Spinner";

const parser = (input) =>
  parse(input, {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.attribs.class === "remove") {
        return <></>;
      }
    },
  });
const ArticlesCard = ({ data }) => {
  const { user, loading } = useContext(AuthContext);
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
  console.log(descriptionSlice);
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <Link to={`/view-story/${_id}`}>
        <div className="my-7 w-full mx-auto bg-white rounded-xl shadow-md">
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
                {/* <p className="text-base mt-3 hidden md:block text-[#757575] font-semibold">
                  {parser(`${html}`)}
                </p> */}
                <div dangerouslySetInnerHTML={{ __html: descriptionSlice }} />
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
    </>
  );
};

export default ArticlesCard;
