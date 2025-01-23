import { Link, useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { makeGptSearchViewFalse, toggleGptSearchView } from "../utils/gptSlice";

const MovieCard = ({ posterPath, movieId }) => {
  // console.log("Id is :",id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    try {
      dispatch(makeGptSearchViewFalse());
      navigate("/movie/" + movieId);
    } catch (error) {
      console.log("Error in Movie card component :", error);
    }
  };
  if (!posterPath) return null;
  return (
    // <Link to={"/movie/"+movieId}>
    //   <div className="w-36 md:w-48 pr-4">
    //     <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    //   </div>
    // </Link>

    <div onClick={handleClick}>
      <div className="w-28 sm:w-36 md:w-48 pr-4 cursor-pointer">
        <img
          alt="Movie Card"
          src={IMG_CDN_URL + posterPath}
          className="rounded-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};
export default MovieCard;
