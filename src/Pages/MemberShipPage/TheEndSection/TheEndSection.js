import React from 'react';

import img from '../../../Assets/Membership_Footer.svg'
const TheEndSection = () => {
    return (
        <div>
    
{/* end */}
<section className="bg-[#78e2e2]">
  <div className="mx-auto max-w-screen-xl px-4 pt-6 lg:flex  lg:items-center" >
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-6xl font-bold text-black sm:text-5xl">
      Take your mind

        <strong className=" text-6xl font-bold text-black sm:block">
        in new directions.
        </strong>
      </h1>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block   bg-black text-white rounded-3xl py-3 px-20 w-full  sm:w-auto"
          href="/get-started"
        >
          Get unlimited access
        </a>

        
        
      </div>
    </div>
    
  </div>
  <img
    alt="Lava"
    src={img}
    className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
  />
</section>


        </div>
    );
};

export default TheEndSection;