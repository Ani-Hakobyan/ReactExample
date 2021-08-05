import React, { useContext } from "react";
import Context from "../Context/Contex";

export default function Example(props) {
  const p = useContext(Context);
  console.log(p, "examp");
  return (
    <div>
      <h1>{p.examp}</h1>
    </div>
  );
}
