import React from "react";
import styles from "./HighlightCard.module.scss";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export const HighlightCard = (props: Props) => {
  return (
    <div className={styles.profileCard}>
      <div className="flex-initial w-42">
        <h1 className={styles.profileName}>Under maintenance</h1>
        <h2>恐れ入りますが、現在メンテナンス中です</h2>
        <p></p>
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
