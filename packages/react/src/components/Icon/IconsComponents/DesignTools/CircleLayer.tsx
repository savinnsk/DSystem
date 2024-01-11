import React from 'react';
import { IconProps } from "../styles";

export function CircleLayer(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M15 2.00005C13.363 2.00137 11.7782 2.57637 10.5213 3.62506C9.26431 4.67375 8.41463 6.1298 8.11997 7.74005C7.2584 8.20487 6.52365 8.87344 5.97981 9.68745C5.43598 10.5015 5.09958 11.4362 4.99997 12.41C4.25572 12.7374 3.60253 13.2414 3.09701 13.8782C2.5915 14.515 2.24892 15.2655 2.09896 16.0647C1.949 16.8638 1.99619 17.6874 2.23643 18.4642C2.47667 19.241 2.90272 19.9474 3.47765 20.5224C4.05258 21.0973 4.75905 21.5233 5.53582 21.7636C6.31259 22.0038 7.13624 22.051 7.93536 21.9011C8.73449 21.7511 9.48499 21.4085 10.1218 20.903C10.7586 20.3975 11.2626 19.7443 11.59 19C12.561 18.9036 13.4938 18.5717 14.3076 18.0333C15.1213 17.4948 15.7915 16.766 16.26 15.91C18.0109 15.6292 19.5899 14.6942 20.6782 13.2941C21.7664 11.894 22.2827 10.133 22.1227 8.36692C21.9627 6.60085 21.1384 4.96131 19.8163 3.77951C18.4942 2.59771 16.7729 1.96173 15 2.00005ZM9.99997 17.43C9.99997 17.5301 9.99997 17.63 9.92997 17.74C9.8008 18.2547 9.53742 18.726 9.1667 19.1057C8.79597 19.4853 8.33117 19.7599 7.8197 19.9013C7.30823 20.0427 6.7684 20.046 6.25528 19.9107C5.74216 19.7754 5.27411 19.5064 4.89888 19.1311C4.52365 18.7559 4.25466 18.2879 4.11935 17.7747C3.98405 17.2616 3.98727 16.7218 4.12869 16.2103C4.27011 15.6989 4.54467 15.234 4.92436 14.8633C5.30404 14.4926 5.77527 14.2292 6.28997 14.1L6.56997 14C7.03955 13.9123 7.52344 13.9403 7.97976 14.0816C8.43608 14.223 8.8511 14.4733 9.18889 14.8111C9.52667 15.1489 9.77707 15.5639 9.91839 16.0203C10.0597 16.4766 10.0877 16.9605 9.99997 17.43ZM15 13.76C14.9868 13.8242 14.9701 13.8877 14.95 13.95C14.907 14.1341 14.8502 14.3146 14.78 14.49C14.5497 15.0738 14.1854 15.5953 13.7163 16.0122C13.2473 16.4291 12.6867 16.7299 12.08 16.89C12.08 16.71 12.08 16.5401 12.02 16.3601C11.96 16.18 12.02 16.09 12.02 15.96C12.02 15.83 11.9 15.58 11.84 15.39C11.78 15.2001 11.77 15.15 11.72 15.03C11.6338 14.8395 11.5335 14.6557 11.42 14.48C11.42 14.39 11.33 14.29 11.27 14.2C11.0921 13.9393 10.8913 13.695 10.67 13.47L10.47 13.3C10.3023 13.1459 10.1253 13.0023 9.93997 12.87C9.83102 12.7992 9.71743 12.7357 9.59997 12.68C9.43992 12.5783 9.27283 12.4881 9.09997 12.41C8.97081 12.3548 8.83694 12.3113 8.69997 12.28C8.53161 12.2117 8.35762 12.1582 8.17997 12.12C8.03997 12.12 7.88997 12.1201 7.73997 12.0601L7.12997 12C7.28916 11.3943 7.58835 10.8344 8.00347 10.3655C8.41859 9.8965 8.93803 9.53157 9.51997 9.30005C9.69148 9.22842 9.86879 9.17155 10.05 9.13005L10.25 9.08005C10.4966 9.02818 10.7479 9.00137 11 9.00005C12.0608 9.00005 13.0783 9.42148 13.8284 10.1716C14.5785 10.9218 15 11.9392 15 13C14.9986 13.2554 14.9718 13.51 14.92 13.76H15ZM17 13.6C17 13.4001 17 13.2 17 13C17 11.4088 16.3678 9.88263 15.2426 8.75741C14.1174 7.63219 12.5913 7.00005 11 7.00005C10.8 7.00005 10.6 7.00005 10.4 7.00005C10.7296 6.2586 11.2347 5.60851 11.8717 5.1059C12.5087 4.60329 13.2585 4.26326 14.0563 4.11517C14.8541 3.96708 15.6759 4.01537 16.4509 4.25589C17.2258 4.4964 17.9306 4.9219 18.5044 5.49566C19.0781 6.06942 19.5036 6.77419 19.7441 7.54915C19.9846 8.3241 20.0329 9.14595 19.8848 9.94374C19.7368 10.7415 19.3967 11.4913 18.8941 12.1283C18.3915 12.7653 17.7414 13.2704 17 13.6Z" fill={props.color}/>
</svg>
  );
}
