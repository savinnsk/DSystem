import React from 'react';
import { IconProps } from "../styles";

export function Dashboard(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M19.088 4.95453C19.0807 4.94672 19.0785 4.93634 19.0709 4.92871C19.0632 4.92108 19.0527 4.91876 19.0448 4.91138C17.1743 3.04693 14.6411 2 12.0001 2C9.35908 2 6.82579 3.04693 4.95533 4.91138C4.94746 4.91876 4.93696 4.92102 4.92927 4.92871C4.92158 4.9364 4.91944 4.94671 4.91212 4.95453C3.51837 6.35495 2.57071 8.13686 2.18873 10.0754C1.80675 12.0139 2.00757 14.0221 2.76585 15.8465C3.52413 17.671 4.80588 19.23 6.44933 20.3267C8.09279 21.4234 10.0243 22.0087 12.0001 22.0087C13.9758 22.0087 15.9073 21.4234 17.5508 20.3267C19.1943 19.23 20.476 17.671 21.2343 15.8465C21.9926 14.0221 22.1934 12.0139 21.8114 10.0754C21.4294 8.13686 20.4818 6.35495 19.088 4.95453ZM12 20C10.8023 19.9996 9.61998 19.7298 8.54068 19.2104C7.46138 18.6911 6.51274 17.9357 5.76502 17H9.78029C10.0584 17.3144 10.4001 17.5661 10.7827 17.7385C11.1654 17.9109 11.5803 18 12 18C12.4197 18 12.8346 17.9109 13.2173 17.7385C13.6 17.5661 13.9417 17.3144 14.2197 17H18.2351C17.4873 17.9357 16.5387 18.6911 15.4594 19.2105C14.3801 19.7298 13.1978 19.9996 12 20ZM11 15C11 14.8022 11.0587 14.6089 11.1685 14.4444C11.2784 14.28 11.4346 14.1518 11.6173 14.0761C11.8001 14.0004 12.0011 13.9806 12.1951 14.0192C12.3891 14.0578 12.5673 14.153 12.7071 14.2929C12.847 14.4327 12.9422 14.6109 12.9808 14.8049C13.0194 14.9989 12.9996 15.2 12.9239 15.3827C12.8482 15.5654 12.72 15.7216 12.5556 15.8315C12.3911 15.9413 12.1978 16 12 16C11.7349 15.9997 11.4807 15.8943 11.2932 15.7068C11.1057 15.5193 11.0003 15.2651 11 15ZM19.4102 15.0021L19.3999 15H15C14.9981 14.3816 14.8048 13.779 14.4467 13.2748C14.0886 12.7707 13.5833 12.3897 13 12.1843V9C13 8.73478 12.8947 8.48043 12.7071 8.29289C12.5196 8.10536 12.2652 8 12 8C11.7348 8 11.4804 8.10536 11.2929 8.29289C11.1054 8.48043 11 8.73478 11 9V12.1843C10.4168 12.3897 9.91138 12.7707 9.55328 13.2748C9.19519 13.779 9.00192 14.3816 9.00002 15H4.60012L4.5898 15.0021C4.32969 14.3603 4.15477 13.6872 4.06948 13H5.00002C5.26523 13 5.51959 12.8946 5.70712 12.7071C5.89466 12.5196 6.00002 12.2652 6.00002 12C6.00002 11.7348 5.89466 11.4804 5.70712 11.2929C5.51959 11.1054 5.26523 11 5.00002 11H4.06948C4.24816 9.57857 4.80757 8.23182 5.68856 7.10211L6.34328 7.75684C6.43612 7.84969 6.54635 7.92334 6.66767 7.97359C6.78898 8.02384 6.919 8.0497 7.05031 8.0497C7.18162 8.0497 7.31164 8.02384 7.43295 7.97359C7.55427 7.92334 7.66449 7.84968 7.75734 7.75683C7.85019 7.66398 7.92384 7.55376 7.97409 7.43244C8.02434 7.31113 8.0502 7.18111 8.0502 7.0498C8.0502 6.91849 8.02434 6.78847 7.97409 6.66716C7.92384 6.54585 7.85018 6.43562 7.75734 6.34277L7.10268 5.68811C8.23231 4.80741 9.57883 4.24817 11 4.06946V5C11 5.26522 11.1054 5.51957 11.2929 5.70711C11.4804 5.89464 11.7348 6 12 6C12.2652 6 12.5196 5.89464 12.7071 5.70711C12.8947 5.51957 13 5.26522 13 5V4.06946C14.4212 4.24817 15.7677 4.80741 16.8974 5.68811L16.2427 6.34277C16.0552 6.53029 15.9498 6.78461 15.9498 7.0498C15.9498 7.31499 16.0552 7.56932 16.2427 7.75683C16.4302 7.94435 16.6845 8.0497 16.9497 8.0497C17.2149 8.0497 17.4692 7.94436 17.6568 7.75684L18.3115 7.10211C19.1925 8.23182 19.7519 9.57857 19.9306 11H19C18.7348 11 18.4804 11.1054 18.2929 11.2929C18.1054 11.4804 18 11.7348 18 12C18 12.2652 18.1054 12.5196 18.2929 12.7071C18.4804 12.8946 18.7348 13 19 13H19.9306C19.8453 13.6872 19.6703 14.3603 19.4102 15.0021Z" fill={props.color}/>
</svg>
  );
}
