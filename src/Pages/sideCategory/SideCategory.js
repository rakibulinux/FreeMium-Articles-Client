import React, { useContext } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { APIContext } from "../../contexts/APIProvider";
import { AuthContext } from "../../contexts/AuthProvider";
import WhoToFollow from "./WhoToFollow";
import SideCategoryButton from './sideCategoryButton/SideCategoryButton';
import StaffPicks from "./StaffPicks";


const SideCategory = () => {
  const { categoryButton, isCategoryLoading } = useContext(APIContext);
  const { user } = useContext(AuthContext);

  if (isCategoryLoading) {
    return <Spinner />;
  }
  return (
    <div className="lg:sticky lg:top-0">
      {user && <StaffPicks />}
      <div className={user?.uid ? "hidden" : "mt-5"}>
        <p className="text-base font-semibold text-gray-800 my-3 lg:ml-0">
          DISCOVER MORE OF WHAT MATTERS TO YOU
        </p>
        <div className="lg:flex flex-wrap lg:gap-3 gap-2 grid grid-cols-2 mt-4 lg:mt-0">
          {categoryButton.map((category) => (
            <SideCategoryButton
              key={category?._id}
              category={category}
            ></SideCategoryButton>
          ))}
        </div>
      </div>
      {user && <WhoToFollow></WhoToFollow>}
    </div>
  );
};

export default SideCategory;
