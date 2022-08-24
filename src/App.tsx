import React, { useEffect } from "react";
import HomePage from "./app/containers/Homepage";
import { Routes, Route, useParams } from "react-router-dom";

function App() {
  return (
     <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        <Route path="/anime/:id" element={<AnimeDetailPage />} />
      </Route>
    </Routes> 
  );
}

export default App;

const AnimeDetailPage = () => {
  let {id} = useParams();
  useEffect(() => {
    // getAnime by id and after take details set data
  }, [])
  return (
    <h1>{id}</h1>
  )
}