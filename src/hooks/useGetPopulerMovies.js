import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import {  addPopulerMovies } from "../utils/movieSlice";

const useGetPopulerMovies = () => {
  const dispatch = useDispatch();

  const getNowPopulerMovies = async () => {
    try {
      const movieResponse = await fetch(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        API_OPTIONS
      );
      const movieList = await movieResponse.json();
      console.log("Movie Response is :", movieList);
      //   fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      // console.log("movie result is :",movieList);
      //   dispatch(addNowPlayingMovies(movieList?.results));
      dispatch(addPopulerMovies(movieList?.results));
    } catch (error) {
      // console.log("Error in Fetching Now Playing Movies :", error);
    }
  };

  useEffect(() => {
    getNowPopulerMovies();
  }, []);
};

export default useGetPopulerMovies;
