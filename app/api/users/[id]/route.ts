import connectMongoDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest, { params }: any) {
  const id = params.id;
  console.log(id);
  return NextResponse.json({ message: "PUT request received" });
}
