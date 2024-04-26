import fetch from 'node-fetch';

const TRIPADVISOR_API_KEY = process.env.TRIPADVISOR_API_KEY;

if (!TRIPADVISOR_API_KEY) {
  throw new Error("TripAdvisor API key is missing in environment variables");
}

async function fetchData(url: string) {
  try {
    const options = { method: 'GET', headers: { accept: 'application/json' } };
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error occurred while fetching data:', error);
    throw error;
  }
}

export async function searchAllLocations(searchQuery: string, language: string = "de") {
  const url = `https://api.content.tripadvisor.com/api/v1/location/search?searchQuery=${searchQuery}&language=${language}&key=${TRIPADVISOR_API_KEY}`;
  return fetchData(url);
}

export async function getLocationDetails(locationId: number) {
  const url = `https://api.content.tripadvisor.com/api/v1/location/${locationId}/details?key=${TRIPADVISOR_API_KEY}`;
  return fetchData(url);
}

export async function getLocationPhotos(locationId: number) {
  const url = `https://api.content.tripadvisor.com/api/v1/location/${locationId}/photos?key=${TRIPADVISOR_API_KEY}`;
  return fetchData(url);
}

export async function getLocationReviews(locationId: number) {
  const url = `https://api.content.tripadvisor.com/api/v1/location/${locationId}/reviews?key=${TRIPADVISOR_API_KEY}`;
  return fetchData(url);
}

export async function nearbySearch(latLong: string) {
  const url = `https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong=${latLong}&key=${TRIPADVISOR_API_KEY}&language=en`;
  return fetchData(url);
}
