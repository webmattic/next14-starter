import { Suspense } from "react";
import PostUser from "../../../components/postUser/postUser";
import styles from "./singlePost.module.css";
import Image from "next/image";
import { getPost } from "../../../lib/data";

// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   if (!res.ok) {
//     throw new Error("Something is drastically wrong");
//   } else {
//     return res.json();
//   }
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  // FETCH DATA WITH AN API
  // const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  const post = await getPost(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/7469866/pexels-photo-7469866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className={styles.img}
          alt=""
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/7469866/pexels-photo-7469866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className={styles.avatar}
            width={50}
            height={50}
            alt=""
          />
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailAuthor}>Published</span>
            <span className={styles.detailDate}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
