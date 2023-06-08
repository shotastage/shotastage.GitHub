import React from 'react';
import styles from './ProfileCard.module.scss';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const ProfileCard = (props: Props) => {
  return (
    <div className={styles.profileCard}>
      <h1 className={styles.profileName}>Shota Shimazu</h1>
      <h2>sho-ta, shimazu</h2>
      <p>私のプロフィールはこちらから</p>
      {props.children}
    </div>
  );
};
 