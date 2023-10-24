import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        if (index < 3) {
          return (
            <div key={index}>
              <div>
                <div className="definition">
                  <strong>{index + 1}: </strong>
                  {definition.definition}
                </div>
                <div className="example">
                  <em>{definition.example}</em>
                </div>
                <Synonyms synonyms={definition.synonyms} />
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
