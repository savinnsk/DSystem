import React from 'react';
import { IconProps } from "../styles";

export function Ambulance(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 9.5H9.5V8.5C9.5 8.23478 9.39464 7.98043 9.20711 7.79289C9.01957 7.60536 8.76522 7.5 8.5 7.5C8.23478 7.5 7.98043 7.60536 7.79289 7.79289C7.60536 7.98043 7.5 8.23478 7.5 8.5V9.5H6.5C6.23478 9.5 5.98043 9.60536 5.79289 9.79289C5.60536 9.98043 5.5 10.2348 5.5 10.5C5.5 10.7652 5.60536 11.0196 5.79289 11.2071C5.98043 11.3946 6.23478 11.5 6.5 11.5H7.5V12.5C7.5 12.7652 7.60536 13.0196 7.79289 13.2071C7.98043 13.3946 8.23478 13.5 8.5 13.5C8.76522 13.5 9.01957 13.3946 9.20711 13.2071C9.39464 13.0196 9.5 12.7652 9.5 12.5V11.5H10.5C10.7652 11.5 11.0196 11.3946 11.2071 11.2071C11.3946 11.0196 11.5 10.7652 11.5 10.5C11.5 10.2348 11.3946 9.98043 11.2071 9.79289C11.0196 9.60536 10.7652 9.5 10.5 9.5ZM22.93 11.65L22.87 11.54C22.8528 11.4905 22.8292 11.4435 22.8 11.4L20.4 8.2C20.1206 7.82741 19.7582 7.525 19.3416 7.31672C18.9251 7.10844 18.4657 7 18 7H16V6C16 5.20435 15.6839 4.44129 15.1213 3.87868C14.5587 3.31607 13.7956 3 13 3H4C3.20435 3 2.44129 3.31607 1.87868 3.87868C1.31607 4.44129 1 5.20435 1 6V17C1 17.2652 1.10536 17.5196 1.29289 17.7071C1.48043 17.8946 1.73478 18 2 18H3C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21C6.79565 21 7.55871 20.6839 8.12132 20.1213C8.68393 19.5587 9 18.7956 9 18H15C15 18.7956 15.3161 19.5587 15.8787 20.1213C16.4413 20.6839 17.2044 21 18 21C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18H22C22.2652 18 22.5196 17.8946 22.7071 17.7071C22.8946 17.5196 23 17.2652 23 17V12C22.9978 11.8801 22.9741 11.7615 22.93 11.65ZM6 19C5.80222 19 5.60888 18.9414 5.44443 18.8315C5.27998 18.7216 5.15181 18.5654 5.07612 18.3827C5.00043 18.2 4.98063 17.9989 5.01921 17.8049C5.0578 17.6109 5.15304 17.4327 5.29289 17.2929C5.43275 17.153 5.61093 17.0578 5.80491 17.0192C5.99889 16.9806 6.19996 17.0004 6.38268 17.0761C6.56541 17.1518 6.72159 17.28 6.83147 17.4444C6.94135 17.6089 7 17.8022 7 18C7 18.2652 6.89464 18.5196 6.70711 18.7071C6.51957 18.8946 6.26522 19 6 19ZM14 16H8.22C7.93882 15.6906 7.59609 15.4435 7.21378 15.2743C6.83148 15.1052 6.41805 15.0178 6 15.0178C5.58195 15.0178 5.16852 15.1052 4.78622 15.2743C4.40391 15.4435 4.06118 15.6906 3.78 16H3V6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H13C13.2652 5 13.5196 5.10536 13.7071 5.29289C13.8946 5.48043 14 5.73478 14 6V16ZM16 9H18C18.1552 9 18.3084 9.03615 18.4472 9.10557C18.5861 9.175 18.7069 9.2758 18.8 9.4L20 11H16V9ZM18 19C17.8022 19 17.6089 18.9414 17.4444 18.8315C17.28 18.7216 17.1518 18.5654 17.0761 18.3827C17.0004 18.2 16.9806 17.9989 17.0192 17.8049C17.0578 17.6109 17.153 17.4327 17.2929 17.2929C17.4327 17.153 17.6109 17.0578 17.8049 17.0192C17.9989 16.9806 18.2 17.0004 18.3827 17.0761C18.5654 17.1518 18.7216 17.28 18.8315 17.4444C18.9414 17.6089 19 17.8022 19 18C19 18.2652 18.8946 18.5196 18.7071 18.7071C18.5196 18.8946 18.2652 19 18 19ZM21 16H20.22C19.6879 15.414 18.9457 15.0621 18.1553 15.0209C17.3649 14.9797 16.5902 15.2526 16 15.78V13H21V16Z" fill={props.color}/>
</svg>
  );
}
