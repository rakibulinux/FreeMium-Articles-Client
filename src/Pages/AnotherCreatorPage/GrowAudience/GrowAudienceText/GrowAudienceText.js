import React from 'react';
import GrowAudienceCategory from './../GrowAudienceCategory/GrowAudienceCategory';

const GrowAudienceText = () => {
    return (
       <div>
         <div className='text-center p-3 border-[1px] border-b-[#000000] border-x-0 border-t-0'>
            <h1 className='text-7xl font-serif font-normal text-[#000000]'>Find and grow your <br /> audience.</h1>
            <p className='font-semibold text-base font-serif text-[#000000] mt-5 mb-20'>With simple tools and features, you have the chance to connect with over 100 million curious readers.</p>
        </div>
            <GrowAudienceCategory />
       </div>
    );
};

export default GrowAudienceText;