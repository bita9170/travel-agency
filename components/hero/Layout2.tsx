import React from "react";

function TravelersChoice() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 xl:px-0 py-8 mt-10 bg-white relative">
      {/* Gelbe Form nur auf kleinen Bildschirmen sichtbar */}
      <div className="absolute top-16 left-5 w-24 h-24 bg-yellow-400 rounded-full md:hidden"></div>
      {/* Grüne Form nur auf kleinen Bildschirmen sichtbar */}
      <div className="absolute bottom-5 right-5 w-32 h-32 bg-green-400 rounded-full md:hidden"></div>

      <div className="flex flex-col md:flex-row items-center p-5">
        <div className="flex flex-col mr-5 mb-5 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-semibold leading-snug font-sans mb-4 text-center md:text-left">
            Travelers' Choice
            <br />
            Awards Best of the
            <br />
            Best
          </h1>
          <p className="text-center md:text-left mt-4 md:mt-0 mb-6">
            Among our top 1% of places, stays,
            <br />
            eats, and experiences—decided by
            <br />
            you.
          </p>
          <button
            style={{ width: "111px", height: "33px" }}
            className="bg-black text-white px-4 py-2 rounded transition duration-200"
          >
            See the winners
          </button>
        </div>
        <div
          className="flex-1 w-full md:w-auto mt-6 md:mt-0 md:ml-5 h-64 md:h-96 bg-cover bg-center"
          style={{
            backgroundImage: `url('./images/hero2.png')`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* "Trending in" Tag nur auf kleinen Bildschirmen sichtbar */}
          <p className="text-white bg-black bg-opacity-50 p-1 absolute bottom-0 right-0 mr-2 mb-2 hidden md:hidden">
            Trending in
          </p>
        </div>
      </div>
    </div>
  );
}

export default TravelersChoice;
