import React from "react";

export interface ImageProps {
  imgComponent?: React.ElementType;
  webPSrc?: string;
  imgSrc: string;
  alt: string;
};

export const Image: React.FC<ImageProps> = (props: ImageProps) => {
  return (
    <picture>
      { props.webPSrc && <source srcSet={props.webPSrc} type="image/webp" /> }
      { props.imgComponent
        ? <props.imgComponent src={props.imgSrc} alt={props.alt} decoding="async" />
        : <img src={props.imgSrc} alt={props.alt} decoding="async" />
    }
    </picture>
  );
};
