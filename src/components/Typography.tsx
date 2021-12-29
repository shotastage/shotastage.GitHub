import styled, { css } from "styled-components";
import { StylerProps } from './Styler';

const textAlignment = css<StylerProps>`
  text-align: center;
`;

const HeadingBase = css<StylerProps>`
  margin: 0;
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

export const Heading1 = styled.h1<StylerProps>`
  font-size: 3rem;
`;

export const Heading2 = styled.h2<StylerProps>`
  ${HeadingBase}
  padding-left: 0.8rem;
  font-size: 3.2rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Heading3 = styled.h3<StylerProps>`
  font-size: 2.1rem;
`;

export const Heading4 = styled.h4<StylerProps>`
  font-size: 1.9rem;
`;

export const Heading5 = styled.h5<StylerProps>`
  font-size: 1.6rem;
`;
