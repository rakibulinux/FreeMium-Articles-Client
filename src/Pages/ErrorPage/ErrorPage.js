import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/Button/PrimaryButton";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-black">
      <div className="w-11/12 flex flex-col items-center justify-center px-5 mx-auto my-8">
        <h1 className="text-4xl">Error 404</h1>
        <Link className="my-5" to="/">
          <PrimaryButton classes="px-8 py-3 font-semibold rounded">
            Back to homepage
          </PrimaryButton>
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
