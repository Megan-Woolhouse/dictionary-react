import React from "react";

export default function Phonetic(props) {
  return (
    <div>
      <a href={props.phonetic.audio} target="_blank">
        Listen here
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
