import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movie?.nowPlayingMovies
  );
  const populerMovies = useSelector((store) => store.movie?.populerMovies);
  const topRatedMovies = useSelector((store) => store.movie?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movie?.upcomingMovies);
  if (!nowPlayingMovies || !populerMovies || !topRatedMovies || !upcomingMovies)
    return;
  return (

    <div className="bg-black">
      <div className="mt-0  pl-4 md:pl-12 relative z-20">
        <MovieList title={"Now Playing"} movie={nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movie={populerMovies} />
        <MovieList title={"Top Rated Movies"} movie={topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movie={upcomingMovies} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
