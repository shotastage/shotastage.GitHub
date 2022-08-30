import styles from '../styles/component/Card.module.scss';


type Props = {
  children?: React.ReactNode;
  onClick?: () => string;
  style?: React.CSSProperties;
};

type ObjectProps = {
  children?: React.ReactNode;
  type?: string;
  data?: string;
};

export const Card = (props: Props) => {
  return (
    <div className={styles.card} style={props?.style}>
      {props.children}
    </div>
  );
};


export const WorkCard = (props: Props) => {
  return (
    <div className={styles.workCard} style={props?.style}>
      {props.children}
    </div>
  );
};

export const CardSquare = (props: Props) => {
  return (
    <div className={styles.cardSquare}>
      {props.children}
    </div>
  );
};


export const CardIcon = ({ ...props }) => {
  return (
    <object className={styles.cardIcon} { ...props }>
      {props?.children}
    </object>
  );
};

export const CardBody = (props: Props) => {
  return (
    <div className={styles.cardBody}>
      {props.children}
    </div>
  );
};


export const CardHeading = (props: Props) => {
  return (
    <h3 className={styles.cardHeading}>
      {props.children}
    </h3>
  );
};


export const CardDescription = (props: Props) => {
  return (
    <div className={styles.cardDescription}>
      {props.children}
    </div>
  );
};
