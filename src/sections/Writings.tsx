import React from "react";
import {
  Container,
  Grid,
  GridGlobal,
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
        <Box>
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
              <CardHeading>blog</CardHeading>
              <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
            </CardBody>
          </Card>
        </Box>
        <Box>
          <Card style={{ background: "#1be31b" }}>
            <CardBody>
              <CardHeading>Qiita</CardHeading>
              <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
            </CardBody>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
}
