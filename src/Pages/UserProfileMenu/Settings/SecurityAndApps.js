import React from 'react';
import { BsFacebook, BsTwitter } from "react-icons/bs";
const SecurityAndApps = () => {
    return (
        <div >
            <button className='text-left'>
                <p className='text-red-600'>Sign out of all other sessions</p>
                <p>Sign out of sessions in other browsers or on other computers.</p>
            </button>
            <div className="divider"></div> 
            <button>
                <div className='flex items-center'>
                    <BsFacebook className='text-blue-600 mr-4'/>
                    <p>Connect Facebook</p>
                </div>
                <p>We will never post to Facebook or message your friends without your permission. </p>
            </button>
            <button>
                <div className='flex items-center'>
                    <BsTwitter className='text-blue-600 mr-4'/>
                    <p>Connect Twitter</p>
                </div>
                <p>We will never post to Facebook or message your friends without your permission. </p>
            </button>
            <div className="divider"></div> 
                <button>
                <div className='flex items-center'>
                    <BsTwitter className='text-blue-600 mr-4'/>
                    <p>Disconnect Google</p>
                </div>
                <p>We will never post to Facebook or message your friends without your permission. </p>
            </button>
        </div>
    );
};

export default SecurityAndApps;