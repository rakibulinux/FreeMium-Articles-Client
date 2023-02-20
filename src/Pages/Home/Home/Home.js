import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GetUnlimitedAccessButton from "../../../components/GetUnlimitedAccessButton/GetUnlimitedAccessButton";
import Articles from "../../ArticlesSection/Articles";

import SideCategory from "../../SideCategory/SideCategory";
import AfterLoginHadBanar from "../AfterLoginHadBanar/AfterLoginHadBanar";
import Manubar from "../AfterLoginHadBanar/Manubar/Manubar";
import HomeHadBanar from "../HomeHadBanar";
import { AuthContext } from "./../../../contexts/AuthProvider";

import "./Home.css";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-11/12 mx-auto py-10">
      {user?.uid ? ( // after log in user  UI
        <div>
          <div className="grid sm:grid-rows-1 md:grid-cols-3 lg:grid-cols-3 gap-0 md:gap-4">
            <section className="col-span-2 sm:order-last md:order-first">
              <AfterLoginHadBanar />
              <Manubar />

              <Articles></Articles>
            </section>
            <aside className="m-8 md:m-0">
              <div className="flex justify-center ">
                <Link className="w-full text-center" to="/payment">
                  <GetUnlimitedAccessButton text={"Get unlimited access"} />
                </Link>
              </div>
              <SideCategory />
              <button
                data-test="btn-scroll-to-top"
                type="button"
                data-ev-unique_element_id="t-fwh_scrollToTop"
                className="up-btn up-btn-default scroll-to-top m-0 py-10 px-20 show bg-white"
              >
                <span className="sr-only">Scroll to top</span>
                <div className="up-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    viewBox="0 0 14 14"
                    role="img"
                  >
                    <polygon
                      fill-rule="evenodd"
                      points="7 3 0 10.433 1.476 12 7 6.134 12.524 12 14 10.433"
                    ></polygon>
                  </svg>
                </div>
              </button>
            </aside>
          </div>
        </div>
      ) : (
        // before log in user UI
        <>
          <HomeHadBanar />
          <div className="lg:grid grid-rows-1 md:grid-cols-3 gap-4 mt-3 lg:mt-0">
            <section className="col-span-2">
              <Articles />
            </section>
            <div className="text-center w-full">
              <Link to="/payment">
                <GetUnlimitedAccessButton text={"Get unlimited access"} />
                {/* <button className="bg-black text-white rounded-3xl py-3 px-2 w-9/12">
                  Get unlimited access
                </button> */}
              </Link>
              <SideCategory />
              <button
                data-test="btn-scroll-to-top"
                type="button"
                data-ev-unique_element_id="t-fwh_scrollToTop"
                className="up-btn up-btn-default scroll-to-top m-0 py-10 px-20 show bg-white"
              >
                <span className="sr-only">Scroll to top</span>
                <div className="up-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    viewBox="0 0 14 14"
                    role="img"
                  >
                    <polygon
                      fill-rule="evenodd"
                      points="7 3 0 10.433 1.476 12 7 6.134 12.524 12 14 10.433"
                    ></polygon>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
