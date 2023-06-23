import React from "react";
import ReactDOM from "react-dom";

const name = "Aakarssh";
const lastName = "kumar";

const number = "69";

ReactDOM.render(
  <div>
    <h1>Hello {name + " " + lastName}!</h1>
    <p>My lucky number is {number}</p>
  </div>,
  document.getElementById("root")
);
// to use or call  java script code you have to give {} Braces or curley brackets
// note
// {} in braces you only elegible to write js Expression
// but we can't able to write js statements.
