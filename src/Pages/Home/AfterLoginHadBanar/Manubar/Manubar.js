import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Manubar = () => {
  const [category, setCategory] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/categoryButton')
    .then(res=>res.json())
    .then(data=>setCategory(data))
  },[])
  
  return (
    <div style={{ width: "100%" }}>
      <ul
        className="menu menu-vertical lg:menu-horizontal bg-base-100 border my-8"
        style={{ width: "100%", alignItems: "center" }}
      >
       {
        category.map(data=> 
          <li key={data?._id}>
            <Link to={`/category/${data?.CategoryName}`}>{data?.CategoryName}</Link>
          </li>
          )
       }
      </ul>
    </div>
  );
};

export default Manubar;
