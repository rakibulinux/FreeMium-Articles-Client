import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";

import Spinner from "../../../components/Spinner/Spinner";
import { APIContext } from "../../../contexts/APIProvider";
import ReportStoryModal from "./ReportStoryModal";

const DasReportedStory = () => {
  const [deleteItem, setDeleteItem] = useState(null);
  const closeReportedModal = () => {
    setDeleteItem(null);
  };
  const { reportedItems, reportLoading, reportRefetch, isDarkMode } =
    useContext(APIContext);
  // delete reported item
  const reporItemDeleteHandl = (item) => {
    fetch(`${process.env.REACT_APP_API_URL}/Story/reportedStory/${item._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("successfully delete");
          reportRefetch();
        }
      });
  };
  console.log(reportedItems);
  if (reportLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <h2 className="text-center text-2xl">Reported Stories</h2>
      <div className="overflow-x-auto w-full">
        <table
          className={
            isDarkMode
              ? "table w-full text-black-350 p-4"
              : "bg-base-100 text-black-350 table w-full"
          }
        >
          <thead>
            <tr>
              <th></th>
              <th>product</th>
              <th>name</th>
              <th>Email</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {reportedItems?.map((item, i) => (
              <tr key={item._id} item={item}>
                <th>
                  <label>{i + 1}</label>
                </th>

                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.writerImg}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.writerName}</td>
                <td>{item.userEmail}</td>

                <td>
                  <label
                    onClick={() => setDeleteItem(item)}
                    htmlFor="delete-modal"
                    className="btn btn-ghost btn-xs bg-red-500 hover:bg-red-600 text-white"
                  >
                    delete
                  </label>
                </td>

                {/* <th>
          <button className="btn btn-ghost btn-xs">verify</button>
        </th> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteItem && (
        <ReportStoryModal
          title={`are you sure to delete ${deleteItem.writerName}`}
          message={`if you delete ${deleteItem.writerName},it can not undone`}
          closeReportedModal={closeReportedModal}
          btnName={"Delete"}
          deleteHandler={reporItemDeleteHandl}
          itemData={deleteItem}
        ></ReportStoryModal>
      )}
    </div>
  );
};

export default DasReportedStory;
