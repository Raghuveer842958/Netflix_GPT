import React from "react";

const VedioTitle = ({ title, overview }) => {
  return (
    // <div className="absolute w-full h-full bg-gradient-to-r from-black text-white flex flex-col justify-center z-30 px-4 sm:px-6 md:px-12">
    //   {/* Title */}
    //   <h1 className="text-sm sm:text-lg md:text-4xl lg:text-5xl text-gray-300 font-bold leading-snug sm:leading-tight">
    //     {title}
    //   </h1>

    //   {/* Overview */}
    //   <p className="text-base lg:text-lg w-full md:w-2/3 lg:w-1/2 mt-4 md:mt-8 lg:mt-12">
    //     {overview}
    //   </p>

    //   {/* Buttons */}
    //   <div className="flex justify-start md:justify-start space-x-4 mt-6 md:mt-10 lg:mt-12">
    //     <button className="bg-white py-2 px-6 sm:px-8 md:px-12 rounded-lg text-black font-medium text-xs sm:text-sm md:text-base">
    //       Play
    //     </button>
    //     <button className="bg-gray-500 bg-opacity-50 py-2 px-6 sm:px-8 md:px-12 rounded-lg text-white font-medium text-xs sm:text-sm md:text-base">
    //       More Info
    //     </button>
    //   </div>
    // </div>

    <div className=" absolute w-full h-full bg-gradient-to-r from-black text-white flex flex-col justify-center z-30 px-4 sm:px-6 md:px-12">
      {/* Title */}
      <h1 className="hidden sm:block text-2xl sm:text-base md:text-4xl lg:text-5xl text-gray-300 font-bold leading-snug sm:leading-tight sm:w-3/4 sm:max-w-xs">
        {title}
      </h1>

      {/* Overview */}
      <p className="hidden sm:block text-base sm:text-sm lg:text-lg w-full md:w-2/3 lg:w-1/2 mt-4 sm:mt-6 md:mt-8 lg:mt-12">
        {overview}
      </p>

      {/* Buttons */}
      <div className="hidden sm:block flex sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6 md:mt-10 lg:mt-12">
        <button className="bg-white py-1 px-4 sm:py-2 sm:px-6 md:px-12 rounded-lg text-black font-medium text-xs sm:text-sm md:text-base">
          Play
        </button>

        <button className="bg-gray-500 bg-opacity-50  py-1 px-4 sm:py-2 sm:px-6 md:px-12 rounded-lg text-white font-medium text-xs sm:text-sm md:text-base">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VedioTitle;
