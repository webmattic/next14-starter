"use server";
import { revalidatePath } from "next/cache";
import { dbConnect } from "./utils";
import { Post, User } from "./models";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

// ====== Post Add ======
export const addPost = async (prevState, formData) => {
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
    revalidatePath("/admin");
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
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};
// ====== User Add ======
export const addUser = async (prevState, formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    dbConnect();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });
    await newUser.save();
    revalidatePath("/admin");
    console.log("Post saved to DB");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

// ====== User Delete ======
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    dbConnect();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("Post Deleted fro DB");
    revalidatePath("/admin");
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
// Always check first if the User exists in the Database or not.

export const register = async (previousState, formData) => {
  const { username, email, img, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    // return "Passwords do not match";
    return { error: "Passwords do not match" };
  }

  try {
    dbConnect();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "User name already exists" };
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
    return { success: true };
  } catch (error) {
    console.log(error, "Something went wrong in creating a New User");
    return { error: "Something went wrong in creating a New User" };
  }
};

// === Login with Credentials
export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error, "Something went wrong in creating a New User");

    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid Username or Password" };
    }

    throw error;
  }
};
