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
        <h1 className={styles.title}>Future Works</h1>
        <p className={styles.subtitle}> We want to preface that this project was built during a 24‑hour hackathon, so what you see is just the foundation of a much bigger vision. If we continue developing this project, here are some of the features we plan to add:</p>
          <ul className={styles.list}>
    <li>
      <strong>Social:</strong> Allow users to interact with their friends on the app, whether it be visiting their gardens, trading seeds, or contributing to each other's gardens
    </li>
    <li>
      <strong>More Integrations:</strong> Connect fitness apps or transit apps to automatically log activities
    </li>
    <li>
      <strong>Goals:</strong> Set personal sustainability goals every week and track progress
    </li>
    <li>
      <strong>Educational:</strong> Provide sustainability facts or tips to spread awareness
    </li>
    <li>
      <strong>Community Awareness:</strong> Explore integrations with real-world sustainability initiatives and inform users with sustainable projects around the area
    </li>
  </ul>


      </div>

      <div className={styles.box}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
        <p>Justinne Baltazar: <a href = "https://www.linkedin.com/in/justinnebaltazar/">LinkedIn</a> <a href="https://github.com/justinnebaltazar">GitHub</a></p>
        <p>John Camino: <a href = "https://www.linkedin.com/in/john-aldrix-camino/">LinkedIn</a> <a href = "https://github.com/jcmno"> GitHub</a></p>
        <p>Rio Maruyama: <a href = "https://www.linkedin.com/in/rio-maruyama/">LinkedIn</a> <a href ="https://github.com/maruyaya"> GitHub</a> </p>
        </p>
      </div>
    </div>
  );
};