import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <Dictionary />
      </div>
      <footer>
        {" "}
        <small>
          Coded by Megan Woolhouse.{" "}
          <a href="https://github.com/Megan-Woolhouse/dictionary-react">
            Open-sourced on Github
          </a>
        </small>
      </footer>
    </div>
  );
}
