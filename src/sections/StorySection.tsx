import { useEffect, useState } from 'react';
import { ApiClient } from 'mini-apiclient';
import styled from 'styled-components';

import { API_KEYS } from '../env-values';

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
    display: none;
  }
`;

const StoryCircleBase = styled.div`
  flex: 0 0 70px;
  min-width: 70px;
  min-height: 70px;
  max-width: 70px;
  max-height: 70px;
  background: transparent;
  border: 1px solid #c0c0c0;
  border-radius: calc(70px / 2);
  margin: 10px 10px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 480px) {
    margin: 5px 5px 0 5px;
  }
`;

const StoryCircleImage = styled.img`
  width: 66px;
  height: 66px;
  object-fit: cover;
  border-radius: calc(66px / 2);
`;

interface StoryCircleProps {
  imageUrl: string
  altText: string
}

const StoryCircle = (props: StoryCircleProps) => {
  return (
    <StoryCircleBase>
      <StoryCircleImage alt={props.altText} src={props.imageUrl} decoding="async" />
    </StoryCircleBase>
  );
}

export const StorySection = () => {

    const [stories, setStories] = useState([]);

    useEffect(() => {
      ApiClient.GET("https://shota-folio.microcms.io/api/v1/story", [["X-MICROCMS-API-KEY", API_KEYS.microCMSKey]])
      .then((data: any) => {
        setStories(data.contents);
      });
    }, []);

    return (
        <Story>
          <div style={{ height: "1px", width: "30px" }} />
          { stories.map((value) => <StoryCircle key={value['id']} altText={value['story_id']} imageUrl={value['headline']['url']} />)}
        </Story>
    );
}
