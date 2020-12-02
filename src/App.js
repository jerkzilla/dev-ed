import React from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  const name = "jj";
  const message = "this tweet";

  return (
    <div>
      <CreateTweet />
      <TweetList name={name} message={message} />
    </div>
  );
}

export default App;
