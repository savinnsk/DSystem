import React from 'react';
import { IconProps } from "../styles";

export function Call4(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M20.47 8.99999C20.6678 8.99999 20.8611 8.94134 21.0256 8.83146C21.19 8.72158 21.3182 8.5654 21.3939 8.38267C21.4696 8.19995 21.4894 7.99888 21.4508 7.8049C21.4122 7.61092 21.317 7.43274 21.1771 7.29288C21.0373 7.15303 20.8591 7.05779 20.6651 7.0192C20.4711 6.98062 20.27 7.00042 20.0873 7.07611C19.9046 7.1518 19.7484 7.27997 19.6385 7.44442C19.5287 7.60887 19.47 7.80221 19.47 7.99999C19.47 8.26521 19.5754 8.51956 19.7629 8.7071C19.9504 8.89463 20.2048 8.99999 20.47 8.99999ZM17.47 8.99999C17.6678 8.99999 17.8611 8.94134 18.0256 8.83146C18.19 8.72158 18.3182 8.5654 18.3939 8.38267C18.4696 8.19995 18.4894 7.99888 18.4508 7.8049C18.4122 7.61092 18.317 7.43274 18.1771 7.29288C18.0373 7.15303 17.8591 7.05779 17.6651 7.0192C17.4711 6.98062 17.27 7.00042 17.0873 7.07611C16.9046 7.1518 16.7484 7.27997 16.6385 7.44442C16.5287 7.60887 16.47 7.80221 16.47 7.99999C16.47 8.26521 16.5754 8.51956 16.7629 8.7071C16.9504 8.89463 17.2048 8.99999 17.47 8.99999ZM14.47 8.99999C14.6678 8.99999 14.8611 8.94134 15.0256 8.83146C15.19 8.72158 15.3182 8.5654 15.3939 8.38267C15.4696 8.19995 15.4894 7.99888 15.4508 7.8049C15.4122 7.61092 15.317 7.43274 15.1771 7.29288C15.0373 7.15303 14.8591 7.05779 14.6651 7.0192C14.4711 6.98062 14.27 7.00042 14.0873 7.07611C13.9046 7.1518 13.7484 7.27997 13.6385 7.44442C13.5287 7.60887 13.47 7.80221 13.47 7.99999C13.47 8.13131 13.4959 8.26135 13.5461 8.38267C13.5964 8.504 13.67 8.61424 13.7629 8.7071C13.8558 8.79996 13.966 8.87361 14.0873 8.92387C14.2086 8.97412 14.3387 8.99999 14.47 8.99999ZM18.91 13C18.69 13 18.46 12.93 18.24 12.88C17.7945 12.7818 17.3567 12.6515 16.93 12.49C16.4661 12.3212 15.9562 12.33 15.4983 12.5146C15.0405 12.6992 14.6671 13.0466 14.45 13.49L14.23 13.94C13.2545 13.3958 12.3565 12.7231 11.56 11.94C10.7807 11.1439 10.1084 10.2497 9.56 9.27999L10 8.99999C10.4434 8.78291 10.7908 8.40952 10.9754 7.95168C11.16 7.49384 11.1688 6.9839 11 6.51999C10.8412 6.09241 10.7109 5.65479 10.61 5.20999C10.56 4.97999 10.52 4.75999 10.49 4.52999C10.3686 3.82561 9.99963 3.18773 9.44962 2.73123C8.89962 2.27473 8.2047 2.0296 7.49 2.03999H4.49C4.06725 2.03944 3.64915 2.12824 3.26312 2.30057C2.87709 2.47291 2.53184 2.72489 2.25 3.03999C1.96369 3.36249 1.75027 3.74292 1.6243 4.15536C1.49832 4.5678 1.46275 5.00256 1.52 5.42999C2.04671 9.61703 3.95238 13.5096 6.9364 16.4936C9.92042 19.4776 13.813 21.3833 18 21.91C18.1298 21.9199 18.2602 21.9199 18.39 21.91C19.1856 21.91 19.9487 21.5939 20.5113 21.0313C21.0739 20.4687 21.39 19.7056 21.39 18.91V15.91C21.3796 15.2122 21.1263 14.5399 20.6736 14.0087C20.221 13.4776 19.5973 13.1209 18.91 13ZM19.4 19C19.4016 19.1449 19.3717 19.2885 19.3124 19.4208C19.253 19.553 19.1656 19.6708 19.0562 19.7659C18.9469 19.861 18.8181 19.9312 18.6789 19.9717C18.5397 20.0121 18.3933 20.0217 18.25 20C14.5162 19.5128 11.0471 17.8081 8.38 15.15C5.715 12.4648 4.01324 8.97343 3.54 5.21999C3.51828 5.07332 3.52944 4.92366 3.57268 4.78184C3.61591 4.64002 3.69015 4.50959 3.79 4.39999C3.88259 4.29458 3.99633 4.20983 4.12382 4.15125C4.25131 4.09267 4.38971 4.06158 4.53 4.05999H7.53C7.76255 4.05482 7.98963 4.13087 8.17215 4.27506C8.35467 4.41925 8.48121 4.62256 8.53 4.84999C8.57 5.12332 8.62 5.39332 8.68 5.65999C8.79552 6.18713 8.94926 6.70517 9.14 7.20999L7.74 7.85999C7.6203 7.91491 7.51262 7.99294 7.42316 8.08959C7.33369 8.18623 7.2642 8.2996 7.21867 8.42318C7.17314 8.54677 7.15247 8.67812 7.15785 8.80971C7.16323 8.9413 7.19454 9.07054 7.25 9.18999C8.6892 12.2727 11.1672 14.7508 14.25 16.19C14.4935 16.29 14.7665 16.29 15.01 16.19C15.2582 16.0976 15.4595 15.9106 15.57 15.67L16.2 14.27C16.717 14.4549 17.2446 14.6085 17.78 14.73C18.04 14.79 18.32 14.84 18.59 14.88C18.8156 14.9308 19.0166 15.0582 19.1588 15.2405C19.301 15.4229 19.3757 15.6488 19.37 15.88L19.4 19Z" fill={props.color}/>
</svg>
  );
}
