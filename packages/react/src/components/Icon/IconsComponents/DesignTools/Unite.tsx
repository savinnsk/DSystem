import React from 'react';
import { IconProps } from "../styles";

export function Unite(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M21 7.54H16.46V3C16.46 2.73478 16.3546 2.48043 16.1671 2.29289C15.9796 2.10536 15.7252 2 15.46 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V15.46C2 15.7252 2.10536 15.9796 2.29289 16.1671C2.48043 16.3546 2.73478 16.46 3 16.46H7.54V21C7.54 21.2652 7.64536 21.5196 7.83289 21.7071C8.02043 21.8946 8.27478 22 8.54 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V8.54C22 8.27478 21.8946 8.02043 21.7071 7.83289C21.5196 7.64536 21.2652 7.54 21 7.54ZM20 20H9.54V15.46C9.54 15.1948 9.43464 14.9404 9.24711 14.7529C9.05957 14.5654 8.80522 14.46 8.54 14.46H4V4H14.46V8.54C14.46 8.80522 14.5654 9.05957 14.7529 9.24711C14.9404 9.43464 15.1948 9.54 15.46 9.54H20V20Z" fill={props.color}/>
</svg>
  );
}
