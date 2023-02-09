import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider";
import { format } from "date-fns";
import toast from "react-hot-toast";

const Comments = ({ id }) => {
  const { register, handleSubmit } = useForm();
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
    fetch("http://localhost:5000/comments", {
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
          // form.reset()

          setNewComment(true);
        }
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/comments?articleId=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
        // console.log(data);
      });
  }, [id, newComment]);

  return (
    <div>
      <h1 className="font-semibold text-2xl mb-5 ">Responses</h1>
      <div className="flex mb-5">
        <img className="w-8 rounded-full" src={user?.photoURL} alt="" />
        <h4 className="mt-1 ml-3">{user?.displayName}</h4>
      </div>

      <form onSubmit={handleSubmit(handleComment)}>
        <textarea
          className="textarea  textarea-sm w-full "
          {...register("comment")}
          placeholder="What are your thoughts"
        />
        {/* <p>{data}</p> */}
        <div className="flex justify-end">
          <input
            className="btn bg-[#0F730C] hover:bg-[#0F730C] btn-sm rounded-full text-white"
            type="submit"
          />
        </div>
      </form>
      <div>
        <div className="  bg-base-100 shadow-sm">
          <div className="card-body">
            {comments?.map((comment) => (
              <div key={comment._id} className="avatar">
                {comment?.profileImage ? (
                  <div className="avatar ">
                    <div className="w-8 rounded-full mt-3 ">
                      <img src={comment?.profileImage} alt="" />
                      {/* <h2>{comment?.userName}</h2> */}
                      {/* <div className="bg-neutral-focus text-neutral-content rounded-full w-12"></div> */}
                    </div>
                  </div>
                ) : (
                  <div className="avatar placeholder  mt-3">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                      <span className="text-sm ml-5">
                        {" "}
                        <span className="text-sm ml-1 mb-0"> No</span>{" "}
                        <span className="ml-3 mt-0">Image</span>
                      </span>
                      <span className="text-xs">
                        <span className="ml-2">No</span> <br />{" "}
                        <span>Image</span>
                      </span>
                    </div>
                  </div>
                )}
                <div className="mt-2 w-fit">
                  <div className="">
                    <h2 className=" text-blue-700 text-xs mt-1 ml-5">
                      {comment?.userName}
                    </h2>
                    <p className="text-xs ml-5">{comment?.commentDate}</p>
                  </div>
                  <p className="ml-6 text-sm">{comment?.comment}</p>
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
