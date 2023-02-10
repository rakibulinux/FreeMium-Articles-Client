import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { HiArrowNarrowUp} from "react-icons/hi";
import { APIContext } from '../../../contexts/APIProvider';

const UpvoteButton = ({ user, storyId, upVoteId, classes}) => {
    const [upVote,setUpVote]=useState(false)
     
    
    const { isDarkMode} = useContext(APIContext);
    useEffect(() => {
        axios
          .get(
            `${process.env.REACT_APP_API_URL}/users/${storyId}/upVote/${user?.email}`
          )
          .then((res) => {
            setUpVote(res?.data?.upVote);
            
            
          });
      }, [storyId, user?.email,upVote]);

    
      const handleUpVote = () => {
        axios
          .post(`${process.env.REACT_APP_API_URL}/users/upVote`, {
            storyId,
            upVoteId,
          })
          .then((res) => {
            setUpVote(true);
           
          });
      };
    
      const handleDecUpVote = () => {
        axios
          .post(`${process.env.REACT_APP_API_URL}/users/decUpVote`, {
            storyId,
            decUpVoteId: upVoteId,
          })
          .then((res) => {
            setUpVote(false);
           
          });
      };
    return (
        <div>       
    {upVote ? (
      <button
      onClick={handleDecUpVote}

      className={
        isDarkMode
          ? `btn btn-sm bg-gray-100 text-gray-800  hover:bg-gray-300 hover:text-gray-800 rounded-full btn-outline ${classes}`
          : `btn btn-sm rounded-full bg-white border-0 text-[#ff5200]  hover:bg-white hover:text-gray-800 btn-outline ${classes}`
      }
    >
     <HiArrowNarrowUp className="h-4 w-4  " />
     
    </button>
 ): (
<button
          onClick={handleUpVote }
          className={
            isDarkMode
              ? `btn btn-sm bg-gray-100 hover:bg-white hover:text-gray-800 text-gray-900 rounded-full btn-outline ${classes}`
              : `btn btn-sm rounded-full bg-white text-gray-800  hover:bg-white hover:text-gray-800 border-0  ${classes}`
          }
        >
         <HiArrowNarrowUp className="h-4 w-4  " />
        </button>
      )}
        </div>
    );
};

export default UpvoteButton;