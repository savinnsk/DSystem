import React from 'react';
import { IconProps } from "../styles";

export function Mala(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M17.7486 5.4C18.9829 5.4 20 6.368 20 7.6V19.7C20 20.943 18.9829 21.9 17.7486 21.9C17.7486 22.538 17.2114 23 16.5714 23C16 23 15.4286 22.538 15.4286 21.9H8.57143C8.57143 22.538 8 23 7.42857 23C6.78857 23 6.25143 22.538 6.25143 21.9C5.01714 21.9 4 20.943 4 19.7V7.6C4 6.368 5.01714 5.4 6.25143 5.4H8.57143V2.1C8.57143 1.462 9.09714 1 9.71429 1H14.2857C14.9029 1 15.4286 1.462 15.4286 2.1V5.4H17.7486ZM13.7143 5.4V2.65H10.2857V5.4H13.7143ZM7.42857 8.7V18.6H9.14286V8.7H7.42857ZM14.8571 8.7V18.6H16.5714V8.7H14.8571ZM11.1429 8.7V18.6H12.8571V8.7H11.1429Z" fill={props.color}/>
</svg>
  );
}
