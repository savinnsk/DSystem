import React from 'react';
import { IconProps } from "../styles";

export function Arrow3(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M9.71 6.29C9.61704 6.19627 9.50644 6.12188 9.38458 6.07111C9.26272 6.02034 9.13201 5.9942 9 5.9942C8.86799 5.9942 8.73728 6.02034 8.61542 6.07111C8.49356 6.12188 8.38296 6.19627 8.29 6.29L3.29 11.29C3.19627 11.383 3.12188 11.4936 3.07111 11.6154C3.02034 11.7373 2.9942 11.868 2.9942 12C2.9942 12.132 3.02034 12.2627 3.07111 12.3846C3.12188 12.5064 3.19627 12.617 3.29 12.71L8.29 17.71C8.38296 17.8037 8.49356 17.8781 8.61542 17.9289C8.73728 17.9797 8.86799 18.0058 9 18.0058C9.13201 18.0058 9.26272 17.9797 9.38458 17.9289C9.50644 17.8781 9.61704 17.8037 9.71 17.71C9.80373 17.617 9.87812 17.5064 9.92889 17.3846C9.97966 17.2627 10.0058 17.132 10.0058 17C10.0058 16.868 9.97966 16.7373 9.92889 16.6154C9.87812 16.4936 9.80373 16.383 9.71 16.29L5.41 12L9.71 7.71C9.80373 7.61704 9.87812 7.50644 9.92889 7.38458C9.97966 7.26272 10.0058 7.13201 10.0058 7C10.0058 6.86799 9.97966 6.73728 9.92889 6.61542C9.87812 6.49356 9.80373 6.38296 9.71 6.29ZM20.71 11.29L15.71 6.29C15.6168 6.19676 15.5061 6.1228 15.3842 6.07234C15.2624 6.02188 15.1319 5.99591 15 5.99591C14.7337 5.99591 14.4783 6.1017 14.29 6.29C14.1968 6.38324 14.1228 6.49393 14.0723 6.61575C14.0219 6.73757 13.9959 6.86814 13.9959 7C13.9959 7.2663 14.1017 7.5217 14.29 7.71L18.59 12L14.29 16.29C14.1963 16.383 14.1219 16.4936 14.0711 16.6154C14.0203 16.7373 13.9942 16.868 13.9942 17C13.9942 17.132 14.0203 17.2627 14.0711 17.3846C14.1219 17.5064 14.1963 17.617 14.29 17.71C14.383 17.8037 14.4936 17.8781 14.6154 17.9289C14.7373 17.9797 14.868 18.0058 15 18.0058C15.132 18.0058 15.2627 17.9797 15.3846 17.9289C15.5064 17.8781 15.617 17.8037 15.71 17.71L20.71 12.71C20.8037 12.617 20.8781 12.5064 20.9289 12.3846C20.9797 12.2627 21.0058 12.132 21.0058 12C21.0058 11.868 20.9797 11.7373 20.9289 11.6154C20.8781 11.4936 20.8037 11.383 20.71 11.29Z" fill={props.color}/>
</svg>
  );
}
