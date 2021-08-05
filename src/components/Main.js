import React from "react";
import Example from "./Example";

export default function Main(props) {
  return (
    <div>
      <img src={props.image} style={{ width: "150px" }} />
      <Example />
    </div>
  );
}
