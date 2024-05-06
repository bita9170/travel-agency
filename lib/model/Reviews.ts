import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
    // rating: {
    //   type: Number,
    //   required: true,
    //   min: 1,
    //   max: 5,
    // },
    // locationid: {
    //   type: String,
    //   required: true,
    // },
    datePosted: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Review =
  mongoose.models.Reviews || mongoose.model("Review", reviewSchema);

export default Review;
