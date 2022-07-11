import React from 'react';
import { Navbar, Footer, FooterCopyright, Flex } from '../components';
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from '../components';

const Components = () => {
  return (
    <React.Fragment>
      <Navbar>Components</Navbar>
      <Flex flexDirection='column'>
        <Heading2>Typography</Heading2>
        <Flex
          flexDirection='column'
          alignItems='flex-start'
          margin='1rem 1rem 1rem 1rem'
          width='80%'
        >
          <Heading1>Heading1</Heading1>
          <Heading2>Heading2</Heading2>
          <Heading3>Heading3</Heading3>
          <Heading4>Heading4</Heading4>
          <Heading5>Heading5</Heading5>
        </Flex>
      </Flex>
      <Footer>
        <FooterCopyright />
      </Footer>
    </React.Fragment>
  );
};

export default Components;
