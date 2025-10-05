import React from 'react';
import styles from './Taskbar.module.css'; 

export const Taskbar = () => {
  return (
    <nav className={styles.taskbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><a href="/">Home</a></li>
        <li className={styles.navItem}><a href="/activity">Activities</a></li>
        <li className={styles.navItem}><a href="/about">About</a></li>
        <li className={styles.navItem}><a href="/login">Login</a></li>
        <li className={styles.navItem}><a href="/garden">My Garden</a></li>
      </ul>
    </nav>
  );
};