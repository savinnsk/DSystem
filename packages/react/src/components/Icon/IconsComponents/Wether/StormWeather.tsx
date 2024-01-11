import React from 'react';
import { IconProps } from "../styles";

export function StormWeather(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M11.58 16.5001H10.32L11.18 15.0001C11.2523 14.8863 11.3009 14.759 11.3228 14.6259C11.3447 14.4928 11.3395 14.3567 11.3074 14.2257C11.2753 14.0947 11.217 13.9716 11.1361 13.8637C11.0552 13.7558 10.9533 13.6654 10.8365 13.5979C10.7198 13.5304 10.5905 13.4872 10.4567 13.4709C10.3228 13.4547 10.187 13.4656 10.0575 13.5032C9.92793 13.5408 9.80734 13.6042 9.70295 13.6896C9.59855 13.775 9.51251 13.8806 9.44999 14.0001L7.71999 17.0001C7.63248 17.1517 7.58628 17.3236 7.58601 17.4986C7.58574 17.6736 7.63142 17.8457 7.71848 17.9975C7.80554 18.1493 7.93092 18.2757 8.0821 18.3639C8.23329 18.4521 8.40497 18.499 8.57999 18.5001H9.85L8.99999 20.0001C8.86739 20.2308 8.83187 20.5048 8.90126 20.7617C8.97065 21.0187 9.13926 21.2375 9.36999 21.3701C9.60073 21.5027 9.8747 21.5382 10.1316 21.4688C10.3885 21.3994 10.6074 21.2308 10.74 21.0001L12.47 18.0001C12.5578 17.8481 12.604 17.6756 12.604 17.5001C12.604 17.3246 12.5578 17.1521 12.47 17.0001C12.3802 16.8445 12.2502 16.716 12.0936 16.628C11.937 16.54 11.7596 16.4958 11.58 16.5001ZM21.7 7.5701C21.5795 7.45177 21.4311 7.36587 21.2685 7.32041C21.1058 7.27494 20.9344 7.2714 20.77 7.3101C20.5534 7.35961 20.3322 7.38642 20.11 7.3901C19.3143 7.3901 18.5513 7.07403 17.9887 6.51142C17.4261 5.94881 17.11 5.18575 17.11 4.3901C17.1129 4.17116 17.1397 3.9532 17.19 3.7401C17.2297 3.57503 17.2268 3.40256 17.1814 3.23895C17.1361 3.07534 17.0498 2.92597 16.9307 2.80491C16.8117 2.68386 16.6638 2.59511 16.5009 2.54704C16.3381 2.49896 16.1657 2.49313 16 2.5301C15.0047 2.74984 14.102 3.27266 13.4161 4.0266C12.7302 4.78054 12.2949 5.72853 12.17 6.7401C11.6268 6.58487 11.065 6.50413 10.5 6.5001C9.05885 6.49928 7.66556 7.0172 6.57487 7.95916C5.48417 8.90112 4.76896 10.2042 4.55999 11.6301C3.8517 11.8241 3.22265 12.2365 2.76236 12.8087C2.30208 13.3809 2.03402 14.0838 1.99636 14.8172C1.95869 15.5506 2.15333 16.2772 2.55257 16.8935C2.95181 17.5099 3.5353 17.9846 4.21999 18.2501C4.34425 18.3091 4.47936 18.3419 4.61685 18.3464C4.75435 18.3508 4.89129 18.3268 5.0191 18.2759C5.14691 18.225 5.26285 18.1483 5.35965 18.0506C5.45646 17.9528 5.53206 17.8362 5.58172 17.7079C5.63139 17.5796 5.65404 17.4424 5.64828 17.305C5.64251 17.1675 5.60845 17.0327 5.54822 16.909C5.48798 16.7854 5.40288 16.6754 5.29822 16.5861C5.19357 16.4969 5.07162 16.4301 4.93999 16.3901C4.61784 16.2594 4.35107 16.0209 4.1853 15.7153C4.01954 15.4097 3.96507 15.0561 4.0312 14.7147C4.09734 14.3734 4.27997 14.0657 4.54788 13.8442C4.81579 13.6226 5.15234 13.501 5.49999 13.5001C5.76521 13.5001 6.01957 13.3947 6.2071 13.2072C6.39464 13.0197 6.49999 12.7653 6.49999 12.5001C6.49999 11.4392 6.92142 10.4218 7.67157 9.67167C8.42171 8.92153 9.43913 8.5001 10.5 8.5001C11.276 8.49948 12.0347 8.72918 12.68 9.1601C13.4069 9.63827 13.9581 10.3404 14.25 11.1601C14.3072 11.3319 14.4099 11.485 14.5473 11.603C14.6847 11.721 14.8515 11.7995 15.03 11.8301C15.5474 11.9217 16.0187 12.1855 16.3672 12.5787C16.7158 12.9719 16.9213 13.4714 16.9502 13.996C16.9792 14.5207 16.83 15.0397 16.5268 15.4689C16.2235 15.898 15.7842 16.2121 15.28 16.3601C15.0148 16.3959 14.7746 16.5356 14.6124 16.7485C14.4502 16.9613 14.3792 17.2299 14.415 17.4951C14.4508 17.7603 14.5905 18.0005 14.8033 18.1627C15.0162 18.3249 15.2848 18.3959 15.55 18.3601C15.6394 18.3747 15.7306 18.3747 15.82 18.3601C16.7365 18.1076 17.5444 17.5606 18.1191 16.8033C18.6939 16.0461 19.0034 15.1207 19 14.1701C19.0039 13.4733 18.8356 12.7862 18.51 12.1701C19.3688 11.9303 20.1466 11.4625 20.7611 10.8164C21.3755 10.1702 21.8036 9.36985 22 8.5001C22.0337 8.33237 22.0239 8.15879 21.9713 7.99596C21.9188 7.83314 21.8254 7.68651 21.7 7.5701ZM17.11 10.3901C16.9702 10.4014 16.8298 10.4014 16.69 10.3901C16.4716 10.2405 16.2408 10.11 16 10.0001C15.5901 9.10194 14.965 8.31879 14.18 7.7201C14.18 7.6001 14.18 7.4701 14.18 7.3501C14.18 6.91678 14.2738 6.48859 14.4551 6.095C14.6363 5.70141 14.9007 5.35176 15.23 5.0701C15.3848 6.13696 15.8803 7.1252 16.6426 7.88748C17.4049 8.64976 18.3931 9.14526 19.46 9.3001C19.1746 9.64582 18.8154 9.92319 18.4087 10.1118C18.002 10.3005 17.5583 10.3955 17.11 10.3901Z" fill={props.color}/>
</svg>
  );
}
