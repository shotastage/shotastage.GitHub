import { Suspense, useEffect, useState } from 'react';
import { ApiClient } from 'mini-apiclient';
import styled from 'styled-components';
import { API_KEYS } from '../env-values';
import { Image } from '../components/Image';

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

  picture {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 480px) {
    margin: 5px 5px 0 5px;
  }
`;

const StoryCircleImage = styled.img`
  width: 66px !important;
  height: 66px !important;
  object-fit: cover;
  border-radius: calc(66px / 2);
`;

const StoryCircleBlank = styled.span`
  width: 66px;
  height: 66px;
  background: pink;
  border-radius: calc(66px / 2);
`;

interface StoryCircleProps {
  webpImageUrl?: string;
  imageUrl: string
  altText: string
}

const StoryCircle = (props: StoryCircleProps) => {
  return (
    <StoryCircleBase>
      <Suspense fallback={<StoryCircleBlank />}>
        <Image alt={props.altText} webPSrc={props.webpImageUrl} imgSrc={props.imageUrl} imgComponent={StoryCircleImage} />
      </Suspense>
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
          { stories.map((value) => {
            return (
               value['headlineMinified']
              ? <StoryCircle key={value['id']} altText={value['story_id']} webpImageUrl={value['headlineMinified']['url']} imageUrl={value['headline']['url']} />
              : <StoryCircle key={value['id']} altText={value['story_id']} imageUrl={value['headline']['url']} />
            );
          })}
        </Story>
    );
}
