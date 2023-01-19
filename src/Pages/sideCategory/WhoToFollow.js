import React from 'react';
import { Link } from 'react-router-dom';

const WhoToFollow = () => {
    return (
        <div className=''>
            <h1 className='my-7 '>Who to follow</h1>
            <div>
                <div className='flex mb-5'>
                    <div className=''>
                        <img className='rounded-full w-8' src="https://miro.medium.com/fit/c/20/20/1*XL5QclUh4RwVmsq8szytzg.png" alt="" />
                    </div>
                    <div>
                        <h2 className='font-bold text-lg ml-3'>Mark Schaefer</h2>
                        <h1 className='text-sm ml-3'>Author of technology... </h1>
                    </div>
                    <div className='ml-8'>
                        <button className='btn btn-sm mt-3  rounded-full btn-outline'><Link to=''>Follow</Link></button>
                    </div>
                </div>
                <div className='flex mb-5'>
                    <div className=''>
                        <img className='rounded-full w-8' src="https://miro.medium.com/fit/c/20/20/1*XL5QclUh4RwVmsq8szytzg.png" alt="" />
                    </div>
                    <div>
                        <h2 className='font-bold text-lg ml-3'>Mark Schaefer</h2>
                        <h1 className='text-sm ml-3'>Author of technology... </h1>
                    </div>
                    <div className='ml-8'>
                        <button className='btn btn-sm mt-3  rounded-full btn-outline'><Link to=''>Follow</Link></button>
                    </div>
                </div>
                <div className='flex mb-5'>
                    <div className=''>
                        <img className='rounded-full w-8' src="https://miro.medium.com/fit/c/20/20/1*XL5QclUh4RwVmsq8szytzg.png" alt="" />
                    </div>
                    <div>
                        <h2 className='font-bold text-lg ml-3'>Mark Schaefer</h2>
                        <h1 className='text-sm ml-3'>Author of technology... </h1>
                    </div>
                    <div className='ml-8'>
                        <button className='btn btn-sm mt-3  rounded-full btn-outline'><Link to=''>Follow</Link></button>
                    </div>
                </div>
                <Link className='font-semibold' to=''>See more suggession</Link>
            </div>
        </div>
    );
};

export default WhoToFollow;