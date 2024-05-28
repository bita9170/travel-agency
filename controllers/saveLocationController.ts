// lib/controllers/saveLocationController.ts
import { NextRequest, NextResponse } from "next/server";
import { getLocationDetailsById } from "@/lib/data/location/index";
import axios from "axios";
import { IResult } from "@/components/elements/SaveLocation";

export interface ISaveLocation {
  _id: string;
  userId: string;
  locationId: string;
  type: "favorite" | "plans" | "place";
  image?: string;
  title?: string;
  rating?: string;
  link?: string;
}
// Helper function for error handling
const handleError = (error: unknown, message: string) => {
  console.error(message, error);
  return NextResponse.json(
    { error: message, details: (error as Error).message },
    { status: 500 }
  );
};

export async function getSaveLocationsByUserId(
  userId: string,
  locationId: string = "0"
) {
  try {
    const locationDetails = getLocationDetailsById(Number(locationId));
    if (!locationDetails) {
      console.error("Location not found");
      return "Location not found";
    }

    const res = await axios.get("/api/saveLocations", {
      params: { userId, locationId },
    });

    if (res.status === 200) {
      return res.data.saveLocation;
    } else {
      return false;
    }
  } catch (error) {
    return handleError(error, "Error creating save location");
  }
}

// This function creates a new "Save Location".
// It takes the data from the request (userId, locationId, type),
// checks if the location exists, and then saves the new data to the database.
export async function createSaveLocation(
  userId: string,
  locationId: string,
  type: string
): Promise<IResult> {
  console.log("createSaveLocation function called");
  try {
    if (!userId || !locationId || !type) {
      console.error("Missing required fields");
      return {
        message: "Error in saving location",
        value: "",
      };
    }

    const res = await axios.post("/api/saveLocations", {
      userId,
      locationId,
      type,
    });

    if (res.status === 201) {
      return {
        message: "The location has been added to favorites",
        value: res.data.saveLocation._id,
      };
    } else {
      return {
        message: "Error in saving location",
        value: "",
      };
    }
  } catch (error) {
    console.error("Error creating save location:", error);
    return {
      message: "Error in saving location",
      value: "",
    };
  }
}

export async function removeSaveLocation(
  saveLocationId: string
): Promise<IResult> {
  try {
    if (!saveLocationId) {
      console.error("Missing required fields");
      return {
        message: "Error in saving location",
        value: saveLocationId,
      };
    }

    const res = await axios.delete("/api/saveLocations", {
      params: { saveLocationId },
    });

    if (res.status === 200) {
      return {
        message: "The location has been removed from favorites",
        value: "",
      };
    } else {
      return {
        message: "Error in saving location",
        value: saveLocationId,
      };
    }
  } catch (error) {
    return {
      message: "",
      value: "",
    };
  }
}
