import React from 'react';
import { IconProps } from "../styles";

export function TopAlignment1(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M12.71 6.29C12.6149 6.19896 12.5028 6.12759 12.38 6.08C12.1365 5.97998 11.8635 5.97998 11.62 6.08C11.4972 6.12759 11.3851 6.19896 11.29 6.29L7.29 10.29C7.19676 10.3832 7.1228 10.4939 7.07234 10.6158C7.02188 10.7376 6.99591 10.8681 6.99591 11C6.99591 11.1319 7.02188 11.2624 7.07234 11.3842C7.1228 11.5061 7.19676 11.6168 7.29 11.71C7.38324 11.8032 7.49393 11.8772 7.61575 11.9277C7.73757 11.9781 7.86814 12.0041 8 12.0041C8.13186 12.0041 8.26243 11.9781 8.38425 11.9277C8.50607 11.8772 8.61676 11.8032 8.71 11.71L11 9.41V21C11 21.2652 11.1054 21.5196 11.2929 21.7071C11.4804 21.8946 11.7348 22 12 22C12.2652 22 12.5196 21.8946 12.7071 21.7071C12.8946 21.5196 13 21.2652 13 21V9.41L15.29 11.71C15.383 11.8037 15.4936 11.8781 15.6154 11.9289C15.7373 11.9797 15.868 12.0058 16 12.0058C16.132 12.0058 16.2627 11.9797 16.3846 11.9289C16.5064 11.8781 16.617 11.8037 16.71 11.71C16.8037 11.617 16.8781 11.5064 16.9289 11.3846C16.9797 11.2627 17.0058 11.132 17.0058 11C17.0058 10.868 16.9797 10.7373 16.9289 10.6154C16.8781 10.4936 16.8037 10.383 16.71 10.29L12.71 6.29ZM19 2H5C4.73478 2 4.48043 2.10536 4.29289 2.29289C4.10536 2.48043 4 2.73478 4 3C4 3.26522 4.10536 3.51957 4.29289 3.70711C4.48043 3.89464 4.73478 4 5 4H19C19.2652 4 19.5196 3.89464 19.7071 3.70711C19.8946 3.51957 20 3.26522 20 3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2Z" fill={props.color}/>
</svg>
  );
}
