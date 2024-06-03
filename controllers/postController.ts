// lib/controllers/postController.ts
import { NextRequest, NextResponse } from "next/server";
import Post from "../lib/model/Posts";
import dbConnect from "../lib/mongodb";
import { getLocationDetailsById } from "@/lib/data/location";
import axios from "axios";

export interface IPost {
  title: string;
  content: string;
  author: string;
  image: string;
  locationId: string;
  userId: string;
}

// Helper function for error handling
const handleError = (error: unknown, message: string) => {
  console.error(message, error);
  return NextResponse.json(
    { error: message, details: (error as Error).message },
    { status: 500 }
  );
};

export async function createPost(
  userId: string,
  title: string,
  content: string,
  author: string,
  image: string,
  locationId: string
) {
  await dbConnect();
  try {
    if (locationId) {
      const locationDetails = await axios.get(`/api/locations/${locationId}`);
      if (!locationDetails.data) {
        console.error("Location not found");
        return { message: "Location not found", value: "" };
      }
    }

    const newPost = new Post({
      title,
      content,
      author,
      image,
      locationId,
      userId,
    });
    const savedPost = await newPost.save();
    return { message: "Post created successfully", value: savedPost._id };
  } catch (error) {
    return handleError(error, "Failed to create post");
  }
}

export async function getPosts() {
  await dbConnect();
  try {
    const res = await Post.find();

    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    return handleError(error, "Failed to retrieve posts");
  }
}

export async function getPostById(id: string) {
  await dbConnect();
  try {
    const post = await Post.findById(id);
    if (post) {
      return NextResponse.json(post, { status: 200 });
    } else {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
  } catch (error) {
    return handleError(error, "Failed to retrieve post");
  }
}

export async function updatePost(id: string, updatedData: Partial<IPost>) {
  await dbConnect();
  try {
    const updatedPost = await Post.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    if (updatedPost) {
      return NextResponse.json(updatedPost, { status: 200 });
    } else {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
  } catch (error) {
    return handleError(error, "Failed to update post");
  }
}

export async function deletePost(id: string) {
  await dbConnect();
  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    if (deletedPost) {
      return NextResponse.json(
        { message: "Post deleted successfully" },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
  } catch (error) {
    return handleError(error, "Failed to delete post");
  }
}
