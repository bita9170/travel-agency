// api/users/route.ts

import connectMongoDB from "@/lib/mongodb";
import User from "@/lib/model/User";
import bcrypt from "bcrypt";
import { authenticateToken } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

// Handle GET requests
export async function GET(req: NextRequest) {
  try {
    await authenticateToken(req);
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({ users }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
}

// Handle POST requests
export async function POST(req: NextRequest) {
  try {
    const { name, username, address, email, password } = await req.json();
    await connectMongoDB();

    const saltRounds = 10; //Salting: Beim Salting wird ein zusätzlicher, zufälliger Datenstring an das ursprüngliche Passwort angehängt, bevor dieses gehasht wird. Dieser zusätzliche String wird als "Salt" bezeichnet. Salting hilft, gegen Rainbow-Table-Angriffe zu schützen, bei denen Angreifer vorberechnete Hashes verwenden, um Passwörter schnell zu entschlüsseln.

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      name,
      username,
      address,
      email,
      password: hashedPassword,
    });
    return NextResponse.json(
      { message: "User Created", newUser },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// Handle DELETE requests
export async function DELETE(req: NextRequest) {
  try {
    const { userId } = await req.json();

    await connectMongoDB();

    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "User deleted" }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

// Handle PUT requests
export async function PUT(req: NextRequest) {
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
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
