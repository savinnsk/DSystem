import React from 'react';
import { IconProps } from "../styles";

export function Books(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M22.47 18.82L21.47 14.96L18.32 3.37003C18.2519 3.11437 18.0853 2.8961 17.8567 2.76303C17.628 2.62996 17.3559 2.59292 17.1 2.66003L13.23 3.66003C13.1376 3.55767 13.0251 3.47552 12.8995 3.41873C12.7739 3.36194 12.6379 3.33174 12.5 3.33003H2.5C2.23478 3.33003 1.98043 3.43539 1.79289 3.62292C1.60536 3.81046 1.5 4.06481 1.5 4.33003V20.33C1.5 20.5952 1.60536 20.8496 1.79289 21.0371C1.98043 21.2247 2.23478 21.33 2.5 21.33H12.5C12.7652 21.33 13.0196 21.2247 13.2071 21.0371C13.3946 20.8496 13.5 20.5952 13.5 20.33V12.33L15.7 20.55C15.7586 20.7682 15.8893 20.9601 16.0709 21.0945C16.2525 21.2288 16.4742 21.2978 16.7 21.29C16.7864 21.2999 16.8736 21.2999 16.96 21.29L21.79 20C21.9177 19.9659 22.0374 19.9068 22.1421 19.8261C22.2468 19.7454 22.3344 19.6448 22.4 19.53C22.5055 19.3088 22.5302 19.0576 22.47 18.82ZM6.47 19.37H3.47V17.37H6.47V19.37ZM6.47 15.37H3.47V9.37003H6.47V15.37ZM6.47 7.37003H3.47V5.37003H6.47V7.37003ZM11.47 19.37H8.47V17.37H11.47V19.37ZM11.47 15.37H8.47V9.37003H11.47V15.37ZM11.47 7.37003H8.47V5.37003H11.47V7.37003ZM13.72 5.63003L16.62 4.85003L17.14 6.78003L14.24 7.56003L13.72 5.63003ZM16.31 15.29L14.76 9.49003L17.66 8.71003L19.21 14.51L16.31 15.29ZM17.31 19.15L16.79 17.22L19.69 16.44L20.21 18.37L17.31 19.15Z" fill={props.color}/>
</svg>
  );
}
