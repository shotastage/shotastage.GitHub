import React from 'react';
import styles from './AppComponent.module.scss';

type PropsWithChildren = {
  children: React.ReactNode;
}

export const AppContainer: React.FC<PropsWithChildren> = ({children}) => {
  return <div className={styles.appContainer}>{children}</div>;
};

export const Heading1: React.FC<PropsWithChildren> = ({children}) => {
  return <h1 className={styles.heading1}>{children}</h1>;
};

export const Name: React.FC<PropsWithChildren> = ({children}) => {
  return <span className={styles.name}>{children}</span>;
};

export const UserName: React.FC<PropsWithChildren> = ({children}) => {
  return <span className={styles.userName}>{children}</span>;
};

export const NameArea: React.FC<PropsWithChildren> = ({children}) => {
  return <h1 className={styles.nameArea}>{children}</h1>;
};

export const Avator: React.FC<{ src: string, alt: string }> = ({src, alt}) => {
  return <img className={styles.avator} src={src} alt={alt} />;
};
