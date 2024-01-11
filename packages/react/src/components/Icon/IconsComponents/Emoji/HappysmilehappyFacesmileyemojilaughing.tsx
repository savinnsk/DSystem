import React from 'react';
import { IconProps } from "../styles";

export function Laughing(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M14.16 12.21C14.2534 12.3027 14.3643 12.376 14.4861 12.4258C14.6079 12.4755 14.7384 12.5008 14.87 12.5C15.0016 12.5008 15.1321 12.4755 15.2539 12.4258C15.3757 12.376 15.4866 12.3027 15.58 12.21C15.6737 12.117 15.7481 12.0064 15.7989 11.8846C15.8497 11.7627 15.8758 11.632 15.8758 11.5C15.8758 11.368 15.8497 11.2373 15.7989 11.1154C15.7481 10.9936 15.6737 10.883 15.58 10.79L14.79 10L15.58 9.21C15.6732 9.11676 15.7472 9.00607 15.7977 8.88425C15.8481 8.76243 15.8741 8.63186 15.8741 8.5C15.8741 8.36814 15.8481 8.23757 15.7977 8.11575C15.7472 7.99393 15.6732 7.88324 15.58 7.79C15.4868 7.69676 15.3761 7.6228 15.2543 7.57234C15.1324 7.52188 15.0019 7.49591 14.87 7.49591C14.7381 7.49591 14.6076 7.52188 14.4858 7.57234C14.3639 7.6228 14.2532 7.69676 14.16 7.79L12.66 9.29C12.5663 9.38296 12.4919 9.49356 12.4411 9.61542C12.3903 9.73728 12.3642 9.86799 12.3642 10C12.3642 10.132 12.3903 10.2627 12.4411 10.3846C12.4919 10.5064 12.5663 10.617 12.66 10.71L14.16 12.21ZM9.08 12.21L10.58 10.71C10.6737 10.617 10.7481 10.5064 10.7989 10.3846C10.8497 10.2627 10.8758 10.132 10.8758 10C10.8758 9.86799 10.8497 9.73728 10.7989 9.61542C10.7481 9.49356 10.6737 9.38296 10.58 9.29L9.08 7.79C8.8917 7.6017 8.63631 7.49591 8.37 7.49591C8.1037 7.49591 7.84831 7.6017 7.66 7.79C7.4717 7.9783 7.36591 8.2337 7.36591 8.5C7.36591 8.7663 7.4717 9.0217 7.66 9.21L8.46 10L7.66 10.79C7.56628 10.883 7.49188 10.9936 7.44111 11.1154C7.39034 11.2373 7.36421 11.368 7.36421 11.5C7.36421 11.632 7.39034 11.7627 7.44111 11.8846C7.49188 12.0064 7.56628 12.117 7.66 12.21C7.75344 12.3027 7.86426 12.376 7.9861 12.4258C8.10794 12.4755 8.2384 12.5008 8.37 12.5C8.50161 12.5008 8.63207 12.4755 8.75391 12.4258C8.87575 12.376 8.98656 12.3027 9.08 12.21ZM14.36 14.21C13.6915 14.749 12.8587 15.0429 12 15.0429C11.1413 15.0429 10.3085 14.749 9.64 14.21C9.43579 14.0403 9.17251 13.9586 8.90808 13.983C8.64365 14.0074 8.39974 14.1358 8.23 14.34C8.06027 14.5442 7.9786 14.8075 8.00298 15.0719C8.02736 15.3364 8.15579 15.5803 8.36 15.75C9.38134 16.6026 10.6696 17.0696 12 17.0696C13.3304 17.0696 14.6187 16.6026 15.64 15.75C15.8442 15.5803 15.9726 15.3364 15.997 15.0719C16.0214 14.8075 15.9397 14.5442 15.77 14.34C15.686 14.2389 15.5828 14.1553 15.4665 14.0941C15.3501 14.0328 15.2229 13.9951 15.0919 13.983C14.8275 13.9586 14.5642 14.0403 14.36 14.21ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z" fill={props.color}/>
</svg>
  );
}
