import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AiOutlineSend } from "react-icons/ai";
import { useLoaderData, useNavigate } from 'react-router-dom';
import { APIContext } from '../../../contexts/APIProvider';
import SideSection from '../SideSection/SideSection';

const HistoryAns = () => {
    const { singleUsers } = useContext(APIContext);
    const data = useLoaderData();
    console.log(data)
    const navigate = useNavigate();
    const userEmail = singleUsers.email
  const {data: questionAns = [], } = useQuery({
    queryKey: ["questionAns", userEmail],
    queryFn: async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/apiAns?email=${userEmail}`);
      const data = await res.json();
      return data
    },
  });
    const handleNewChat = () =>{
        // setPrompt("")
        // setResponse('')
        navigate("/hexa-ai")
        
      }
    return (
        <div className="grid h-screen" style={{ gridTemplateColumns: "1fr 4fr" }}>
      <div className="bg-[#202123]">
        <SideSection handleNewChat={handleNewChat} questionAns={questionAns} />
      </div>
      <div className="w-full mx-auto bg-[#343541]">
        <form
         
          className="flex flex-col justify-center items-center gap-4"
        >
          <div className="w-full  gap-4 p-8">
            <div className="w-full mt-8">
              {/* <HistoryAns></HistoryAns> */}
              <div className="px-40 overflow-y-auto">
                <div className="flex justify-center">
                  <h1 className="text-white text-4xl font-mono">Ask me Anything</h1>
                </div>
              <div className="px-4 pt-5">
                <h3 className="text-white text-2xl font-mono">
                  {data.question}
                </h3>
              </div>

                <div className="bg-[#343541]">
                  <p className="text-white max-w-screen-md p-4 whitespace-pre-line">
                {data.answer}
                  </p>
                </div>
                {/* <code className="!whitespace-pre max-w-xl">{response}</code> */}
              </div>
            </div>
            <div className="p-16 mx-10 my-2 rounded-lg flex gap-4 ">
              <input
                type="text"
                // value={prompt}
                // onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask me Anything"
                className="w-11/12 p-2 rounded-lg input input-bordered input-info"
              />
              <div className="flex items-center">
                <button type="submit">
                  <AiOutlineSend
                    type="submit"
                    title="Sent"
                    className="text-4xl text-green-550 cursor-pointer"
                  />
                </button>
                {/* <AiOutlineSend
                  type="submit"
                  title="Sent"
                  className="text-4xl text-green-550 cursor-pointer"
                /> */}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
};

export default HistoryAns;