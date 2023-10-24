import React from "react";

export default function Phonetic(props) {
  return (
    <div>
      <a href={props.phonetic.audio} target="_blank">
        Listen here
      </a>
      <br />
      <div className="opacity-75">{props.phonetic.text}</div>
    </div>
  );
}
