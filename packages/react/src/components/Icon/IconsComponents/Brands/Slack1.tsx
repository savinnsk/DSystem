import React from 'react';
import { IconProps } from "../styles";

export function Slack1(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M23 9.50001C22.9989 8.5721 22.6298 7.68251 21.9736 7.02638C21.3175 6.37024 20.4279 6.00113 19.5 6.00001C18.98 6.0028 18.4673 6.1228 18 6.35108V4.50001C18.0011 3.80422 17.7944 3.12396 17.4065 2.54634C17.0186 1.96872 16.4671 1.52005 15.8226 1.25778C15.1781 0.995512 14.4701 0.931594 13.789 1.07421C13.108 1.21683 12.4851 1.55949 12 2.0583C11.4244 1.45965 10.6539 1.08613 9.82741 1.00498C9.00087 0.923818 8.17251 1.14035 7.49142 1.6156C6.81033 2.09085 6.32124 2.79361 6.11219 3.59738C5.90314 4.40115 5.98785 5.25314 6.35108 6.00001H4.50001C3.80422 5.99895 3.12396 6.20561 2.54634 6.59352C1.96872 6.98143 1.52005 7.53294 1.25778 8.17741C0.995512 8.82187 0.931594 9.52996 1.07421 10.211C1.21683 10.892 1.55949 11.5149 2.0583 12C1.45965 12.5757 1.08613 13.3461 1.00498 14.1726C0.923818 14.9992 1.14035 15.8275 1.6156 16.5086C2.09085 17.1897 2.79361 17.6788 3.59738 17.8878C4.40115 18.0969 5.25314 18.0122 6.00001 17.6489V19.5C5.99895 20.1958 6.20561 20.8761 6.59352 21.4537C6.98143 22.0313 7.53294 22.48 8.17741 22.7422C8.82187 23.0045 9.52996 23.0684 10.211 22.9258C10.892 22.7832 11.5149 22.4405 12 21.9417C12.5757 22.5404 13.3461 22.9139 14.1726 22.995C14.9992 23.0762 15.8275 22.8597 16.5086 22.3844C17.1897 21.9092 17.6788 21.2064 17.8878 20.4026C18.0969 19.5989 18.0122 18.7469 17.6489 18H19.5C20.1958 18.0011 20.8761 17.7944 21.4537 17.4065C22.0313 17.0186 22.48 16.4671 22.7422 15.8226C23.0045 15.1781 23.0684 14.4701 22.9258 13.789C22.7832 13.108 22.4405 12.4851 21.9417 12C22.2764 11.6753 22.5425 11.2867 22.7243 10.8573C22.906 10.4279 22.9998 9.96632 23 9.50001ZM13 4.50001C13 4.10219 13.158 3.72066 13.4394 3.43935C13.7207 3.15805 14.1022 3.00001 14.5 3.00001C14.8978 3.00001 15.2794 3.15805 15.5607 3.43935C15.842 3.72066 16 4.10219 16 4.50001V9.50001C16 9.89784 15.842 10.2794 15.5607 10.5607C15.2794 10.842 14.8978 11 14.5 11C14.1022 11 13.7207 10.842 13.4394 10.5607C13.158 10.2794 13 9.89784 13 9.50001V4.50001ZM6.00001 14.5C6.00001 14.7967 5.91204 15.0867 5.74722 15.3334C5.58239 15.58 5.34813 15.7723 5.07404 15.8858C4.79995 15.9994 4.49835 16.0291 4.20738 15.9712C3.9164 15.9133 3.64913 15.7705 3.43935 15.5607C3.22957 15.3509 3.08671 15.0836 3.02883 14.7926C2.97096 14.5017 3.00066 14.2001 3.11419 13.926C3.22772 13.6519 3.41998 13.4176 3.66666 13.2528C3.91333 13.088 4.20334 13 4.50001 13H6.00001V14.5ZM11 19.5C11 19.8978 10.842 20.2794 10.5607 20.5607C10.2794 20.842 9.89784 21 9.50001 21C9.10219 21 8.72066 20.842 8.43935 20.5607C8.15805 20.2794 8.00001 19.8978 8.00001 19.5V14.5C8.00001 14.1022 8.15805 13.7207 8.43935 13.4394C8.72066 13.158 9.10219 13 9.50001 13C9.89784 13 10.2794 13.158 10.5607 13.4394C10.842 13.7207 11 14.1022 11 14.5V19.5ZM9.50001 11H4.50001C4.10219 11 3.72066 10.842 3.43935 10.5607C3.15805 10.2794 3.00001 9.89784 3.00001 9.50001C3.00001 9.10219 3.15805 8.72066 3.43935 8.43935C3.72066 8.15805 4.10219 8.00001 4.50001 8.00001H9.50001C9.89784 8.00001 10.2794 8.15805 10.5607 8.43935C10.842 8.72066 11 9.10219 11 9.50001C11 9.89784 10.842 10.2794 10.5607 10.5607C10.2794 10.842 9.89784 11 9.50001 11ZM11 6.00001H9.50001C9.20334 6.00001 8.91333 5.91204 8.66666 5.74722C8.41998 5.58239 8.22772 5.34813 8.11419 5.07404C8.00066 4.79995 7.97096 4.49835 8.02883 4.20738C8.08671 3.9164 8.22957 3.64913 8.43935 3.43935C8.64913 3.22957 8.9164 3.08671 9.20738 3.02883C9.49835 2.97096 9.79995 3.00066 10.074 3.11419C10.3481 3.22772 10.5824 3.41998 10.7472 3.66666C10.912 3.91333 11 4.20334 11 4.50001V6.00001ZM12 12.0583C11.9807 12.0385 11.9615 12.0194 11.9417 12C11.9615 11.9807 11.9807 11.9615 12 11.9417C12.0194 11.9615 12.0385 11.9807 12.0583 12C12.0385 12.0194 12.0194 12.0385 12 12.0583ZM14.5 21C14.1023 20.9996 13.721 20.8414 13.4398 20.5602C13.1586 20.279 13.0004 19.8977 13 19.5V18H14.5C14.8978 18 15.2794 18.158 15.5607 18.4394C15.842 18.7207 16 19.1022 16 19.5C16 19.8978 15.842 20.2794 15.5607 20.5607C15.2794 20.842 14.8978 21 14.5 21ZM19.5 16H14.5C14.1022 16 13.7207 15.842 13.4394 15.5607C13.158 15.2794 13 14.8978 13 14.5C13 14.1022 13.158 13.7207 13.4394 13.4394C13.7207 13.158 14.1022 13 14.5 13H19.5C19.8978 13 20.2794 13.158 20.5607 13.4394C20.842 13.7207 21 14.1022 21 14.5C21 14.8978 20.842 15.2794 20.5607 15.5607C20.2794 15.842 19.8978 16 19.5 16ZM19.5 11H18V9.50001C18 9.20334 18.088 8.91333 18.2528 8.66666C18.4176 8.41998 18.6519 8.22772 18.926 8.11419C19.2001 8.00066 19.5017 7.97096 19.7926 8.02883C20.0836 8.08671 20.3509 8.22957 20.5607 8.43935C20.7704 8.64913 20.9133 8.9164 20.9712 9.20738C21.0291 9.49835 20.9994 9.79995 20.8858 10.074C20.7723 10.3481 20.58 10.5824 20.3334 10.7472C20.0867 10.912 19.7967 11 19.5 11Z" fill={props.color}/>
</svg>
  );
}
