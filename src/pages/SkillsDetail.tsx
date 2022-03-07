import React from 'react';
import { Navbar, Footer, FooterCopyright, Flex } from '../components';
import { Box, Heading2 } from '../components';

const SkillsDetail = () => {

  return (
    <React.Fragment>
      <Navbar>⏪ ホームへ</Navbar>
      <Flex flexDirection='column' alignItems='flex-start' height="100%">
        <Box marginLeft="1em" marginBottom="2em" marginTop="2em">
          <Heading2>スキルセットなど</Heading2>
        </Box>
        <Box marginLeft="1em">
          <a href="https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2FSkillSheet_2021F.pdf?alt=media">PDFリンク</a>
        </Box>
        <iframe
          title="skill-set"
          width="100%"
          height="100%"
          style={{ border: "none", minHeight: "600px" }}
          src="https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2FSkillSheet_2021F.pdf?alt=media" />

      </Flex>
      <Footer>
        <FooterCopyright />
      </Footer>
    </React.Fragment>
  );
}

export default SkillsDetail;
