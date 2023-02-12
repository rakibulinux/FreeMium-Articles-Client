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
    <div className="w-11/12 mx-auto my-10">
      {user?.uid ? ( // after log in user  UI
        <div>
          <div className="grid sm:grid-rows-1 md:grid-cols-3 gap-4">
            <section className="col-span-2 sm:order-last md:order-first">
              <AfterLoginHadBanar />
              <Manubar />

              <Articles></Articles>
            </section>
            <aside className="mt-8">
              <Link to="/payment">
                <GetUnlimitedAccessButton text={"Get unlimited access"} />
               
              </Link>
              

              <SideCategory />
            </aside>
          </div>

          
        </div>
      )
        :
        (
          // before log in user UI
          <>
            <HomeHadBanar />
            <div className="lg:grid grid-rows-1 md:grid-cols-3 gap-4 mt-3 lg:mt-0">
              <section className="col-span-2 sm:order-last md:order-first">
                <Articles />
              </section>
              <div className="text-center w-full">
                <Link to="/payment">
                  <GetUnlimitedAccessButton text={"Get unlimited access"} />
                 
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
