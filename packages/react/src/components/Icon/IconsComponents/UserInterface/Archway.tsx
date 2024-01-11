import React from 'react';
import { IconProps } from "../styles";

export function Archway(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M22 20H21V8H22C22.2652 8 22.5196 7.89464 22.7071 7.70711C22.8946 7.51957 23 7.26522 23 7C23 6.73478 22.8946 6.48043 22.7071 6.29289C22.5196 6.10536 22.2652 6 22 6H21V3C21 2.73478 20.8946 2.48043 20.7071 2.29289C20.5196 2.10536 20.2652 2 20 2H4C3.73478 2 3.48043 2.10536 3.29289 2.29289C3.10536 2.48043 3 2.73478 3 3V6H2C1.73478 6 1.48043 6.10536 1.29289 6.29289C1.10536 6.48043 1 6.73478 1 7C1 7.26522 1.10536 7.51957 1.29289 7.70711C1.48043 7.89464 1.73478 8 2 8H3V20H2C1.73478 20 1.48043 20.1054 1.29289 20.2929C1.10536 20.4804 1 20.7348 1 21C1 21.2652 1.10536 21.5196 1.29289 21.7071C1.48043 21.8946 1.73478 22 2 22H22C22.2652 22 22.5196 21.8946 22.7071 21.7071C22.8946 21.5196 23 21.2652 23 21C23 20.7348 22.8946 20.4804 22.7071 20.2929C22.5196 20.1054 22.2652 20 22 20ZM15 20H9V16.47C8.99759 15.3982 9.27261 14.3441 9.79831 13.4101C10.324 12.4761 11.0825 11.694 12 11.14C12.9175 11.694 13.676 12.4761 14.2017 13.4101C14.7274 14.3441 15.0024 15.3982 15 16.47V20ZM19 20H17V16.47C17.0067 14.9403 16.5838 13.4394 15.7794 12.1382C14.975 10.837 13.8214 9.7878 12.45 9.11C12.3104 9.03967 12.1563 9.00303 12 9.00303C11.8437 9.00303 11.6896 9.03967 11.55 9.11C10.1786 9.7878 9.02504 10.837 8.22064 12.1382C7.41624 13.4394 6.99331 14.9403 7 16.47V20H5V8H19V20ZM19 6H5V4H19V6Z" fill={props.color}/>
</svg>
  );
}
