import React from 'react';
import styles from './Hero.module.css';

export const Hero = () => {
  return( 
  <section className={styles.container}>
    <div className={styles.content}>
    <h1 className={styles.title}>
        Hi, I'm Princy Jaiswal
        </h1>
    <p className={styles.description}>
        An aspiring Web Developer, learning to build websites and projects to grow skills.
        </p>
    <a href="mailto:jprincy933@gmail.com" className={styles.contactBtn}>
        Contact Me
        </a>
    </div>
    <img src="/assets/hero/princyProfile.png" alt="Princy Jaiswal"  className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
  )
};
