import { EventNote, QueryBuilder, Star, ThumbUp } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Grid } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieOrShowDetail,
  getSelectMovieOrShow,
} from "../features/Movies/movieSlice";
import Layout from "../Layout/Layout";

const MovieDetailPage = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  console.log(imdbID);
  const selectMovieOrShow = useSelector(getSelectMovieOrShow);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
  }, [dispatch, imdbID]);

  return (
    <Layout>
      <div className="container">
        <section className="flex items-center justify-center">
          <Card className="p-8 bg-primary">
            <Grid container>
              <Grid item lg={8}>
                <CardContent className="flex flex-col text-fontPrimary ">
                  <h1 className="text-3xl mb-4">{selectMovieOrShow.Title}</h1>

                  <CardMedia
                    className=" lg:hidden mb-10"
                    sx={{ height: 400, width: 300 }}
                  >
                    <img
                      className="w-full h-full"
                      src={selectMovieOrShow.Poster}
                      alt={selectMovieOrShow.Title}
                    />
                  </CardMedia>

                  <div className="text-fontSecondary ">
                    <span className="mr-4">
                      IMDB Raiting
                      <Star className="text-amber-500 text-lg" />
                      {" : "}
                      {selectMovieOrShow.imdbRating}
                    </span>
                    <span className="mr-4">
                      IMDB Votes
                      <ThumbUp className="text-fontPrimary text-lg" />
                      {" : "}
                      {selectMovieOrShow.imdbVotes}
                    </span>
                    <span className="mr-4">
                      Runtime
                      <QueryBuilder className="text-fontPrimary text-lg" />
                      {" : "}
                      {selectMovieOrShow.Runtime}
                    </span>
                    <span className="mr-4">
                      Year
                      <EventNote className="text-fontPrimary text-lg" />
                      {" : "}
                      {selectMovieOrShow.Year}
                    </span>
                  </div>
                  <div>{selectMovieOrShow.Plot}</div>

                  <div className="flex flex-col gap-y-4">
                    <div>
                      <span>Director </span>
                      <span className="px-4 w-[100px] text-fontSecondary">
                        {selectMovieOrShow.Director}
                      </span>
                    </div>
                    <div>
                      <span>Stars</span>
                      <span className="px-4 w-[100px] text-fontSecondary">
                        {selectMovieOrShow.Actors}
                      </span>
                    </div>
                    <div>
                      <span>Generes </span>
                      <span className="px-4 w-[100px] text-fontSecondary">
                        {selectMovieOrShow.Genre}
                      </span>
                    </div>
                    <div>
                      <span>Languages </span>
                      <span className="px-4 w-[100px] text-fontSecondary">
                        {selectMovieOrShow.Language}
                      </span>
                    </div>
                    <div>
                      <span>Awards </span>
                      <span className="px-4 w-[100px] text-fontSecondary">
                        {selectMovieOrShow.Awards}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Grid>
              <Grid item lg={4}>
                <CardMedia
                  className="hidden lg:flex"
                  sx={{ height: 400, width: 300 }}
                >
                  <img
                    className="w-full h-full"
                    src={selectMovieOrShow.Poster}
                    alt={selectMovieOrShow.Title}
                  />
                </CardMedia>
              </Grid>
            </Grid>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default MovieDetailPage;
