import React from 'react';
import styles from './ProfileCard.module.scss';

type Props = {
  children: React.ReactNode;
};

export const ProfileCard = (props: Props) => {
  return (
    <div className={styles.profileCard}>
        {props.children}
    </div>
  );
};
