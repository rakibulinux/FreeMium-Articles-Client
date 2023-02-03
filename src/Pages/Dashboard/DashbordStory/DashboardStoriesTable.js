import React from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaTimes } from "react-icons/fa";
const DashboardStoriesTable = ({ article, isDarkMode, idx }) => {
  const { articleTitle, articleImg, category, articleSubmitDate } = article;
  const title = articleTitle.replace(/<[^>]+>/g, "").slice(0, 50);
  return (
    <tbody
    //   className={
    //     isDarkMode
    //       ? "!bg-black-250 p-4 text-black-350"
    //       : "bg-base-100 text-black-350"
    //   }
    >
      <tr>
        <th>{idx + 1}</th>
        <td>
          <img src={articleImg} className="w-16 h-14 rounded" alt={title} />
        </td>
        <td>{title}</td>
        <td>{category}</td>
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
        <td>{articleSubmitDate}</td>
        <td>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className={
                isDarkMode
                  ? "btn btn-sm m-1 shadow bg-black-350 text-white rounded-box w-auto"
                  : "btn btn-sm m-1 shadow bg-base-100 rounded-box w-auto"
              }
            >
              Actions
            </label>
            <ul
              tabIndex={0}
              className={
                isDarkMode
                  ? "dropdown-content menu p-2 shadow bg-black-250 text-white rounded-box w-auto"
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
    </tbody>
  );
};

export default DashboardStoriesTable;
