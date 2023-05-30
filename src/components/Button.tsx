import React from 'react';
import styles from './Button.module.scss';

export const Button: React.FC = (props) => {
  return <button className={styles.button} {...props} />;
};

export const CopyButton: React.FC = (props) => {
  return <button className={styles.copyButton} {...props} />;
};

export const RoundButton: React.FC = (props) => {
  return <button className={styles.roundButton} {...props} />;
};
