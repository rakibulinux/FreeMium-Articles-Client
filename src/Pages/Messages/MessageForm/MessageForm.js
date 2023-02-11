import React, { useState } from "react";
const MessageForm = ({ recipient, setRecipient }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sender: "Sender", recipient, message }),
      });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="p-2 border border-gray-400"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
      <button type="submit" className="p-2 border border-gray-400 ml-2">
        Send
      </button>
      <button
        type="button"
        className="p-2 border border-gray-400 ml-2"
        onClick={() => setRecipient("")}
      >
        Clear
      </button>
    </form>
  );
};

export default MessageForm;
