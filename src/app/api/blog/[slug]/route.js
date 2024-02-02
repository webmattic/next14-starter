import { Post } from "../../../../lib/models";
import { dbConnect } from "../../../../lib/utils";
import { NextResponse } from "next/server";

export const GET = async (requests, { params }) => {
  const { slug } = params;
  try {
    dbConnect();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error(error, "Failed to fetch post");
  }
};
export const DELETE = async (requests, { params }) => {
  const { slug } = params;
  try {
    dbConnect();
    await Post.deleteOne({ slug });
    return NextResponse.json("Post Deleted");
  } catch (error) {
    console.log(error);
    throw new Error(error, "Failed to delete post");
  }
};
