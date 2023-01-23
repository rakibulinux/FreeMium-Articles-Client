import React from 'react';
import FeedbackCard from './FeedbackCard/FeedbackCard';

const Feedback = () => {
    return (
        <div className='mt-28 bg-[#FFFFFF]'>
            <h1 className='text-4xl text-center text-gray-900 font-semibold'>Why I'm a Medium Member...</h1>
           <FeedbackCard />
        </div>
    );
};

export default Feedback;