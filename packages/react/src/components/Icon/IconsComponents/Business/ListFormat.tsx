import React from 'react';
import { IconProps } from "../styles";

export function ListFormat(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M19 12H12V5C12 4.4 11.6 4 11 4C6 4 2 8 2 13C2 18 6 22 11 22C16 22 20 18 20 13C20 12.4 19.6 12 19 12ZM12 19.9C8.2 20.5 4.6 17.8 4.1 14C3.5 10.2 6.2 6.6 10 6.1V13C10 13.6 10.4 14 11 14H17.9C17.5 17.1 15.1 19.5 12 19.9ZM15 2C14.4 2 14 2.4 14 3V9C14 9.6 14.4 10 15 10H21C21.6 10 22 9.6 22 9C22 5.1 18.9 2 15 2ZM16 8V4.1C18 4.5 19.5 6 19.9 8H16Z" fill={props.color}/>
</svg>
  );
}
