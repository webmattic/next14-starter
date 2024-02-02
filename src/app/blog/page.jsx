import styles from "./blog.module.css";
import PostCard from "../../components/postCard/PostCard";
import { getPosts } from "../../lib/data";

// Fetch Data with an API
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error("Somthing is wrong");
  }
  return res.json();
};

const BlogPage = async () => {
  // Fetch Data with API

  const posts = await getData();

  // Fetch Data without an API

  // const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
