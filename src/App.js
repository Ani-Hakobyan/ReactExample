import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Main from "./components/Main";
import axios from "axios";
import Context from "./Context/Contex";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Upload } from "./components/Upload";

function App() {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("React App");
  const [arr, setArr] = useState(["react, js", "angular"]);
  const ref = useRef(0);
  const [examp, setExamp] = useState("Example");
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("jewelery");
  console.log(ref);
  useEffect(() => {
    const axiosData = async () => {
      const result = await axios(
        `https://fakestoreapi.com/products/category/${category}`
      );

      setData(result.data);
    };
    axiosData();
  }, [category]);

  function newExamp() {
    setExamp("newTitle");
  }

  const b = {
    examp,
    newExamp,
  };
  const c = {
    arr,
  };
  useEffect(() => {
    ref.current = ref.current + 1;
  }, []);

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

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
      <h1>{count}</h1>
      <h2>{ref.current}</h2>
      <button></button>
      <Context.Provider value={c}>
        <Header />
      </Context.Provider>
      <Context.Provider value={b}>
        {data.map((item) => {
          return <Main {...item} />;
        })}
        <Footer />
      </Context.Provider>
      <Upload images={images} onChange={onChange} />
    </div>
  );
}

export default App;
