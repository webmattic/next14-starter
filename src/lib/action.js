"use server";
import { revalidatePath } from "next/cache";
import { dbConnect } from "./utils";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    dbConnect();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    revalidatePath("/blog");
    console.log("Post saved to DB");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

// ====== Post Delete ======
export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    dbConnect();
    await Post.findByIdAndDelete(id);
    console.log("Post Deleted fro DB");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

// ==== Github Login ====

export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};
export const handleLogout = async () => {
  "use server";
  await signOut("github");
};

// ==== Registration ====
export const register = async (formData) => {
  const { username, email, img, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return "Passwords do not match";
  }

  try {
    dbConnect();

    const user = await User.findOne({ username });

    if (user) {
      return "User Exists";
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      img,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("New User saved to DB");
  } catch (error) {
    console.log(error, "Something went wrong in creating a New User");
    return { error: "Something went wrong in creating a New User" };
  }
};
