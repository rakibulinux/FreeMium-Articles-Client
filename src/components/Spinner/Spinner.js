import React from "react";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <p className="text-9xl font-thin text-gray-500">L</p>
      <div className="w-20 h-20 border-8 border-dotted rounded-full animate-spin mt-5 border-gray-600 hover:text-gray-100"></div>
      <p className="text-9xl font-thin text-gray-500">ading....</p>
    </div>
  );
};

export default Spinner;
