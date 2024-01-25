import styles from "./singlePost.module.css";
import Image from "next/image";

const SinglePostPage = () => {
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
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/7469866/pexels-photo-7469866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className={styles.avatar}
            width={50}
            height={50}
            alt=""
          />
          <div className={styles.detailText}>
            <span className={styles.detailAuthor}>Author</span>
            <span className={styles.detailDate}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailAuthor}>Published</span>
            <span className={styles.detailDate}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          porro earum molestiae, natus quaerat, doloribus illo amet perferendis
          eum quia repellendus qui sequi. Et inventore labore recusandae
          sapiente nesciunt hic?
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
