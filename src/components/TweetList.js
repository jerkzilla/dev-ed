import React from "react";
import Tweet from "./Tweet";

export default function TweetList({ name, message }) {
  return (
    <div className="tweet-list">
      <Tweet name={name} message={message} />
      <Tweet name={name} message={message} />
      <Tweet name={name} message={message} />
    </div>
  );
}
