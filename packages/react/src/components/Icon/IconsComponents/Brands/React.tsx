import React from 'react';
import { IconProps } from "../styles";

export function React(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M11.103 10.4379C10.7971 10.6145 10.5504 10.8779 10.3942 11.1947C10.238 11.5115 10.1792 11.8675 10.2253 12.2177C10.2714 12.5679 10.4203 12.8966 10.6532 13.1622C10.8861 13.4277 11.1926 13.6183 11.5338 13.7097C11.8749 13.8011 12.2356 13.7893 12.5701 13.6757C12.9045 13.5622 13.1978 13.352 13.4129 13.0717C13.6279 12.7915 13.755 12.4538 13.7781 12.1013C13.8011 11.7488 13.7192 11.3974 13.5426 11.0915C13.3057 10.6814 12.9156 10.3821 12.4581 10.2595C12.0006 10.137 11.5132 10.2011 11.103 10.4379ZM19.1077 12.3756C18.9904 12.2416 18.8667 12.1073 18.7365 11.9725C18.8275 11.877 18.9155 11.7815 19.0005 11.686C20.6064 9.88177 21.2841 8.07233 20.6561 6.9845C20.0539 5.9415 18.2627 5.63068 16.0202 6.06671C15.7993 6.10992 15.5796 6.15867 15.3612 6.21295C15.3194 6.06879 15.2749 5.92546 15.2277 5.78295C14.467 3.49042 13.2381 1.99921 11.982 2C10.7776 2.00055 9.61358 3.39709 8.87099 5.5575C8.79793 5.77063 8.73034 5.98553 8.66823 6.20221C8.52218 6.16638 8.37551 6.13328 8.22823 6.10291C5.86223 5.61713 3.95656 5.93707 3.32979 7.02551C2.72879 8.06927 3.35732 9.77533 4.8583 11.4976C5.00716 11.668 5.16023 11.8346 5.31752 11.9974C5.1321 12.1884 4.95652 12.3793 4.79287 12.5691C3.32827 14.2671 2.73568 15.9453 3.33571 16.9845C3.9554 18.058 5.83425 18.4089 8.12111 17.9589C8.30644 17.9221 8.49075 17.8808 8.67403 17.8349C8.74117 18.0692 8.81482 18.3016 8.89498 18.5319C9.6343 20.6489 10.7918 22.0005 11.992 22.0001C13.2314 21.9993 14.4739 20.5472 15.2267 18.3413C15.2862 18.167 15.3424 17.986 15.3958 17.7996C15.6325 17.8585 15.8708 17.9107 16.1106 17.9564C18.314 18.3732 20.0631 18.0454 20.6621 17.0054C21.2806 15.9311 20.6429 14.1293 19.1077 12.3756H19.1077ZM4.07018 7.45184C4.45604 6.78184 6.01342 6.52045 8.05626 6.93984C8.18682 6.96669 8.31961 6.99669 8.45464 7.02984C8.2552 7.91211 8.11447 8.80662 8.03338 9.70751C7.29628 10.2261 6.59351 10.7918 5.92949 11.4011C5.78319 11.2498 5.6408 11.0948 5.50231 10.9362L5.50237 10.9363C4.2163 9.46057 3.70799 8.08081 4.07018 7.45184ZM7.95684 13.1799C7.44628 12.7933 6.97179 12.3973 6.54113 11.9989C6.97149 11.6031 7.44628 11.2083 7.9558 10.8228C7.93749 11.2155 7.92842 11.6086 7.92858 12.002C7.92885 12.3948 7.93827 12.7874 7.95684 13.1799ZM7.95623 17.1205C7.08949 17.3133 6.19469 17.3448 5.31652 17.2137C5.07579 17.1949 4.84145 17.127 4.628 17.0141C4.41455 16.9013 4.22652 16.7458 4.07552 16.5574C3.71145 15.9267 4.18728 14.5794 5.43984 13.1271C5.59731 12.9451 5.75995 12.7679 5.92775 12.5954C6.59187 13.2079 7.29578 13.7759 8.03487 14.2955C8.11707 15.2079 8.25945 16.1138 8.46108 17.0075C8.29376 17.0493 8.12548 17.087 7.95623 17.1205ZM15.0574 9.08118C14.722 8.86985 14.3824 8.6653 14.0387 8.46753C13.7005 8.27286 13.3583 8.08551 13.0119 7.90546C13.6049 7.65613 14.1879 7.44318 14.7506 7.26965C14.8833 7.86795 14.9856 8.47256 15.0574 9.08118ZM9.67899 5.83521C10.3152 3.98407 11.2566 2.85468 11.9825 2.85437C12.7556 2.854 13.76 4.07263 14.4168 6.052C14.4595 6.18103 14.4998 6.31079 14.5378 6.44128C13.675 6.70891 12.8307 7.03336 12.0107 7.41248C11.194 7.0289 10.3525 6.70084 9.49168 6.43054C9.54922 6.23059 9.61166 6.03215 9.67899 5.83521ZM9.27862 7.259C9.8656 7.44379 10.4429 7.65807 11.0083 7.901C10.3077 8.26253 9.62528 8.65633 8.96093 9.0824C9.04119 8.4444 9.14799 7.83313 9.27862 7.259ZM8.96239 14.9197C9.29369 15.1318 9.62983 15.336 9.97082 15.5324C10.3186 15.7327 10.6711 15.9245 11.0282 16.108C10.4585 16.3593 9.87622 16.5812 9.28374 16.7729C9.1516 16.1908 9.04363 15.5688 8.96239 14.9197ZM14.4181 18.0652C14.152 18.9123 13.7324 19.7032 13.18 20.3984L13.1799 20.3985C13.0434 20.5976 12.8675 20.7667 12.6631 20.8952C12.4587 21.0236 12.2302 21.1088 11.9915 21.1455C11.2633 21.1459 10.3339 20.0605 9.7016 18.25C9.62714 18.036 9.55864 17.82 9.49609 17.6021C10.361 17.323 11.206 16.9857 12.0253 16.5924C12.8521 16.9739 13.703 17.3008 14.5726 17.5709C14.5251 17.7368 14.4736 17.9016 14.4181 18.0652ZM14.7803 16.741C14.2111 16.565 13.6197 16.3485 13.0182 16.0955C13.3573 15.917 13.6989 15.7285 14.0429 15.53C14.3959 15.3262 14.74 15.1172 15.075 14.9031C15.0083 15.5204 14.9099 16.1338 14.7803 16.741V16.741ZM15.2266 11.9983C15.2273 12.6056 15.2084 13.2124 15.1697 13.8187C14.677 14.1522 14.1569 14.4777 13.6157 14.7902C13.0768 15.1013 12.5428 15.3873 12.019 15.6461C11.4678 15.3819 10.9272 15.0972 10.3972 14.7921C9.87025 14.4887 9.35536 14.1657 8.85255 13.8231C8.80659 13.2169 8.78344 12.6097 8.78309 12.0013L8.78321 12.0015C8.78279 11.3936 8.80544 10.7863 8.85115 10.1797C9.3437 9.84332 9.86006 9.51801 10.3939 9.20978C10.9302 8.90009 11.4709 8.61536 12.0086 8.3573C12.553 8.62189 13.0877 8.90544 13.6124 9.20795C14.1391 9.51062 14.6554 9.83018 15.1614 10.1666C15.2049 10.7762 15.2266 11.3868 15.2267 11.9983H15.2266ZM16.1833 6.90546C18.1047 6.53174 19.5533 6.78314 19.9162 7.41168C20.3028 8.0813 19.7488 9.56018 18.3624 11.118L18.3624 11.1181C18.2858 11.204 18.2063 11.2903 18.1239 11.377C17.4484 10.7664 16.7321 10.2025 15.98 9.68915C15.9041 8.79812 15.7686 7.91316 15.5745 7.04022C15.7814 6.98932 15.9843 6.9444 16.1833 6.90546ZM16.0535 10.7902C16.5608 11.1606 17.0486 11.5571 17.5148 11.978C17.0506 12.4059 16.5644 12.8092 16.0581 13.1863C16.0736 12.7904 16.0812 12.3942 16.081 11.9979C16.0808 11.5952 16.0716 11.1926 16.0535 10.7902ZM19.9216 16.5789C19.5581 17.2101 18.1537 17.4733 16.2693 17.1168C16.0534 17.076 15.8318 17.0275 15.6046 16.9712C15.794 16.087 15.9235 15.1911 15.9921 14.2894C16.7429 13.7672 17.457 13.1938 18.1291 12.5736C18.2468 12.6957 18.3586 12.8174 18.4648 12.9384V12.9383C19.0658 13.5919 19.5415 14.3505 19.8678 15.1763C19.9722 15.394 20.0308 15.6308 20.0401 15.872C20.0493 16.1133 20.009 16.3539 19.9216 16.5789Z" fill={props.color}/>
</svg>
  );
}
