import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../features/Movies/movieSlice";
import MovieCard from "./MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies = "";
  let renderShows = "";

  console.log("shows", shows);

  renderMovies =
    movies.Response === "True" ? (
      <Grid container spacing={2} className="container px-1 md:px-8">
        {movies.Search.map((movie, index) => (
          <MovieCard movie={movie} />
        ))}
      </Grid>
    ) : (
      <div className="text-white">{movies.Error}</div>
    );

  renderShows =
    shows.Response === "True" ? (
      <Grid container spacing={2} className="container px-1 md:px-8">
        {shows.Search.map((shows, index) => (
          <MovieCard movie={shows} />
        ))}
      </Grid>
    ) : (
      <div className="text-white">{shows.Error}</div>
    );
  return (
    <div>
      <h1 className="pl-8 mb-6 font-bold text-fontSecondary">Movies</h1>
      <section>{renderMovies}</section>
      <h1 className="pl-8 my-6 font-bold text-fontSecondary">Shows</h1>
      <section>{renderShows}</section>
    </div>
  );
};

export default MovieListing;
