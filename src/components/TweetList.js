import React from "react";
import Tweet from "./Tweet";

export default function TweetList({ name, tweets, setTweets }) {
  return (
    <div className="tweet-list">
      {tweets.map((tweet) => (
        <Tweet
          setTweets={setTweets}
          name={name}
          tweet={tweet}
          tweets={tweets}
        />
      ))}
    </div>
  );
}
