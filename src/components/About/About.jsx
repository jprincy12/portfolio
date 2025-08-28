import React from "react";

import styles from "./About.module.css";
export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src="/assets/about/aboutImage.png"
          alt="laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src="/assets/about/cursorIcon.png"
              alt="cursor"
              className={styles.cursorIcon}
            />
            <div className={styles.aboutItemText}>
              <p>
                I am currently pursuing my
                Bachelor of Science in Information Technology.</p>
                <p>I am an aspiring web developer with a passion for creating functional and
                user-friendly web applications.</p>
                <p>I have been learning and building projects in HTML, CSS, JavaScript, and React, and enjoy
                turning ideas into real web solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
