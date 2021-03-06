import React from "react";
import logo from "./logo.svg";
import "./App.css";
import htmlColors from "html-colors";
import MouseBoxRenderProps from "./components/MouseBoxRenderProps";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Random HTML color: **{htmlColors.random()}**</p>
        <p style={{ color: "#FFFACD" }}>
          Hex value of 'lemonchiffon': {htmlColors.hex("lemonchiffon")}
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
      <MouseBoxRenderProps />
    </div>
  );
}

export default App;
