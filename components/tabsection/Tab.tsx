import React from "react";

type DestinationListProps = {
  destinations: string[];
  hidden: boolean;
};

const DestinationList: React.FC<DestinationListProps> = ({
  destinations,
  hidden,
}) => (
  <ul className={`list ${hidden ? "hidden md:block" : ""} text-xs`}>
    {destinations.map((destination, index) => (
      <li key={index}>{destination}</li>
    ))}
  </ul>
);

const Trending: React.FC = () => {
  const destinations = [
    "Nashville",
    "Charleston",
    "Sedona",
    "New Orleans",
    "Washington DC",
  ];

  return (
    <div className="md:block p-4 sm:py-10 md:py-1 mt-6 m-auto py-8 px-4 xl:px-0 max-w-screen-xl">
      <p className="text-base mt-4">Trending in Travel</p>

      <div className="flex gap-5 mt-2">
        <p className="underline text-sm">Spring Destinations</p>{" "}
        <p className="text-sm">Summer Destinations</p>
      </div>
      <div className="sm:grid md:flex gap-4 md:gap-56 justify-left mt-2">
        {destinations.map((destination, index) => (
          <DestinationList
            key={index}
            destinations={[destination]}
            hidden={index >= 3}
          />
        ))}
      </div>
    </div>
  );
};

export default Trending;
