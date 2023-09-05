import React, { CSSProperties } from 'react';

export interface StylerProps {
  children?: React.ReactNode;
  height?: string | number;
  width?: string | number;
  maxHeight?: string | number;
  maxWidth?: string | number;
  minHeight?: string | number;
  minWidth?: string | number;
  margin?: string | number;
  marginTop?: string | number;
  marginBottom?: string | number;
  marginRight?: string | number;
  marginLeft?: string | number;
  padding?: string | number;
  paddingTop?: string | number;
  paddingBottom?: string | number;
  paddingRight?: string | number;
  paddingLeft?: string | number;
  backgroundColor?: string;
  color?: string;
  sx?: object;
  style?: CSSProperties;
}

export const CombinedStyler = (props: StylerProps, specified?: object) => {
  const style = {
    ...props,
    ...props.sx,
    ...specified
  };

  return style;
};

export const Styler = (props: StylerProps) => {
  return CombinedStyler(props);
};
