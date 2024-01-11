import React from 'react';
import { IconProps } from "../styles";

export function VerticalResize(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M10.21 6.21002L11 5.41002V10C11 10.2652 11.1054 10.5196 11.2929 10.7071C11.4804 10.8947 11.7348 11 12 11C12.2652 11 12.5196 10.8947 12.7071 10.7071C12.8946 10.5196 13 10.2652 13 10V5.41002L13.79 6.21002C13.883 6.30375 13.9936 6.37814 14.1154 6.42891C14.2373 6.47968 14.368 6.50582 14.5 6.50582C14.632 6.50582 14.7627 6.47968 14.8846 6.42891C15.0064 6.37814 15.117 6.30375 15.21 6.21002C15.3037 6.11706 15.3781 6.00645 15.4289 5.8846C15.4797 5.76274 15.5058 5.63203 15.5058 5.50002C15.5058 5.36801 15.4797 5.2373 15.4289 5.11544C15.3781 4.99358 15.3037 4.88298 15.21 4.79002L12.71 2.29002C12.6149 2.19898 12.5028 2.12761 12.38 2.08002C12.1365 1.98 11.8635 1.98 11.62 2.08002C11.4973 2.12761 11.3851 2.19898 11.29 2.29002L8.79 4.79002C8.6017 4.97832 8.49591 5.23372 8.49591 5.50002C8.49591 5.76632 8.6017 6.02172 8.79 6.21002C8.97831 6.39832 9.2337 6.50411 9.5 6.50411C9.7663 6.50411 10.0217 6.39832 10.21 6.21002ZM13.79 17.79L13 18.59V14C13 13.7348 12.8946 13.4804 12.7071 13.2929C12.5196 13.1054 12.2652 13 12 13C11.7348 13 11.4804 13.1054 11.2929 13.2929C11.1054 13.4804 11 13.7348 11 14V18.59L10.21 17.79C10.1168 17.6968 10.0061 17.6228 9.88425 17.5724C9.76243 17.5219 9.63186 17.4959 9.5 17.4959C9.36814 17.4959 9.23757 17.5219 9.11575 17.5724C8.99393 17.6228 8.88324 17.6968 8.79 17.79C8.69676 17.8833 8.6228 17.9939 8.57234 18.1158C8.52188 18.2376 8.49591 18.3682 8.49591 18.5C8.49591 18.6319 8.52188 18.7624 8.57234 18.8843C8.6228 19.0061 8.69676 19.1168 8.79 19.21L11.29 21.71C11.3851 21.8011 11.4973 21.8724 11.62 21.92C11.7397 21.9729 11.8691 22.0003 12 22.0003C12.1309 22.0003 12.2603 21.9729 12.38 21.92C12.5028 21.8724 12.6149 21.8011 12.71 21.71L15.21 19.21C15.3983 19.0217 15.5041 18.7663 15.5041 18.5C15.5041 18.2337 15.3983 17.9783 15.21 17.79C15.0217 17.6017 14.7663 17.4959 14.5 17.4959C14.2337 17.4959 13.9783 17.6017 13.79 17.79Z" fill={props.color}/>
</svg>
  );
}
