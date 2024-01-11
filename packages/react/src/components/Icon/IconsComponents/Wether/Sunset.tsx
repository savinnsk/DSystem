import React from 'react';
import { IconProps } from "../styles";

export function Sunset(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M17.66 8.34C17.9223 8.3389 18.1737 8.23474 18.36 8.05L19.07 7.34C19.1747 7.25035 19.2597 7.14004 19.3197 7.01597C19.3797 6.89191 19.4135 6.75677 19.4188 6.61905C19.4241 6.48133 19.4009 6.344 19.3506 6.21568C19.3004 6.08735 19.2241 5.9708 19.1266 5.87335C19.0292 5.77589 18.9126 5.69964 18.7843 5.64936C18.656 5.59909 18.5187 5.57588 18.3809 5.5812C18.2432 5.58652 18.1081 5.62025 17.984 5.68027C17.86 5.7403 17.7496 5.82532 17.66 5.93L17 6.64C16.8137 6.82736 16.7092 7.08081 16.7092 7.345C16.7092 7.60919 16.8137 7.86264 17 8.05C17.1763 8.22536 17.4116 8.32875 17.66 8.34ZM12 6C12.2652 6 12.5196 5.89464 12.7071 5.70711C12.8946 5.51957 13 5.26522 13 5V4C13 3.73478 12.8946 3.48043 12.7071 3.29289C12.5196 3.10536 12.2652 3 12 3C11.7348 3 11.4804 3.10536 11.2929 3.29289C11.1054 3.48043 11 3.73478 11 4V5C11 5.26522 11.1054 5.51957 11.2929 5.70711C11.4804 5.89464 11.7348 6 12 6ZM4 12H3C2.73478 12 2.48043 12.1054 2.29289 12.2929C2.10536 12.4804 2 12.7348 2 13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H4C4.26522 14 4.51957 13.8946 4.70711 13.7071C4.89464 13.5196 5 13.2652 5 13C5 12.7348 4.89464 12.4804 4.70711 12.2929C4.51957 12.1054 4.26522 12 4 12ZM5.64 8.05C5.82626 8.23474 6.07766 8.3389 6.34 8.34C6.47161 8.34076 6.60207 8.31554 6.72391 8.26577C6.84574 8.21601 6.95656 8.14268 7.05 8.05C7.23625 7.86264 7.34079 7.60919 7.34079 7.345C7.34079 7.08081 7.23625 6.82736 7.05 6.64L6.34 5.93C6.1487 5.76617 5.90262 5.68057 5.65095 5.69029C5.39927 5.70001 5.16053 5.80434 4.98244 5.98244C4.80434 6.16053 4.70001 6.39927 4.69029 6.65095C4.68057 6.90262 4.76617 7.1487 4.93 7.34L5.64 8.05ZM21 12H20C19.7348 12 19.4804 12.1054 19.2929 12.2929C19.1054 12.4804 19 12.7348 19 13C19 13.2652 19.1054 13.5196 19.2929 13.7071C19.4804 13.8946 19.7348 14 20 14H21C21.2652 14 21.5196 13.8946 21.7071 13.7071C21.8946 13.5196 22 13.2652 22 13C22 12.7348 21.8946 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12ZM11 19H8C7.73478 19 7.48043 19.1054 7.29289 19.2929C7.10536 19.4804 7 19.7348 7 20C7 20.2652 7.10536 20.5196 7.29289 20.7071C7.48043 20.8946 7.73478 21 8 21H11C11.2652 21 11.5196 20.8946 11.7071 20.7071C11.8946 20.5196 12 20.2652 12 20C12 19.7348 11.8946 19.4804 11.7071 19.2929C11.5196 19.1054 11.2652 19 11 19ZM18 15H17.12C17.3726 14.3635 17.5015 13.6848 17.5 13C17.5 11.5413 16.9205 10.1424 15.8891 9.11091C14.8576 8.07946 13.4587 7.5 12 7.5C10.5413 7.5 9.14236 8.07946 8.11091 9.11091C7.07946 10.1424 6.5 11.5413 6.5 13C6.49848 13.6848 6.62744 14.3635 6.88 15H6C5.73478 15 5.48043 15.1054 5.29289 15.2929C5.10536 15.4804 5 15.7348 5 16C5 16.2652 5.10536 16.5196 5.29289 16.7071C5.48043 16.8946 5.73478 17 6 17H18C18.2652 17 18.5196 16.8946 18.7071 16.7071C18.8946 16.5196 19 16.2652 19 16C19 15.7348 18.8946 15.4804 18.7071 15.2929C18.5196 15.1054 18.2652 15 18 15ZM14.85 15H9.15C8.72987 14.4175 8.50258 13.7182 8.5 13C8.5 12.0717 8.86875 11.1815 9.52513 10.5251C10.1815 9.86875 11.0717 9.5 12 9.5C12.9283 9.5 13.8185 9.86875 14.4749 10.5251C15.1313 11.1815 15.5 12.0717 15.5 13C15.4974 13.7182 15.2701 14.4175 14.85 15ZM16 19H15C14.7348 19 14.4804 19.1054 14.2929 19.2929C14.1054 19.4804 14 19.7348 14 20C14 20.2652 14.1054 20.5196 14.2929 20.7071C14.4804 20.8946 14.7348 21 15 21H16C16.2652 21 16.5196 20.8946 16.7071 20.7071C16.8946 20.5196 17 20.2652 17 20C17 19.7348 16.8946 19.4804 16.7071 19.2929C16.5196 19.1054 16.2652 19 16 19Z" fill={props.color}/>
</svg>
  );
}
