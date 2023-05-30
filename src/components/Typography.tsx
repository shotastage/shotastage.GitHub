import React from 'react';
import styles from './Typography.module.scss';

export const Heading: React.FC = (props) => {
  return <div className={styles.heading} {...props} />;
};

export const Heading1: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <h1 className={styles.heading1}>{children}</h1>;
};

export const Heading2: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <h2 className={styles.heading2}>{children}</h2>;
};

export const Heading3: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <h3 className={styles.heading3}>{children}</h3>;
};

export const Heading4: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <h4 className={styles.heading4}>{children}</h4>;
};

export const Heading5: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <h5 className={styles.heading5}>{children}</h5>;
};
