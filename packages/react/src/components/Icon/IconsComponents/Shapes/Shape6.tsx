import React from 'react';
import { IconProps } from "../styles";

export function Shape6(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M21.71 7.57L16.44 2.29C16.2484 2.10727 15.9948 2.00368 15.73 2H8.27C8.00523 2.00368 7.75163 2.10727 7.56 2.29L2.29 7.57C2.10526 7.75626 2.0011 8.00766 2 8.27V15.73C2.0011 15.9923 2.10526 16.2437 2.29 16.43L7.56 21.71C7.75163 21.8927 8.00523 21.9963 8.27 22H15.73C15.9948 21.9963 16.2484 21.8927 16.44 21.71L21.71 16.43C21.8947 16.2437 21.9989 15.9923 22 15.73V8.27C21.9989 8.00766 21.8947 7.75626 21.71 7.57ZM20 15.31L15.31 20H8.69L4 15.31V8.69L8.69 4H15.31L20 8.69V15.31Z" fill={props.color}/>
</svg>
  );
}
