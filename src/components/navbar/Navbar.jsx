"use client";

import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <a href="/">Sayyad Enterprises</a>
      </div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
