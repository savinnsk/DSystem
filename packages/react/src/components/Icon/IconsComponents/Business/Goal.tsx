import React from 'react';
import { IconProps } from "../styles";

export function Goal(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M12 11C11.8022 11 11.6089 11.0586 11.4444 11.1685C11.28 11.2784 11.1518 11.4346 11.0761 11.6173C11.0004 11.8 10.9806 12.0011 11.0192 12.1951C11.0578 12.3891 11.153 12.5673 11.2929 12.7071C11.4328 12.847 11.6109 12.9422 11.8049 12.9808C11.9989 13.0194 12.2 12.9996 12.3827 12.9239C12.5654 12.8482 12.7216 12.72 12.8315 12.5556C12.9414 12.3911 13 12.1978 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM13 19.93V17C13 16.7348 12.8946 16.4804 12.7071 16.2929C12.5196 16.1054 12.2652 16 12 16C11.7348 16 11.4804 16.1054 11.2929 16.2929C11.1054 16.4804 11 16.7348 11 17V19.93C9.23998 19.7068 7.60408 18.9049 6.34959 17.6504C5.0951 16.3959 4.2932 14.76 4.07 13H7C7.26522 13 7.51957 12.8946 7.70711 12.7071C7.89465 12.5196 8 12.2652 8 12C8 11.7348 7.89465 11.4804 7.70711 11.2929C7.51957 11.1054 7.26522 11 7 11H4.07C4.2932 9.23998 5.0951 7.60408 6.34959 6.34959C7.60408 5.0951 9.23998 4.29319 11 4.07V7C11 7.26522 11.1054 7.51957 11.2929 7.70711C11.4804 7.89464 11.7348 8 12 8C12.2652 8 12.5196 7.89464 12.7071 7.70711C12.8946 7.51957 13 7.26522 13 7V4.07C14.76 4.29319 16.3959 5.0951 17.6504 6.34959C18.9049 7.60408 19.7068 9.23998 19.93 11H17C16.7348 11 16.4804 11.1054 16.2929 11.2929C16.1054 11.4804 16 11.7348 16 12C16 12.2652 16.1054 12.5196 16.2929 12.7071C16.4804 12.8946 16.7348 13 17 13H19.93C19.7068 14.76 18.9049 16.3959 17.6504 17.6504C16.3959 18.9049 14.76 19.7068 13 19.93Z" fill={props.color}/>
</svg>
  );
}
