import React from "react";
import styles from "./HighlightCard.module.scss";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const HighlightCard = (props: Props) => {
  return (
    <div className={styles.profileCard}>
      <div className="flex flex-row justify-start items-center flex-initial w-64">
      </div>
      <div className="flex-initial w-42">
        <h1 className={styles.profileName}>Highlight</h1>
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
