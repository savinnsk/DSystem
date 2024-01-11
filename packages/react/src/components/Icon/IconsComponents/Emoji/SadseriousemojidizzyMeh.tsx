import React from 'react';
import { IconProps } from "../styles";

export function Sadserious1(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M9 11.71L9.29 11.41L9.58 11.71C9.67297 11.8037 9.78357 11.8781 9.90543 11.9289C10.0273 11.9797 10.158 12.0058 10.29 12.0058C10.422 12.0058 10.5527 11.9797 10.6746 11.9289C10.7964 11.8781 10.907 11.8037 11 11.71C11.0937 11.617 11.1681 11.5064 11.2189 11.3846C11.2697 11.2627 11.2958 11.132 11.2958 11C11.2958 10.868 11.2697 10.7373 11.2189 10.6154C11.1681 10.4936 11.0937 10.383 11 10.29L10.7 10L11 9.71C11.1883 9.51639 11.292 9.25591 11.2882 8.98586C11.2845 8.71581 11.1736 8.4583 10.98 8.27C10.7864 8.0817 10.5259 7.97802 10.2559 7.98177C9.98581 7.98552 9.72831 8.09639 9.54 8.29L9.25 8.59L9 8.29C8.8117 8.09639 8.5542 7.98552 8.28415 7.98177C8.01409 7.97802 7.75361 8.0817 7.56 8.27C7.3664 8.4583 7.25552 8.71581 7.25177 8.98586C7.24802 9.25591 7.3517 9.51639 7.54 9.71L7.84 10L7.54 10.29C7.44628 10.383 7.37188 10.4936 7.32111 10.6154C7.27034 10.7373 7.24421 10.868 7.24421 11C7.24421 11.132 7.27034 11.2627 7.32111 11.3846C7.37188 11.5064 7.44628 11.617 7.54 11.71C7.63297 11.8037 7.74357 11.8781 7.86543 11.9289C7.98729 11.9797 8.11799 12.0058 8.25 12.0058C8.38202 12.0058 8.51272 11.9797 8.63458 11.9289C8.75644 11.8781 8.86704 11.8037 8.96 11.71H9ZM15 14H9C8.73479 14 8.48043 14.1054 8.2929 14.2929C8.10536 14.4804 8 14.7348 8 15C8 15.2652 8.10536 15.5196 8.2929 15.7071C8.48043 15.8946 8.73479 16 9 16H15C15.2652 16 15.5196 15.8946 15.7071 15.7071C15.8946 15.5196 16 15.2652 16 15C16 14.7348 15.8946 14.4804 15.7071 14.2929C15.5196 14.1054 15.2652 14 15 14ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20ZM17 8.29C16.907 8.19627 16.7964 8.12188 16.6746 8.07111C16.5527 8.02034 16.422 7.9942 16.29 7.9942C16.158 7.9942 16.0273 8.02034 15.9054 8.07111C15.7836 8.12188 15.673 8.19627 15.58 8.29L15.29 8.59L15 8.29C14.8117 8.1017 14.5563 7.99591 14.29 7.99591C14.0237 7.99591 13.7683 8.1017 13.58 8.29C13.3917 8.4783 13.2859 8.7337 13.2859 9C13.2859 9.2663 13.3917 9.5217 13.58 9.71L13.88 10L13.58 10.29C13.4863 10.383 13.4119 10.4936 13.3611 10.6154C13.3103 10.7373 13.2842 10.868 13.2842 11C13.2842 11.132 13.3103 11.2627 13.3611 11.3846C13.4119 11.5064 13.4863 11.617 13.58 11.71C13.673 11.8037 13.7836 11.8781 13.9054 11.9289C14.0273 11.9797 14.158 12.0058 14.29 12.0058C14.422 12.0058 14.5527 11.9797 14.6746 11.9289C14.7964 11.8781 14.907 11.8037 15 11.71L15.29 11.41L15.58 11.71C15.673 11.8037 15.7836 11.8781 15.9054 11.9289C16.0273 11.9797 16.158 12.0058 16.29 12.0058C16.422 12.0058 16.5527 11.9797 16.6746 11.9289C16.7964 11.8781 16.907 11.8037 17 11.71C17.0937 11.617 17.1681 11.5064 17.2189 11.3846C17.2697 11.2627 17.2958 11.132 17.2958 11C17.2958 10.868 17.2697 10.7373 17.2189 10.6154C17.1681 10.4936 17.0937 10.383 17 10.29L16.7 10L17 9.71C17.0937 9.61704 17.1681 9.50644 17.2189 9.38458C17.2697 9.26272 17.2958 9.13201 17.2958 9C17.2958 8.86799 17.2697 8.73728 17.2189 8.61542C17.1681 8.49356 17.0937 8.38296 17 8.29Z" fill={props.color}/>
</svg>
  );
}
