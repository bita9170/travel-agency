import fetch from "node-fetch";
const TRIPADVISOR_API_KEY = process.env.NEXT_PUBLIC_TRIPADVISOR_API_KEY;

if (!TRIPADVISOR_API_KEY) {
  throw new Error("TripAdvisor API key is missing in environment variables");
}

const TRIPADVISOR_BASE_URL =
  "https://api.content.tripadvisor.com/api/v1/location";

async function fetchData(url: string) {
  try {
    const response = await fetch(`/api/proxy?url=${encodeURIComponent(url)}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error occurred while fetching data:", error);
    throw error;
  }
}

export async function searchAllLocations(
  searchQuery: string,
  language: string = "en"
) {
  const url = `${TRIPADVISOR_BASE_URL}/search?searchQuery=${searchQuery}&language=${language}`;
  const results = await fetchData(url);

  // Extract location_id values
  const locationIds = results.data.map((location: any) => location.location_id);

  return await getLocationDetails(locationIds);
}

export async function searchHotels(
  searchQuery: string,
  language: string = "en"
) {
  const url = `${TRIPADVISOR_BASE_URL}/search?searchQuery=${searchQuery}&category=hotels&language=${language}`;
  return fetchData(url);
}

export async function searchAttractions(
  searchQuery: string,
  language: string = "en"
) {
  const url = `${TRIPADVISOR_BASE_URL}/search?searchQuery=${searchQuery}&category=attractions&language=${language}`;
  return fetchData(url);
}

export async function searchRestaurants(
  searchQuery: string,
  language: string = "en"
) {
  const url = `${TRIPADVISOR_BASE_URL}/search?searchQuery=${searchQuery}&category=restaurants&language=${language}`;
  return fetchData(url);
}

export async function searchGeos(searchQuery: string, language: string = "en") {
  const url = `${TRIPADVISOR_BASE_URL}/search?searchQuery=${searchQuery}&category=geos&language=${language}`;
  return fetchData(url);
}

export async function getLocationDetails(
  locationId: number | number[],
  language: string = "en"
) {
  if (Array.isArray(locationId)) {
    const promises = locationId.map((id) => {
      const url = `${TRIPADVISOR_BASE_URL}/${id}/details?language=${language}`;
      return fetchData(url);
    });

    const results = await Promise.all(promises);
    return results.map((data) => data.data);
  } else {
    const url = `${TRIPADVISOR_BASE_URL}/${locationId}/details?language=${language}`;
    return await fetchData(url);
  }
}

export async function getLocationReviews(
  locationId: number | number[],
  language: string = "en"
) {
  if (Array.isArray(locationId)) {
    const promises = locationId.map((id) => {
      const url = `${TRIPADVISOR_BASE_URL}/${id}/reviews?language=${language}&key=${TRIPADVISOR_API_KEY}`;
      return fetchData(url);
    });

    return Promise.all(promises);
  } else {
    const url = `${TRIPADVISOR_BASE_URL}/${locationId}/reviews?language=${language}&key=${TRIPADVISOR_API_KEY}`;
    return fetchData(url);
  }
}

export async function nearbySearch(latLong: string, language: string = "en") {
  const url = `${TRIPADVISOR_BASE_URL}/nearby_search?language=${language}&latLong=${latLong}&key=${TRIPADVISOR_API_KEY}&language=en`;
  return fetchData(url);
}

export async function nearbySearchHotels(
  latLong: string,
  language: string = "en"
) {
  const url = `${TRIPADVISOR_BASE_URL}/nearby_search?language=${language}&latLong=${latLong}&category=hotels&key=${TRIPADVISOR_API_KEY}`;
  return fetchData(url);
}

export async function nearbySearchAttractions(
  latLong: string,
  language: string = "en"
) {
  const url = `${TRIPADVISOR_BASE_URL}/nearby_search?language=${language}&latLong=${latLong}&category=attractions&key=${TRIPADVISOR_API_KEY}`;
  return fetchData(url);
}

export async function nearbySearchRestaurants(
  latLong: string,
  language: string = "en"
) {
  const url = `${TRIPADVISOR_BASE_URL}/nearby_search?language=${language}&latLong=${latLong}&category=restaurants&key=${TRIPADVISOR_API_KEY}`;
  return fetchData(url);
}

export async function nearbySearchGeos(
  latLong: string,
  language: string = "en"
) {
  const url = `${TRIPADVISOR_BASE_URL}/nearby_search?language=${language}&latLong=${latLong}&category=geos&key=${TRIPADVISOR_API_KEY}`;
  return fetchData(url);
}
