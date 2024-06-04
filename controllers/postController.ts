// lib/controllers/postController.ts
// import { NextRequest, NextResponse } from "next/server";
// import Post from "../lib/model/Posts";
// import dbConnect from "../lib/mongodb";
// import { getLocationDetailsById } from "@/lib/data/location";
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
//   } catch (error) {
//     return handleError(error, "Failed to create post");
//   }
// }

// export async function getPosts() {
//   await dbConnect();
//   try {
//     const res = await Post.find();

//     return NextResponse.json(res, { status: 200 });
//   } catch (error) {
//     return handleError(error, "Failed to retrieve posts");
//   }
// }

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

// export async function updatePost(id: string, updatedData: Partial<IPost>) {
//   await dbConnect();

//   console.log(updatePost, "updatePost");
//   try {
//     const updatedPost = await Post.findByIdAndUpdate(id, updatedData, {
//       new: true,
//     });
//     if (updatedPost) {
//       return NextResponse.json(updatedPost, { status: 200 });
//     } else {
//       return NextResponse.json({ message: "Post not found" }, { status: 404 });
//     }
//   } catch (error) {
//     return handleError(error, "Failed to update post");
//   }
// }

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
