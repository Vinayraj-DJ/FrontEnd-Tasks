import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(1); // Input value for string length
  const [randomString, setRandomString] = useState(""); // Stores generated string

  // Function to generate random string of given length
  const generateString = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      // Pick random character and add to result
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setRandomString(result); // Update state with generated string
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Random String Generator</h1>

      {/* Input for string length */}
      <input
        type="number"
        min="1"
        value={length}
        onChange={(e) => setLength(Number(e.target.value))} // Update length state
        style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}
      />

      {/* Button to generate string */}
      <button
        onClick={generateString}
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
      >
        Submit
      </button>

      {/* Display generated string */}
      <div style={{ marginTop: "20px" }}>
        {randomString && (
          <h2 style={{ color: "silver" }}>Generated: {randomString}</h2>
        )}
      </div>
    </div>
  );
}

export default App;
