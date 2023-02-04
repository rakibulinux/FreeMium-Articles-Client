// import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import { FaCheck, FaTimes } from "react-icons/fa";
import { APIContext } from "../../../contexts/APIProvider";
import Spinner from "../../../components/Spinner/Spinner";
import DashboardStoriesTable from "./DashboardStoriesTable";

const DashbordStory = () => {
  const { articles, articlesLoading, isDarkMode } = useContext(APIContext);
  console.log(articles);
  if (articlesLoading) {
    return <Spinner />;
  }
  return (
    <div className={isDarkMode ? "" : ""}>
      <h2 className="text-4xl text-center font-bold m-5">All Articles</h2>
      <div
        className={
          isDarkMode
            ? "overflow-x-auto w-auto text-black-350 pr-6 scrollbar-hide"
            : "bg-base-100 overflow-x-auto w-auto pr-6 scrollbar-hide"
        }
      >
        <table
          // style={
          //   isDarkMode
          //     ? { backgroundColor: "#161B22 !important" }
          //     : { backgroundColor: "#fff !important" }
          // }
          className={
            isDarkMode
              ? "table w-full text-black-350 p-4"
              : "bg-base-100 text-black-350 table w-full"
          }
        >
          <thead className="scrollbar-hide">
          <tr>
        <th></th>
        <th className='text-xl'>Image</th>
        <th className='text-xl'>Story Title</th>
        <th className='text-xl hidden lg:table-cell p-0'>Category</th>
        <th className='text-xl hidden lg:table-cell p-0 '>Status</th>
        <th className='text-xl hidden lg:table-cell '>Date</th>
        <th className='text-xl'>Actions</th>
        
      </tr>
          </thead>
          {articles.map((article, idx) => (
            <DashboardStoriesTable
              key={article._id}
              article={article}
              idx={idx}
              isDarkMode={isDarkMode}
            />
          ))}
        </table>
        {/* <table
          className={
            isDarkMode
              ? "table p-4 text-black-350"
              : "bg-base-100 table w-full "
          }
        >
          <thead
            className={
              isDarkMode
                ? "table text-black-350 p-4"
                : "bg-base-100 table w-full "
            }
          >
            <tr
              className={
                isDarkMode ? "!bg-black-250 p-4" : "bg-base-100 table w-full "
              }
            >
              <th className="text-xl">No</th>
              <th className="text-xl">Image</th>
              <th className="text-xl">Story Title</th>
              <th className="text-xl">Category</th>
              <th className="text-xl">Status</th>
              <th className="text-xl">Date</th>
              <th className="text-xl">Actions</th>
            </tr>
          </thead>
          <tbody
            className={
              isDarkMode
                ? "table !bg-black-250 p-4"
                : "bg-base-100 table w-full "
            }
          >
            {articles.map((articles, i) => (
              <tr
                key={articles._id}
                className={
                  isDarkMode
                    ? "text-white bg-black-250"
                    : "text-black-250 bg-base-100 hover:bg-slate-800"
                }
              >
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded">
                      <img
                        src={articles.articleImg}
                        alt="Tailwind-CSS-Avatar-component"
                      />
                    </div>
                  </div>
                </td>
                <td
                  dangerouslySetInnerHTML={{
                    __html: articles.articleTitle
                      .replace(/<[^>]+>/g, "")
                      .slice(0, 50),
                  }}
                />
                <td>{articles.category}</td>
                <td>
                  <label className="swap">
                    <input type="checkbox" />
                    <div className="swap-on ">
                      <FaTimes className="text-xl" />
                    </div>
                    <div className="swap-off">
                      <FaCheck />
                    </div>
                  </label>
                </td>
                <td>{articles.articleSubmitDate}</td>
                <td>
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className={
                        isDarkMode
                          ? "btn btn-sm m-1 shadow bg-black-350 rounded-box w-auto"
                          : "btn btn-sm m-1 shadow bg-base-100 rounded-box w-auto"
                      }
                    >
                      Actions
                    </label>
                    <ul
                      tabIndex={0}
                      className={
                        isDarkMode
                          ? "dropdown-content menu p-2 shadow bg-black-250 rounded-box w-auto"
                          : "dropdown-content menu p-1 shadow bg-base-100 rounded-box w-auto"
                      }
                    >
                      <li>
                        <Link>Edit article</Link>{" "}
                      </li>
                      <li>
                        <Link>Delete</Link>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </div>
  );
};

export default DashbordStory;
