import React from "react";
import { Container, Grid, GridGlobal } from '../components/Grid';
import { Card, CardIcon, CardBody, CardHeading, CardDescription } from '../components/Cards';
import { Heading2 } from '../components/Typography';

const HeadingLayout: GridGlobal = {
  colStart: 1,
  colEnd: 4,
  rowStart: 9,
  rowEnd: 10,
}

const WritingSection1: GridGlobal = {
  colStart: 1,
  colEnd: 2,
  rowStart: 11,
  rowEnd: 12,
}

const WritingSection2: GridGlobal = {
  colStart: 2,
  colEnd: 3,
  rowStart: 11,
  rowEnd: 12,
}

const WritingSection3: GridGlobal = {
  colStart: 3,
  colEnd: 4,
  rowStart: 11,
  rowEnd: 12,
}

export const Writings = () => {
    return (
      <React.Fragment>
        <Container>
          <Grid global={HeadingLayout}>
            <Heading2>Writing</Heading2>
          </Grid>
        </Container>
        <Grid global={WritingSection1}>
          <Card>
            <CardBody>
              <CardIcon type="image/svg+xml" data={`${process.env.PUBLIC_URL}/assets/tipstock.svg`} style={{width: "100%"}}/>
              <CardDescription>TIPSTOCK!はITに関するTIPSやニュースをプログラマーやエンジニアの方を含め多くの方にお届けするメディアです.</CardDescription>
            </CardBody>
          </Card>
        </Grid>
        <Grid global={WritingSection2}>
          <Card>
            <CardBody>
              <CardHeading>blog</CardHeading>
              <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
            </CardBody>
          </Card>
        </Grid>
        <Grid global={WritingSection3}>
          <Card style={{ background: "#1be31b" }}>
            <CardBody>
              <CardHeading>Qiita</CardHeading>
              <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
            </CardBody>
          </Card>
        </Grid>
      </React.Fragment>
    );
}
