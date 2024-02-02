import { Post } from "../../../lib/models";
import { dbConnect } from "../../../lib/utils";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    dbConnect();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error(error, "Failed to fetch posts");
  }
};
