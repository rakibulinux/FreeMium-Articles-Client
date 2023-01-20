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
          <Link to="/payment" className="underline">
            Become a member
          </Link>
        </div>
      )}

      
    </div>
  );
};

export default AfterLoginHadBanar;
