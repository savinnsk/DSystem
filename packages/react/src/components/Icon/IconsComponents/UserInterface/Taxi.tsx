import React from 'react';
import { IconProps } from "../styles";

export function Taxi(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M6.62 13.0801C6.4959 13.125 6.3832 13.1966 6.28989 13.29C6.19657 13.3833 6.12491 13.496 6.08 13.6201C6.00726 13.8018 5.98945 14.0009 6.02879 14.1926C6.06812 14.3844 6.16287 14.5604 6.30128 14.6988C6.43969 14.8372 6.61569 14.9319 6.80744 14.9713C6.99919 15.0106 7.19827 14.9928 7.38 14.9201C7.50118 14.8694 7.6128 14.7984 7.71 14.7101C7.79833 14.6129 7.86936 14.5013 7.92 14.3801C7.97598 14.2614 8.00338 14.1312 8 14.0001C7.99632 13.7353 7.89273 13.4817 7.71 13.2901C7.56938 13.1513 7.3908 13.0573 7.19681 13.0199C7.00282 12.9826 6.80211 13.0035 6.62 13.0801ZM19.76 9.08007L18.4 5.05007C18.1926 4.4633 17.8077 3.95557 17.2989 3.59723C16.7901 3.23889 16.1824 3.04767 15.56 3.05007H8.44C7.81764 3.04767 7.20995 3.23889 6.7011 3.59723C6.19225 3.95557 5.80745 4.4633 5.6 5.05007L4.24 9.11007C3.60033 9.27758 3.03392 9.65174 2.62883 10.1744C2.22374 10.697 2.00268 11.3388 2 12.0001V16.0001C2.00174 16.619 2.19488 17.2223 2.55294 17.7271C2.911 18.232 3.41645 18.6138 4 18.8201V20.0001C4 20.2653 4.10536 20.5196 4.29289 20.7072C4.48043 20.8947 4.73478 21.0001 5 21.0001C5.26522 21.0001 5.51957 20.8947 5.70711 20.7072C5.89464 20.5196 6 20.2653 6 20.0001V19.0001H18V20.0001C18 20.2653 18.1054 20.5196 18.2929 20.7072C18.4804 20.8947 18.7348 21.0001 19 21.0001C19.2652 21.0001 19.5196 20.8947 19.7071 20.7072C19.8946 20.5196 20 20.2653 20 20.0001V18.8201C20.5835 18.6138 21.089 18.232 21.4471 17.7271C21.8051 17.2223 21.9983 16.619 22 16.0001V12.0001C21.9973 11.3388 21.7763 10.697 21.3712 10.1744C20.9661 9.65174 20.3997 9.27758 19.76 9.11007V9.08007ZM7.49 5.68007C7.55709 5.48145 7.6849 5.30894 7.85537 5.18691C8.02584 5.06489 8.23036 4.99953 8.44 5.00007H15.56C15.7781 4.98869 15.9939 5.049 16.1744 5.17179C16.355 5.29457 16.4904 5.47309 16.56 5.68007L17.61 9.00007H6.39L7.49 5.68007ZM20 16.0001C20 16.2653 19.8946 16.5196 19.7071 16.7072C19.5196 16.8947 19.2652 17.0001 19 17.0001H5C4.73478 17.0001 4.48043 16.8947 4.29289 16.7072C4.10536 16.5196 4 16.2653 4 16.0001V12.0001C4 11.7349 4.10536 11.4805 4.29289 11.293C4.48043 11.1054 4.73478 11.0001 5 11.0001H19C19.2652 11.0001 19.5196 11.1054 19.7071 11.293C19.8946 11.4805 20 11.7349 20 12.0001V16.0001ZM16.62 13.0801C16.4959 13.125 16.3832 13.1966 16.2899 13.29C16.1966 13.3833 16.1249 13.496 16.08 13.6201C16.0073 13.8018 15.9895 14.0009 16.0288 14.1926C16.0681 14.3844 16.1629 14.5604 16.3013 14.6988C16.4397 14.8372 16.6157 14.9319 16.8074 14.9713C16.9992 15.0106 17.1983 14.9928 17.38 14.9201C17.5041 14.8752 17.6168 14.8035 17.7101 14.7102C17.8034 14.6169 17.8751 14.5042 17.92 14.3801C17.976 14.2614 18.0034 14.1312 18 14.0001C17.9963 13.7353 17.8927 13.4817 17.71 13.2901C17.5694 13.1513 17.3908 13.0573 17.1968 13.0199C17.0028 12.9826 16.8021 13.0035 16.62 13.0801ZM13 13.0001H11C10.7348 13.0001 10.4804 13.1054 10.2929 13.293C10.1054 13.4805 10 13.7349 10 14.0001C10 14.2653 10.1054 14.5196 10.2929 14.7072C10.4804 14.8947 10.7348 15.0001 11 15.0001H13C13.2652 15.0001 13.5196 14.8947 13.7071 14.7072C13.8946 14.5196 14 14.2653 14 14.0001C14 13.7349 13.8946 13.4805 13.7071 13.293C13.5196 13.1054 13.2652 13.0001 13 13.0001Z" fill={props.color}/>
</svg>
  );
}
