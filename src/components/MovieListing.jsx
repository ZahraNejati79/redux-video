import { useSelector } from "react-redux";
import { getAllMovies } from "../features/Movies/movieSlice";
import MovieCard from "./MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log(movies);
  return (
    <div className="">
      {movies.Response ? (
        <div className="text-white">
          {movies.Search.map((movie, index) => (
            <div key={index}>
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-white">{movies.Error}</div>
      )}
    </div>
  );
};

export default MovieListing;
