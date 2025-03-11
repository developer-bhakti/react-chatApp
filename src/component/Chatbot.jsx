import React, { useState } from "react";

const Chatbot = () => {
  const [inputData, setInputData] = useState("");

  const sendingData = {
    contents: [
      {
        parts: [{ text: ""}],
      },
    ],
  };

  // AIzaSyAKw1ubVv54QZ4hARyQLItJ73tGE_EnCTo

  const handleInput = (event) => {
    console.log(event.target.value);
    const inputValue = event.target.value
    setInputData(event.target.value);
    sendingData.contents[0].parts[0].text=inputValue
  };

  return (
    <div>
      <div>
        <p>qns</p>
        <p>ans</p>
      </div>

      <div>
        <input
          type="text"
          placeholder="Ask With Your Ai Friend"
          onChange={handleInput}
        />
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Chatbot;
