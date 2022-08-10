import React from "react";
import { render } from "react-dom";
import Login from "./Login";
import "./index.css";

function App() {
  return (
    <>
      <Login />
    </>
  );
}

render(<App />, document.querySelector("#root"));
