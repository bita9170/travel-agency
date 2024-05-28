import Post from "@/lib/model/Posts";
import connectMongoDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectMongoDB();

  const { userId, title, content, author, image, locationId } =
    await req.json();

  if (!userId || !title || !content || !author) {
    return NextResponse.json({
      message: "userId, title, content, and author are required.",
      status: 400,
    });
  }

  try {
    const newPost = new Post({
      userId,
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

export async function DELETE(req: NextRequest) {
  try {
    await connectMongoDB();

    const postId = req.nextUrl.searchParams.get("postId");

    if (!postId) {
      return NextResponse.json(
        { message: "Post ID is required" },
        { status: 400 }
      );
    }

    const deletedPost = await Post.findByIdAndDelete(postId);

    if (!deletedPost) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(
      { message: "Post deleted successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
