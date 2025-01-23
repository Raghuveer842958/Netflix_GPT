import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVedio } from "../utils/movieSlice";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const VedioBackground = ({ movieId }) => {
  useGetMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movie.trailerVedio);
  if (!trailer) return;

  return (
    // <div className="w-screen z-20 sm:h-screen">
    //   {/* <iframe
    //     className="w-screen aspect-video sm:h-[60%]"
    //     src={
    //       "https://www.youtube.com/embed/" +
    //       trailer?.key +
    //       "?&autoplay=1&mute=1"
    //     }
    //     // +"?&autoplay=1&mute=1"
    //     title="YouTube video player"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //     // referrerpolicy="strict-origin-when-cross-origin"
    //   ></iframe> */}

    //   {/* <iframe
    //     className="w-screen h-[50vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] aspect-video" // Adjusted aspect ratios for small and medium devices
    //     src={
    //       "https://www.youtube.com/embed/" +
    //       trailer?.key +
    //       "?&autoplay=1&mute=1"
    //     }
    //     title="YouTube video player"
    //     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //   ></iframe> */}
    // </div>

    // Resonsive Version
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
