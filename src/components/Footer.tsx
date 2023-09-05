import React from 'react';
import styles from './Footer.module.scss';

type Props = {
  children: React.ReactNode;
};

export const Footer: React.FC<Props> = ({children}) => {
  return <div className={styles.footerArea}>{children}</div>;
};

export const FooterCopyright: React.FC = () => {

  const currentDate = new Date().getFullYear();

  return (
    <p className={styles.copyrightText}>
      Copyright © {currentDate}{' '}
      <a className={styles.footerLink} >
        Shota Shimazu
      </a>
      , All rights reserved.

    </p>
  );
};
