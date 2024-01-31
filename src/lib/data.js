import { Post, User } from "./models";
import { dbConnect } from "./utils";

// === Find All Posts ===

export const getPosts = async () => {
  try {
    dbConnect();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to Fetch posts");
  }
};

// === Find Posts By Slug ===

export const getPost = async (slug) => {
  try {
    dbConnect();
    const post = await Post.find({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to Fetch the post");
  }
};

// === Find One User ===

export const getUser = async (id) => {
  try {
    dbConnect();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to Fetch User");
  }
};

// === Find All Users ===

export const getUsers = async () => {
  try {
    dbConnect();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to Fetch Users");
  }
};
