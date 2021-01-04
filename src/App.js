import React from "react";
import "./App.css";
import { hot } from 'react-hot-loader/root'
import { Hello } from "./Hello";
import { Navbar } from "./Navbar";
import Logo from './images/logo.png';
import "tailwindcss/tailwind.css"

function App() {
  return (
    <div>
      <Navbar />
      <h1 className="title">Hello, World</h1>
      <Hello name="John" />
      <img src={Logo} alt="Logo" width="100" />
      <p className="text-with-bg">I have a background image</p>
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
      >
        Find Friends
      </button>
    </div>
  );
}

export default hot(App);