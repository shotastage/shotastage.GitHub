import styled from 'styled-components';
import SvgIcon from '../assets/close_button.svg';

const ModalIconObjElm = styled.object`
  width: 18px;
  height: 18px
  pointer-events: none;
`;

export const ModalCloseIcon = () => {
  return (
    <ModalIconObjElm type="image/svg+xml" data={SvgIcon} title='close icon' />
  );
};

export const ModalCloseButton = styled.button`
  background-color: #dbdbdb;
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
      <ModalCloseIcon />
    </ModalCloseButton>
  );
};


export const ModalMaker = () => {

};
