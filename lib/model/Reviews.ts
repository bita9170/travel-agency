// model/Review.js
import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,

      required: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    datePosted: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Review =
  mongoose.models.Reviews || mongoose.model("Review", reviewSchema);

export default Review;
