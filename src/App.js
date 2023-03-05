import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import MovieCardPage from "./Pages/MovieCardPage";
import MovieDetailPage from "./Pages/MovieDetailPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:omdbID" element={<MovieDetailPage />} />
        <Route path="/card" element={<MovieCardPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
