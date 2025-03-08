import React from "react";

export default function Button(props) {
  return (
    <button className={props.className}>
      {props.iconLeft}
      <span>{props.content}</span>
      {props.iconRight}
    </button>
  );
}
