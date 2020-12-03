import React, { useState } from "react";
import TweetList from "./components/TweetList";
import CreateTweet from "./components/CreateTweet";

function App() {
  const [name, setName] = useState("jj");
  const message = "hey girl";
  return (
    <div>
      <CreateTweet />
      <TweetList name={name} message={message} />
    </div>
  );
}

export default App;
