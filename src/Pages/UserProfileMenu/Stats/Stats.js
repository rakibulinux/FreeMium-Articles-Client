import React, { useContext } from 'react';
// import { BsTwitter } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { APIContext } from '../../../contexts/APIProvider';

const Stats = () => {
    const {isDarkMode} = useContext(APIContext);
    return (
        <div className='container mx-auto mt-14 py-10'>
            <div className="alert ">
                <div>
                    <FaTwitter className='text-info' />

                    <h3 className={isDarkMode ? "text-gray-900":"text-gray-900"}><span className='link'>Connect with Twitter</span> to let your followers find you on FreeMium.</h3>
                </div>
                <div className="flex-none">
                    <button className="btn btn-sm">X</button>
                </div>
            </div>
            <div className='flex justify-between mt-5'>
                <h1 className={isDarkMode ? 'text-gray-100 text-2xl font-bold':'text-2xl font-bold text-gray-900'}>Your stats</h1>
                <button className="btn rounded-2xl btn-primary font-semibold ml-3 border-[1px] hover:border-[#1A8917] border-[#1A8917] bg-[#1A8917] text-[#fff] hover:bg-[#1A8917]">Audience stats</button>
            </div>
            <div className='flex justify-between mt-5'>
                <h1 className={isDarkMode ? "text-gray-100":"text-gray-900"}>Click story below to view detailed stats</h1>
                <Link className={isDarkMode ? "text-gray-100 underline" :"text-gray-900 underline"}>Learn more about using stats</Link>
            </div>
        </div>
    );
};

export default Stats;