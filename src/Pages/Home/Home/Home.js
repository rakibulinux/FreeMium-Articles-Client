import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Articles from "../../articlesSection/Articles";
import SideCategory from "../../sideCategory/SideCategory";
import AfterLoginHadBanar from "../AfterLoginHadBanar/AfterLoginHadBanar";
import Manubar from "../AfterLoginHadBanar/Manubar/Manubar";
// import DemoWritter from "../DemoWritter";

import HomeHadBanar from "../HomeHadBanar";
import { AuthContext } from "./../../../contexts/AuthProvider";
import "./Home.css";
const Home = () => {
  const { user } = useContext(AuthContext);
  const articleData = useLoaderData();
  console.log(articleData)
  return (
    <div className="w-11/12 mx-auto">
      {user?.uid ? (
        // after log in user  UI
        <>
          <div className="grid sm:grid-rows-1 md:grid-cols-3 gap-4">
            <section className="col-span-2 sm:order-last md:order-first">
              <AfterLoginHadBanar />
              <Manubar />
              <Articles />
            </section>
            <aside className="mt-8">
              <Link to="/payment" className="bg-black text-white rounded-3xl py-3 w-10/12">
                Get unlimited access
              </Link>
              {/* <p>category</p> */}

              <SideCategory />
            </aside>
          </div>

          {/* left side conten */}

          {/* right side conten here */}
        </>
      ) : (
        // before log in user UI
        <>
          <HomeHadBanar />
          <div className="grid sm:grid-rows-1 md:grid-cols-3 gap-4">
            <section className="col-span-2 sm:order-last md:order-first">
              <Articles />
            </section>
            <aside className="">
              <SideCategory />
            </aside>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
