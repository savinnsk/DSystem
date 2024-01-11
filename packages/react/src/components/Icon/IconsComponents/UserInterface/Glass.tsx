import React from 'react';
import { IconProps } from "../styles";

export function Glass(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M19.75 2.33003C19.6554 2.22518 19.5396 2.14156 19.4104 2.08468C19.2811 2.02781 19.1412 1.99895 19 2.00003H5.00002C4.85879 1.99895 4.71894 2.02781 4.58966 2.08468C4.46039 2.14156 4.34464 2.22518 4.25002 2.33003C4.15565 2.43503 4.08458 2.55882 4.04149 2.69326C3.9984 2.8277 3.98427 2.96974 4.00002 3.11003L5.80002 19.33C5.88158 20.0672 6.23332 20.748 6.78733 21.2411C7.34135 21.7341 8.05837 22.0045 8.80002 22H15.22C15.9617 22.0045 16.6787 21.7341 17.2327 21.2411C17.7867 20.748 18.1384 20.0672 18.22 19.33L20 3.11003C20.0158 2.96974 20.0016 2.8277 19.9585 2.69326C19.9155 2.55882 19.8444 2.43503 19.75 2.33003ZM16.2 19.11C16.1728 19.3557 16.0556 19.5827 15.8709 19.747C15.6862 19.9114 15.4472 20.0015 15.2 20H8.79002C8.5428 20.0015 8.30379 19.9114 8.11912 19.747C7.93445 19.5827 7.81721 19.3557 7.79002 19.11L6.78002 10H17.22L16.2 19.11ZM17.44 8.00003H6.56002L6.12002 4.00003H17.88L17.44 8.00003Z" fill={props.color}/>
</svg>
  );
}
