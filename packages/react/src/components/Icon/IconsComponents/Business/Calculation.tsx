import React from 'react';
import { IconProps } from "../styles";

export function Calculation(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M5.5 8H6V8.5C6 8.76522 6.10536 9.01957 6.29289 9.20711C6.48043 9.39464 6.73478 9.5 7 9.5C7.26522 9.5 7.51957 9.39464 7.70711 9.20711C7.89464 9.01957 8 8.76522 8 8.5V8H8.5C8.76522 8 9.01957 7.89464 9.20711 7.70711C9.39464 7.51957 9.5 7.26522 9.5 7C9.5 6.73478 9.39464 6.48043 9.20711 6.29289C9.01957 6.10536 8.76522 6 8.5 6H8V5.5C8 5.23478 7.89464 4.98043 7.70711 4.79289C7.51957 4.60536 7.26522 4.5 7 4.5C6.73478 4.5 6.48043 4.60536 6.29289 4.79289C6.10536 4.98043 6 5.23478 6 5.5V6H5.5C5.23478 6 4.98043 6.10536 4.79289 6.29289C4.60536 6.48043 4.5 6.73478 4.5 7C4.5 7.26522 4.60536 7.51957 4.79289 7.70711C4.98043 7.89464 5.23478 8 5.5 8ZM4.88 19.12C5.06736 19.3063 5.32081 19.4108 5.585 19.4108C5.84919 19.4108 6.10264 19.3063 6.29 19.12L7 18.41L7.71 19.12C7.89736 19.3063 8.15081 19.4108 8.415 19.4108C8.67919 19.4108 8.93264 19.3063 9.12 19.12C9.30625 18.9326 9.41079 18.6792 9.41079 18.415C9.41079 18.1508 9.30625 17.8974 9.12 17.71L8.41 17L9.12 16.29C9.28383 16.0987 9.36943 15.8526 9.35971 15.6009C9.34999 15.3493 9.24566 15.1105 9.06756 14.9324C8.88947 14.7543 8.65073 14.65 8.39905 14.6403C8.14738 14.6306 7.9013 14.7162 7.71 14.88L7 15.59L6.29 14.88C6.0987 14.7162 5.85262 14.6306 5.60095 14.6403C5.34927 14.65 5.11053 14.7543 4.93244 14.9324C4.75434 15.1105 4.65001 15.3493 4.64029 15.6009C4.63057 15.8526 4.71617 16.0987 4.88 16.29L5.59 17L4.88 17.71C4.69375 17.8974 4.58921 18.1508 4.58921 18.415C4.58921 18.6792 4.69375 18.9326 4.88 19.12ZM20 1H4C3.20435 1 2.44129 1.31607 1.87868 1.87868C1.31607 2.44129 1 3.20435 1 4V20C1 20.7956 1.31607 21.5587 1.87868 22.1213C2.44129 22.6839 3.20435 23 4 23H20C20.7956 23 21.5587 22.6839 22.1213 22.1213C22.6839 21.5587 23 20.7956 23 20V4C23 3.20435 22.6839 2.44129 22.1213 1.87868C21.5587 1.31607 20.7956 1 20 1ZM11 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V13H11V21ZM11 11H3V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H11V11ZM21 20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H13V13H21V20ZM21 11H13V3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V11ZM15.5 16.5H18.5C18.7652 16.5 19.0196 16.3946 19.2071 16.2071C19.3946 16.0196 19.5 15.7652 19.5 15.5C19.5 15.2348 19.3946 14.9804 19.2071 14.7929C19.0196 14.6054 18.7652 14.5 18.5 14.5H15.5C15.2348 14.5 14.9804 14.6054 14.7929 14.7929C14.6054 14.9804 14.5 15.2348 14.5 15.5C14.5 15.7652 14.6054 16.0196 14.7929 16.2071C14.9804 16.3946 15.2348 16.5 15.5 16.5ZM18.5 6H15.5C15.2348 6 14.9804 6.10536 14.7929 6.29289C14.6054 6.48043 14.5 6.73478 14.5 7C14.5 7.26522 14.6054 7.51957 14.7929 7.70711C14.9804 7.89464 15.2348 8 15.5 8H18.5C18.7652 8 19.0196 7.89464 19.2071 7.70711C19.3946 7.51957 19.5 7.26522 19.5 7C19.5 6.73478 19.3946 6.48043 19.2071 6.29289C19.0196 6.10536 18.7652 6 18.5 6ZM15.5 19.5H18.5C18.7652 19.5 19.0196 19.3946 19.2071 19.2071C19.3946 19.0196 19.5 18.7652 19.5 18.5C19.5 18.2348 19.3946 17.9804 19.2071 17.7929C19.0196 17.6054 18.7652 17.5 18.5 17.5H15.5C15.2348 17.5 14.9804 17.6054 14.7929 17.7929C14.6054 17.9804 14.5 18.2348 14.5 18.5C14.5 18.7652 14.6054 19.0196 14.7929 19.2071C14.9804 19.3946 15.2348 19.5 15.5 19.5Z" fill={props.color}/>
</svg>
  );
}
