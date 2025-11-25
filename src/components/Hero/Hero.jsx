import React from 'react';
import styles from './Hero.module.css';

export const Hero = () => {

  const handleDownloadCV = () => {

    const cvUrl = '/assets/cv/princy-cv.pdf';
  
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Princy_Jaiswal_CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return( 
  <section className={styles.container}>
    <div className={styles.content}>
    <h1 className={styles.title}>
        Hi, I'm Princy Jaiswal
        </h1>
    <p className={styles.description}>
        An aspiring Web Developer, learning to build websites and projects to grow skills.
        </p>
    <div className={styles.buttonContainer}>
      <a href="mailto:jprincy933@gmail.com" className={styles.contactBtn}>
          Contact Me
      </a>
      <button onClick={handleDownloadCV} className={styles.downloadBtn}>
          Download CV
      </button>
    </div>
    </div>
    <img src="/assets/hero/princyProfile.png" alt="Princy Jaiswal"  className={styles.heroImg}/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
  </section>
  )
};