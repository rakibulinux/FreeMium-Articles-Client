import React from "react";
import { useState, useEffect } from "react";
import TopWritersCard from "./TopWritersCard/TopWritersCard";
import { Link } from "react-router-dom";

const TopWriters = () => {
    const [user, setUser] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
    return (
        <div className='my-10 sticky top-0 my'>
            <h1 className='text-gray-900 font-semibold text-base mb-4 mt-10 border-x-0 border-t-0 ml-9 lg:ml-0'>Top writers</h1>
            {
                user.map(userData=> <TopWritersCard writerData={userData} key={userData?._id} />)
            }
            <Link to={''} className='mt-7 lg:mt-5 block text-center lg:text-left lg:ml-5'>
<span className='text-[#1A8917] font-semibold'>See-more</span>
            </Link>
        </div>
    );
};

export default TopWriters;
