// lib/controllers/postController.ts
// import { NextRequest, NextResponse } from "next/server";
import Post from "../lib/model/Posts";
import dbConnect from "../lib/mongodb";
import { getLocationDetailsById } from "@/lib/data/location";
import axios from "axios";

// export interface IPost {
//   title: string;
//   content: string;
//   author: string;
//   image: string;
//   locationId: string;
//   userId: string;
// }

// // Helper function for error handling
// const handleError = (error: unknown, message: string) => {
//   console.error(message, error);
//   return NextResponse.json(
//     { error: message, details: (error as Error).message },
//     { status: 500 }
//   );
// };

// export async function createPost(
//   userId: string,
//   title: string,
//   content: string,
//   author: string,
//   image: string,
//   locationId: string
// ) {
//   await dbConnect();
//   try {
//     if (locationId) {
//       const locationDetails = await axios.get(`/api/locations/${locationId}`);
//       if (!locationDetails.data) {
//         console.error("Location not found");
//         return { message: "Location not found", value: "" };
//       }
//     }

//     const newPost = new Post({
//       title,
//       content,
//       author,
//       image,
//       locationId,
//       userId,
//     });
//     const savedPost = await newPost.save();
//     return { message: "Post created successfully", value: savedPost._id };
//   } catch (error: any) {
//     return { message: "Failed to create post", error };
//   }
// }

// export async function getPosts(postId: string) {
//   await dbConnect();
//   try {
//     if (postId) {
//     const res = await axios.get(`/api/posts`, {
//       params: { postId },
// );

//     return res.data.posts;

//   } return (error:any) {
//     error("Failed to retrieve posts");
//   }
// }

// GET post by ID
export async function getPostById(postId: string) {
  try {
    if (!postId) {
      console.error("Missing required fields");
      return {
        message: "Error in get post by id",
        value: postId,
      };
    }

    const res = await axios.get(`/api/posts`, {
      params: { postId },
    });

    if (res.status === 200) {
      return res.data.posts;
    } else {
      return {
        message: "Error in get post by id",
        value: IdleDeadline,
      };
    }
  } catch (error) {
    return {
      message: "",
      value: error,
    };
  }
}

// UPDATE post
export async function updatePost(postId: string, updatedData: any) {
  console.log("updatePost", updatePost);
  console.log("postId", postId);
  try {
    if (!postId) {
      console.error("Missing required fields");
      return {
        message: "Error in update post",
        value: postId,
      };
    }

    const res = await axios.put("/api/posts", { postId, updatedData });

    if (res.status === 200) {
      return res.data.post;
    } else {
      return {
        message: "Error in update post",
        value: res.data,
      };
    }
  } catch (error) {
    console.error(error);
    return {
      message: "Internal Server Error",
      value: error,
    };
  }
}

// DELETE Post
export async function deletePost(postId: string) {
  try {
    if (!postId) {
      console.error("Missing required fields");
      return {
        message: "Error in saving location",
        value: postId,
      };
    }

    const res = await axios.delete("/api/posts", {
      params: { postId },
    });

    if (res.status === 200) {
      return {
        message: "The post has been removed from database",
        value: "",
      };
    } else {
      return {
        message: "Error in delete post",
        value: IdleDeadline,
      };
    }
  } catch (error) {
    return {
      message: "",
      value: "",
    };
  }
}
