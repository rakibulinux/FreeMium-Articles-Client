import React from 'react';

import { useState, useEffect } from 'react';
import TopMember from '../topMember/TopMember';


const JoinNetowork = () => {
   const [userData, setUserData] = useState([]);
   useEffect(()=>{
    fetch('http://localhost:5000/user')
    .then(res=>res.json())
    .then(data=>setUserData(data))
   },[userData])
    return (
        <div className='bg-[#000000] grid grid-cols-2 px-10 py-20'>
            <div>
                <h1 className='text-7xl font-serif text font-semibold text-gray-300'>Join a network <br /> of curious <br /> minds.</h1>
            </div>
           <div className='px-5'>
            {
                userData.map(data=><TopMember data={data} />)
            }
           </div>
        </div>
    );
};

export default JoinNetowork;