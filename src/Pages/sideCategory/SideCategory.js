import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import SideCategoryButton from "./sideCategoryButton/SideCategoryButton";
import StaffPicks from "./StaffPicks";

const SideCategory = () => {
  const [categoryButtons, setCategoryButtons] = useState([]);
  // console.log(categoryButtons);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/categoryButton`)
      .then((res) => res.json())
      .then((data) => setCategoryButtons(data));
  }, []);
  return (
    <div>
      <StaffPicks></StaffPicks>
      <div className="mt-5 sticky top-0">
        <p className="text-base font-semibold text-gray-800 my-3">
          DISCOVER MORE OF WHAT MATTERS TO YOU
        </p>
        <div className="flex flex-wrap gap-3">
          {categoryButtons.map((data, i) => (
            <SideCategoryButton data={data} key={i}></SideCategoryButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideCategory;
