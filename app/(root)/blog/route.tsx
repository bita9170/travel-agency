import Post from "@/lib/model/Posts";
import connectMongoDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectMongoDB();

  const userId = req.nextUrl.searchParams.get("userId");
  const postId = req.nextUrl.searchParams.get("postId");

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
      posts = await Post.find({ userId });
      if (!posts || posts.length === 0) {
        return NextResponse.json(
          {
            message: "No posts found for this user",
          },
          { status: 404 }
        );
      }
    } else {
      posts = await Post.find();
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
