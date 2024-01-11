import React from 'react';
import { IconProps } from "../styles";

export function Start(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M18.54 9.00003L8.88 3.46003C8.35729 3.15819 7.764 3.00006 7.16039 3.00172C6.55679 3.00338 5.96438 3.16476 5.44333 3.46947C4.92228 3.77417 4.49115 4.21135 4.19375 4.7366C3.89634 5.26185 3.74324 5.85646 3.75 6.46003V17.58C3.75 18.4871 4.11032 19.357 4.7517 19.9983C5.39307 20.6397 6.26296 21 7.17 21C7.77044 20.999 8.36009 20.8404 8.88 20.54L18.54 15C19.0591 14.6996 19.49 14.268 19.7896 13.7485C20.0892 13.2289 20.2469 12.6397 20.2469 12.04C20.2469 11.4403 20.0892 10.8511 19.7896 10.3316C19.49 9.81206 19.0591 9.38044 18.54 9.08003V9.00003ZM17.54 13.19L7.88 18.81C7.66349 18.9327 7.41887 18.9972 7.17 18.9972C6.92113 18.9972 6.67652 18.9327 6.46 18.81C6.2441 18.6854 6.06482 18.5061 5.94018 18.2902C5.81555 18.0743 5.74996 17.8293 5.75 17.58V6.42003C5.74996 6.17072 5.81555 5.9258 5.94018 5.70989C6.06482 5.49397 6.2441 5.31468 6.46 5.19003C6.67741 5.06918 6.9213 5.00392 7.17 5.00003C7.41853 5.00513 7.66214 5.07032 7.88 5.19003L17.54 10.77C17.756 10.8946 17.9353 11.0739 18.0601 11.2898C18.1848 11.5057 18.2504 11.7507 18.2504 12C18.2504 12.2494 18.1848 12.4943 18.0601 12.7102C17.9353 12.9262 17.756 13.1054 17.54 13.23V13.19Z" fill={props.color}/>
</svg>
  );
}
