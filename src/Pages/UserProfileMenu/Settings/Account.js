import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const Account = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className='mt-8'>
             <div className='flex justify-between'>
                <p>Email address</p>
                <p>{ user.email}</p>
            </div>
             {/* <div className='flex justify-between'>
                <p>Username</p>
                <p>{ user.displayName}</p>
            </div> */}
             <div className='flex justify-between mt-6'>
                <p>Profile information</p>
                <p className='flex items-center'> {user.displayName}<span>{<img
                    className="w-8 ml-2 rounded-full"
                    src={user?.photoURL}
                    alt="profile pictures"
                  /> }</span></p>
            </div>
        </div>
    );
};

export default Account;