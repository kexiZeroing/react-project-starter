import React from "react";
import "./App.css";
import { hot } from 'react-hot-loader/root'
import { Hello } from "./Hello";

function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <Hello name="John" />
    </div>
  );
}

export default hot(App);