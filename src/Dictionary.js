import React, { useState } from "react";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function search(event) {
    event.preventDefault();
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
