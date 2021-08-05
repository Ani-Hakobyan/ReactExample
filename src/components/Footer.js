import React, { useContext } from "react";
import Context from "../Context/Contex";

export default function Footer() {
  const a = useContext(Context);
  console.log(a, "footer");
  return (
    <div>
      <input type="file" accept=".png,.jpg,.jpeg" />
      <button onClick={a.newExamp}>change</button>
    </div>
  );
}
