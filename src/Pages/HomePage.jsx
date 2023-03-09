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
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
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
