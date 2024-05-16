import React from "react";

export const SpringContent = () => {
  return (
    <div className="grid xs:grid-cols-2 md:grid-cols-4 w-full ">
      {Array(4)
        .fill(null)
        .map((_, i) => (
          <ul className="text-sm leading-6" key={i}>
            <li>Nashville 2</li>
            <li>Charleston</li>
            <li>New Orleans</li>
            <li>Washington DC</li>
          </ul>
        ))}
    </div>
  );
};

export const SommerContent = () => {
  return (
    <div className="grid xs:grid-cols-2 md:grid-cols-4 w-full ">
      {Array(4)
        .fill(null)
        .map((_, i) => (
          <ul className="text-sm leading-6" key={i}>
            <li>Nashville 1</li>
            <li>Charleston</li>
            <li>New Orleans</li>
            <li>Washington DC</li>
          </ul>
        ))}
    </div>
  );
};
