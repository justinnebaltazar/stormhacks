import React from 'react';
import styles from './Footer.module.css'; // import the CSS module

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}> StormHacks {new Date().getFullYear()}: ReLeaf created by Justinne Baltazar, Rio Maruyama, John Camino</p>
    </footer>
  );
};