import { LocationDetails } from "@/lib/class/location";
import locations from "./locations.json";

export function getAllLocationDetails(): LocationDetails[] {
  return locations.map((item: any) => new LocationDetails(item));
}

export function getLocationDetailsById(locationId: number): LocationDetails {
  return new LocationDetails(
    locations.find((item: any) => item.location_id == locationId)
  );
}

export function getLocationDetailsByIds(
  locationIds: number[]
): LocationDetails[] {
  return locations
    .filter((item: any) => locationIds.includes(Number(item.location_id)))
    .map((location) => new LocationDetails(location));
}
