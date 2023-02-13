import React, { useState } from "react";
import axios from "axios";
import { AiOutlineSend } from "react-icons/ai";
import SideSection from "./SideSection/SideSection";
import AILogo from "../../Assets/AILogo.png";
import { useContext } from "react";
import { AuthContext } from "./../../contexts/AuthProvider";

const AskMeAnything = () => {
  const { user } = useContext(AuthContext);
  const userName = user?.displayName;
  const firstWord = userName.split("")[0];
  // const secondWord = firstName.split("")[1];

  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send a request to the server with the prompt
    axios
      .post(`${process.env.REACT_APP_API_URL}/hexa-ai`, { prompt })
      .then((res) => {
        // Update the response state with the server's response
        setResponse(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="grid" style={{ gridTemplateColumns: "1fr 4fr" }}>
      <div className="bg-[#202123]">
        <SideSection />
      </div>
      <div className="w-full mx-auto bg-[#343541]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-4"
        >
          <div className="w-full h-screen gap-4 p-8">
            <div className="w-full mt-8">
              <div class="px-40 overflow-y-auto">
                <div className="flex items-center bg-[#343541] py-10 shadow-sm rounded-2xl">
                  <div className="p-1 rounded-full mr-2">
                    <img src={AILogo} className="w-9" alt="" />
                  </div>
                  <div>
                    <h1 className="text-base font-semibold text-gray-100">
                      How can I help you?
                    </h1>
                  </div>
                </div>
                <div className="flex items-center bg-[#343541] py-10 shadow-sm rounded-2xl mt-1">
                  <div className="px-4 py-2 rounded-full bg-[#1A8917] mr-2">
                    <h1 className="text-xl font-semibold text-white">
                      {firstWord}
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-base font-semibold text-gray-100">
                      Hello world!
                    </h1>
                  </div>
                </div>
                {/* <code class="!whitespace-pre">{response}</code> */}
              </div>
            </div>
            <div className="p-2 my-2 rounded-lg flex gap-4 absolute top-[100%] w-[50%] left-[35%]">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask me Anything"
                className="w-11/12 p-2 rounded-lg input input-bordered input-info"
              />
              <div className="flex items-center">
                <AiOutlineSend
                  title="Sent"
                  className="text-4xl text-[#1A8917] cursor-pointer"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AskMeAnything;
