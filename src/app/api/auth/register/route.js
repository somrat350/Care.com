import bcrypt from "bcryptjs";
import { connect } from "@/lib/connectDB";

const usersCollection = await connect("users");

export async function POST(req) {
  try {
    const newUser = await req.json();

    // Check if user exists
    const userExists = await usersCollection.findOne({ email: newUser.email });

    if (userExists) {
      return Response.json(
        { message: "Email already registered!" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(newUser.password, 10);

    // Save user
    delete newUser.password;
    const result = await usersCollection.insertOne({
      ...newUser,
      password: hashedPassword,
      createdAt: new Date(),
    });

    if (result.insertedId) {
      return Response.json({ success: true });
    }
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
