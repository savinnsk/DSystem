import React from 'react';
import { IconProps } from "../styles";

export function Bell(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M21 7.99999C20.9965 7.61675 20.883 7.24259 20.6729 6.92204C20.4628 6.60149 20.1651 6.34805 19.8151 6.19188C19.4651 6.03572 19.0776 5.9834 18.6987 6.04115C18.3198 6.09891 17.9655 6.26431 17.6779 6.51767C17.3904 6.77103 17.1817 7.10168 17.0767 7.47026C16.9716 7.83885 16.9747 8.22985 17.0856 8.59672C17.1964 8.9636 17.4103 9.2909 17.7019 9.53968C17.9934 9.78846 18.3503 9.94824 18.73 9.99999C18.9401 10.58 19.0285 11.197 18.9896 11.8127C18.9506 12.4283 18.7853 13.0293 18.5038 13.5782C18.2223 14.1271 17.8307 14.6121 17.3535 15.003C16.8763 15.3938 16.3236 15.6822 15.73 15.85C15.4663 15.243 15.0092 14.7402 14.43 14.42C15.2589 13.3917 15.7799 12.1499 15.9329 10.838C16.0859 9.52618 15.8646 8.1978 15.2947 7.00636C14.7247 5.81492 13.8294 4.80902 12.712 4.10489C11.5946 3.40075 10.3008 3.0271 8.98001 3.0271C7.65927 3.0271 6.36546 3.40075 5.24807 4.10489C4.13068 4.80902 3.23529 5.81492 2.66534 7.00636C2.09539 8.1978 1.87414 9.52618 2.02715 10.838C2.18015 12.1499 2.70117 13.3917 3.53001 14.42C3.07101 14.678 2.68799 15.0522 2.41942 15.505C2.15085 15.9579 2.00621 16.4735 2.00002 17V18C2.00002 18.7956 2.31609 19.5587 2.87869 20.1213C3.4413 20.6839 4.20437 21 5.00002 21H13C13.7957 21 14.5587 20.6839 15.1213 20.1213C15.6839 19.5587 16 18.7956 16 18V17.81C16.8976 17.6004 17.74 17.2014 18.4709 16.6398C19.2018 16.0782 19.8042 15.3669 20.2378 14.5535C20.6715 13.7402 20.9264 12.8436 20.9854 11.9237C21.0444 11.0039 20.9062 10.0821 20.58 9.21999C20.851 8.87089 20.9986 8.44189 21 7.99999ZM14 18C14 18.2652 13.8947 18.5196 13.7071 18.7071C13.5196 18.8946 13.2652 19 13 19H5.00002C4.7348 19 4.48044 18.8946 4.29291 18.7071C4.10537 18.5196 4.00002 18.2652 4.00002 18V17C4.00002 16.7348 4.10537 16.4804 4.29291 16.2929C4.48044 16.1053 4.7348 16 5.00002 16H5.41001C6.49306 16.6546 7.73449 17.0007 9.00002 17.0007C10.2655 17.0007 11.507 16.6546 12.59 16H13C13.2652 16 13.5196 16.1053 13.7071 16.2929C13.8947 16.4804 14 16.7348 14 17V18ZM9.00002 15C8.01111 15 7.04441 14.7067 6.22216 14.1573C5.39992 13.6079 4.75906 12.827 4.38062 11.9134C4.00218 10.9998 3.90316 9.99444 4.09609 9.02454C4.28901 8.05464 4.76522 7.16372 5.46448 6.46446C6.16374 5.7652 7.05466 5.28899 8.02456 5.09607C8.99447 4.90314 9.9998 5.00216 10.9134 5.38059C11.8271 5.75903 12.608 6.39989 13.1574 7.22214C13.7068 8.04439 14 9.01109 14 9.99999C14 10.6566 13.8707 11.3068 13.6194 11.9134C13.3681 12.52 12.9998 13.0712 12.5355 13.5355C12.0713 13.9998 11.5201 14.3681 10.9134 14.6194C10.3068 14.8707 9.65662 15 9.00002 15ZM9.00002 8.99999C8.80223 8.99999 8.60889 9.05864 8.44444 9.16852C8.28 9.2784 8.15182 9.43458 8.07614 9.61731C8.00045 9.80003 7.98064 10.0011 8.01923 10.1951C8.05782 10.3891 8.15306 10.5672 8.29291 10.7071C8.43276 10.847 8.61094 10.9422 8.80492 10.9808C8.99891 11.0194 9.19997 10.9996 9.3827 10.9239C9.56542 10.8482 9.7216 10.72 9.83148 10.5556C9.94137 10.3911 10 10.1978 10 9.99999C10 9.73478 9.89466 9.48042 9.70712 9.29288C9.51959 9.10535 9.26523 8.99999 9.00002 8.99999Z" fill={props.color}/>
</svg>
  );
}
