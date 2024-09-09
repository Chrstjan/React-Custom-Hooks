import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import { useImages } from "./hooks/useImages";
import { useTitle } from "./hooks/useTitle";
import "./App.scss";

function App() {
  const { data } = useFetch('https://dummyjson.com/recipes/1');
  const { images } = useImages();
  // const { pageTitle } = useTitle();

  useEffect(() => {
  }, []);

  return (
    <>
      {data ? <h2>{data.name}</h2> : null}
      {images.map((img, index) => {
        return (
          <>
            <img key={index} src={img} />
          </>
        )
      })}
    </>
  );
}

export default App;
