import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return <button className={styles.button} {...props} />;
};

export const CopyButton: React.FC<ButtonProps> = (props) => {
  return <button className={styles.copyButton} {...props} />;
};

export const RoundButton: React.FC<ButtonProps> = (props) => {
  return <button className={styles.roundButton} {...props} />;
};
