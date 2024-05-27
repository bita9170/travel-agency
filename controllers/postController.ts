import { NextApiRequest, NextApiResponse } from "next";
import Post, { IPost } from "../lib/model/Posts";
import dbConnect from "../lib/mongodb";
import { getLocationDetailsById } from "@/lib/data/location";

export const createPost = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await dbConnect();
  try {
    const { title, content, author, image, locationId } = req.body;

    if (locationId) {
      const locationDetails = getLocationDetailsById(locationId);
      if (!locationDetails) {
        res.status(404).json({ message: "Location not found" });
        return;
      }
    }

    const newPost = new Post({ title, content, author, image, locationId });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ message: "Failed to create post", error });
  }
};

export const getPosts = async (
  _req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await dbConnect();
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve posts", error });
  }
};

export const getPostById = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await dbConnect();
  try {
    const { id } = req.query;
    const post = await Post.findById(id);
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve post", error });
  }
};

export const updatePost = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await dbConnect();
  try {
    const { id } = req.query;
    const updatedPost = await Post.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (updatedPost) {
      res.status(200).json(updatedPost);
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update post", error });
  }
};

export const deletePost = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await dbConnect();
  try {
    const { id } = req.query;
    const deletedPost = await Post.findByIdAndDelete(id);
    if (deletedPost) {
      res.status(200).json({ message: "Post deleted successfully" });
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete post", error });
  }
};
