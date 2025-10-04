import React from 'react';
import styles from './Taskbar.module.css'; 

export const Taskbar = () => {
  return (
    <nav className={styles.taskbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><a href="/">Home</a></li>
        <li className={styles.navItem}><a href="/about">About</a></li>
        <li className={styles.navItem}><a href="/Login">Login</a></li>
        <li className={styles.navItem}><a href="/profile">Profile</a></li>
      </ul>
    </nav>
  );
};