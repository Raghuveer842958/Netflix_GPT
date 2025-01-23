import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath, movieId }) => {
  // console.log("Id is :",id);
  if (!posterPath) return null;
  return (
    // <Link to={"/movie/"+movieId}>
    //   <div className="w-36 md:w-48 pr-4">
    //     <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    //   </div>
    // </Link>
    // This is Responsive Version
    <Link to={"/movie/" + movieId}>
      <div className="w-28 sm:w-36 md:w-48 pr-4">
        <img
          alt="Movie Card"
          src={IMG_CDN_URL + posterPath}
          className="rounded-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </Link>
  );
};
export default MovieCard;
