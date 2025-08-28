import { useState } from "react";
import React from "react";
import axios from "axios";

function App() {
  const [textInput, setTextInput] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [translatedText, setTranslatedText] = useState(""); // New state for translated text

  const handleTextTranslation = async () => {
    if (!textInput || !selectValue) {
      alert("Please enter text and select a language");
      return;
    }

    try {
      const options = {
        method: "POST",
        url: "https://google-translator9.p.rapidapi.com/v2",
        headers: {
          "x-rapidapi-key": "42b14111cbmshc9e82ed15ff1985p15fb93jsnda3be10269bc",
          "x-rapidapi-host": "google-translator9.p.rapidapi.com",
          "Content-Type": "application/json",
        },
        data: {
          q: textInput,
          source: "en",
          target: selectValue,
          format: "text",
        },
      };

      const response = await axios.request(options);
      // Set translated text
      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error(error);
      alert("Translation failed. Try again!");
    }
  };

  return (
    <div className="h-screen w-screen bg-slate-200 flex items-center justify-center">
      <div className="flex items-center justify-center flex-col gap-y-10 text-1xl">
        <h1 className="text-3xl font-bold text-zinc-700"> Vinay's Text Translator</h1>
        <div className="flex items-center justify-center flex-col gap-y-5">
          <textarea
            value={textInput}
            placeholder="Enter text here..."
            className="bg-white h-30 w-[500px] border border-slate-700 outline-none rounded-lg text-lg px-5 py-2"
            onChange={(e) => setTextInput(e.target.value)}
          />
          <textarea
            value={translatedText}
            placeholder="Translation will appear here..."
            readOnly
            className="bg-white h-30 w-[500px] border border-slate-700 outline-none rounded-lg text-lg px-5 py-2"
          />
        </div>
        <div>
          <label htmlFor="options">Convert Into: </label>
          <select
            name="value"
            className="bg-white px-2 rounded-lg border border-zinc-700 outline-none cursor-pointer"
            onChange={(e) => setSelectValue(e.target.value)}
          >
            <option value="">Select</option>
            <option value="hi">Hindi</option>
            <option value="te">Telugu</option>
          </select>
        </div>
        <button
          onClick={handleTextTranslation}
          className="bg-slate-700 text-slate-100 mx-auto w-[500px] py-2 rounded-lg"
        >
          Translate
        </button>
      </div>
    </div>
  );
}

export default App;
