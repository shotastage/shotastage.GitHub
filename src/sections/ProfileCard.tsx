import React from "react";
import styles from "./ProfileCard.module.scss";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const ProfileCard = (props: Props) => {
  return (
    <div className={styles.profileCard}>
      <div className="flex flex-row justify-start items-center flex-initial w-64">
        <img
          className={styles.profileImage}
          src="https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Fimages%2Fprofile_photo.jpeg?alt=media&token=7358a8b5-34b9-4a9e-aa24-ea9c978ea017"
        />
      </div>
      <div className="flex-initial w-42">
        <h1 className={styles.profileName}>Shota Shimazu</h1>
        <h2>sho-ta, shimazu</h2>
        <p>私のプロフィールはこちらから</p>
        {props.children}
      </div>
      <div
        className="flex-initial w-18 flex justify-center items-end"
        style={{ height: "100%" }}
      >
        <button className={styles.profileButton}>→</button>
      </div>
    </div>
  );
};
