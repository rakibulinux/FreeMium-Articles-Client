import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../../contexts/AuthProvider';
import { format, distanceInWordsToNow, currentTime } from "date-fns";

const Comments = ({ id }) => {

    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const date = format(new Date(), "PP");
    // const formattedTime = format(currentTime, 'HH:mm:ss');
    // const postTime = new Date('2022-12-01T08:30:00.000Z');
    // const timeSincePost = distanceInWordsToNow(postTime, { includeSeconds: true });
    // console.log(user);


    const handleComment = data => {
        // console.log(data);
        const comment = {
            articleId: id,
            userName: user?.displayName,
            profileImage: user?.photoURL,
            comment: data.comment,
            commentDate: date
        }
        console.log(comment);
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
                    <input className="btn bg-[#0F730C] hover:bg-[#0F730C] btn-sm rounded-full text-white" type="submit" />
                </div>
            </form>

        </div>
    );
};

export default Comments;