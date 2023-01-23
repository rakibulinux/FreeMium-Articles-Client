import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import SideCategoryButton from "./sideCategoryButton/SideCategoryButton";
import StaffPicks from "./StaffPicks";
import WhoToFollow from "./WhoToFollow";

const SideCategory = () => {
  const [categoryButtons, setCategoryButtons] = useState([]);
  const {user} =useContext(AuthContext)
  // console.log(categoryButtons);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/categoryButton`)
      .then((res) => res.json())
      .then((data) => setCategoryButtons(data));
  }, []);
  return (
    <div className="sticky top-0">
      {
        user && <StaffPicks></StaffPicks>
      }
      
      <div className={user?.uid ? "hidden" :"mt-5"}>
        <p className="text-base font-semibold text-gray-800 my-3">
          DISCOVER MORE OF WHAT MATTERS TO YOU
        </p>
        <div className="flex flex-wrap gap-3">
          {categoryButtons.map((data) => (
            <SideCategoryButton key={data?._id} data={data}></SideCategoryButton>
          ))}
        </div>
      </div>
      {
        user && <WhoToFollow></WhoToFollow>
      }
    </div>
  );
};

export default SideCategory;
