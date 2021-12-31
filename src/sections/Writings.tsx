import React from "react";
import {
  Container,
  Box,
  Heading2,
  Card,
  CardIcon,
  CardBody,
  CardHeading,
  CardDescription
} from '../components';

export const Writings = () => {
  return (
    <React.Fragment>
      <Container>
        <Box marginTop='80px' marginBottom='30px'>
          <Heading2>Writing</Heading2>
        </Box>
        <Box>
          <Card>
            <CardBody>
              <CardIcon type="image/svg+xml" data={`${process.env.PUBLIC_URL}/assets/tipstock.svg`} style={{ width: "100%" }} />
              <CardDescription>TIPSTOCK!はITに関するTIPSやニュースをプログラマーやエンジニアの方を含め多くの方にお届けするメディアです.</CardDescription>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card>
            <CardBody>
              <CardHeading>Blog</CardHeading>
              <CardDescription>@shotastageのブログ記事です</CardDescription>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card style={{ background: "#1be31b" }}>
            <CardBody>
              <CardHeading>Qiita</CardHeading>
              <CardDescription>@shotastageのQiita記事はこちら</CardDescription>
            </CardBody>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
}
