import React from "react";
import { Link } from "react-router-dom";
import StaffPicks from './../../sideCategory/StaffPicks';




const List = () => {
  return (
    <div className="container mx-auto">
      <div className="flex row">
        <div className=" basis-3/4 mb-10">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Your lists</h1>
            <button className="btn btn-success bg-green-600 rounded-full  border-none text-white">
              New list
            </button>
          </div>
          <div className="tabs mt-10">
            <Link className="tab tab-bordered tab-active">Saved</Link>
            <Link className="tab tab-bordered ">Highlights</Link>
          </div>
        </div>
        <div className="divider divider-horizontal"></div>
        <aside className="basis-1/4 px-8 hidden md:block lg:block">
          <button className="bg-black text-white rounded-3xl py-3 w-10/12">
            Get unlimited access
          </button>
          <StaffPicks />
        </aside>
      </div>
    </div>
  );
};

export default List;
