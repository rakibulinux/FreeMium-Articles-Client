import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../contexts/AuthProvider';

const Comments = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);

    const { register, handleSubmit } = useForm();
    const handleComment = data => {
        console.log(data);
    }

    return (
        <div>
            <h1 className='font-semibold text-2xl mb-5 '>Responses</h1>
            <div className='flex mb-5'>
                <img className='w-8 rounded-full' src={user?.photoURL} alt="" />
                <h4 className='mt-1 ml-3'>{user?.displayName}</h4>
            </div>

            <form onSubmit={handleSubmit(handleComment)}>
                <textarea className="textarea textarea-bordered textarea-sm w-full " {...register("comment")} placeholder="What are your thoughts" />
                {/* <p>{data}</p> */}
                <div className='flex justify-end'>
                    <input className="btn btn-success btn-sm rounded-full text-white" type="submit" />
                </div>
            </form>

        </div>
    );
};

export default Comments;