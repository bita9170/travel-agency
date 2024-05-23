import React from "react";
import Layout2 from "@/components/tiles/Layout2";
import { LocationDetails } from "@/lib/class/location/LocationDetails";
import {
  getLocationDetailsByIds,
} from "@/lib/data/location";

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

export const RecommendedElement = ():JSX.Element => {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {getLocationDetailsByIds([188151, 188757, 188679, 188709]).map(
        (location: LocationDetails) => (
          <Layout2
            key={location.getLocationId()}
            image={location.getPhotos()[0].getLarge().url}
            ctaText={location.getName()}
            rating={location.getRatingImageUrl()}
            ctaLink="#"
          />
        )
      )}
    </div>
  );
};

export const RecommendedElement2 = ():JSX.Element => {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {getLocationDetailsByIds([188679, 188757]).map(
        (location: LocationDetails) => (
          <Layout2
            key={location.getLocationId()}
            image={location.getPhotos()[0].getLarge().url}
            ctaText={location.getName()}
            rating={location.getRatingImageUrl()}
            ctaLink="#"
          />
        )
      )}
    </div>
  );
};