import React from 'react';
import './GrowAudienceCategory.css';
const GrowAudienceCategory = () => {
    return (
        <div className='growCategory'>
            <div className='border-[1px] border-r-[#000000] border-y-0 border-l-0 px-7'>
                <h1 className='text-4xl mt-10 text-[#000000] font-medium font-serif'>Audience insights.</h1>
                <p className='mt-3 text-lg font-semibold text-[#000000]'>Use data to learn what resonates with your readers so you can keep growing your audience.</p>
                <img className='mt-8' src="https://cdn-static-1.medium.com/sites/medium.com/creators/images/creator-find-points-iphones.png" alt="" />
            </div>
            <div>
                <div className='grid grid-cols-2'>
                      <div className='border-[1px] border-[#000000] px-3 py-2 border-l-0 border-t-0'>
                            <h1 className='text-4xl mt-10 font-serif text-[#000000] font-medium'>Social connectivity.</h1>
                            <p className='mt-8 text-[#000000] font-semibold text-base'>Find people you’re already connected with on <br /> Twitter and easily share your stories across platforms.</p>
                       </div>
                   <div className='border-[1px] border-[#000000] px-3 py-2 border-l-0 border-t-0 border-r-0'>
                        <h1 className='text-4xl mt-10 font-serif text-[#000000] font-medium'>Powerful network.</h1>
                        <p className='mt-8 text-[#000000] font-semibold text-base'>Readers can discover and follow you easily with tailored feeds and recommendations.</p>
                   </div>
                </div>
                <div className='grid grid-cols-3'>
                    <div className='p-4 border-[1px] border-[#000000] px-3 border-l-0 border-t-0'>
                        <h1 className='text-4xl mt-10 font-serif text-[#000000] font-medium'>Email subscriptions.</h1>
                        <p className='mt-8 text-[#000000] font-semibold text-base'>Reach readers by having your stories delivered straight to their inboxes.</p>
                    </div>
                    <div className='p-4 border-[1px] border-[#000000] px-3 border-l-0 border-t-0'>
                        <h1 className='text-4xl mt-10 font-serif text-[#000000] font-medium'>Interactive discussions.</h1>
                        <p className='mt-8 text-[#000000] font-semibold text-base'>Build relationships with your readers through a threaded comments section.</p>
                    </div>
                    <div className='border-[1px] border-[#000000] px-7 border-l-0 border-t-0 border-r-0'>
                        <h1 className='text-4xl mt-10 font-serif text-[#000000] font-medium'>Custom design.</h1>
                        <p className='mt-8 text-[#000000] font-semibold text-base'>Easily customize your page to stand out and build your brand.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrowAudienceCategory;