import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <>
      <Grid item xs={6} md={4} lg={2}>
        <Link to={`/movie/${movie.imdbID}`}>
          <Card
            sx={{ maxWidth: 345 }}
            className="bg-secondary hover:bg-opacity-50 transition ease-out delay-150  hover:-translate-y-1 hover:scale-105 h-full hover:transition-all "
          >
            <CardActionArea>
              <CardMedia>
                <img src={movie.Poster} alt="poster" />
              </CardMedia>
              <CardContent className="text-fontPrimary">
                <h7>{movie.Title}</h7>
                <div>{movie.Year}</div>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    </>
  );
};

export default MovieCard;
