import connectMongoDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/lib/model/User";
import bcrypt from "bcrypt";

export async function PUT(req, { params }) {
  const id = params.id;
  console.log(id);
  return NextResponse.json({ message: "PUT request received" });
}

// ENDPOINT für REQUEST
