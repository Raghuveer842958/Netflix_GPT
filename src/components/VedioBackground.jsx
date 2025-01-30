import React from "react";
// import { API_OPTIONS } from "../utils/constant";
import {  useSelector } from "react-redux";
// import { addTrailerVedio } from "../utils/movieSlice";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const VedioBackground = ({ movieId }) => {
  useGetMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movie.trailerVedio);
  if (!trailer) return;

  return (
    <div className="w-full relative z-20">
      {/* YouTube Video Embed */}
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" + trailer?.key + "?autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VedioBackground;
