import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import useGetNowPlayingMovies from "../hooks/useGetNowPlayingMovies";
import useFetchMovieById from "../hooks/useFetchMovieById";
import { useParams } from "react-router-dom";
import useValidateUser from "../hooks/useValidateUser";
import Header from "./Header";
import SearchGpt from "./SearchGpt";

const Pending = () => {
  useValidateUser();
  const param = useParams();
  const { id: movieId } = param;
  useGetNowPlayingMovies();
  useFetchMovieById(movieId);
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);
  const currMovie = useSelector((store) => store.recomendedMovies.playingMovie);
  const isSearchView = useSelector((store) => store.gpt.showGptSearch);

  if (!movies || !currMovie) return;
  return (
    <div className="relative h-screen w-screen">
      <Header />
      {isSearchView ? (
        <SearchGpt />
      ) : (
        <>
          <div className="">
            <div className="border border-black w-full w-[100%] h-[550px]">
              <iframe
                className="w-[100%] h-[100%]"
                src={
                  "https://www.youtube.com/embed/" +
                  currMovie?.key +
                  "?autoplay=1&mute=1"
                }
                // +"?&autoplay=1&mute=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                // referrerpolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>
          <div className="bg-black">
            <div className=" mt-0  pl-4 md:pl-12 relative z-20">
              <MovieList title={"Now Playing"} movie={movies} />
              <MovieList title={"Trending"} movie={movies} />
              <MovieList title={"Upcoming Movies"} movie={movies} />
              <MovieList title={"Horror"} movie={movies} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Pending;
