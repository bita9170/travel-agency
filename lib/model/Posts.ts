// lib/model/Post.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IPost extends Document {
  title: string;
  content: string;
  author: string;
  image?: string;
  locationId?: number;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema: Schema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String },
  locationId: { type: Number },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.models.Post ||
  mongoose.model<IPost>("Post", PostSchema);
