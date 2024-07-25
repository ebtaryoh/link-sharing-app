// pages/api/register.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "../../../../src/lib/dbConnect";
import bcrypt from "bcrypt";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const { db } = await connectToDatabase();
  const existingUser = await db.collection("users").findOne({ email });

  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await db.collection("users").insertOne({
    email,
    password: hashedPassword,
  });

  res.status(201).json({ message: "User created", userId: result.insertedId });
}
