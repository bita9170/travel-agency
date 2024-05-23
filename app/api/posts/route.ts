// app/api/posts/route.ts
import { NextRequest } from "next/server";
import { createPost, getPosts } from "@/lib/controllers/postController";

export async function POST(req: NextRequest) {
  return createPost(req);
}

export async function GET(req: NextRequest) {
  return getPosts(req);
}
