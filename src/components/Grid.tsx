import React, { ReactNode } from 'react';
import './Grid.module.scss';

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className='containerStyleBase container'>{children}</div>;
};

const FullContainer = ({ children }: Props) => {
  return <div className='containerStyleBase fullContainer'>{children}</div>;
};

const MarginSpacer = () => {
  return <div className='marginSpacer'></div>;
};

const Col = ({ children }: Props) => {
  return <div className='col'>{children}</div>;
};

const Row = ({ children }: Props) => {
  return <div className='row'>{children}</div>;
};

// ... and so on for the rest of the components

export { Container, FullContainer, MarginSpacer, Col, Row };
