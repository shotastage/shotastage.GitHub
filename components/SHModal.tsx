import React from 'react';
import { getWindowSize } from '../hooks';
import styled from 'styled-components';
import Modal from 'react-modal';
import { Flex, Spacer } from '../components';
import Image from 'next/image';


const ModalIconObjElm = styled(Image)`
  width: 18px;
  height: 18px
  pointer-events: none;
`;

export const ModalCloseButton = styled.button`
  background-color: #e4e4e4;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalText = styled.p`
  line-height: 1.7rem;
`;

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
