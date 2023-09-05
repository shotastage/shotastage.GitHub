import React, { useState } from "react";

import styles from "./TopPopup.module.scss";

export const TopBanner: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.topPopup} onClick={() => setIsOpen(true)}>
      <p>{children}</p>
    </div>
  );
};
