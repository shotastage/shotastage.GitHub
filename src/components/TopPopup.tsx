import React, { useState } from "react"
import {
  PopupModal
} from "@/components";
import styles from './Toppopup.module.scss';

export const TopBanner: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.topPopup} onClick={() => setIsOpen(true)}>
      <p>{children}</p>
      <PopupModal title="詳細情報" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            現在このWebページは開発中です。表示されている内容が事実と異なっていたり表示が崩れる場合があります。
          </p>
        </div>
      </PopupModal>
    </div>
  );
};
