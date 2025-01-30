import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addUpcomingMovies } from "../utils/movieSlice";

const useGetUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    try {
      const movieResponse = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        API_OPTIONS
      );
      const movieList = await movieResponse.json();
      console.log("Movie Response is :", movieList);
    //   fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
      // console.log("movie result is :",movieList);
      //   dispatch(addNowPlayingMovies(movieList?.results));
      dispatch(addUpcomingMovies(movieList?.results));
    } catch (error) {
      // console.log("Error in Fetching Now Playing Movies :", error);
    }
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useGetUpcomingMovies;
