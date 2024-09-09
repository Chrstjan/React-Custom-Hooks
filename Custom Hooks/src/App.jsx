import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import "./App.scss";
import { useImages } from "./hooks/useImages";

function App() {
  const { data } = useFetch('https://dummyjson.com/recipes/1');
  const { images } = useImages();

  useEffect(() => {
    {images ? console.log(images) : null}
  }, []);

  return (
    <>
      {data ? <h2>{data.name}</h2> : null}
      {/* {images ?  : <p>lol</p>} */}
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
