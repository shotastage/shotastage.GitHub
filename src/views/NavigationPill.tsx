'use client';

import React, { useState, useEffect } from "react";
import styles from "./NavigationStyle.module.scss";
import layout from "./NavigationLayout.module.scss";

interface NavigationPillProps {
  addBackButton?: boolean;
}

const NavigationPill: React.FC<NavigationPillProps> = ({ addBackButton }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsSticky(offset > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.navPill} ${isSticky ? styles.sticky : ''}`}>
      {addBackButton && (
        <span className={layout.backNavigation}>
          <button onClick={() => window.history.back()} className={styles.backNavigation}>
            Back
          </button>
        </span>
      )}
      <a href="/" className={styles.brand}>
        MagicalApps
      </a>
      <div className={styles.links}>
        <a href="#" className={styles.link}></a>
        <a href="#" className={styles.link}></a>
        <a href="#" className={styles.link}></a>
      </div>
    </div>
  );
};

export default NavigationPill;
