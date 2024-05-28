// app/api/saveLocations/route.ts
import SaveLocation from "@/lib/model/SaveLocation";
import connectMongoDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectMongoDB();

  const { userId, locationId, type } = await req.json();

  if (!userId || !locationId || !type) {
    return NextResponse.json({
      message: "userId, locationId, and type are required.",
      status: 400,
    });
  }

  try {
    const newSaveLocation = new SaveLocation({
      userId,
      locationId,
      type,
    });

    await newSaveLocation.save();

    return NextResponse.json(
      {
        success: true,
        saveLocation: newSaveLocation,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: (error as Error).message,
      },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  await connectMongoDB();

  const userId = req.nextUrl.searchParams.get("userId");
  const locationId = req.nextUrl.searchParams.get("locationId");

  if (!userId) {
    return NextResponse.json(
      { message: "User ID is required" },
      { status: 400 }
    );
  }

  let saveLocation: any;

  try {
    if (locationId && locationId !== "0") {
      saveLocation = await SaveLocation.find({ userId, locationId });
    } else {
      saveLocation = await SaveLocation.find({ userId });
    }

    if (!saveLocation || saveLocation.length === 0) {
      return NextResponse.json(
        {
          message: "Save location not found",
        },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, saveLocation }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    await connectMongoDB();

    const saveLocationId = req.nextUrl.searchParams.get("saveLocationId");

    const deletedSaveLocation = await SaveLocation.findByIdAndDelete(
      saveLocationId
    );

    if (!deletedSaveLocation) {
      return NextResponse.json(
        { message: "Save location not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Save location deleted" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
