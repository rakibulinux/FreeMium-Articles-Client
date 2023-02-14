import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const SideSection = () => {
  return (
    <div className="px-4 py-5">
      <div>
        <button className="btn border[1px] w-full border-white hover:border-white font-semibold text-white">
          <AiOutlinePlus className="text-white font-semibold mr-3" />
          New-Chat
        </button>
      </div>
    </div>
  );
};

export default SideSection;
