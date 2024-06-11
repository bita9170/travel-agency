// lib/model/Post.ts
import mongoose, { Document, Schema, Model } from "mongoose";

export interface IPost extends Document {
  title: string;
  subtitle: string;
  content: string;
  author: string;
  image?: string;
  locationId?: string;
  userId: string;
}

const PostSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    image: { type: String },
    locationId: { type: String },
    userId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Post: Model<IPost> =
  mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema);

export default Post;
