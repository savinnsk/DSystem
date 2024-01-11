import React from 'react';
import { IconProps } from "../styles";

export function VerticalDistributeTop(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M3 6H4V11C4 11.2652 4.10536 11.5196 4.29289 11.7071C4.48043 11.8946 4.73478 12 5 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11V6H21C21.2652 6 21.5196 5.89464 21.7071 5.70711C21.8946 5.51957 22 5.26522 22 5C22 4.73478 21.8946 4.48043 21.7071 4.29289C21.5196 4.10536 21.2652 4 21 4H3C2.73478 4 2.48043 4.10536 2.29289 4.29289C2.10536 4.48043 2 4.73478 2 5C2 5.26522 2.10536 5.51957 2.29289 5.70711C2.48043 5.89464 2.73478 6 3 6ZM6 6H18V10H6V6ZM21 14H3C2.73478 14 2.48043 14.1054 2.29289 14.2929C2.10536 14.4804 2 14.7348 2 15C2 15.2652 2.10536 15.5196 2.29289 15.7071C2.48043 15.8946 2.73478 16 3 16H5V19C5 19.2652 5.10536 19.5196 5.29289 19.7071C5.48043 19.8946 5.73478 20 6 20H18C18.2652 20 18.5196 19.8946 18.7071 19.7071C18.8946 19.5196 19 19.2652 19 19V16H21C21.2652 16 21.5196 15.8946 21.7071 15.7071C21.8946 15.5196 22 15.2652 22 15C22 14.7348 21.8946 14.4804 21.7071 14.2929C21.5196 14.1054 21.2652 14 21 14ZM17 18H7V16H17V18Z" fill={props.color}/>
</svg>
  );
}
