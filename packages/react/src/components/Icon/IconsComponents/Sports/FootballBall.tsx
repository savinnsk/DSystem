import React from 'react';
import { IconProps } from "../styles";

export function FootballBall(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M20.07 6.11008C18.9817 4.60746 17.4912 3.44276 15.77 2.75008C14.2526 2.13244 12.6067 1.89708 10.977 2.06467C9.3473 2.23227 7.78375 2.7977 6.42381 3.71123C5.06387 4.62477 3.94921 5.85844 3.17783 7.30376C2.40645 8.74909 2.00199 10.3618 2 12.0001C2 12.1901 2 12.3801 2 12.5601C2.08726 14.1242 2.54299 15.6456 3.33 17.0001C4.61526 19.2559 6.72747 20.9235 9.22 21.6501C10.1259 21.8952 11.0616 22.013 12 22.0001C12.6311 22.003 13.2609 21.9427 13.88 21.8201C15.9226 21.4247 17.7911 20.402 19.2251 18.8946C20.659 17.3871 21.5871 15.4699 21.88 13.4101C21.9551 12.9437 21.9953 12.4724 22 12.0001C22.0087 9.87999 21.3317 7.81391 20.07 6.11008ZM18.07 6.88008L17 9.74008L15.38 10.1801L13 8.49008V6.64008L15.49 4.83008C16.5004 5.31733 17.394 6.01652 18.11 6.88008H18.07ZM14 11.6701L13.22 14.0001H10.77L10 11.6701L12 10.2401L14 11.6701ZM12 4.00008C12.3716 4.00426 12.7425 4.03433 13.11 4.09008L12 4.89008L10.89 4.09008C11.2575 4.03433 11.6284 4.00426 12 4.00008ZM4.88 8.37008L5.28 9.69008L4.15 10.4801C4.29195 9.74566 4.53775 9.0352 4.88 8.37008ZM6.25 17.5401L7.63 17.5901L8 18.9201C7.35742 18.5406 6.76881 18.0765 6.25 17.5401ZM8 15.6001L4.85 15.4901C4.45256 14.7095 4.1889 13.8679 4.07 13.0001L6.56 11.2601L8 11.8801L8.89 14.6401L8 15.6001ZM8.86 10.0701L7.3 9.37008L6.39 6.37008C7.00337 5.74364 7.71637 5.22324 8.5 4.83008L11 6.64008V8.49008L8.86 10.0701ZM13 19.9301C12.1227 20.0341 11.2342 19.9936 10.37 19.8101L9.54 16.8901L10.37 16.0001H13.44L14.11 17.0001L13 19.9301ZM15.41 19.2301L15.87 18.0001L17.23 18.0701C16.6705 18.5413 16.0478 18.9317 15.38 19.2301H15.41ZM18.87 16.1101L15.76 16.0001L15.05 14.9001L15.94 12.1401L17.45 11.7301L19.81 13.7301C19.6198 14.5714 19.2921 15.3755 18.84 16.1101H18.87ZM18.92 10.2801L19.4 9.00008C19.6816 9.67979 19.8602 10.3977 19.93 11.1301L18.92 10.2801Z" fill={props.color}/>
</svg>
  );
}
