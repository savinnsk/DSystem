import React from 'react';
import { IconProps } from "../styles";

export function UpChevron(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M12.71 12.5399C12.617 12.4462 12.5064 12.3718 12.3846 12.321C12.2627 12.2703 12.132 12.2441 12 12.2441C11.868 12.2441 11.7373 12.2703 11.6154 12.321C11.4936 12.3718 11.383 12.4462 11.29 12.5399L8.29001 15.5399C8.0964 15.7282 7.98552 15.9857 7.98177 16.2558C7.97802 16.5258 8.0817 16.7863 8.27001 16.9799C8.45831 17.1735 8.71581 17.2844 8.98586 17.2882C9.25592 17.2919 9.5164 17.1882 9.71001 16.9999L12 14.6599L14.29 16.9999C14.383 17.0937 14.4936 17.1681 14.6154 17.2188C14.7373 17.2696 14.868 17.2957 15 17.2957C15.132 17.2957 15.2627 17.2696 15.3846 17.2188C15.5064 17.1681 15.617 17.0937 15.71 16.9999C15.8037 16.907 15.8781 16.7964 15.9289 16.6745C15.9797 16.5527 16.0058 16.422 16.0058 16.2899C16.0058 16.1579 15.9797 16.0272 15.9289 15.9054C15.8781 15.7835 15.8037 15.6729 15.71 15.5799L12.71 12.5399ZM9.71001 11.4599L12 9.15994L14.29 11.4599C14.383 11.5537 14.4936 11.6281 14.6154 11.6788C14.7373 11.7296 14.868 11.7557 15 11.7557C15.132 11.7557 15.2627 11.7296 15.3846 11.6788C15.5064 11.6281 15.617 11.5537 15.71 11.4599C15.8037 11.367 15.8781 11.2564 15.9289 11.1345C15.9797 11.0127 16.0058 10.882 16.0058 10.7499C16.0058 10.6179 15.9797 10.4872 15.9289 10.3654C15.8781 10.2435 15.8037 10.1329 15.71 10.0399L12.71 7.03994C12.617 6.94621 12.5064 6.87182 12.3846 6.82105C12.2627 6.77028 12.132 6.74414 12 6.74414C11.868 6.74414 11.7373 6.77028 11.6154 6.82105C11.4936 6.87182 11.383 6.94621 11.29 7.03994L8.29001 10.0399C8.1017 10.2282 7.99591 10.4836 7.99591 10.7499C7.99591 11.0162 8.1017 11.2716 8.29001 11.4599C8.47831 11.6482 8.7337 11.754 9.00001 11.754C9.26631 11.754 9.5217 11.6482 9.71001 11.4599Z" fill={props.color}/>
</svg>
  );
}
