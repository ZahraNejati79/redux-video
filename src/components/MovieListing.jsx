import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { getAllMovies } from "../features/Movies/movieSlice";
import MovieCard from "./MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log(movies);
  return (
    <div className="flex items-center  justify-center">
      {movies.Response ? (
        <Grid container spacing={2} className="container px-1 md:px-8">
          {movies.Search.map((movie, index) => (
            <MovieCard movie={movie} />
          ))}
        </Grid>
      ) : (
        <div className="text-white">{movies.Error}</div>
      )}
    </div>
  );
};

export default MovieListing;
