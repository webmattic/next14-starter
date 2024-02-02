import { Suspense } from "react";
import PostUser from "../../../components/postUser/postUser";
import styles from "./singlePost.module.css";
import Image from "next/image";
// import { getPost } from "../../../lib/data";

//FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
  if (!res.ok) {
    throw new Error("Something went wrong with Single Post");
  }
  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  // const post = await getPost(slug);
  const post = await getData(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  //FETCH DATA WITH AN API
  const post = await getData(slug);

  //FETCH DATA WITHOUT AN API
  // const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={post.img} className={styles.img} alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailAuthor}>Published</span>
            <br />
            <span className={styles.detailDate}>
              {post.createdAt ? (
                post.createdAt.toString().slice(4, 16)
              ) : (
                <span style={{ fontSize: "0.9rem", marginTop: "1rem" }}>
                  No Date
                </span>
              )}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
