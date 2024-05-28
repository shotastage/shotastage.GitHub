import React from 'react';
import styles from './NavigationPill.module.scss';

const NavigationPill = () => {
  return (
    <div className={styles.navigationPill}>
      <div className={styles.brand}>Brand</div>
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
