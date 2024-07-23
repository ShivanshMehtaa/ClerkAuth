import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId) {
    return NextResponse.json({ message: "Hello!" });
    // return NextResponse.redirect("/sign-in");
  }

  return NextResponse.json({
    message: `Hello ${user?.firstName}!`,
    data: {
      userId,
      username: user?.username,
    },
  });
}
