import React from 'react';
import { IconProps } from "../styles";

export function Spin(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M13 3C11.1435 3 9.36301 3.7375 8.05025 5.05025C6.7375 6.36301 6 8.14348 6 10C6 11.8565 6.7375 13.637 8.05025 14.9497C9.36301 16.2625 11.1435 17 13 17C14.3261 17 15.5979 16.4732 16.5355 15.5355C17.4732 14.5979 18 13.3261 18 12C18 10.6739 17.4732 9.40215 16.5355 8.46447C15.5979 7.52678 14.3261 7 13 7C12.2044 7 11.4413 7.31607 10.8787 7.87868C10.3161 8.44129 10 9.20435 10 10C10 10.7956 10.3161 11.5587 10.8787 12.1213C11.4413 12.6839 12.2044 13 13 13C13.2652 13 13.5196 12.8946 13.7071 12.7071C13.8946 12.5196 14 12.2652 14 12C14 11.7348 13.8946 11.4804 13.7071 11.2929C13.5196 11.1054 13.2652 11 13 11C12.7348 11 12.4804 10.8946 12.2929 10.7071C12.1054 10.5196 12 10.2652 12 10C12 9.73478 12.1054 9.48043 12.2929 9.29289C12.4804 9.10536 12.7348 9 13 9C13.7956 9 14.5587 9.31607 15.1213 9.87868C15.6839 10.4413 16 11.2044 16 12C16 12.7956 15.6839 13.5587 15.1213 14.1213C14.5587 14.6839 13.7956 15 13 15C11.6739 15 10.4021 14.4732 9.46447 13.5355C8.52678 12.5979 8 11.3261 8 10C8 8.67392 8.52678 7.40215 9.46447 6.46447C10.4021 5.52678 11.6739 5 13 5C14.8565 5 16.637 5.7375 17.9497 7.05025C19.2625 8.36301 20 10.1435 20 12C20 13.8565 19.2625 15.637 17.9497 16.9497C16.637 18.2625 14.8565 19 13 19C10.6131 19 8.32387 18.0518 6.63604 16.364C4.94821 14.6761 4 12.3869 4 10C4 9.73478 3.89464 9.48043 3.70711 9.29289C3.51957 9.10536 3.26522 9 3 9C2.73478 9 2.48043 9.10536 2.29289 9.29289C2.10536 9.48043 2 9.73478 2 10C2 12.9174 3.15893 15.7153 5.22183 17.7782C7.28473 19.8411 10.0826 21 13 21C15.3869 21 17.6761 20.0518 19.364 18.364C21.0518 16.6761 22 14.3869 22 12C22 9.61305 21.0518 7.32387 19.364 5.63604C17.6761 3.94821 15.3869 3 13 3Z" fill={props.color}/>
</svg>
  );
}
