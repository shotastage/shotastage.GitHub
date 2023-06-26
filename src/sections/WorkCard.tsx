import React from "react";
import Link from "next/link";
import styles from "./WorkCard.module.scss";
import { Url } from "next/dist/shared/lib/router/router";

type Props = {
  children?: React.ReactNode;
  className?: string;
  cardTitle?: string;
  href?: Url;
  moreEvent?: any;
};

export const WorkCardsContainer = (props: Props) => {
  return (
    <div className={styles.workContainer}>
      <div className={styles.workCards}>{props.children}</div>
    </div>
  );
};

export const WorkCard = (props: Props) => {
  const linkableButton = () => {
    if (props.href) {
      return (
        <Link href={`/posts/${props?.href}`}>
          <button className={styles.profileButton} onClick={props.moreEvent}>
            →
          </button>
        </Link>
      );
    } else {
      return (
        <button className={styles.profileButton} onClick={props.moreEvent}>
          →
        </button>
      );
    }
  };

  return (
    <div className={styles.workCard}>
      <div className="flex-initial w-42">
        <h1 className={styles.profileName}>{props.cardTitle}</h1>
        {props.children}
      </div>
      <div
        className="flex-initial w-18 flex justify-center items-end"
        style={{ height: "100%" }}
      >
        {linkableButton()}
      </div>
    </div>
  );
};
