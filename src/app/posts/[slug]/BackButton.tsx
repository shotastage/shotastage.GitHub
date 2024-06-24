// BackButton.tsx
"use client";

import { useRouter } from 'next/router';
import styles from './styles.module.css';

export default function BackButton() {
  const router = useRouter();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    router.back();
  };

  return (
    <a href="#" onClick={handleBack} className={styles.backButton}>
      戻る
    </a>
  );
}
