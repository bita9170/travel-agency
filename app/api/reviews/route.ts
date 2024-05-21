// app/api/reviews/reviewsRoute.ts
import Review from "../../../lib/model/Reviews";
import User from "../../../lib/model/User";
import connectMongoDB from "../../../lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

interface ReviewData {
  userId: string;
  text: string;
  rating: number;
  locationId: string;
}

// Get reviews
export async function GET(req: NextRequest) {
  try {
    await connectMongoDB();
    // const reviews = await Review.find({});
    // return NextResponse.json({ reviews }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// Create a review
export async function POST(req: NextRequest) {
  console.log(req.body);
  try {
    const { userId, text, rating, locationId } = await req.json();
    await connectMongoDB();

    if (!userId) {
      return NextResponse.json(
        { message: "UserId is required" },
        { status: 400 }
      );
    }

    if (!locationId) {
      return NextResponse.json(
        { message: "locationId is required" },
        { status: 400 }
      );
    }

    const userExists = await User.findById(userId);
    if (!userExists) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const newReview = new Review({
      userId,
      text,
      rating,
      locationId,
    });

    await newReview.save();
    return NextResponse.json(newReview, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

// Update a review
export async function PUT(req: NextRequest) {
  try {
    await connectMongoDB();
    const { id, text, rating, locationId } = await req.json();
    // const updatedReview = await Review.findByIdAndUpdate(
    //   id,
    //   { $set: { text, rating, locationId } },
    //   { new: true }
    // );
    // if (!updatedReview) {
    //   return NextResponse.json(
    //     { message: "Review not found" },
    //     { status: 404 }
    //   );
    // }
    // return NextResponse.json(updatedReview, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// Delete a review
export async function DELETE(req: NextRequest) {
  try {
    await connectMongoDB();
    const { id } = await req.json();
    const deletedReview = await Review.deleteOne({ _id: id });
    if (deletedReview.deletedCount === 0) {
      return NextResponse.json(
        { message: "Review not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "Review deleted" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
