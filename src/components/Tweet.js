import React from "react";

export default function Tweet({ name, tweet, tweets, setTweets }) {
  const deleteTweet = () => {
    setTweets(tweets.filter((t) => t !== tweet));
  };

  return (
    <div className="tweet">
      <h2>{name}</h2>
      <h3>{tweet}</h3>
      <button onClick={deleteTweet}>delete</button>
      <button>like</button>
    </div>
  );
}
