import React from 'react';
import { getWindowSize } from '../hooks';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Flex, Spacer } from '../components';
import Image from 'next/image';
import styles from '../styles/component/SHModal.module.scss';


const ModalIconObjElm = styled(Image)`
  pointer-events: none;
`;

export const ModalCloseButton = ({ ...props }) => {
  return (
    <button className={styles.modalCloseButton} { ...props }>{props?.children}</button>
  );
};

export const ModalText = ({ ...props }) => {
  return (
    <p className={styles.modalText} {...props}>{props?.children}</p>
  );
};

export const ModalClose = ({ ...props }) => {
  return (
    <ModalCloseButton {...props}>
      <ModalIconObjElm src='/assets/close_button.svg' width={18} height={18} />
    </ModalCloseButton>
  );
};

export interface SHModalProps {
  children?: React.ReactNode;
  isOpen: boolean | false;
  onClose(initialState: boolean): void;
}

Modal.setAppElement('#__next');

export const SHModal = (props: SHModalProps) => {
  const { height } = getWindowSize();
  const { children, isOpen, onClose } = props;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose(false)}
      closeTimeoutMS={310}
      className='SHModal'
      overlayClassName='SHModalOverlay'
      style={{
        content: {
          height: height,
        },
      }}
    >
      <Flex>
        <Spacer />
        <ModalClose onClick={() => onClose(false)} />
      </Flex>
      {children}
    </Modal>
  );
};

export const SHText = styled.p`
  letter-spacing: 0.15rem;
`;
