
export interface StylerProps {
  children?: React.ReactNode;
  height?: string | number;
  width?: string | number | '100%';
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
};

const cssCompute = (style: StylerProps) => Object.assign({}, style);

export const Styler = (props: StylerProps) => {
  return cssCompute(props);
};
