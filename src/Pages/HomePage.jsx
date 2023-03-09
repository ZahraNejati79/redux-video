import { useEffect } from "react";
import Layout from "../Layout/Layout";
import MovieApi from "../common/apis/MovieApi";
import { APIKey } from "../common/apis/MovieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../features/Movies/movieSlice";
import MovieListing from "../components/MovieListing";
const HomePage = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
      ).catch((err) => {
        console.log("error", err);
      });
      response && dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);
  return (
    <Layout>
      <div>
        <MovieListing />
      </div>
    </Layout>
  );
};

export default HomePage;
