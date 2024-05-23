// lib/controllers/saveLocationController.ts
import { NextRequest, NextResponse } from "next/server";
import SaveLocation from "@/lib/model/saveLocation";
import connectMongoDB from "@/lib/mongodb";
import { getLocationDetailsById } from "@/lib/data/location/index";

// Helper function for error handling
const handleError = (error: unknown, message: string) => {
  console.error(message, error);
  return NextResponse.json(
    { error: message, details: (error as Error).message },
    { status: 500 }
  );
};

// This function creates a new "Save Location".
// It takes the data from the request (userId, locationId, type),
// checks if the location exists, and then saves the new data to the database.
export async function createSaveLocation(req: NextRequest) {
  console.log("createSaveLocation function called");
  try {
    await connectMongoDB();
    console.log("Connected to MongoDB");
    const { userId, locationId, type } = await req.json();
    console.log("Request body:", { userId, locationId, type });

    const locationDetails = getLocationDetailsById(Number(locationId));
    if (!locationDetails) {
      console.error("Location not found");
      return NextResponse.json(
        { error: "Location not found" },
        { status: 404 }
      );
    }

    const newSaveLocation = new SaveLocation({ userId, locationId, type });
    console.log("New save location created:", newSaveLocation);
    await newSaveLocation.save();
    console.log("Save location saved to database");
    return NextResponse.json(newSaveLocation, { status: 201 });
  } catch (error) {
    return handleError(error, "Error creating save location");
  }
}

// This function retrieves all saved locations.
// It connects to the database, fetches all saved locations, and adds location details.
export async function getSaveLocations(req: NextRequest) {
  console.log("getSaveLocations function called");
  try {
    await connectMongoDB();
    console.log("Connected to MongoDB");

    const saveLocations = await SaveLocation.find();
    console.log("Save locations retrieved:", saveLocations);

    const detailedSaveLocations = saveLocations.map((location) => {
      const locationDetails = getLocationDetailsById(
        Number(location.locationId)
      );
      return {
        ...location.toObject(),
        locationDetails,
      };
    });

    return NextResponse.json(detailedSaveLocations, { status: 200 });
  } catch (error) {
    return handleError(error, "Error retrieving save locations");
  }
}

// This function retrieves a saved location by its ID.
// It connects to the database, fetches the saved location, and adds the location details.
export async function getSaveLocationById(req: NextRequest) {
  console.log("getSaveLocationById function called");
  try {
    const saveLocationId = req.nextUrl.searchParams.get("id");
    if (!saveLocationId) {
      console.error("Save location ID is required");
      return NextResponse.json(
        { error: "Save location ID is required" },
        { status: 400 }
      );
    }

    console.log("Save location ID:", saveLocationId);
    await connectMongoDB();
    console.log("Connected to MongoDB");

    const saveLocation = await SaveLocation.findById(saveLocationId);
    if (!saveLocation) {
      console.error("Save location not found");
      return NextResponse.json(
        { error: "Save location not found" },
        { status: 404 }
      );
    }

    const locationDetails = getLocationDetailsById(
      Number(saveLocation.locationId)
    );

    const detailedSaveLocation = {
      ...saveLocation.toObject(),
      locationDetails,
    };

    console.log("Save location retrieved:", detailedSaveLocation);
    return NextResponse.json(detailedSaveLocation, { status: 200 });
  } catch (error) {
    return handleError(error, "Error retrieving save location");
  }
}

// This function retrieves all saved locations for a specific user.
// It connects to the database, fetches the user's saved locations, and adds the location details.
export async function getSaveLocationsByUserId(req: NextRequest) {
  console.log("getSaveLocationsByUserId function called");
  try {
    const userId = req.nextUrl.searchParams.get("userId");
    if (!userId) {
      console.error("User ID is required");
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    console.log("User ID:", userId);
    await connectMongoDB();
    console.log("Connected to MongoDB");

    const saveLocations = await SaveLocation.find({ userId });
    console.log("Save locations retrieved for user:", saveLocations);

    const detailedSaveLocations = saveLocations.map((location) => {
      const locationDetails = getLocationDetailsById(
        Number(location.locationId)
      );
      return {
        ...location.toObject(),
        locationDetails,
      };
    });

    return NextResponse.json(detailedSaveLocations, { status: 200 });
  } catch (error) {
    return handleError(error, "Error retrieving save locations for user");
  }
}

// This function updates a saved location by its ID.
// It connects to the database, checks if the location exists, and updates the data.
export async function updateSaveLocation(req: NextRequest) {
  console.log("updateSaveLocation function called");
  try {
    const saveLocationId = req.nextUrl.searchParams.get("id");
    if (!saveLocationId) {
      console.error("Save location ID is required");
      return NextResponse.json(
        { error: "Save location ID is required" },
        { status: 400 }
      );
    }
    console.log("Save location ID:", saveLocationId);

    const { userId, locationId, type } = await req.json();
    console.log("Request body:", { userId, locationId, type });

    const locationDetails = getLocationDetailsById(Number(locationId));

    if (!locationDetails) {
      console.error("Location not found");
      return NextResponse.json(
        { error: "Location not found" },
        { status: 404 }
      );
    }

    await connectMongoDB();
    console.log("Connected to MongoDB");

    const updatedSaveLocation = await SaveLocation.findByIdAndUpdate(
      saveLocationId,
      { userId, locationId, type },
      { new: true }
    );

    if (!updatedSaveLocation) {
      console.error("Save location not found");
      return NextResponse.json(
        { error: "Save location not found" },
        { status: 404 }
      );
    }

    console.log("Save location updated:", updatedSaveLocation);
    return NextResponse.json(updatedSaveLocation, { status: 200 });
  } catch (error) {
    return handleError(error, "Error updating save location");
  }
}

// This function deletes a saved location by its ID.
// It connects to the database and deletes the saved location.
export async function deleteSaveLocation(req: NextRequest) {
  console.log("deleteSaveLocation function called");
  try {
    const saveLocationId = req.nextUrl.searchParams.get("id");
    if (!saveLocationId) {
      console.error("Save location ID is required");
      return NextResponse.json(
        { error: "Save location ID is required" },
        { status: 400 }
      );
    }

    console.log("Save location ID:", saveLocationId);

    await connectMongoDB();
    console.log("Connected to MongoDB");

    const deletedSaveLocation = await SaveLocation.findByIdAndDelete(
      saveLocationId
    );
    if (!deletedSaveLocation) {
      console.error("Save location not found");

      return NextResponse.json(
        { error: "Save location not found" },
        { status: 404 }
      );
    }

    console.log("Save location deleted:", deletedSaveLocation);

    return NextResponse.json(
      { message: "Save location deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return handleError(error, "Error deleting save location");
  }
}
