import React from "react";
import "./App.css";
import { hot } from 'react-hot-loader/root'
import { Hello } from "./Hello";
import Logo from './images/logo.png';

function App() {
  return (
    <div>
      <h1 className="title">Hello, World</h1>
      <Hello name="John" />
      <img src={Logo} alt="Logo" width="100" />
      <p className="text-with-bg">I have a background image</p>
    </div>
  );
}

export default hot(App);