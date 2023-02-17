import React, { useState, useEffect, useContext, useRef } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import socketIOClient from "socket.io-client";
import { APIContext } from "../../contexts/APIProvider";
import { AuthContext } from "../../contexts/AuthProvider";
import MessagesJsRightSide from "./MessagesJsRightSide";


const ENDPOINT = `${process.env.REACT_APP_API_URL}`;
const socket = socketIOClient(ENDPOINT);

function Messages({ userId }) {
  const { user } = useContext(AuthContext);
  const scrollRef =useRef()
const {friends,singleUsers,friendsRefetch} = useContext(APIContext)

  const [newMessages, setNewMessages] = useState([]);
  const [getMessage, setGetMessage] = useState();
  const [inputValue, setInputValue] = useState("");
  const [currentFriend,setCurrentFriend] = useState('')
  const {name,_id} =singleUsers
  // console.log(getMessage);
  // console.log(currentFriend?._id);

// message input handler
  const messageInputHandl =e=>{
    setNewMessages(e.target.value)
  }
const sendMessage=e=>{
  e.preventDefault()
  console.log(newMessages);
  const data ={
    senderName:name,
    senderId:_id,
    reciverId:currentFriend?._id,
    message:{text :newMessages? newMessages : '',image:''},
    date:new Date()
    
  }
  console.log(data);
  fetch(`${process.env.REACT_APP_API_URL}/sendMessage`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({data}),
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      toast.success(`Saved message`);
      setNewMessages('')
    });
}
//get message
useEffect(() => {
  fetch(`${process.env.REACT_APP_API_URL}/sendMessage/${currentFriend?._id}/getMseeage/${singleUsers?._id}`)
    .then((res) => res.json())
    .then((data) => {
      setGetMessage(data)
      friendsRefetch()
    });
}, [currentFriend,getMessage]);

//get default frist friend message  
useEffect(() => {
   if(friends && friends.length>0){
    setCurrentFriend(friends[0])
   }
  }, [friends]);
  // scrollRef
  useEffect(() => {
    scrollRef.current?.scrollIntoView({behavior:"smooth"})
   }, []);

  // emonji handler
  const emojiHnadler =emoje=>{
    console.log(newMessages)
    setNewMessages(`${newMessages}` + emoje)
  } 
//  img send
const sendImage =e=>{
  if(e.target.files.length !== 0){
    console.log(e.target.files[0])
    const imgName = e.target.files[0].name;
    const newImgName = Date.new() + imgName;
    const formData = new FormData();
    formData.append("senderName",name);
    formData.append("reciverId",currentFriend?._id);
    formData.append("imageName",newImgName);
    formData.append("image",e.target.files[0]);
  
    // fetch(`${process.env.REACT_APP_API_URL}/sendImage`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({formData}),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //     toast.success(`Saved Image`);
       
    //   });
  
}}



  return (
    <div>
     

      <div className="flex flex-row h-screen antialiased text-gray-800">
        <div className="flex flex-row w-96 flex-shrink-0 bg-gray-100 p-4">
         
          <div className="flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4">
            <div className="flex flex-row items-center">
              <div className="flex flex-row items-center">
                {/* <div className="text-xl font-semibold">Messages</div>
                <div className="flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-red-500 rounded-full font-medium">
                  5
                </div> */}
                <div className="flex flex-row items-center p-4">
                  <img src={user?.photoURL} alt ='img'className="flex items-center justify-center h-10 w-10 rounded-full  font-bold flex-shrink-0">
                    
                  </img>
                  <div className="flex flex-col flex-grow ml-3">
                    <div className="flex items-center">
                      <div className="text-sm font-medium">{user?.displayName}</div>
                      <div className="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
                    </div>
                    <div className="text-xs truncate w-40">
                      Lorem ipsum
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-auto">
                <button className="flex items-center justify-center h-7 w-7 bg-gray-200 text-gray-500 rounded-full">
                  <svg
                    className="w-4 h-4 stroke-current"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-5">
              <ul className="flex flex-row items-center justify-between">
                <li>
                  <Link
                    to="/"
                    className="flex items-center pb-3 text-xs font-semibold relative text-indigo-800"
                  >
                    <span>All Conversations</span>
                    <span className="absolute left-0 bottom-0 h-1 w-6 bg-indigo-800 rounded-full"></span>
                  </Link>
                </li>
              
              </ul>
            </div>
            
            
            <div className="h-full overflow-hidden relative pt-2">
              <div className="flex flex-col divide-y h-full overflow-y-auto -mx-4">
                {/* friends */}
                {
                 friends && friends.length>0? friends?.map(user=>
                  <div onClick={()=>setCurrentFriend(user)} user={user} key={user._id} className= "flex flex-row items-center p-4 relative" >
                    
                  <div className="absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">
                    2 hours ago
                  </div>
                 
                  <div className={`avatar`}>
<div className="w-10 rounded-full">
 <img src={user.picture} alt='img' />
</div>
</div>
                  <div className="flex flex-col flex-grow ml-3">
                  <div className="flex items-center">
                    <div className="text-sm font-medium">{user.name}</div>
                    
                    
                    </div>
                    <div className="text-xs truncate w-40">
                      Good after noon! how can i help you?
                    </div>
                  </div>
                  <div className="flex-shrink-0 ml-2 self-end mb-1">
                    <span className="flex items-center justify-center h-5 w-5 bg-red-500 text-white text-xs rounded-full">
                      3
                    </span>
                  </div>
                </div>
                )
                : 'no friend'
                }
                
               
               
              </div>
              <div className="absolute bottom-0 right-0 mr-2">
                <button className="flex items-center justify-center shadow-sm h-10 w-10 bg-red-500 text-white rounded-full">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
<div className="flex flex-col justify-between w-full bg-white px-4 ">
        {
          currentFriend?
          <MessagesJsRightSide 
          friends={friends}
          currentFriend={currentFriend} 
          newMessages ={newMessages}
          messageInputHandl ={messageInputHandl}
          sendMessage ={sendMessage}
          getMessage={getMessage}
          singleUsers={singleUsers}
          scrollRef={scrollRef}
          emojiHnadler ={emojiHnadler}
          sendImage={sendImage}
          ></MessagesJsRightSide> 
          : <p className="text-xl font-bold text-centar">Please select your friend</p>
        }
        </div> 
      </div>
    </div>
  );
}


export default Messages;
