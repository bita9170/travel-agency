
// Search
export async function Search(searchQuery: string, language: string = "de") {
  try {
    const TRIPADVISOR_API_KEY = process.env.TRIPADVISOR_API_KEY;

    if (!TRIPADVISOR_API_KEY) {
      throw new Error(
        "TripAdvisor API key is missing in environment variables"
      );
    }

    const url = `https://api.content.tripadvisor.com/api/v1/location/search?searchQuery=${searchQuery}&language=${language}&key=${TRIPADVISOR_API_KEY}`;
    const options = { method: "GET", headers: { accept: "application/json" } };

    const result = await fetch(url, options);
    return await result.json();
  } catch (error) {
    console.error("Error occurred while fetching TripAdvisor data:", error);
    throw error;
  }
}

//Location Details
export async function getLocationDetails(locationId: number) {
  try {
    const TRIPADVISOR_API_KEY = process.env.TRIPADVISOR_API_KEY;

    if (!TRIPADVISOR_API_KEY) {
      throw new Error("TripAdvisor API key is missing in environment variables");
    }

    const url = `https://api.content.tripadvisor.com/api/v1/location/${locationId}/details?key=${TRIPADVISOR_API_KEY}`;
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Failed to fetch location details: ${response.statusText}`);
    }

    const locationDetails = await response.json();
    return locationDetails;
  } catch (error) {
    console.error('Error occurred while fetching TripAdvisor location details:', error);
    throw error;
  }
}


//Location Photos
export async function getLocationPhotos(locationId: number) {
  try {
    const TRIPADVISOR_API_KEY = process.env.TRIPADVISOR_API_KEY;

    if (!TRIPADVISOR_API_KEY) {
      throw new Error("TripAdvisor API key is missing in environment variables");
    }

    const url = `https://api.content.tripadvisor.com/api/v1/location/${locationId}/photos?key=${TRIPADVISOR_API_KEY}`;
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Failed to fetch location photos: ${response.statusText}`);
    }

    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error('Error occurred while fetching TripAdvisor location photos:', error);
    throw error;
  }
}

//Location Reviews
export async function getLocationReviews(locationId: number) {
  try {
    const TRIPADVISOR_API_KEY = process.env.TRIPADVISOR_API_KEY;

    if (!TRIPADVISOR_API_KEY) {
      throw new Error("TripAdvisor API key is missing in environment variables");
    }

    const url = `https://api.content.tripadvisor.com/api/v1/location/${locationId}/reviews?key=${TRIPADVISOR_API_KEY}`;
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Failed to fetch location reviews: ${response.statusText}`);
    }

    const reviews = await response.json();
    return reviews;
  } catch (error) {
    console.error('Error occurred while fetching TripAdvisor location reviews:', error);
    throw error;
  }
}

//Nearby search

export async function nearbySearch(latLong: string) {
  try {
    const TRIPADVISOR_API_KEY = process.env.TRIPADVISOR_API_KEY;

    if (!TRIPADVISOR_API_KEY) {
      throw new Error("TripAdvisor API key is missing in environment variables");
    }

    const url = `https://api.content.tripadvisor.com/api/v1/location/nearby_search?latLong=${latLong}&key=${TRIPADVISOR_API_KEY}&language=en`;
    const options = { method: 'GET', headers: { accept: 'application/json' } };

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Failed to perform nearby location search: ${response.statusText}`);
    }

    const nearbyLocations = await response.json();
    return nearbyLocations;
  } catch (error) {
    console.error('Error occurred while performing nearby location search:', error);
    throw error;
  }
}


