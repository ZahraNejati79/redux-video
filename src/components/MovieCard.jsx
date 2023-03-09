import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const MovieCard = ({ movie }) => {
  return (
    <>
      <Grid item xs={6} md={4} lg={2}>
        <Card sx={{ maxWidth: 345 }} className="bg-secondary h-full">
          <CardActionArea>
            <CardMedia>
              <img src={movie.Poster} alt="poster" />
            </CardMedia>
            <CardContent className="text-white">
              <h7>{movie.Title}</h7>
              <div>{movie.Year}</div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </>
  );
};

export default MovieCard;
