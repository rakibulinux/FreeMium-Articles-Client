import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../../components/Button/PrimaryButton";

const PaymentFail = () => {
  return (
    <div>
      <h2 className="text-4xl text-center text-red-600 my-32">
        Something went wrong!
        <strong className="text-4xl text-center text-white bg-red-600 my-32 p-3">
          Payment Fail
        </strong>
      </h2>
      <h4 className="text-2xl text-center font-bold mb-6 print:hidden">
        <Link className="text-blue-600 underline underline-offset-4" to="/">
        <PrimaryButton classes="px-8 py-3 font-semibold rounded">
            Back to Homepage
          </PrimaryButton>
        </Link>
      </h4>
    </div>
  );
};

export default PaymentFail;
