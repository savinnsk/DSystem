import React from 'react';
import { IconProps } from "../styles";

export function GoogleDrive(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M21.4231 13.8878L15.3336 3.33789H8.66663L14.7566 13.8878H21.4231ZM8.08917 4.33832L2 14.8873L5.33356 20.6621L11.4227 10.1128L8.08917 4.33832ZM9.8219 14.8873L6.48877 20.6621H18.6666L22 14.8873L9.8219 14.8873Z" fill={props.color}/>
</svg>
  );
}
