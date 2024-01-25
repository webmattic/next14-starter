import styles from "./about.module.css";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger bolder and creative
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempora
          ipsum suscipit sint repellendus voluptatum, aperiam, laborum nobis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempora
          ipsum suscipit sint repellendus voluptatum, aperiam, laborum nobis.
        </p>

        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of Experience</p>
          </div>

          {/* ----- */}

          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of Experience</p>
          </div>

          {/* ----- */}

          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
