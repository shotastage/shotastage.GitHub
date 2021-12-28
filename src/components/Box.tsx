import { StylerProps } from './Styler';

export interface BoxProps extends StylerProps {
  center?: boolean | false;
};

export const Box = (props: BoxProps) => {
  const styles = props.center
  ? { display: "flex", alignItems: "center", justifyContent: "center" }
  : {}

  return (
    <div {...props} style={{
      ...styles,
      flexShrink: 1,
      flexGrow: 0,
    }}>
      {props.children}
    </div>
  );
};
