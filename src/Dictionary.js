import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "CxDMWTjru704c1CiyST14elWsMRtnxX2zKmSvrtFnAzfqwamXGDbcRoS";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;

    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
