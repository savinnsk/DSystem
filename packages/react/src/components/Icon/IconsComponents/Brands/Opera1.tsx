import React from 'react';
import { IconProps } from "../styles";

export function Opera1(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M11.9963 2C6.53431 2 2.71831 5.95814 2.71831 11.899C2.71831 17.1889 6.42951 22 12.0038 22C17.5706 22 21.2817 17.1814 21.2817 11.899C21.2817 5.95814 17.4583 2 11.9963 2ZM11.9963 20.3838C8.59938 20.3838 8.22524 15.3707 8.22524 11.6745V11.5997C8.22524 7.60421 8.82382 3.36928 11.9739 3.36928C15.1239 3.36928 15.7599 7.73138 15.7599 11.7269C15.7599 15.4231 15.3932 20.3838 11.9963 20.3838Z" fill={props.color}/>
</svg>
  );
}
