import { format } from 'date-fns';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../contexts/AuthProvider';

const ReplyComment = ({comment}) => {
    const { register, handleSubmit,reset, watch } = useForm();
    const replyComment = watch("replyComment");
    const { user } = useContext(AuthContext);
    const date = format(new Date(), "PP");
    // console.log(user);
    // console.log(comment?._id);

    const handleCommentReply = (data) => {
       console.log(data);
       const replyComment = {
        comment: comment._id,
        userEmail: user?.email,
        userName: user?.displayName,
        profileImage: user?.photoURL,
        replyComment: data.replyComment,
        commentDate: date,
    };
    console.log(replyComment);

    };

    return (
        <div>
            <div className="dropdown">
                                        
                                            <div
                                                tabIndex={0}
                                                className="dropdown-content bg-base-100 card-compact w-60  shadow text-primary-content"
                                            >
                                                <div className="card-body bg-base-100">

                                                     <form onSubmit={handleSubmit(handleCommentReply)}>
                                                        <textarea className="textarea  textarea-sm w-full text-black-350 " {...register("replyComment")} placeholder={`Reply to ${comment?.userName}`} />
                                                        {/* <p>{data}</p> */}
                                                         <div className='flex justify-end my-5'>
                                                            <input disabled={!replyComment} className="btn bg-[#059b00] hover:bg-[#0F730C] btn-sm rounded-full text-white" type="submit" />
                                                        </div>
                                                     </form> 
                                                </div>
                                            </div>
                                        </div>
        </div>
    );
};

export default ReplyComment;