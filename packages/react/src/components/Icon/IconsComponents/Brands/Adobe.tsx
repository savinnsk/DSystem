import React from 'react';
import { IconProps } from "../styles";

export function Adobe(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M9.07 17.28H11.85L13.6 20.72H16.14L12 9.87L9.07 17.28ZM2 3V21L9.42 3H2ZM14.48 3L22 20.81V3H14.48Z" fill={props.color}/>
</svg>
  );
}
