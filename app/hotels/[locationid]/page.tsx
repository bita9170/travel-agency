import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";
import { getLocationDetails } from "@/controllers/tripadvisorController";
import { LocationDetails } from "@/lib/class/location";
import React from "react";

async function page({ params }: any) {
  const { locationid } = params;

  const locations: LocationDetails[] = await getLocationDetails(locationid);
  const location = locations[0];

  return (
    <MaxLimitWrapper>
      <h3>{location.getName()}</h3>
      <img src={(await location.getPhotos())[0].getLarge().url} />
      <div> {location.getDescription()}</div>
    </MaxLimitWrapper>
  );
}

export default page;
