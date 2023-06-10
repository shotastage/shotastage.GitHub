import React from "react";
import styles from "./ProfileCard.module.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const ProfileCard = (props: Props) => {
  return (
    <div className={styles.profileCard}>
      <div className="flex flex-row justify-start items-center flex-initial w-64">
        <img
          className={styles.profileImage}
          src="https://pbs.twimg.com/profile_images/1414945557999665161/W_ccWI58_400x400.jpg"
        />
      </div>
      <div className="flex-initial w-32">
        <h1 className={styles.profileName}>Shota Shimazu</h1>
        <h2>sho-ta, shimazu</h2>
        <p>私のプロフィールはこちらから</p>
        {props.children}
      </div>
    </div>
  );
};
