// lib/controllers/postControllers.ts
import { NextRequest, NextResponse } from "next/server";
import Post from "@/lib/model/Posts";
import connectMongoDB from "@/lib/mongodb";

export async function createPost(req: NextRequest) {
  console.log("createPost function called");
  try {
    await connectMongoDB();
    console.log("Connected to MongoDB");
    const { title, content, author, image } = await req.json();
    console.log("Request body:", { title, content, author, image });
    const newPost = new Post({ title, content, author, image });
    console.log("New post created:", newPost);
    await newPost.save();
    console.log("Post saved to database");
    return NextResponse.json(newPost, { status: 201 });
  } catch (error: any) {
    console.error("Error creating post:", error.message);
    return NextResponse.json(
      { error: "Unable to create post", message: error.message },
      { status: 500 }
    );
  }
}

export async function getPosts(req: NextRequest) {
  console.log("getPosts function called");
  try {
    await connectMongoDB();
    console.log("Connected to MongoDB");
    const posts = await Post.find();
    console.log("Posts retrieved:", posts);
    return NextResponse.json(posts, { status: 200 });
  } catch (error: any) {
    console.error("Error retrieving posts:", error.message);
    return NextResponse.json(
      { error: "Unable to retrieve posts", message: error.message },
      { status: 500 }
    );
  }
}

export async function getPostById(req: NextRequest) {
  console.log("getPostById function called");
  try {
    const postId = req.nextUrl.searchParams.get("id");
    if (!postId) {
      console.error("Post ID is required");
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      );
    }

    console.log("Post ID:", postId);
    await connectMongoDB();
    console.log("Connected to MongoDB");
    const post = await Post.findById(postId);
    if (!post) {
      console.error("Post not found");
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    console.log("Post retrieved:", post);
    return NextResponse.json(post, { status: 200 });
  } catch (error: any) {
    console.error("Error retrieving post:", error.message);
    return NextResponse.json(
      { error: "Unable to retrieve post", message: error.message },
      { status: 500 }
    );
  }
}

export async function updatePost(req: NextRequest) {
  console.log("updatePost function called");
  try {
    const postId = req.nextUrl.searchParams.get("id");
    if (!postId) {
      console.error("Post ID is required");
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      );
    }

    console.log("Post ID:", postId);
    const { title, content, author, image } = await req.json();
    console.log("Request body:", { title, content, author, image });
    await connectMongoDB();
    console.log("Connected to MongoDB");
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { title, content, author, image },
      { new: true }
    );

    if (!updatedPost) {
      console.error("Post not found");
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    console.log("Post updated:", updatedPost);
    return NextResponse.json(updatedPost, { status: 200 });
  } catch (error: any) {
    console.error("Error updating post:", error.message);
    return NextResponse.json(
      { error: "Unable to update post", message: error.message },
      { status: 500 }
    );
  }
}

export async function deletePost(req: NextRequest) {
  console.log("deletePost function called");
  try {
    const postId = req.nextUrl.searchParams.get("id");
    if (!postId) {
      console.error("Post ID is required");
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      );
    }

    console.log("Post ID:", postId);
    await connectMongoDB();
    console.log("Connected to MongoDB");
    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) {
      console.error("Post not found");
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    console.log("Post deleted:", deletedPost);
    return NextResponse.json(
      { message: "Post deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error deleting post:", error.message);
    return NextResponse.json(
      { error: "Unable to delete post", message: error.message },
      { status: 500 }
    );
  }
}
