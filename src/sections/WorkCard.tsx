import React from "react";
import styles from "./WorkCard.module.scss";

type Props = {
  children?: React.ReactNode;
  className?: string;
};


export const WorkCardsContainer = (props: Props) => {
  return (
    <div className={styles.workContainer}>
      <div className={styles.workCards}>
      {props.children}
      </div>
    </div>
  );
};


export const WorkCard = (props: Props) => {
  return (
    <div className={styles.workCard}>
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
