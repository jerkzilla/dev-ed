import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreateTweet({
  tweets,
  setTweets,
  textInput,
  setTextInput,
}) {
  const userInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitTweetHandler = (e) => {
    e.preventDefault();
    setTweets([...tweets, { message: textInput, id: uuidv4() }]);
    setTextInput("");
  };

  return (
    <div>
      <form onSubmit={submitTweetHandler}>
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
