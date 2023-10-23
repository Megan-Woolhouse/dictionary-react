import React, { useState } from "react";
import axios from "axios";
export default function Dictionary() {
  let [word, setWord] = useState("");

  function handleResponse(response) {
    console.log(response);
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
      <h1>Dictionary</h1>
      <form onSubmit={search}>
        <input type="Search" autoFocus={true} onChange={capture} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
