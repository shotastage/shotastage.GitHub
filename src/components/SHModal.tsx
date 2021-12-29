import React from 'react';
import styled from 'styled-components';
import Modal from "react-modal";
import SvgIcon from '../assets/close_button.svg';

const ModalIconObjElm = styled.img`
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

export const ModalClose = ({ ...props }) => {
  return (
    <ModalCloseButton {...props}>
      <ModalIconObjElm src={SvgIcon} alt='close icon' />
    </ModalCloseButton>
  );
};

export interface SHModalProps {
  children?: React.ReactNode;
  isOpen: boolean | false;
  onClose(initialState: boolean): void;
}

Modal.setAppElement("#root");

export const SHModal = (props: SHModalProps) => {
  const { children, isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onRequestClose={() => onClose(false)} closeTimeoutMS={150} style={{
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(65, 65, 65, 0.75)'
      },
      content: {
        position: 'absolute',
        top: '40px',
        left: '40px',
        right: '40px',
        bottom: '40px',
        border: 'none',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '20px',
        outline: 'none',
        padding: '20px'
      }
    }}>
      <ModalClose onClick={() => onClose(false)} />
      {children}
    </Modal>
  );
};
