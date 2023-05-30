import React from 'react';
import styles from './Toppopup.module.scss';

export const TopBanner: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={styles.topPopup}>
      <p>{children}</p>
    </div>
  );
};
