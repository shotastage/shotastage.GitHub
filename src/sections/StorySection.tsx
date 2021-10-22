import { useEffect, useState } from 'react';
import { ApiClient } from 'mini-apiclient';
import styled from 'styled-components';

const Story = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  width: 100%;
  background: white;
  margin: 0;
  margin-top: 0;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display:none;
  }
`;

const StoryCircle = styled.div`
  flex: 0 0 70px;
  min-width: 70px;
  min-height: 70px;
  background: transparent;
  border: 1px solid #c0c0c0;
  border-radius: calc(70px / 2);
  margin: 10px 10px 0 10px;
`;

export const StorySection = () => {

    const [stories, setStories] = useState([]);

    useEffect(() => {
        ApiClient.GET("https://shota-folio.microcms.io/api/v1/story", [["X-MICROCMS-API-KEY", "1c868f91-632c-4a24-974f-c8011839f137"]])
        .then((res: any) => {
            console.log(res.contents);
        });
    });

    return (
        <Story>
            <div style={{ height: "1px", width: "100px" }} />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
            <StoryCircle />
        </Story>
    );
}
