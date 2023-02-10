import React, { useState } from "react";
import axios from "axios";

const AskMeAnything = () => {
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
  console.log(response);
  return (
    <div className="w-11/12 mx-auto my-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center gap-4"
      >
        {/* <input
          className="input input-bordered input-info w-full"
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask me Anything"
        /> */}

        <div className="w-full h-screen bg-gray-300 gap-4 p-8">
          <div className="w-full mt-8">
            <div class="p-4 overflow-y-auto">
              <code class="!whitespace-pre">{response}</code>
            </div>
          </div>
          <div className="p-2 my-2 rounded-lg flex gap-4">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ask me Anything"
              className="w-11/12 p-2 rounded-lg input input-bordered input-info"
            />
            <button
              className="w-1/12 py-2 px-4 bg-black-250 rounded-full text-white"
              type="submit"
            >
              Ask me
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AskMeAnything;
