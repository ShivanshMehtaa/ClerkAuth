"use server";

import ClerkUser from "@/models/user.model";
import { dbConnect } from "@/dbConnection";

export async function createUser(user: any) {
  try {
    await dbConnect();
    const newUser = new ClerkUser(user);
    const savedUser = await newUser.save();
    return JSON.parse(JSON.stringify(savedUser));
  } catch (error) {
    console.log(error);
  }
}
