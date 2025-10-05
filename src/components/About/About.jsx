import React from 'react';
import styles from './About.module.css';

export const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.title}>About Our Project</h1>
        <p className={styles.subtitle}>
          We wanted to make sustainability feel less like a chore and more like a game. 
          Eco-friendly habits are sometimes framed around making a sacrifice or guilt, 
          which can discourage people from doing them. Our inspiration came from the idea 
          of turning small actions into a fun and rewarding experience, like growing a 
          digital garden that reflects your real-world impact.
        </p>
      </div>

      <div className={styles.box}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
        <p>Justinne Baltazar: <a href = "https://www.linkedin.com/in/justinnebaltazar/"> LinkedIn </a></p>
        <p>John Camino: <a href = "https://www.linkedin.com/in/john-aldrix-camino/">LinkedIn</a></p>
        <p>Rio Maruyama: <a href = "https://www.linkedin.com/in/rio-maruyama/"> LinkedIn </a> </p>
        </p>
      </div>
    </div>
  );
};