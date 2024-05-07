import fetch from "node-fetch";

const TRIPADVISOR_API_KEY = process.env.TRIPADVISOR_API_KEY;

if (!TRIPADVISOR_API_KEY) {
  throw new Error("TripAdvisor API key is missing in environment variables");
}

const TRIPADVISOR_BASE_URL = "https://api.content.tripadvisor.com/api/v1/location";

async function fetchData(url: string) {
  try {
    const options = { method: "GET", headers: { accept: "application/json" } };
    const response = await fetch(url, options);
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
  language: string = "de"
) {
  const url = `${TRIPADVISOR_BASE_URL}/search?searchQuery=${searchQuery}&language=${language}&key=${TRIPADVISOR_API_KEY}`;
  return fetchData(url);
}

export async function searchHotels(
  searchQuery: string,
  language: string = "de"
) {
  const url = `${TRIPADVISOR_BASE_URL}/search?searchQuery=${searchQuery}&category=hotels&language=${language}&key=${TRIPADVISOR_API_KEY}`;
  return fetchData(url);
}

export async function searchAttractions(
  searchQuery: string,
  language: string = "de"
) {
  const url = `${TRIPADVISOR_BASE_URL}/search?searchQuery=${searchQuery}&category=attractions&language=${language}&key=${TRIPADVISOR_API_KEY}`;
  return fetchData(url);
}

export async function searchRestaurants(
  searchQuery: string,
  language: string = "de"
) {
  const url = `${TRIPADVISOR_BASE_URL}/search?searchQuery=${searchQuery}&category=restaurants&language=${language}&key=${TRIPADVISOR_API_KEY}`;
  return fetchData(url);
}

export async function searchGeos(
  searchQuery: string,
  language: string = "de"
) {
  const url = `${TRIPADVISOR_BASE_URL}/search?searchQuery=${searchQuery}&category=geos&language=${language}&key=${TRIPADVISOR_API_KEY}`;
  return fetchData(url);
}

export async function getLocationDetails(
  locationId: number,
  language: string = "de"
) {
  const url = `${TRIPADVISOR_BASE_URL}/${locationId}/details?language=${language}&key=${TRIPADVISOR_API_KEY}`;
  return fetchData(url);
}

export async function getLocationPhotos(
  locationId: number,
  language: string = "de"
) {
  const url = `${TRIPADVISOR_BASE_URL}/${locationId}/photos?language=${language}&key=${TRIPADVISOR_API_KEY}`;
  return fetchData(url);
}

export async function getLocationReviews(
  locationId: number,
  language: string = "de"
) {
  const url = `${TRIPADVISOR_BASE_URL}/${locationId}/reviews?language=${language}&key=${TRIPADVISOR_API_KEY}`;
  return fetchData(url);
}

export async function nearbySearch(
  latLong: string,
  language: string = "de"
) {
  const url = `${TRIPADVISOR_BASE_URL}/nearby_search?language=${language}&latLong=${latLong}&key=${TRIPADVISOR_API_KEY}&language=en`;
  return fetchData(url);
}

export async function nearbySearchHotels(
  latLong: string,
  language: string = "de"
) {
  const url = `${TRIPADVISOR_BASE_URL}/nearby_search?language=${language}&latLong=${latLong}&category=hotels&key=${TRIPADVISOR_API_KEY}`;
  return fetchData(url);
}

export async function nearbySearchAttractions(
  latLong: string,
  language: string = "de"
) {
  const url = `${TRIPADVISOR_BASE_URL}/nearby_search?language=${language}&latLong=${latLong}&category=attractions&key=${TRIPADVISOR_API_KEY}`;
  return fetchData(url);
}

export async function nearbySearchRestaurants(
  latLong: string,
  language: string = "de"
) {
  const url = `${TRIPADVISOR_BASE_URL}/nearby_search?language=${language}&latLong=${latLong}&category=restaurants&key=${TRIPADVISOR_API_KEY}`;
  return fetchData(url);
}

export async function nearbySearchGeos(
  latLong: string,
  language: string = "de"
) {
  const url = `${TRIPADVISOR_BASE_URL}/nearby_search?language=${language}&latLong=${latLong}&category=geos&key=${TRIPADVISOR_API_KEY}`;
  return fetchData(url);
}
