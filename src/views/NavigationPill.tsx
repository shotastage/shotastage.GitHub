import React from 'react';
import styles from './NavigationPill.module.scss';

const NavigationPill = () => {
  return (
    <div className={styles.navPill}>
      <a href="/" className={styles.brand}>MagicalApps</a>
      <div className={styles.links}>
        <a href="#" className={styles.link}></a>
        <a href="#" className={styles.link}></a>
        <a href="#" className={styles.link}></a>
        <a href="#" className={styles.link}></a>
      </div>
    </div>
  );
};

export default NavigationPill;
