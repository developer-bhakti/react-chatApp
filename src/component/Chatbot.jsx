import axios from "axios";
import React, { useState } from "react";

const Chatbot = () => {
  const [inputData, setInputData] = useState("");
  const [responseData, setResponseData] = useState(""); // Store API response

  const url =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=";
  const API_KEY = "AIzaSyAKw1ubVv54QZ4hARyQLItJ73tGE_EnCTo";

  const getData = async () => {
    if (!inputData.trim()) {
      alert("Please enter a question!");
      return;
    }

    const sendingData = {
      contents: [
        {
          parts: [{ text: inputData }],
        },
      ],
    };

    try {
      const response = await axios.post(`${url}${API_KEY}`, sendingData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("Response:", response.data);
      setResponseData(JSON.stringify(response.data, null, 2)); // Store API response
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to fetch response. Check API key or input.");
    }
  };

  return (
    <div className="">
      <div className="">
        <p>Q: {inputData}</p>
        <p>A: {responseData || "Ask a question to see the response!"}</p>
      </div>

      <div className="">
        <input
          type="text"
          placeholder="Ask With Your AI Friend"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={getData}>Submit</button>
      </div>
    </div>
  );
};

export default Chatbot;
