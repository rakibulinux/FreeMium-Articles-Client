import React, { useState } from "react";
import { useSpeechSynthesis, useSpeechRecognition } from "react-speech-kit";

function ListenButton({ articleTitle, articleDetails }) {
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();
  const listens = articleTitle + articleDetails;
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });
  return (
    <div>
      <button
        onClick={() => speak({ text: listens })}
        className="text-green-800 p-2 rounded-lg flex items-center"
      >
        <svg
          className="h-5 w-5 mr-1 "
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm2.8 8.51l-3.69 2.46a.62.62 0 0 1-.96-.5V5.53a.62.62 0 0 1 .96-.51l3.7 2.46a.62.62 0 0 1 0 1.02z"
            fill="#1D7B1A"
          ></path>
        </svg>
        <p className="font-medium text-sm">Listen</p>
      </button>
      <button onMouseDown={listen} onMouseUp={stop}>
        🎤
      </button>
      {listening && <div>Go ahead I'm listening</div>}
    </div>
  );
}

export default ListenButton;
