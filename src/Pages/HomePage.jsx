import { useEffect } from "react";
import Layout from "../Layout/Layout";
import MovieApi from "../common/apis/MovieApi";
import { APIKey } from "../common/apis/MovieApiKey";
const HomePage = () => {
  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
      ).catch((err) => {
        console.log("error", err);
      });
      console.log("the response from api", response);
    };
    fetchMovies();
  }, []);
  return (
    <Layout>
      <div>home</div>
    </Layout>
  );
};

export default HomePage;
