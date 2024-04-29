// app/api/reviews/reviewsRoute.ts
import Review from "../../lib/model/Reviews";
import User from "../../lib/model/User";
import connectMongoDB from "../../lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

// Get reviews
// export async function GET(req: NextRequest) {
//   try {
//     await connectMongoDB();
//     const reviews = await Review.find({});
//     return NextResponse.json({ reviews }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ message: error.message }, { status: 500 });
//   }
// }

// Create a review
export async function POST(req: NextRequest) {
  try {
    await connectMongoDB();
    const { userId, text, rating } = await req.json();
    if (!userId) {
      return NextResponse.json(
        { message: "UserId is required" },
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
    });

    await newReview.save();
    return NextResponse.json(newReview, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}

// Update a review
export async function PUT(req: NextRequest) {
  try {
    await connectMongoDB();
    const { id, text, rating } = await req.json();
    const updatedReview = await Review.findByIdAndUpdate(
      id,
      { text, rating },
      { new: true }
    );
    if (!updatedReview) {
      return NextResponse.json(
        { message: "Review not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(updatedReview, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// Delete a review
export async function DELETE(req: NextRequest) {
  try {
    await connectMongoDB();
    const { id } = await req.json();
    const deletedReview = await Review.findByIdAndDelete(id);
    if (!deletedReview) {
      return NextResponse.json(
        { message: "Review not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "Review deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
