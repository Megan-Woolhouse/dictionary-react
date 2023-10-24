import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function capture(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        <h1>Dictionary</h1>
        <div className="form">
          <form onSubmit={search}>
            <input
              type="Search"
              autoFocus={true}
              onChange={capture}
              className="search"
              placeholder="Search for a word to find the definition"
            />
            <input type="submit" value="Search" className="submit" />
          </form>
        </div>
      </section>
      <Results results={results} />
    </div>
  );
}
