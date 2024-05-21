// pages/api/reviews/[locationId].ts
import type { NextApiRequest, NextApiResponse } from "next";
import connectMongoDB from "@/lib/mongodb";
import Review from "@/lib/model/Reviews";
import axios from "axios";

// Function to get location details
async function getLocationDetails(locationId: string, language: string = "de") {
  const TRIPADVISOR_BASE_URL = process.env.TRIPADVISOR_BASE_URL;
  const TRIPADVISOR_API_KEY = process.env.TRIPADVISOR_API_KEY;

  const url = `${TRIPADVISOR_BASE_URL}/${locationId}/details?language=${language}&key=${TRIPADVISOR_API_KEY}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching TripAdvisor data:", error);
    throw new Error("Failed to fetch location details from TripAdvisor");
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { locationId },
    method,
  } = req;

  await connectMongoDB();

  switch (method) {
    case "GET":
      try {
        //
        const tripAdvisorData = await getLocationDetails(locationId as string);

        // Lokale Reviews abrufen
        // const reviews = await Review.find({ locationId });
        // res.status(200).json({ success: true, tripAdvisorData, reviews });
      } catch (error: any) {
        console.error("Failed to get data:", error.message);
        res.status(500).json({ success: false, message: error.message });
      }
      break;

    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

// Reviews zu holen, die einer bestimmten
// Location (identifiziert durch locationId) zugeordnet sind.
// Das ist besonders nützlich, um Reviews kontextabhängig zu
// filtern, zum Beispiel auf einer spezifischen Seite,
// die Details zu einem Ort anzeigt.
