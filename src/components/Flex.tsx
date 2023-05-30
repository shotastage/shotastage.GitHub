import React, { CSSProperties } from 'react';
import { StylerProps } from './Styler';

export interface FlexProps extends StylerProps {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
}

export const Flex: React.FC<FlexProps> = ({
  flexDirection = 'row',
  alignItems = 'center',
  justifyContent = 'space-around',
  marginTop = 0,
  marginBottom = 0,
  marginRight = 0,
  marginLeft = 0,
  backgroundColor = '#fff',
  children,
  ...rest
}) => {
  const style: CSSProperties = {
    display: 'flex',
    flexDirection,
    alignItems,
    justifyContent,
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,
    backgroundColor,
    ...rest.style,
  };

  return <div style={style}>{children}</div>;
};

export const Spacer: React.FC = () => (
  <div style={{ flex: 1, alignSelf: 'stretch' }} />
);
