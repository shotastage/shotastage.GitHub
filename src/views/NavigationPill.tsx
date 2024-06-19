import React from "react";
import styles from "./NavigationStyle.module.scss";
import layout from "./NavigationLayout.module.scss";

interface NavigationPillProps {
  addBackButton?: boolean;
}

const NavigationPill: React.FC<NavigationPillProps> = ({ addBackButton }) => {
  return (
    <div className={styles.navPill}>
      {addBackButton && (
        <span className={layout.backNavigation}>
          <a href="javascript:history.back()" className={styles.backNavigation}>
            Back
          </a>
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
