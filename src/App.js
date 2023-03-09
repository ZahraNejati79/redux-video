import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import MovieCardPage from "./Pages/MovieCardPage";
import MovieDetailPage from "./Pages/MovieDetailPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:imdbID" element={<MovieDetailPage />} />
          <Route path="/card" element={<MovieCardPage />} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
