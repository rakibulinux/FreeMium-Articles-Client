import React from 'react';
import { Link } from 'react-router-dom';

const TopWritersCard = ({writerData}) => {
    console.log(writerData);
    const {name,picture,} = writerData;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <div className="card-body">
               <div className='flex justify-between'>
               <img src={picture} className='w-10 rounded-full h-10' alt="" />
              <div className='px-2'>
                <h3>{name}</h3>
                <p>I am Java programmer, blogger, working on Java, J2EE, UNIX, FIX Protocol. I share Java tips on</p>
              </div>
             <div className='flex items-center'>
             <button className="py-1 px-6 rounded-2xl font-semibold text-white hover:bg-[#257422] bg-[#1A8917]">Flow</button>
             </div>
               </div>
            </div>
        </div>
        </div>
    );
};

export default TopWritersCard;