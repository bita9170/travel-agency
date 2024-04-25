// // ENDPOINT für REQUEST
// import { authenticateToken } from "@/lib/auth";
// import connectMongoDB from "@/lib/mongodb";
// import { NextRequest, NextResponse } from "next/server";
// import User from "@/lib/model/User";
// import bcrypt from "bcrypt";

// // LOGIN Get user
// export async function GET() {
//   try {
//     const user = await authenticateToken(req);
//     await connectMongoDB();
//     const users = await User.find();
//     return NextResponse.json({ users: users }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 400 });
//   }
// }

// // Register Post user
// export async function POST(req) {
//   try {
//     const { name, username, address, email, password } = await req.json();
//     const saltRounds = 10;

//     await connectMongoDB();

//     const hashedPassword = await bcrypt.hash(password, saltRounds);

//     await User.create({
//       name,
//       username,
//       address,
//       email,
//       password: hashedPassword,
//     });
//     return NextResponse.json({ message: "Users Created" }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 201 });
//   }
// }

// // Delete

// export async function DELETE(req) {
//   try {
//     const { userId } = await req.json();

//     await connectMongoDB();

//     const deletedUser = await User.findByIdAndDelete(userId);
//     if (!deletedUser) {
//       return NextResponse.json({ message: "User not found" }, { status: 404 });
//     }

//     return NextResponse.json({ message: "User deleted" }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 400 });
//   }
// }

// //  PUT request to update a user's details such as their name, email, or address
// export async function PUT(req) {
//   try {
//     const { userId, name, username, address, email } = await req.json();

//     await connectMongoDB();

//     const updateUser = await User.findByIdAndUpdate(
//       userId,
//       { name, username, address, email },

//       { new: true }
//     );

//     if (!updateUser) {
//       return NextResponse.json({ message: "User not found" }, { status: 404 });
//     }
//     return NextResponse.json({ user: updateUser }, { status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 400 });
//   }
// }

// Assuming this is in pages/api/users.js or a similar API route file

// pages/api/users.js

// pages/api/users/route.js

import connectMongoDB from "@/lib/mongodb";
import User from "@/lib/model/User";
import bcrypt from "bcrypt";
import { authenticateToken } from "@/lib/auth";

// Handle GET requests
export async function GET(req, res) {
  try {
    await authenticateToken(req);
    await connectMongoDB();
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}

// Handle POST requests
export async function POST(req, res) {
  try {
    const { name, username, address, email, password } = req.body;
    await connectMongoDB();
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({
      name,
      username,
      address,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User Created", newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Handle DELETE requests
export async function DELETE(req, res) {
  try {
    const { userId } = req.body;
    await connectMongoDB();
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Handle PUT requests
export async function PUT(req, res) {
  try {
    const { userId, name, username, address, email } = req.body;
    await connectMongoDB();
    const updateUser = await User.findByIdAndUpdate(
      userId,
      { name, username, address, email },
      { new: true }
    );
    if (!updateUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user: updateUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
