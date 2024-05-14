import React from "react";

const TravelersChoice: React.FC = () => {
  return (
    <div className=" w-full grid md:grid-cols-2 items-center">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-4">
          Travelers' Choice <br /> Awards Best of <br />
          the Best
        </h2>
        <p className="mb-4">
          Among our top 1% of places, stays, <br />
          eats, and experiences - decided by you.
        </p>
        <button className="bg-black text-white py-2 px-4 rounded">
          See the winners
        </button>
      </div>

      <div className="md:justify-end transition-all duration-500">
        <img
          src="/hero2.png"
          alt="Description of the image"
          className="block  md:max-h-full w-full md:w-auto rounded-xl mr-4"
        />
      </div>
    </div>
  );
};

export default TravelersChoice;
