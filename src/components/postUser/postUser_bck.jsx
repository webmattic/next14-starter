import React from "react";
import styles from "./postUser.module.css";
import { getUser } from "../../lib/data";

// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );
//   if (!res.ok) {
//     throw new Error("Something is drastically wrong");
//   } else {
//     return res.json();
//   }
// };

const PostUser = async ({ userId }) => {
  // FETCH DATA WITH AN API
  //   const user = await getData(userId);

  // FETCH DATA WITHOUT AN API
  const user = await getUser(userId);
  return (
    <div>
      <div className={styles.container}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
