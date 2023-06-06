import React, { useState } from 'react';
import { PopupModal } from './PopupModal';
import styles from './Footer.module.scss';

type Props = {
  children: React.ReactNode;
};

export const Footer: React.FC<Props> = ({children}) => {
  return <div className={styles.footerArea}>{children}</div>;
};

export const FooterCopyright: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const currentDate = new Date().getFullYear();

  return (
    <p className={styles.copyrightText}>
      Copyright © {currentDate}{' '}
      <a className={styles.footerLink} onClick={() => setIsOpen(true)}>
        Shota Shimazu
      </a>
      , All rights reserved.
      <PopupModal title="確認" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            
          <a className={styles.footerLink} href='https://twitter.com/shotastage' target='_blank' rel='noopener noreferrer'>
        Shota ShimazuのTwitterページ
      </a>
      に遷移します。
          </p>
        </div>
      </PopupModal>
    </p>
  );
};
