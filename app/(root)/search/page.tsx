import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";
import Options from "@/components/header/Options";
import Layout2 from "@/components/tiles/Layout2";
import { searchAllLocations } from "@/controllers/tripadvisorController";
import { LocationDetails } from "@/lib/class/location";
import React from 'react';

async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  const query =
    typeof searchParams.query === "string" ? searchParams.query : undefined;

  const locations: LocationDetails[] | undefined = query
    ? await searchAllLocations(query)
    : undefined;

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
            <p>No results found for "{query}".</p>
          )}
          {query && locations && locations.length > 0 && (
            <div className="grid md:grid-cols-4 gap-8 my-4">
              {locations.map((location: LocationDetails, index: number) => (
                <Layout2
                  key={index}
                  image={location.getImage()}
                  ctaText={location.getName()}
                  rating={location.getRatingImageUrl()}
                  category={location.getCategory().name}
                  ctaLink="#"
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
