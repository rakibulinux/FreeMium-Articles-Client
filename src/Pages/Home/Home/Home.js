import React from "react";
import Articles from "../../articlesSection/Articles";
import SideCategory from "../../sideCategory/SideCategory";


const Home = () => {
  return (
    <div className="grid" style={{gridTemplateColumns:"4fr 2fr"}}>
        <Articles></Articles>
        <SideCategory></SideCategory>
    </div>
  );
};

export default Home;
