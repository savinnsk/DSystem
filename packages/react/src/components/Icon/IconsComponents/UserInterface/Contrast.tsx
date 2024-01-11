import React from 'react';
import { IconProps } from "../styles";

export function Contrast(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM11 19.93C9.07815 19.6741 7.31463 18.7289 6.03736 17.2703C4.76008 15.8117 4.05599 13.9388 4.05599 12C4.05599 10.0612 4.76008 8.18833 6.03736 6.7297C7.31463 5.27107 9.07815 4.32592 11 4.07V19.93ZM13 19.93V4.07C14.9219 4.32592 16.6854 5.27107 17.9627 6.7297C19.2399 8.18833 19.944 10.0612 19.944 12C19.944 13.9388 19.2399 15.8117 17.9627 17.2703C16.6854 18.7289 14.9219 19.6741 13 19.93Z" fill={props.color}/>
</svg>
  );
}
