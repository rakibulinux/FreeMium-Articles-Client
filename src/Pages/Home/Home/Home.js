import React, { useContext } from "react";
import Articles from "../../articlesSection/Articles";
import SideCategory from "../../sideCategory/SideCategory";
import HomeHadBanar from "../HomeHadBanar";
import { AuthContext } from './../../../contexts/AuthProvider';

const Home = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      {
        !user?.uid && <HomeHadBanar></HomeHadBanar>
        
      }
      <div className="grid mt-5" style={{gridTemplateColumns:"4fr 2fr"}}>
        <Articles></Articles>
        <SideCategory></SideCategory>
    </div>
    </div>
  );
};

export default Home;
