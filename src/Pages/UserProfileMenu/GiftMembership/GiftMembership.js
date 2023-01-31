import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const GiftMembership = () => {
  const { user, logoutUserAccount } = useContext(AuthContext);
  return (
    <div className="container w-2/6 mx-auto">
      <div className="text-center">
        <h1 className="text-4xl">
          Gift a year of Medium
          <br /> membership.
        </h1>
        <p>
          Give the readers and deep thinkers in your life a year of Medium
          membership for $50.
        </p>
      </div>
      <div>
        <h1 className="text-xl font-extrabold mt-10">Who is this gift for?</h1>
        <p>
          The recipient will receive an email on the delivery date with a coupon
          code to redeem their membership. Purchasing more than 10 gifts? Submit
          a request at <span className="link">freemiumarticles.web.com</span>
        </p>
      </div>
      <div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Recipient name</span>
          </label>
          <input
            type="text"
            placeholder="Type your name"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text">Recipient email</span>
          </label>
          <input
            type="email"
            placeholder="Type your name"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label">
            <span className="label-text">Delivery date</span>
          </label>
          <input
            type="date"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs mt-6">
          <h1 className="text-xl font-extrabold">From</h1>
          <label className="label">
            <span className="label-text">Sender name</span>
          </label>
          <p>{user?.displayName}</p>
          <div className="divider"></div>
          <label className="label">
            <span className="label-text">Sender email</span>
          </label>
          <p>{user?.email}</p>
          <div className="divider"></div>
          <label className="label">
            <span className="label-text">Gift message - optional</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Add your message"
          ></textarea>
          <button className="btn btn-success rounded-full text-white m-12">
            Continue to payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default GiftMembership;
