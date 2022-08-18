import React from 'react';
import styled from 'styled-components';

export const TopPopup = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: #ff4b4b;
  color: white;
  font-size: 0.8em;

  p {
    padding-right: 10px;
    padding-left: 10px;
    font-weight: bold;
  }
`;

 export const TopBanner = (props: React.PropsWithChildren<{}>) => {
  return (
    <TopPopup>
      <p>{props.children}</p>
    </TopPopup>
  );
};
