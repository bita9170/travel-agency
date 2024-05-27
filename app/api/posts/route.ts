// app/api/posts/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import {
  getPostById,
  updatePost,
  deletePost,
} from "@/controllers/postController";

export async function GET(req: NextRequest) {
  return getPostById(req);
}

export async function PUT(req: NextRequest) {
  return updatePost(req);
}

export async function DELETE(req: NextRequest) {
  return deletePost(req);
}
