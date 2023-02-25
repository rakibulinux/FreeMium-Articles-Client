import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { APIContext } from "../../contexts/APIProvider";
import VoiceCall from "./VoiceCall/VoiceCall";
const MessagesJsRightSide = ({
  currentFriend,
  friends,
  messageInputHandl,
  newMessages,
  sendImage,
  sendMessage,
  getMessage,
  singleUsers,
  // scrollRef,
  emojiHnadler,
  active,
  typingMessage
}) => {
  const { picture, name, _id } = currentFriend;
  const scrollRef = useRef();
  const { isDarkMode } = useContext(APIContext);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [getMessage]);
  const emojis = [
    "😨",
    "🤔",
    "😕",
    "😬",
    "😊",
    "😳",
    "😲",
    "😟",
    "😒",
    "😞",
    "🤣",
    "🔫",
    "🤮",
    "😋",
    "😭",
    "😢",
    "👍",
    "😣",
    "🤣",
    "😈",
    "😠",
    "❤️",
    "💘",
    "💕",
    "💖",
    "😀",
    "😎",
    "😉",
  ];

  return (
    <>
    <div
      className={
        isDarkMode
          ? "flex flex-col min-h-screen w-full bg-black-350 text-white px-4 py-6"
          : "flex flex-col min-h-screen w-full bg-white px-4 py-6"
      }
    >
      <div className="flex flex-row items-center py-4 px-6 rounded-2xl shadow">
        {/* <img src={picture} alt='img' className="flex items-center justify-center h-10 w-10 rounded-full ">              
            </img> */}
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src={picture} alt="img" />
            <div className="flex flex-col ml-3">
              <div className="font-semibold text-sm">{name}</div>
              {active &&
              active.length > 0 &&
              active.some((u) => u.userId === _id) ? (
                <div className="text-xs text-gray-500">Active</div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col ml-3">
          <div className="font-semibold text-sm">{name}</div>
          <div className="text-xs text-gray-500">Active</div>
        </div> */}
        <div className="ml-auto">
          <ul className="flex flex-row items-center space-x-2">
            {/* <li>
                <Link
                  to="/"
                  className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full"
                >
                  <span>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      stroke="none"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </span>
                </Link>
              </li> */}
            {/* <VoiceCall /> */}
            <li>
              <Link
                to="/"
                className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full"
              >
                <span>
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    stroke="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                    ></path>
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-400 h-10 w-10 rounded-full"
              >
                <span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    ></path>
                  </svg>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="h-full overflow-hidden py-4">
        <div className="h-full overflow-y-auto">
          <div className="grid grid-cols-12 gap-y-2">
            {/* <div className="col-start-1 col-end-8 p-3 rounded-lg">
                  <div className="flex flex-row items-center">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                      A
                    </div>
                    <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                      <div>Hey How are you today?</div>
                    </div>
                  </div>
                </div> */}
            {getMessage && getMessage.length > 0
              ? getMessage?.map((m) =>
                  m.senderId === singleUsers?._id ? (
                    <div
                      key={m?._id + 1}
                      className="col-start-6 col-end-13 p-3 rounded-lg"
                    >
                      <div
                        key={m?._id + 2}
                        className="flex items-center justify-start flex-row-reverse"
                      >
                        {/* <div ref={scrollRef} /> */}
                        <div
                          key={m?._id + 3}
                          className="flex items-center justify-center h-10 w-10 rounded-full flex-shrink-0"
                        >
                          <img
                            className="rounded-full w-10 h-10"
                            src={singleUsers?.picture}
                            alt=""
                          />
                        </div>

                        <div
                          key={m?._id + 5}
                          className={
                            isDarkMode
                              ? "relative mr-3 text-sm bg-black-250 py-2 px-4 shadow rounded-xl"
                              : "relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                          }
                        >
                          <div className="rs" key={m?._id + 5}>
                            {m?.message?.text === "" ? (
                              <img src={m?.message?.image} alt="img"></img>
                            ) : (
                              m?.message?.text
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="col-start-1 col-end-8 p-3 rounded-lg">
                      <div className="flex flex-row items-center">
                        <img
                          src={picture}
                          alt="img"
                          className="flex items-center justify-center h-10 w-10 rounded-full  flex-shrink-0"
                        ></img>
                        <div
                          className={
                            isDarkMode
                              ? "relative ml-3 text-sm bg-black-250 py-2 px-4 shadow rounded-xl"
                              : "relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                          }
                        >
                          <div>
                            {m?.message?.text === "" ? (
                              <img src={m?.message?.image} alt="img"></img>
                            ) : (
                              m?.message?.text
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )
              : ""}
          </div>
          <div ref={scrollRef} />
        </div>
      </div>
      {
        typingMessage && typingMessage.msg && typingMessage.senderId === _id?
        <div className="typing-Message">
        <div className="col-start-1 col-end-8 p-3 rounded-lg">
                          <div className="flex flex-row items-center">
                            <img
                              src={picture}
                              alt="img"
                              className="flex items-center justify-center h-10 w-10 rounded-full  flex-shrink-0"
                            ></img>
                            <div
                              className={
                                isDarkMode
                                  ? "relative ml-3 text-sm bg-black-250 py-2 px-4 shadow rounded-xl"
                                  : "relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                              }
                            >
                              <div>
                                typing message......
                              </div>
                            </div>
                          </div>
                        </div>
        </div>
        :
        ''
      }
      {/* show typing message */}
     
    {/* end typing message */}
      <div className="flex flex-row items-center ">
        <div className="flex flex-row items-center w-full border rounded-3xl h-12 px-2">
          <button className="flex items-center justify-center h-10 w-10 text-gray-400 ml-1">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              ></path>
            </svg>
          </button>
          {/* input field */}
          <div className="w-full">
            <input
              onChange={messageInputHandl}
              type="text"
              value={newMessages}
              className={
                isDarkMode
                  ? "border border-transparent w-full focus:outline-none text-sm h-10 flex items-center bg-black-350 text-white"
                  : "border border-transparent w-full focus:outline-none text-sm h-10 flex items-center"
              }
              placeholder="Type your message...."
            />
          </div>
          <div className="flex flex-row items-center">
            <button className="flex items-center justify-center h-10 w-8 text-gray-400">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                ></path>
              </svg>
            </button>
            {/*send img */}
            <label className="cursor-pointer" htmlFor="image-input">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>

              <input
                type="file"
                accept="image/*"
                onChange={sendImage}
                className="hidden"
                id="image-input"
              />
            </label>
            {/* add emoji */}
            <div className="dropdown dropdown-left dropdown-end">
              <label tabIndex={0} className="cursor-pointer">
                😀
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu grid grid-cols-6 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {emojis?.map((e, i) => (
                  <span
                    key={i}
                    className="cursor-pointer"
                    onClick={() => emojiHnadler(e)}
                  >
                    {e}
                  </span>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="ml-6">
          <button
            onClick={sendMessage}
            className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 text-green-500 "
          >
            <svg
              className="w-5 h-5 transform rotate-90 -mr-px"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  
    </>
  );
};

export default MessagesJsRightSide;
