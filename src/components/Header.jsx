import React from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { makeGptSearchViewFalse, toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import {
  removeNowPlayingMovies,
  removeTrailerVedio,
} from "../utils/movieSlice";
import {
  removePlayingMMovie,
  removeSelectedMovie,
  removeTmdbMoviesMovie,
} from "../utils/recomendedMovieSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const isShowGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = async () => {
    // console.log("SignOut Handler Called");
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        dispatch(removeNowPlayingMovies());
        dispatch(removeTrailerVedio());
        dispatch(removePlayingMMovie());
        dispatch(removeTmdbMoviesMovie());
        dispatch(makeGptSearchViewFalse());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGptSearchClick = async () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (

    <div className="fixed w-full bg-gradient-to-b from-black z-40 flex justify-between items-center p-2">
      <img className="w-20 sm:w-40" src={LOGO} alt="logo" />
      <div className="flex items-center space-x-2 sm:space-x-4">
        {isShowGptSearch && (
          <select
            className="py-2 px-4 bg-white rounded-lg hidden sm:block"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}

        <button
          className="py-1.5 px-3 text-sm sm:py-2 sm:px-4 sm:text-base bg-purple-800 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {isShowGptSearch ? "Homepage" : "GPT Search"}
        </button>

        <button
          onClick={handleSignOut}
          className="py-1.5 px-3 text-sm sm:py-2 sm:px-4 sm:text-base bg-purple-800 text-white rounded-lg"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
