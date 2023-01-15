import React, { useContext } from "react";
import Articles from "../../articlesSection/Articles";
import SideCategory from "../../sideCategory/SideCategory";
import AfterLoginHadBanar from "../AfterLoginHadBanar/AfterLoginHadBanar";
import Manubar from "../AfterLoginHadBanar/Manubar/Manubar";
import DemoWritter from "../DemoWritter";

import HomeHadBanar from "../HomeHadBanar";
import { AuthContext } from './../../../contexts/AuthProvider';
import "./Home.css";
const Home = () => {
  const {user} = useContext(AuthContext);
  return (
    <div >
     
      {
        user?.uid ? 
        // after log in user  UI
       <div className="container mx-auto">
       
        {/* flex-col sm:flex-row-reverse  md:flex-row-reverse  lg:flex-row \ 1st flex-auto w-64 mx-3 2nd flex-auto w-32*/}
         <div className=" flex lg:flex-row sm:flex-col-reverse md:flex-col-reverse">
          {/* left side conten */}
          <div className="leftSideConten  flex-auto w-64 mx-3">
          <AfterLoginHadBanar></AfterLoginHadBanar>
          <Manubar></Manubar>
          <Articles></Articles>
          </div>
          
          {/* right side conten here */}
          <div className="  flex-auto w-32 ">
          <div className=" w-30 mx-auto">
          <button className="btn btn-wide">Get unlimited access</button>
          
         <p>category</p>
          
          </div>
          </div>
        </div>
       </div>
        :
        // before log in user UI
         <>
         <HomeHadBanar></HomeHadBanar>
         <div className="grid my-5 articleSideCategory" style={{gridTemplateColumns:"4fr 2fr"}}>
        <Articles></Articles>
        <SideCategory></SideCategory>
    </div>
         </>
        
      }
    
    </div>
  );
};

export default Home;
