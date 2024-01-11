import React from 'react';
import { IconProps } from "../styles";

export function Close(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_131_264)">
        <circle cx="10" cy="10" r="9.5" stroke="white" />
        <path
          d="M10.7045 9.99957L13.8522 6.85652C13.9463 6.76242 13.9991 6.6348 13.9991 6.50174C13.9991 6.36867 13.9463 6.24105 13.8522 6.14696C13.7581 6.05286 13.6305 6 13.4975 6C13.3644 6 13.2368 6.05286 13.1427 6.14696L10 9.29501L6.85728 6.14696C6.76319 6.05286 6.63559 6 6.50253 6C6.36948 6 6.24188 6.05286 6.14779 6.14696C6.05371 6.24105 6.00085 6.36867 6.00085 6.50174C6.00085 6.6348 6.05371 6.76242 6.14779 6.85652L9.29551 9.99957L6.14779 13.1426C6.10096 13.1891 6.06379 13.2443 6.03843 13.3052C6.01306 13.3661 6 13.4314 6 13.4974C6 13.5634 6.01306 13.6287 6.03843 13.6896C6.06379 13.7505 6.10096 13.8057 6.14779 13.8522C6.19424 13.899 6.2495 13.9362 6.31039 13.9616C6.37127 13.9869 6.43658 14 6.50253 14C6.56849 14 6.6338 13.9869 6.69468 13.9616C6.75557 13.9362 6.81083 13.899 6.85728 13.8522L10 10.7041L13.1427 13.8522C13.1892 13.899 13.2444 13.9362 13.3053 13.9616C13.3662 13.9869 13.4315 14 13.4975 14C13.5634 14 13.6287 13.9869 13.6896 13.9616C13.7505 13.9362 13.8058 13.899 13.8522 13.8522C13.899 13.8057 13.9362 13.7505 13.9616 13.6896C13.9869 13.6287 14 13.5634 14 13.4974C14 13.4314 13.9869 13.3661 13.9616 13.3052C13.9362 13.2443 13.899 13.1891 13.8522 13.1426L10.7045 9.99957Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_131_264">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>

</svg>
  );
}
