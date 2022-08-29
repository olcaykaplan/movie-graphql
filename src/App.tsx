import HomePage from "./app/containers/Homepage";
import { Routes, Route } from "react-router-dom";
import AnimeDetailPage from "./app/containers/AnimeDetailPage";

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

