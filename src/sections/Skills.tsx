
import React from 'react';
import { Grid } from '../components/Grid';
import { CardSquare, CardIcon } from '../components/Cards';
import { Heading2 } from '../components/Typography';

const SkillMaker = (name: string, dataPath: string) => {
    return (
        <CardSquare>
            <CardIcon type="image/svg+xml" data={`${process.env.PUBLIC_URL}/assets/${dataPath}`} />
        </CardSquare>
    );
}

export const SkillsSection = (): JSX.Element => {
    return (
        <React.Fragment>
            <Grid colStart={1} colEnd={4} rowStart={13} rowEnd={14}>
                <Heading2>Skills & Experiences</Heading2>
            </Grid>
            <Grid colStart={1} colEnd={4} rowStart={15} rowEnd={16} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" }}>
                    {SkillMaker("Swift", "swift.svg")}
                    {SkillMaker("TypeScript", "typescript-icon.svg")}
                    {SkillMaker("Python", "python.svg")}
                    {SkillMaker("Go", "go.svg")}
                    {SkillMaker("React", "react.svg")}
                    {SkillMaker("Google Cloud Platform", "google-cloud.svg")}
                    {SkillMaker("AWS", "aws.svg")}
                    {SkillMaker("Git", "git-icon.svg")}
                </div>
                <div style={{ display: "flex" }}>
                    {SkillMaker("Djnago", "django-icon.svg")}
                    {SkillMaker("Play Framework", "play.svg")}
                    {SkillMaker("WordPress", "wordpress-icon.svg")}
                    {SkillMaker("Ubuntu", "ubuntu.svg")}
                    {SkillMaker("HTML5", "html-5.svg")}
                    {SkillMaker("CSS3", "css-3.svg")}
                    {SkillMaker("Sass", "sass.svg")}
                </div>
            </Grid>
        </React.Fragment>
    );
}
