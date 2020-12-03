import React, { useState } from "react";

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
    setTweets([...tweets, textInput]);
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
