import { useEffect } from "react";
import Layout from "../Layout/Layout";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../features/Movies/movieSlice";
import MovieListing from "../components/MovieListing";
const HomePage = () => {
  const dispatch = useDispatch();
  const movieText = "harry";
  const showText = "friends";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);
  return (
    <Layout>
      <div className="flex items-center justify-center">
        <MovieListing />
      </div>
    </Layout>
  );
};

export default HomePage;
