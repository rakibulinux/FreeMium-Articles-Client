import React, { useContext } from "react";
import { Link } from "react-router-dom";

import SideCategory from "../../sideCategory/SideCategory";
import AfterLoginHadBanar from "../AfterLoginHadBanar/AfterLoginHadBanar";
import Manubar from "../AfterLoginHadBanar/Manubar/Manubar";
import HomeHadBanar from "../HomeHadBanar";
import { AuthContext } from "./../../../contexts/AuthProvider";
import Articles from './../../ArticlesSection/Articles';

import "./Home.css";
const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-11/12 mx-auto my-10">
      {user?.uid ? ( // after log in user  UI
        <div>
          <div className="grid sm:grid-rows-1 md:grid-cols-3 gap-4">
            <section className="col-span-2 sm:order-last md:order-first">
              <AfterLoginHadBanar />
              <Manubar />
             {/* <Articles></Articles> */}
             <Articles></Articles>
            </section>
            <aside className="mt-8">
              <Link to="/payment">
                <button className="bg-black text-white rounded-3xl py-3 px-2 w-9/12">
                  Get unlimited access
                </button>
              </Link>
              {/* <p>category</p> */}

              <SideCategory />
            </aside>
          </div>

          {/* left side conten */}

          {/* right side conten here */}
          {/* <div className="flex-auto w-32">
            <div className=" w-30 mx-auto">
              <Link
                to="/payment"
                className="bg-black text-white rounded-3xl py-3 px-20 w-full"
              >
                Get unlimited access
              </Link>
              <SideCategory></SideCategory>
            </div>
          </div> */}
        </div>
      ) : (
        // before log in user UI
        <>
          <HomeHadBanar />
          <div className="lg:grid grid-rows-1 md:grid-cols-3 gap-4 mt-3 ">
            <section className="col-span-2 sm:order-last md:order-first">
              <Articles />
            </section>
            <div className="text-center w-full">
              <Link to="/payment">
                <button className="bg-black text-white rounded-3xl py-3 px-2 w-9/12">
                  Get unlimited access
                </button>
              </Link>
              <SideCategory />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
