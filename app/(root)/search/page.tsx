import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";
import Options from "@/components/header/Options";
import Layout2 from "@/components/tiles/Layout2";
import {
  searchAllLocations,
  searchHotels,
  searchRestaurants,
} from "@/controllers/tripadvisorController";
import { LocationDetails } from "@/lib/class/location";
import React from "react";

async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const type =
    typeof searchParams.page === "string" ? searchParams.page : undefined;

  const query =
    typeof searchParams.query === "string" ? searchParams.query : undefined;

  let locations: LocationDetails[] | undefined;

  switch (type) {
    case "hotels":
      locations = query ? await searchHotels(query) : undefined;
      break;
    case "restaurants":
      locations = query ? await searchRestaurants(query) : undefined;
      break;
    default:
      locations = query ? await searchAllLocations(query) : undefined;
  }

  return (
    <>
      <Options />
      <MaxLimitWrapper>
        <div>
          {!query && (
            <h3 className="text-center my-10">
              Please enter a search query to find locations.
            </h3>
          )}
          {query && locations && locations.length === 0 && (
            <p>No results found for &quot;{query}&quot;.</p>
          )}
          {query && locations && locations.length > 0 && (
            <div className="grid md:grid-cols-4 gap-8 my-4">
              {locations
                .filter(
                  (location) => location !== undefined && location !== null
                )
                .map(async (location: LocationDetails, index: number) => (
                  <Layout2
                    key={index}
                    image={await location.getImage()}
                    ctaText={location.getName()}
                    rating={location.getRatingImageUrl()}
                    category={location.getCategory().name}
                    ctaLink={`/${location.getLocationId()}`}
                  />
                ))}
            </div>
          )}
        </div>
      </MaxLimitWrapper>
    </>
  );
}
export default SearchPage;
