import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("React App");
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("jewelery");

  useEffect(() => {
    const axiosData = async () => {
      const result = await axios(
        `https://fakestoreapi.com/products/category/${category}`
      );

      setData(result.data);
    };
    axiosData();
  }, [category]);

  return (
    <div className="App">
      <button onClick={() => setCategory("electronics")}>electronics</button>
      <button onClick={() => setCategory("men's clothing")}>
        men's clothing
      </button>
      <button onClick={() => setCategory("women's clothing")}>
        women's clothing
      </button>
      <input type="file" />
      <h1>{title}</h1>
      {data.map((item) => {
        return <img src={item.image} style={{ width: "150px" }} />;
      })}
    </div>
  );
}

export default App;
