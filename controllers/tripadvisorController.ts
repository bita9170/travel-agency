import fetch from "node-fetch";
import { LocationDetails } from "@/lib/class/location";
import {
  TRIPADVISOR_API_KEY_1,
  TRIPADVISOR_API_KEY_2,
  TRIPADVISOR_API_KEY_3,
  TRIPADVISOR_API_KEY_4,
} from "@/lib/utils";

const TRIPADVISOR_API_KEYS = [
  TRIPADVISOR_API_KEY_1,
  TRIPADVISOR_API_KEY_2,
  TRIPADVISOR_API_KEY_3,
  TRIPADVISOR_API_KEY_4,
];

if (TRIPADVISOR_API_KEYS.some((key) => !key)) {
  throw new Error("TripAdvisor API keys are missing in environment variables");
}

const TRIPADVISOR_BASE_URL =
  "https://api.content.tripadvisor.com/api/v1/location";

async function fetchData(url: string, apiKeyIndex: number = 0): Promise<any> {
  try {
    const options = { method: "GET", headers: { accept: "application/json" } };
    const response = await fetch(
      `${TRIPADVISOR_BASE_URL}${url}&key=${TRIPADVISOR_API_KEYS[apiKeyIndex]}`,
      options
    );

    if (response.status === 200) {
      return await response.json();
    } else if (
      (response.status === 401 || response.status === 429) &&
      apiKeyIndex < TRIPADVISOR_API_KEYS.length - 1
    ) {
      return await fetchData(url, apiKeyIndex + 1);
    } else {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error occurred while fetching data:", error);
    throw error;
  }
}

export async function searchAllLocations(
  searchQuery: string,
  language: string = "en"
) {
  const url = `/search?searchQuery=${searchQuery}&language=${language}`;
  const results = await fetchData(url);

  // Extract location_id values
  const locationIds = results.data.map((location: any) => location.location_id);
  return await getLocationDetails(locationIds);
}

export async function searchHotels(
  searchQuery: string,
  language: string = "en"
) {
  const url = `/search?searchQuery=${searchQuery}&category=hotels&language=${language}`;
  return fetchData(url);
}

export async function searchAttractions(
  searchQuery: string,
  language: string = "en"
) {
  const url = `/search?searchQuery=${searchQuery}&category=attractions&language=${language}`;
  return fetchData(url);
}

export async function searchRestaurants(
  searchQuery: string,
  language: string = "en"
) {
  const url = `/search?searchQuery=${searchQuery}&category=restaurants&language=${language}`;
  return fetchData(url);
}

export async function searchGeos(searchQuery: string, language: string = "en") {
  const url = `/search?searchQuery=${searchQuery}&category=geos&language=${language}`;
  return fetchData(url);
}

export async function getLocationDetails(
  locationId: number | number[],
  language: string = "en"
): Promise<LocationDetails[]> {
  if (Array.isArray(locationId)) {
    const promises = locationId.map((id) => {
      const url = `/${id}/details?language=${language}`;
      return fetchData(url);
    });

    const results = await Promise.all(promises);

    return results
      .filter((data) => data !== undefined)
      .map((data) => new LocationDetails(data));
  } else {
    const url = `/${locationId}/details?language=${language}`;
    const data = await fetchData(url);
    return [new LocationDetails(data)];
  }
}

export async function getLocationPhotos(
  locationId: number,
  language: string = "en"
) {
  const url = `/${locationId}/photos?language=${language}&limit=1`;
  return fetchData(url);
}

export async function getLocationReviews(
  locationId: number | number[],
  language: string = "en"
) {
  if (Array.isArray(locationId)) {
    const promises = locationId.map((id) => {
      const url = `/${id}/reviews?language=${language}`;
      return fetchData(url);
    });

    return Promise.all(promises);
  } else {
    const url = `/${locationId}/reviews?language=${language}`;
    return fetchData(url);
  }
}

export async function nearbySearch(latLong: string, language: string = "en") {
  const url = `/nearby_search?language=${language}&latLong=${latLong}&language=en`;
  return fetchData(url);
}

export async function nearbySearchHotels(
  latLong: string,
  language: string = "en"
) {
  const url = `/nearby_search?language=${language}&latLong=${latLong}&category=hotels`;
  return fetchData(url);
}

export async function nearbySearchAttractions(
  latLong: string,
  language: string = "en"
) {
  const url = `/nearby_search?language=${language}&latLong=${latLong}&category=attractions`;
  return fetchData(url);
}

export async function nearbySearchRestaurants(
  latLong: string,
  language: string = "en"
) {
  const url = `/nearby_search?language=${language}&latLong=${latLong}&category=restaurants`;
  return fetchData(url);
}

export async function nearbySearchGeos(
  latLong: string,
  language: string = "en"
) {
  const url = `/nearby_search?language=${language}&latLong=${latLong}&category=geos`;
  return fetchData(url);
}
