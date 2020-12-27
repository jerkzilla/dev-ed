import React, { useEffect } from "react";
import styled from "styled-components";
// import "../styles/Tweet.scss";

export default function Tweet({ name, tweet, tweets, setTweets }) {
  const deleteTweet = () => {
    setTweets(tweets.filter((state) => state.id !== tweet.id));
  };

  return (
    <TweetStyle>
      <h2>{name}</h2>
      <h3>{tweet.message}</h3>
      <button onClick={deleteTweet}>delete</button>
      <button>like</button>
    </TweetStyle>
  );
}

const TweetStyle = styled.div`
  background-color: "blue"
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
