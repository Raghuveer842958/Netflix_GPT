import MovieCard from "./MovieCart";

const MovieList = ({ title, movie }) => {
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-auto gap-4 scrollbar-hide">
        {movie?.map((data) => (
          <MovieCard
            movieId={data.id}
            key={data.id}
            posterPath={data.poster_path}
          />
        ))}
      </div>
    </div>
  );
};
export default MovieList;
