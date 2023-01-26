import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Stats = () => {
    return (
        <div className='container mx-auto'>
            <div className="alert ">
                <div>
                    <FaTwitter className='text-info' />

                    <h3 className=""><span className='link'>Connect with Twitter</span> to let your followers find you on FreeMium.</h3>

                </div>
                <div className="flex-none">
                    <button className="btn btn-sm">X</button>
                </div>
            </div>
            <div className='flex justify-between mt-5'>
                <h1 className='text-2xl font-bold'>Your stats</h1>
                <button className="btn btn-outline rounded-full">Audience stats</button>
            </div>
            <div className='flex justify-between mt-5'>
                <h1 className=''>Click story below to view detailed stats</h1>
                <a className='link'>Learn more about using stats</a>
            </div>
        </div>
    );
};

export default Stats;