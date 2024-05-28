// lib/models/SaveLocation.ts
import mongoose, { Schema, Document, Model } from "mongoose";

interface ISaveLocation extends Document {
  userId: string;
  locationId: string;
  type: "favorite" | "plans" | "place";
}

const SaveLocationSchema: Schema = new Schema(
  {
    userId: { type: String, required: true },
    locationId: { type: String, required: true },
    type: {
      type: String,
      enum: ["favorite", "plans", "place"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const SaveLocation: Model<ISaveLocation> =
  mongoose.models.SaveLocation ||
  mongoose.model<ISaveLocation>("SaveLocation", SaveLocationSchema);

export default SaveLocation;
export type { ISaveLocation };
