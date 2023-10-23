import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Dictionary />
      <footer>
        {" "}
        <small>
          Coded by Megan Woolhouse. Open-sourced on <a href="#">Github</a>
        </small>
      </footer>
    </div>
  );
}
