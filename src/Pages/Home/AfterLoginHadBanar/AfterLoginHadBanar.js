import React, { useState } from "react";
import { Link } from "react-router-dom";
import memberShip from "../../../Assets/membershipBg.jpeg";
const AfterLoginHadBanar = () => {
  const [visible, setVisible] = useState(true);

  const hideMembershipBanner = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div>
      {visible && (
        <div
          className={`justify-center bg-no-repeat bg-cover bg-center rounded-lg flex flex-col py-6 font-medium pl-8`}
          style={{ backgroundImage: `url(${memberShip})` }}
        >
          <div className="flex justify-between items-center">
            <p>
              Get unlimited access to all of FreeMium for less than $1/week.
            </p>
            <button onClick={hideMembershipBanner} className="pr-6">
              X
            </button>
          </div>
          <Link to="/" className="underline">
            Become a member
          </Link>
        </div>
      )}

      {/* <div className="card  bg-[#FFC1CC] mt-6 shadow-xl">
        <div className="card-body">
          <div className="card-actions justify-end">
            <button className="btn btn-square btn-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <Link to="/">
            Get unlimited access to all of FreeMium for less than $1/week.
          </Link>
          <Link to="/" className="text-[red]">
            Become a member
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default AfterLoginHadBanar;
