import React from 'react';
import { IconProps } from "../styles";

export function Swimmer(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M17 9.28003C17.3956 9.28003 17.7823 9.16273 18.1112 8.94297C18.4401 8.72321 18.6964 8.41085 18.8478 8.0454C18.9991 7.67995 19.0388 7.27781 18.9616 6.88985C18.8844 6.50189 18.6939 6.14552 18.4142 5.86582C18.1345 5.58611 17.7782 5.39563 17.3902 5.31846C17.0022 5.24129 16.6001 5.2809 16.2346 5.43227C15.8692 5.58365 15.5568 5.83999 15.3371 6.16889C15.1173 6.49779 15 6.88447 15 7.28003C15 7.81046 15.2107 8.31917 15.5858 8.69424C15.9609 9.06932 16.4696 9.28003 17 9.28003ZM2.71001 13.92C2.90817 13.9834 3.0992 14.0672 3.28001 14.17C3.90194 14.5338 4.60949 14.7256 5.33001 14.7256C6.05054 14.7256 6.75808 14.5338 7.38001 14.17C7.77109 13.9511 8.2118 13.8361 8.66001 13.8361C9.10822 13.8361 9.54893 13.9511 9.94001 14.17L10.15 14.27C10.7568 14.5654 11.4266 14.708 12.1011 14.6854C12.7757 14.6627 13.4344 14.4755 14.02 14.14C14.4111 13.9211 14.8518 13.8061 15.3 13.8061C15.7482 13.8061 16.1889 13.9211 16.58 14.14C17.2138 14.5022 17.9301 14.6951 18.66 14.7C19.3644 14.6927 20.0543 14.4995 20.66 14.14C20.8408 14.0372 21.0319 13.9534 21.23 13.89C21.3778 13.8799 21.5215 13.837 21.6507 13.7645C21.7799 13.692 21.8914 13.5917 21.9771 13.4708C22.0628 13.35 22.1205 13.2116 22.1462 13.0657C22.1719 12.9198 22.1648 12.77 22.1255 12.6271C22.0862 12.4843 22.0157 12.3519 21.919 12.2397C21.8223 12.1275 21.7018 12.0381 21.5664 11.9781C21.4309 11.9181 21.2838 11.8889 21.1357 11.8927C20.9876 11.8965 20.8422 11.9332 20.71 12C20.3611 12.1083 20.0256 12.2559 19.71 12.44C19.3908 12.6243 19.0286 12.7214 18.66 12.7214C18.2914 12.7214 17.9293 12.6243 17.61 12.44C16.9173 12.0492 16.1354 11.8439 15.34 11.8439C14.5446 11.8439 13.7628 12.0492 13.07 12.44C12.9759 12.486 12.8791 12.5261 12.78 12.56L14.34 11C14.3758 10.9537 14.406 10.9034 14.43 10.85C14.4753 10.8008 14.5155 10.7472 14.55 10.69C14.5547 10.6268 14.5547 10.5633 14.55 10.5C14.5557 10.4368 14.5557 10.3732 14.55 10.31C14.5548 10.2501 14.5548 10.1899 14.55 10.13C14.5557 10.0668 14.5557 10.0032 14.55 9.94003C14.5204 9.88124 14.487 9.82446 14.45 9.77003C14.4241 9.71243 14.3904 9.65861 14.35 9.61003L11.28 6.28003C11.1992 6.19198 11.1047 6.11767 11 6.06003C10.9303 6.0508 10.8597 6.0508 10.79 6.06003C10.7337 6.05088 10.6763 6.05088 10.62 6.06003C10.4869 6.00647 10.3428 5.98588 10.2 6.00003L6.66001 7.32003C6.41078 7.41029 6.20757 7.59582 6.09507 7.83584C5.98256 8.07585 5.96995 8.35072 6.06001 8.60003C6.15028 8.84927 6.3358 9.05247 6.57582 9.16498C6.81584 9.27748 7.0907 9.29009 7.34001 9.20003L10.27 8.13003L12.27 10.25L10.37 12.15C9.73342 11.9026 9.04987 11.7993 8.36858 11.8477C7.68729 11.8962 7.02522 12.095 6.43001 12.43C6.11077 12.6143 5.74864 12.7114 5.38001 12.7114C5.01139 12.7114 4.64925 12.6143 4.33001 12.43C4.01443 12.2459 3.67894 12.0983 3.33001 11.99C3.20206 11.9423 3.06569 11.9213 2.92931 11.9283C2.79292 11.9352 2.65941 11.9701 2.53701 12.0306C2.4146 12.0912 2.3059 12.1762 2.2176 12.2804C2.1293 12.3845 2.06327 12.5057 2.02359 12.6364C1.98391 12.7671 1.97142 12.9045 1.98688 13.0402C2.00234 13.1758 2.04543 13.3069 2.11349 13.4253C2.18155 13.5437 2.27314 13.6469 2.38261 13.7286C2.49209 13.8102 2.61712 13.8686 2.75001 13.9L2.71001 13.92ZM20.71 17.01C20.3611 17.1183 20.0256 17.2659 19.71 17.45C19.3908 17.6343 19.0286 17.7314 18.66 17.7314C18.2914 17.7314 17.9293 17.6343 17.61 17.45C16.9173 17.0592 16.1354 16.8539 15.34 16.8539C14.5446 16.8539 13.7628 17.0592 13.07 17.45C12.7481 17.6371 12.3824 17.7356 12.01 17.7356C11.6377 17.7356 11.272 17.6371 10.95 17.45C10.2573 17.0592 9.47538 16.8539 8.68001 16.8539C7.88465 16.8539 7.10275 17.0592 6.41001 17.45C6.09077 17.6343 5.72864 17.7314 5.36001 17.7314C4.99139 17.7314 4.62925 17.6343 4.31001 17.45C3.99443 17.2659 3.65894 17.1183 3.31001 17.01C3.18206 16.9623 3.04569 16.9413 2.90931 16.9483C2.77292 16.9552 2.63941 16.9901 2.51701 17.0506C2.3946 17.1112 2.2859 17.1962 2.1976 17.3004C2.1093 17.4045 2.04327 17.5257 2.00359 17.6564C1.96391 17.7871 1.95142 17.9245 1.96688 18.0602C1.98234 18.1958 2.02543 18.3269 2.09349 18.4453C2.16155 18.5637 2.25314 18.6669 2.36261 18.7486C2.47209 18.8302 2.59712 18.8886 2.73001 18.92C2.92817 18.9834 3.11919 19.0672 3.30001 19.17C3.92194 19.5338 4.62949 19.7256 5.35001 19.7256C6.07054 19.7256 6.77808 19.5338 7.40001 19.17C7.79109 18.9511 8.2318 18.8361 8.68001 18.8361C9.12822 18.8361 9.56894 18.9511 9.96001 19.17C10.5873 19.5287 11.2974 19.7174 12.02 19.7174C12.7426 19.7174 13.4527 19.5287 14.08 19.17C14.4711 18.9511 14.9118 18.8361 15.36 18.8361C15.8082 18.8361 16.2489 18.9511 16.64 19.17C17.2738 19.5322 17.9901 19.7251 18.72 19.73C19.4244 19.7227 20.1143 19.5295 20.72 19.17C20.9008 19.0672 21.0919 18.9834 21.29 18.92C21.4161 18.8819 21.5334 18.8194 21.6353 18.736C21.7372 18.6525 21.8217 18.5499 21.8839 18.4338C21.9461 18.3177 21.9849 18.1905 21.9979 18.0595C22.011 17.9284 21.9981 17.7961 21.96 17.67C21.9219 17.544 21.8594 17.4266 21.776 17.3247C21.6925 17.2228 21.5898 17.1384 21.4738 17.0761C21.3577 17.0139 21.2305 16.9752 21.0995 16.9621C20.9684 16.9491 20.8361 16.9619 20.71 17V17.01Z" fill={props.color}/>
</svg>
  );
}
