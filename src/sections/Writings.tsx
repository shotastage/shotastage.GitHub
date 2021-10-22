import React from "react";
import { Grid } from '../components/Grid';
import { Card, CardIcon, CardBody, CardHeading, CardDescription } from '../components/Cards';
import { Heading2 } from '../components/Typography';

export const Writings = () => {
    return (
        <React.Fragment>

        <Grid colStart={1} colEnd={4} rowStart={9} rowEnd={10}>
          <Heading2>Writing</Heading2>
        </Grid>
        <Grid colStart={1} colEnd={2} rowStart={11} rowEnd={12}>
          <Card style={{ marginLeft: "8rem" }}>
            <CardBody>
              <CardIcon type="image/svg+xml" data={`${process.env.PUBLIC_URL}/assets/tipstock.svg`} style={{width: "100%"}}/>
              <CardDescription>TIPSTOCK!はITに関するTIPSやニュースをプログラマーやエンジニアの方を含め多くの方にお届けするメディアです.</CardDescription>

            </CardBody>
          </Card>
        </Grid>
        <Grid colStart={2} colEnd={3} rowStart={11} rowEnd={12}>
          <Card>
            <CardBody>
              <CardHeading>blog</CardHeading>
              <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
            </CardBody>
          </Card>
        </Grid>
        <Grid colStart={3} colEnd={4} rowStart={11} rowEnd={12}>
          <Card style={{ marginRight: "8rem", background: "#1be31b" }}>
            <CardBody>
              <CardHeading>Qiita</CardHeading>
              <CardDescription>GeoTubeは散策動画を地図上にマッピングしたWebアプリケーションです</CardDescription>
            </CardBody>
          </Card>
        </Grid>

        </React.Fragment>
    );
}