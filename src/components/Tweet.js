import React from "react";

export default function Tweet({ name, message }) {
  return (
    <div className="tweet">
      <h2>{name}</h2>
      <h3>{message}</h3>
      <button>delete</button>
      <button>like</button>
    </div>
  );
}
