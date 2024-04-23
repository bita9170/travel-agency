import connectMongoDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/lib/model/User";

export async function GET() {
  try {
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({ users: users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function POST(req) {
  try {
    const { username, email } = await req.json();
    await connectMongoDB();
    await User.create({ username, email });
    return NextResponse.json({ message: "Users Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 201 });
  }
}
