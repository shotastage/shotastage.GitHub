import React, { ReactNode, CSSProperties } from 'react';
import styles from './Typography.module.scss';

interface HeadingProps {
  children?: ReactNode;
  style?: CSSProperties;
  id?: string;
}

export const Heading: React.FC<HeadingProps> = ({ children, style }) => {
  return <div className={styles.heading} style={style}>{children}</div>;
};  

export const Heading1: React.FC<HeadingProps> = ({ children, id }) => {
  return <h1 className={styles.heading1} id={id}>{children}</h1>;
};

export const Heading2: React.FC<HeadingProps> = ({ children , id}) => {
  return <h2 className={styles.heading2} id={id}>{children}</h2>;
};

export const Heading3: React.FC<HeadingProps> = ({ children , id}) => {
  return <h3 className={styles.heading3} id={id}>{children}</h3>;
};

export const Heading4: React.FC<HeadingProps> = ({ children , id}) => {
  return <h4 className={styles.heading4} id={id}>{children}</h4>;
};

export const Heading5: React.FC<HeadingProps> = ({ children , id}) => {
  return <h5 className={styles.heading5} id={id}>{children}</h5>;
};
