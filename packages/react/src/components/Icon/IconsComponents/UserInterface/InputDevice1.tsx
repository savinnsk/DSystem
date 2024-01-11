import React from 'react';
import { IconProps } from "../styles";

export function InputDevice1(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M6.21 13.29C6.11613 13.1974 6.00364 13.1258 5.88 13.08C5.63654 12.98 5.36346 12.98 5.12 13.08C4.9959 13.1249 4.8832 13.1966 4.78989 13.2899C4.69657 13.3832 4.62491 13.4959 4.58 13.62C4.51522 13.7721 4.48914 13.9378 4.50411 14.1025C4.51907 14.2671 4.57461 14.4254 4.66576 14.5633C4.7569 14.7012 4.88081 14.8144 5.0264 14.8927C5.17198 14.9709 5.3347 15.0119 5.5 15.0119C5.6653 15.0119 5.82802 14.9709 5.9736 14.8927C6.11919 14.8144 6.2431 14.7012 6.33424 14.5633C6.42539 14.4254 6.48093 14.2671 6.49589 14.1025C6.51086 13.9378 6.48478 13.7721 6.42 13.62C6.37241 13.4972 6.30104 13.3851 6.21 13.29ZM13.5 11H14.5C14.7652 11 15.0196 10.8946 15.2071 10.7071C15.3946 10.5196 15.5 10.2652 15.5 10C15.5 9.73478 15.3946 9.48043 15.2071 9.29289C15.0196 9.10536 14.7652 9 14.5 9H13.5C13.2348 9 12.9804 9.10536 12.7929 9.29289C12.6054 9.48043 12.5 9.73478 12.5 10C12.5 10.2652 12.6054 10.5196 12.7929 10.7071C12.9804 10.8946 13.2348 11 13.5 11ZM9.5 11H10.5C10.7652 11 11.0196 10.8946 11.2071 10.7071C11.3946 10.5196 11.5 10.2652 11.5 10C11.5 9.73478 11.3946 9.48043 11.2071 9.29289C11.0196 9.10536 10.7652 9 10.5 9H9.5C9.23478 9 8.98043 9.10536 8.79289 9.29289C8.60536 9.48043 8.5 9.73478 8.5 10C8.5 10.2652 8.60536 10.5196 8.79289 10.7071C8.98043 10.8946 9.23478 11 9.5 11ZM6.5 9H5.5C5.23478 9 4.98043 9.10536 4.79289 9.29289C4.60536 9.48043 4.5 9.73478 4.5 10C4.5 10.2652 4.60536 10.5196 4.79289 10.7071C4.98043 10.8946 5.23478 11 5.5 11H6.5C6.76522 11 7.01957 10.8946 7.20711 10.7071C7.39464 10.5196 7.5 10.2652 7.5 10C7.5 9.73478 7.39464 9.48043 7.20711 9.29289C7.01957 9.10536 6.76522 9 6.5 9ZM20 5H4C3.20435 5 2.44129 5.31607 1.87868 5.87868C1.31607 6.44129 1 7.20435 1 8V16C1 16.7956 1.31607 17.5587 1.87868 18.1213C2.44129 18.6839 3.20435 19 4 19H20C20.7956 19 21.5587 18.6839 22.1213 18.1213C22.6839 17.5587 23 16.7956 23 16V8C23 7.20435 22.6839 6.44129 22.1213 5.87868C21.5587 5.31607 20.7956 5 20 5ZM21 16C21 16.2652 20.8946 16.5196 20.7071 16.7071C20.5196 16.8946 20.2652 17 20 17H4C3.73478 17 3.48043 16.8946 3.29289 16.7071C3.10536 16.5196 3 16.2652 3 16V8C3 7.73478 3.10536 7.48043 3.29289 7.29289C3.48043 7.10536 3.73478 7 4 7H20C20.2652 7 20.5196 7.10536 20.7071 7.29289C20.8946 7.48043 21 7.73478 21 8V16ZM15 13H9C8.73478 13 8.48043 13.1054 8.29289 13.2929C8.10536 13.4804 8 13.7348 8 14C8 14.2652 8.10536 14.5196 8.29289 14.7071C8.48043 14.8946 8.73478 15 9 15H15C15.2652 15 15.5196 14.8946 15.7071 14.7071C15.8946 14.5196 16 14.2652 16 14C16 13.7348 15.8946 13.4804 15.7071 13.2929C15.5196 13.1054 15.2652 13 15 13ZM18.5 9H17.5C17.2348 9 16.9804 9.10536 16.7929 9.29289C16.6054 9.48043 16.5 9.73478 16.5 10C16.5 10.2652 16.6054 10.5196 16.7929 10.7071C16.9804 10.8946 17.2348 11 17.5 11H18.5C18.7652 11 19.0196 10.8946 19.2071 10.7071C19.3946 10.5196 19.5 10.2652 19.5 10C19.5 9.73478 19.3946 9.48043 19.2071 9.29289C19.0196 9.10536 18.7652 9 18.5 9ZM19.21 13.29C19.1149 13.199 19.0028 13.1276 18.88 13.08C18.6365 12.98 18.3635 12.98 18.12 13.08C17.9964 13.1258 17.8839 13.1974 17.79 13.29C17.699 13.3851 17.6276 13.4972 17.58 13.62C17.5217 13.7569 17.4947 13.905 17.5009 14.0537C17.5072 14.2023 17.5465 14.3477 17.6161 14.4792C17.6856 14.6108 17.7836 14.7251 17.903 14.8139C18.0223 14.9028 18.16 14.9638 18.3059 14.9927C18.4519 15.0216 18.6024 15.0176 18.7466 14.9809C18.8908 14.9442 19.025 14.8758 19.1394 14.7807C19.2538 14.6856 19.3455 14.5662 19.4079 14.4311C19.4703 14.296 19.5017 14.1488 19.5 14C19.5034 13.8688 19.476 13.7387 19.42 13.62C19.3724 13.4972 19.301 13.3851 19.21 13.29Z" fill={props.color}/>
</svg>
  );
}
