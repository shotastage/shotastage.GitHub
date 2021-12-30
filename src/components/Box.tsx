import { Styler, StylerProps } from './Styler';

export interface BoxProps extends StylerProps {
  center?: boolean | false;
};

export const Box: React.FC<BoxProps> = (props: BoxProps) => {
  const styler = Styler(props);

  const styles = props.center
  ? { display: "flex", alignItems: "center", justifyContent: "center", ...styler }
  : { ...styler};

  return (
    <div {...props} style={{
      flexShrink: 1,
      flexGrow: 0,
      ...styles,
    }}>
      {props.children}
    </div>
  );
};
