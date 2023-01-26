import React from 'react';
import WriterAvatarImg from './WriterAvatarImg/WriterAvatarImg';

const TotalFollowerAndTotalArticle = () => {
    return (
       <div className='border-[1px] border-[#ddd] pb-10 pt-0 border-t-0 border-x-0'>
         <div className='flex items-center w-56 mt-8 justify-between'>
          <div>
          <h1 className='text-2xl text-gray-900 font-bold'>277k</h1>
          <span className='text-gray-900 font-semibold'>Stories</span>
          </div>
           <div>
           <h1 className='text-2xl text-gray-900 font-bold'>60k</h1>
           <span className='text-gray-900 font-semibold'>Writers</span>
           </div>
        </div>
        <WriterAvatarImg />
       </div>
    );
};

export default TotalFollowerAndTotalArticle;