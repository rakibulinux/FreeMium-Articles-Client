import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import GetUnlimitedAccessButton from "../../../components/GetUnlimitedAccessButton/GetUnlimitedAccessButton";
import StaffPicks from "../../SideCategory/StaffPicks";
import { APIContext } from "./../../../contexts/APIProvider";
import Tabs from "../Tabs/Tabs";
import Published from "./Published";
import Drafts from "./Drafts";
const Stories = () => {
  const tabsData = [
    {
      id: 1,
      label: "Drafts",
      content: (
        <div>
          <Drafts />
        </div>
      ),
    },
    {
      id: 2,
      label: " Published",
      content: (
        <div>
          <Published />
        </div>
      ),
    },
    { id: 3, label: " Responses", content: <div>Responses</div> },
  ];
  const { isDarkMode } = useContext(APIContext);
  return (
    <div className="container mx-auto mt-14 py-10">
      <div className="flex row">
        <div className=" basis-3/4 mb-10">
          <div className="flex justify-between">
            <h1
              className={
                isDarkMode
                  ? "text-4xl font-bold text-gray-100"
                  : "text-4xl font-bold text-gray-900"
              }
            >
              Your stories
            </h1>
            <div>
              <Link
                className="btn rounded-full btn-primary font-semibold ml-3 border-[1px] hover:border-[#1A8917] border-[#1A8917] bg-[#1A8917] text-[#fff] hover:bg-[#1A8917]"
                to="/write-stories"
              >
                Write a story
              </Link>
              {/* <button className="btn rounded-full btn-primary font-semibold ml-3 border-[1px] hover:border-[#1A8917] border-[#1A8917] bg-slate-50 text-[#1A8917] hover:bg-white">
                Import a story
              </button> */}
            </div>
          </div>
          {/* <div className="tabs mt-10">
            <Link
              className={
                isDarkMode
                  ? "tab tab-bordered tab-active text-gray-100"
                  : "tab tab-bordered text-gray-900 tab-active"
              }
            >
              Drafts
            </Link>
            <Link
              className={
                isDarkMode
                  ? "tab tab-bordered text-gray-100"
                  : "tab tab-bordered text-gray-900"
              }
            >
              Published
            </Link>
            <Link
              className={
                isDarkMode
                  ? "tab tab-bordered text-gray-100"
                  : "tab tab-bordered text-gray-900"
              }
            >
              Responses
            </Link>                    
          </div> */}
          {/* tabs */}
          <Tabs tabsData={tabsData} />

          {/* tabs */}
        </div>
        <div className="divider divider-horizontal"></div>
        <aside className="basis-1/4 hidden md:block lg:block">
          <GetUnlimitedAccessButton text={"Get unlimited access"} />
          {/* <button className="bg-black text-white rounded-3xl py-3 w-10/12">
            Get unlimited access
          </button> */}
          <StaffPicks />
        </aside>
      </div>
    </div>
  );
};
export default Stories;
