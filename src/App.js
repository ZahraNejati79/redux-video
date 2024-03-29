import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import MovieDetailPage from "./Pages/MovieDetailPage";
import MoviePlaylist from "./Pages/MoviePlaylist";
import NotFoundPage from "./Pages/NotFoundPage";
import SignupPage from "./Pages/SignupPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:imdbID" element={<MovieDetailPage />} />
          {/* <Route path="/playList" element={<MoviePlaylist />} /> */}
          <Route path="/signup" element={<SignupPage />} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
