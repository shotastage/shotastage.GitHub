"use client";

import React from "react";
import Modal from "react-modal";
import Image from "next/image";
import styles from "./NModal.module.scss";
import { useRouter } from 'next/navigation'


export const ModalCloseButton = ({ ...props }) => {
  return (
    <button className={styles.modalCloseButton} {...props}>
      {props?.children}
    </button>
  );
};

export const ModalText = ({ ...props }) => {
  return (
    <p className={styles.modalText} {...props}>
      {props?.children}
    </p>
  );
};

export const SHText = ({ ...props }) => {
  return (
    <p className={styles.shText} {...props}>
      {props?.children}
    </p>
  );
};

export const ModalClose = ({ ...props }) => {
  return (
    <ModalCloseButton {...props}>
      <Image
        src="/assets/close_button.svg"
        width={18}
        height={18}
        className={styles.modalIconObjElm}
        alt="Close Icon"
      />
    </ModalCloseButton>
  );
};

export interface SHModalProps {
  children?: React.ReactNode;
  isOpen: boolean | false;
  onClose(initialState: boolean): void;
}

// Modal.setAppElement("#__next");

export const NModal = (props: SHModalProps) => {
  const router = useRouter();

  const { children, isOpen, onClose } = props;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose(false)}
      closeTimeoutMS={310}
      className="SHModal"
      overlayClassName="SHModalOverlay"
    >
      <div>
        <ModalClose onClick={() => onClose(false)} />
      </div>
      <div>{children}</div>
    </Modal>
  );
};
