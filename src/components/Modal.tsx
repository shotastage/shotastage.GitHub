import styled from 'styled-components';
import SvgIcon from '../assets/close_button.svg';

export const ModalCloseIcon = () => {
  return (
    <object type="image/svg+xml" data={SvgIcon} title='close icon' style={{
      width: '22px',
      height: '22px',
      pointerEvents: 'none',
    }} />
  );
};

export const ModalCloseButton = styled.button`
  background-color: #dbdbdb;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalClose = ({ ...props }) => {
  return (
    <ModalCloseButton {...props}>
      <ModalCloseIcon />
    </ModalCloseButton>
  );
};


export const ModalMaker = () => {

};
