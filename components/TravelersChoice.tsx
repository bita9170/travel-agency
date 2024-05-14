import React from "react";

function TravelersChoice() {
  return (
    <div>
      <div className="top-section card p-5 flex flex-col md:flex-row items-center">
        <div className="text-container">
          <h1 className="header mb-3">
            Travelers Choice
            <br />
            Awards Best of the <br />
            Best
          </h1>
          <p className="text mb-4">
            Among our top 1% of places, stays, eats, and experiences—decided by
            you.
          </p>
          <button className="btn mb-5">See the winners</button>
        </div>
        <div className="image "></div>
      </div>
    </div>
  );
}

export default TravelersChoice;
