import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Me</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:jprincy933@gmail.com">
            <img src="/assets/contact/emailIcon.png" alt="email" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/jprincy12">
            <img src="/assets/contact/githubIcon.png" alt="github" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/princy-jaiswal-105a46219/">
            <img src="/assets/contact/linkedinIcon.png" alt="linkedin" />
          </a>
        </li>
      </ul>
      <p className={styles.date}>
        © {new Date().getFullYear()} Princy Jaiswal. All rights reserved.
      </p>
    </footer>
  );
};