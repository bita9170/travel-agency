// lib/model/saveLocation.ts
import { Schema, model, models } from "mongoose";

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

export default models.SaveLocation || model("SaveLocation", SaveLocationSchema);
