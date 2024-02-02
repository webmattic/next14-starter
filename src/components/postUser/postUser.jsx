import React from "react";
import styles from "./postUser.module.css";
import { getUser } from "../../lib/data";
import Image from "next/image";

const PostUser = async ({ userId }) => {
  const user = await getUser(userId);
  return (
    <div>
      <div className={styles.container}>
        <Image
          src={user.img?user.img:'/noavatar.png'}
          className={styles.avatar}
          width={50}
          height={50}
          alt=""
        />
        <div className={styles.texts}>
          <span className={styles.title}>Author</span>
          <span className={styles.username}>{user.username}</span>
        </div>
      </div>
    </div>
  );
};

export default PostUser;
