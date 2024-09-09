import { useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import "./App.scss";

function App() {
  const { data } = useFetch('https://dummyjson.com/recipes/1');

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <>
      {data ? <h2>{data.name}</h2> : null}
    </>
  );
}

export default App;
