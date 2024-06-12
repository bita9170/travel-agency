import React from "react";
import Layout2 from "@/components/tiles/Layout2";
import { LocationDetails } from "@/lib/class/location/LocationDetails";
import {
  getLocationDetails,
  nearbySearchAttractions,
  nearbySearchGeos,
  nearbySearchHotels,
  nearbySearchRestaurants,
} from "@/controllers/tripadvisorController";

export const Attractions = async ({
  locationId,
  latLong,
}: {
  locationId: string;
  latLong: string;
}) => {
  const nearbyLocations = await nearbySearchAttractions(latLong);
  const locationsIds = nearbyLocations.data
    .map((location: any) => location.location_id)
    .filter((item: string) => item != locationId)
    .map(Number);

  return (
    <div className="grid md:grid-cols-4 gap-4">
      {(await getLocationDetails(locationsIds.slice(0, 4))).map(
        async (location: LocationDetails) => (
          <Layout2
            key={location.getLocationId()}
            image={await location.getImage()}
            ctaText={location.getName()}
            rating={location.getRatingImageUrl()}
            ctaLink={`/${location.getLocationId()}`}
          />
        )
      )}
    </div>
  );
};

export const Restaurants = async ({
  locationId,
  latLong,
}: {
  locationId: string;
  latLong: string;
}) => {
  const nearbyLocations = await nearbySearchRestaurants(latLong);
  const locationsIds = nearbyLocations.data
    .map((location: any) => location.location_id)
    .filter((item: string) => item != locationId)
    .map(Number);

  return (
    <div className="grid md:grid-cols-4 gap-4">
      {(await getLocationDetails(locationsIds.slice(0, 4))).map(
        async (location: LocationDetails) => (
          <Layout2
            key={location.getLocationId()}
            image={await location.getImage()}
            ctaText={location.getName()}
            rating={location.getRatingImageUrl()}
            ctaLink={`/${location.getLocationId()}`}
          />
        )
      )}
    </div>
  );
};

export const Hotels = async ({
  locationId,
  latLong,
}: {
  locationId: string;
  latLong: string;
}) => {
  const nearbyLocations = await nearbySearchHotels(latLong);
  const locationsIds = nearbyLocations.data
    .map((location: any) => location.location_id)
    .filter((item: string) => item != locationId)
    .map(Number);

  return (
    <div className="grid md:grid-cols-4 gap-4">
      {(await getLocationDetails(locationsIds.slice(0, 4))).map(
        async (location: LocationDetails) => (
          <Layout2
            key={location.getLocationId()}
            image={await location.getImage()}
            ctaText={location.getName()}
            rating={location.getRatingImageUrl()}
            ctaLink={`/${location.getLocationId()}`}
          />
        )
      )}
    </div>
  );
};

export const Geos = async ({
  locationId,
  latLong,
}: {
  locationId: string;
  latLong: string;
}) => {
  const nearbyLocations = await nearbySearchGeos(latLong);
  const locationsIds = nearbyLocations.data
    .map((location: any) => location.location_id)
    .filter((item: string) => item != locationId)
    .map(Number);

  return (
    <div className="grid md:grid-cols-4 gap-4">
      {(await getLocationDetails(locationsIds.slice(0, 4))).map(
        async (location: LocationDetails) => (
          <Layout2
            key={location.getLocationId()}
            image={await location.getImage()}
            ctaText={location.getName()}
            rating={location.getRatingImageUrl()}
            ctaLink={`/${location.getLocationId()}`}
          />
        )
      )}
    </div>
  );
};

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

export const SummerContent = () => {
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
