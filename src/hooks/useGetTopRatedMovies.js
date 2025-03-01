import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTopRatedMovies } from "../utils/movieSlice";

const useGetTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    try {
      const movieResponse = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
        API_OPTIONS
      );
    //   fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
      const movieList = await movieResponse.json();
      console.log("Movie Response is :", movieList);
      // console.log("movie result is :",movieList);
      //   dispatch(addNowPlayingMovies(movieList?.results));
      dispatch(addTopRatedMovies(movieList?.results));
    } catch (error) {
      // console.log("Error in Fetching Now Playing Movies :", error);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useGetTopRatedMovies;