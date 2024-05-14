import React from "react";
import ImageComponent from "./ImageComponent";

function TravelersChoice() {
  return (
    <div className=" w-full">
      <div className="w-full relative bg-custom-cream py-12 mt-10">
        <div className="max-w-screen-xl mx-auto ">
          <div className="flex flex-col lg:flex-row items-start ">
            <div className="flex flex-col lg:flex-grow lg:mr-2 mb-2 lg:mb-0">
              <h1 className="font-semibold leading-snug font-sans text-left text-2xl lg:text-4xl mb-4">
                Travelers Choice
                <br />
                Awards Best of the
                <br />
                Best
              </h1>
              <p className="text-left mt-2 mb-6">
                Among our top 1% of places, stays,
                <br />
                eats, and experiences—decided by
                <br />
                you.
              </p>
              <button
                className="bg-black text-white text-xs px-4 py-2 rounded-full transition duration-200 flex items-center justify-center"
                style={{
                  width: "141px",
                  height: "43px",
                }}
              >
                See the winners
              </button>
            </div>

            <div
              className="relative flex mt-6 lg:mt-0 lg:flex-1 w-full lg:w-auto "
              style={{
                width: "100%",
                height: "300px",
              }}
            >
              <ImageComponent />
            </div>
            <p className="text-white bg-black bg-opacity-50 p-1 absolute bottom-0 right-0 mr-2 mb-2 hidden md:hidden">
              Trending in
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelersChoice;
