import React, { useState } from "react";

export default function CreateTweet() {
  const [textInput, setTextInput] = useState("");

  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  return (
    <div>
      <form>
        <textarea
          value={textInput}
          onChange={userInputHandler}
          cols="50"
          rows="5"
        ></textarea>
        <button>submit</button>
      </form>
    </div>
  );
}
