import styles from "./blog.module.css";
import PostCard from "../../components/postCard/PostCard";
import { getPosts } from "../../lib/data";

// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Something is drastically wrong");
//   } else {
//     return res.json();
//   }
// };

const BlogPage = async () => {
  // FETCH DATA WITH AN API
  // const posts = await getData();

  // FETCH DATA WITHOUT AN API
  const posts = await getPosts();

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
