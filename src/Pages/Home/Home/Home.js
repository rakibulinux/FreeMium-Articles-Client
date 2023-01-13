import React, { useContext } from "react";
import Articles from "../../articlesSection/Articles";
import SideCategory from "../../sideCategory/SideCategory";
import AfterLoginHadBanar from "../AfterLoginHadBanar/AfterLoginHadBanar";
import Manubar from "../AfterLoginHadBanar/Manubar/Manubar";

import HomeHadBanar from "../HomeHadBanar";
import { AuthContext } from './../../../contexts/AuthProvider';

const Home = () => {
  const {user} = useContext(AuthContext);
  return (
    <div >
     
      {
        user?.uid? 
        // after log in user  UI
       <div className="container mx-auto">
         <div className="flex flex-col sm:flex-col-reverse  md:flex-col-reverse  lg:flex-row ">
          {/* left side conten */}
          <div className="leftSideConten flex-auto w-64 mx-3">
          <AfterLoginHadBanar></AfterLoginHadBanar>
          <Manubar></Manubar>
          <Articles></Articles>
          </div>
          
          {/* right side conten here */}
          <div className="flex-auto w-32">
          <div className=" w-30 mx-auto">
          <button className="btn btn-wide">Get unlimited access</button>
         
          <SideCategory></SideCategory>
          </div>
          </div>
        </div>
       </div>
        :
        // before log in user UI
         <>
         <HomeHadBanar></HomeHadBanar>
         <div className="grid my-5" style={{gridTemplateColumns:"4fr 2fr"}}>
        <Articles></Articles>
        <SideCategory></SideCategory>
    </div>
         </>
        
      }
    
    </div>
  );
};

export default Home;
