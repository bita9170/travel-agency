// ENDPOINT für REQUEST

import connectMongoDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/lib/model/User";
import bcrypt from "bcrypt";

// LOGIN Get user
export async function GET() {
  try {
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({ users: users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

// Register Post user
export async function POST(req) {
  try {
    const { name, username, address, email, password } = await req.json();
    const saltRounds = 10;

    await connectMongoDB();

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

// Delete

export async function DELETE(req) {
  try {
    const { userId } = await req.json();

    await connectMongoDB();

    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

//  PUT request to update a user's details such as their name, email, or address
export async function PUT(req) {
  try {
    const { userId, name, username, address, email } = await req.json();

    await connectMongoDB();

    const updateUser = await User.findByIdAndUpdate(
      userId,
      { name, username, address, email },

      { new: true }
    );

    if (!updateUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ user: updateUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
