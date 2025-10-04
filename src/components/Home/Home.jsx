import React from 'react';
import styles from './Home.module.css'; // import the CSS module
import { ActivityTracker } from '../ActivityTracker/ActivityTracker';

export const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>EcoBits</h1>
      <p className={styles.subtitle}>Unlock new seeds to grow your garden by meeting your eco-friendly goals!</p>
      
    </div>
  );
};