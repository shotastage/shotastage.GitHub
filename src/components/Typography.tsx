import styled, { css } from "styled-components";

const textAlignment = css`
  text-align: center;
`;

const HeadingBase = css`
  margin-top: 80px;
  margin-bottom: 30px;
`;

export const Heading = styled.div`
  ${textAlignment}
  display: flex;
  background-clip: border-box;
  background: white;
  height: 450px;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    height: 300px;
    width: 100%;
  }
`;

export const Heading1 = styled.h1`
  font-size: 3rem;
`;

export const Heading2 = styled.h2`
  ${HeadingBase}
  padding-left: 0.8rem;
  font-size: 3.2rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Heading3 = styled.h3`
  font-size: 2.1rem;
`;

export const Heading4 = styled.h4`
  font-size: 1.9rem;
`;

export const Heading5 = styled.h5`
  font-size: 1.6rem;
`;
