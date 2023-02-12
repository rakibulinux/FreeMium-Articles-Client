import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { AiOutlineLike } from "react-icons/ai";
import { Link } from "react-router-dom";

const Comments = ({ id }) => {
    const { register, handleSubmit, reset, watch } = useForm();
    const comment = watch("comment");
    const { user } = useContext(AuthContext);
    const date = format(new Date(), "PP");
    // const formattedTime = format(currentTime, 'HH:mm:ss');
    // const postTime = new Date('2022-12-01T08:30:00.000Z');
    // const timeSincePost = distanceInWordsToNow(postTime, { includeSeconds: true });
    // console.log(user);

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState(false);

    // console.log(comments);

    const handleComment = (data) => {
        // console.log(data);
        const comment = {
            articleId: id,
            userName: user?.displayName,
            profileImage: user?.photoURL,
            comment: data.comment,
            commentDate: date,
        };
        console.log(comment);
        // save post information to the database

        fetch(`${process.env.REACT_APP_API_URL}/comments`, {
            method: "POST",

            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(comment),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.acknowledged) {
                    toast.success("Review placed successfully");

                    reset();

                    setNewComment(true);
                }
            });
    };

    const handleCommentReply = (event) => {
        event.preventDefault();

        const form = event.target;
        const message = form.message.value;
        console.log(message);
    };

    useEffect(() => {

        fetch(`${process.env.REACT_APP_API_URL}/comments?articleId=${id}`)
            .then((res) => res.json())
            .then((data) => {
                setComments(data);

                // console.log(data);
            });
    }, [id, newComment]);

    return (
        <div>
            <h1 className="font-semibold text-2xl mb-5 ">
                Responses ({comments.length})
            </h1>
            {
                user?.uid ?
                    <>
                        <div className='flex mb-5'>
                            <img className='w-8 rounded-full' src={user?.photoURL} alt="" />
                            <h4 className='mt-1 ml-3'>{user?.displayName}</h4>
                        </div>

                        <form onSubmit={handleSubmit(handleComment)}>
                            <textarea className="textarea  textarea-sm w-full " {...register("comment")} placeholder="What are your thoughts" />
                            {/* <p>{data}</p> */}
                            <div className='flex justify-end my-5'>
                                <input disabled={!comment} className="btn bg-[#059b00] hover:bg-[#0F730C] btn-sm rounded-full text-white" type="submit" />
                            </div>
                        </form>
                    </>
                    :
                    <span>Please <Link to='/login' className='text-[#059b00] font-semibold'>Login</Link> to Respond</span>
            }

            <div>
                <div>
                    <div>
                        {comments?.map((comment) => (
                            <div className="border-y" key={comment._id}>
                                <div className="my-5">
                                    <div className="flex justify-between">
                                        <div className="flex">
                                            {comment?.profileImage ? (
                                                <div className="avatar ">
                                                    <div className="w-8 rounded-full mt-3 ">
                                                        <img src={comment?.profileImage} alt="" />
                                                        <h2>{comment?.userName}</h2>
                                                        <div className="bg-neutral-focus text-neutral-content rounded-full w-8"></div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="avatar placeholder  mt-3">
                                                    <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                                                        <span className="text-sm ml-5">
                                                            {" "}
                                                            <span className="text-sm ml-1 mb-0">
                                                                {" "}
                                                                No
                                                            </span>{" "}
                                                            <span className="ml-3 mt-0">Image</span>
                                                        </span>
                                                        <span className="text-xs">
                                                            <span className="ml-2">No</span> <br />{" "}
                                                            <span>Image</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            )}
                                            <div>
                                                <p className="text-xs ml-3 mt-3 text-black-350 font-semibold">
                                                    {comment?.userName}
                                                </p>
                                                <p className="text-xs ml-3">{comment?.commentDate}</p>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="dropdown  dropdown-left">
                                                <button>
                                                    <label tabIndex={0} className="font-bold text-xl">
                                                        ...
                                                    </label>
                                                </button>
                                                <ul
                                                    tabIndex={0}
                                                    className="dropdown-content  mt-5 border menu p-2 shadow-lg bg-base-100 rounded-box w-44"
                                                >
                                                    <li>
                                                        <Link to="" className="text-xs font-semibold">
                                                            Edit This Response
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="" className="text-xs font-semibold">
                                                            Delete
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-xs my-3">{comment?.comment}</p>
                                    <div className="flex justify-between">
                                        <button>
                                            <AiOutlineLike></AiOutlineLike>
                                        </button>
                                        <div className="dropdown dropdown-left dropdown-top">
                                            <label tabIndex={0} className="m-1">
                                                Reply
                                            </label>
                                            <div
                                                tabIndex={0}
                                                className="dropdown-content card-compact w-64 p-2 shadow text-primary-content"
                                            >
                                                <div className="card-body">
                                                    <form onSubmit={handleCommentReply}>
                                                        <textarea
                                                            name="message"
                                                            className="textarea w-full text-black-350"
                                                            placeholder="write comment"
                                                            required
                                                        ></textarea>
                                                        <br />
                                                        <div className="flex justify-end">
                                                            <button
                                                                type="submit"
                                                                className="btn mt-2 bg-[#059b00] hover:bg-[#0F730C] btn-sm rounded-full text-white"
                                                            >
                                                                Respond
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comments;
