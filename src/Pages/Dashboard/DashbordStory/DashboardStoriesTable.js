import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaTimes } from "react-icons/fa";
import { toast } from "react-hot-toast";

import ReportStoryModal from "../DasReportedStory/ReportStoryModal";
const DashboardStoriesTable = ({ article, isDarkMode, idx, refetch }) => {
  const {
    writerName,
    articleTitle,
    articleImg,
    _id,
    category,
    articleSubmitDate,
  } = article;
  const title = articleTitle.replace(/<[^>]+>/g, "").slice(0, 50);

  const [deleteItem, setDeleteItem] = useState(null);
  const closeReportedModal = () => {
    setDeleteItem(null);
  };
  // delete articles Item
  const aricleItemDeleteHandl = () => {
    fetch(`${process.env.REACT_APP_API_URL}/Story/reportedStory/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("successfully delete");
          refetch();
        }
      });
  };
  // console.log(reportedItems);
  // if (reportLoading) {
  //   return <Spinner />;
  // }
  return (
    <tbody>
      <tr className="hover:bg-slate-800">
        <th>{idx + 1}</th>
        <td>
          <img src={articleImg} className="w-16 h-14 rounded" alt={title} />
        </td>
        <td>{title}</td>
        <td className="hidden lg:table-cell p-0">{category}</td>
        <td className="hidden lg:table-cell">
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
        <td className="hidden lg:table-cell">{articleSubmitDate}</td>
        <td>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className={
                isDarkMode
                  ? "btn btn-sm m-1 shadow bg-black-350 text-white rounded-box w-auto"
                  : "btn btn-sm m-1 shadow bg-base-100  text-gray-900 hover:text-white rounded-box w-auto"
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
                <Link to={`/edit-article/${_id}`}>Edit article</Link>
              </li>
              <li>
                <label
                  onClick={() => setDeleteItem(title)}
                  htmlFor="delete-modal"
                  className="btn btn-ghost"
                >
                  Delete
                </label>
              </li>
            </ul>
          </div>
        </td>
      </tr>
      <div>
        {deleteItem && (
          <ReportStoryModal
            title={`Are you sure to delete ${title}`}
            message={`If you delete ${writerName},it can not undone`}
            closeReportedModal={closeReportedModal}
            btnName={"Delete"}
            deleteHandler={aricleItemDeleteHandl}
            itemData={deleteItem}
          ></ReportStoryModal>
        )}
      </div>
    </tbody>
  );
};

export default DashboardStoriesTable;
