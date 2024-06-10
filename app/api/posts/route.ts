// app/api/posts/route.ts
import Post from "@/lib/model/Posts";
import connectMongoDB from "@/lib/mongodb";

import { NextRequest, NextResponse } from "next/server";

export interface IPost {
  title: string;
  subtitle: string;
  content: string;
  author: string;
  image: string;
  locationId: string;
  userId: string;
}

// POST Request
export async function POST(req: NextRequest) {
  await connectMongoDB();

  const { userId, title, subtitle, content, author, image, locationId } =
    await req.json();

  if (!userId || !title || !subtitle || !content || !author) {
    return NextResponse.json({
      message: "userId, title, subtitle, content, and author are required.",
      status: 400,
    });
  }

  try {
    const newPost = new Post({
      userId,
      subtitle,
      title,
      content,
      author,
      image,
      locationId,
    });

    await newPost.save();

    return NextResponse.json(
      {
        success: true,
        post: newPost,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
// GET Request
export async function GET(req: NextRequest) {
  await connectMongoDB();
  console.log("GET request");
  const userId = req.nextUrl.searchParams.get("userId");
  const postId = req.nextUrl.searchParams.get("postId");
  const limit = parseInt(req.nextUrl.searchParams.get("limit") || "0");

  try {
    let posts: any;
    if (postId) {
      posts = await Post.findById(postId);
      if (!posts) {
        return NextResponse.json(
          {
            message: "Post not found",
          },
          { status: 404 }
        );
      }
    } else if (userId) {
      posts = await Post.find({ userId }).sort({ createdAt: -1 });
      if (!posts || posts.length === 0) {
        return NextResponse.json(
          {
            message: "No posts found for this user",
          },
          { status: 404 }
        );
      }
    } else {
      posts = Post.find().sort({ createdAt: -1 });
      if (limit) {
        posts = posts.limit(limit);
      }
      posts = await posts;
    }

    return NextResponse.json({ success: true, posts }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Internal Server Error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// PUT Request
export async function PUT(req: NextRequest) {
  await connectMongoDB();

  try {
    const { postId, updatedData } = await req.json();

    if (!postId) {
      return new NextResponse(
        JSON.stringify({ message: "Post ID is required" }),
        { status: 400 }
      );
    }

    const updatedPost = await Post.findByIdAndUpdate(postId, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedPost) {
      return new NextResponse(JSON.stringify({ message: "Post not found" }), {
        status: 404,
      });
    }

    return new NextResponse(
      JSON.stringify({ success: true, post: updatedPost }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}

// DELETE Request
export async function DELETE(req: NextRequest) {
  await connectMongoDB();

  const postId = req.nextUrl.searchParams.get("postId");

  if (!postId) {
    return new NextResponse(
      JSON.stringify({ message: "Post ID is required" }),
      { status: 400 }
    );
  }

  try {
    const deletedPost = await Post.findByIdAndDelete(postId);

    if (!deletedPost) {
      return new NextResponse(JSON.stringify({ message: "Post not found" }), {
        status: 404,
      });
    }

    return new NextResponse(
      JSON.stringify({
        success: true,
        message: "Post deleted successfully",
        post: deletedPost,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
      { status: 500 }
    );
  }
}
