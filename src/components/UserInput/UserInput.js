import React from "react";
import "./UserInput.css";

const userInput = (props) => {
  return (
    <input
      className="UserInput"
      onChange={props.changed}
      value={props.defaultUsername}
      placeholder="Type your username here"
    />
  );
};

export default userInput;
