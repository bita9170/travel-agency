import connectMongoDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/lib/model/User";
import bcrypt from "bcrypt";

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
  console.log("test");
  try {
    const { name, username, address, email, password } = await req.json();
    const saltRounds = 10;

    await connectMongoDB(); //connect to Database

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await User.create({
      name,
      username,
      address,
      email,
      password: hashedPassword,
    });
    return NextResponse.json({ message: "Users Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 201 });
  }
}

// ENDPOINT für REQUEST
