import React from 'react';
import { IconProps } from "../styles";

export function Arrow(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M21.71 16.29C21.617 16.1963 21.5064 16.1219 21.3846 16.0711C21.2627 16.0203 21.132 15.9942 21 15.9942C20.868 15.9942 20.7373 16.0203 20.6154 16.0711C20.4936 16.1219 20.383 16.1963 20.29 16.29L18 18.59V9C18 8.20435 17.6839 7.44129 17.1213 6.87868C16.5587 6.31607 15.7956 6 15 6H5.40999L7.70999 3.71C7.80323 3.61676 7.87719 3.50607 7.92765 3.38425C7.97811 3.26243 8.00408 3.13186 8.00408 3C8.00408 2.86814 7.97811 2.73758 7.92765 2.61575C7.87719 2.49393 7.80323 2.38324 7.70999 2.29C7.61675 2.19676 7.50606 2.1228 7.38424 2.07234C7.26242 2.02188 7.13185 1.99591 6.99999 1.99591C6.86813 1.99591 6.73756 2.02188 6.61574 2.07234C6.49392 2.1228 6.38323 2.19676 6.28999 2.29L2.28999 6.29C2.19895 6.38511 2.12758 6.49725 2.07999 6.62C1.97997 6.86346 1.97997 7.13654 2.07999 7.38C2.12758 7.50275 2.19895 7.6149 2.28999 7.71L6.28999 11.71C6.38295 11.8037 6.49355 11.8781 6.61541 11.9289C6.73727 11.9797 6.86798 12.0058 6.99999 12.0058C7.132 12.0058 7.26271 11.9797 7.38456 11.9289C7.50642 11.8781 7.61702 11.8037 7.70999 11.71C7.80372 11.617 7.87811 11.5064 7.92888 11.3846C7.97965 11.2627 8.00579 11.132 8.00579 11C8.00579 10.868 7.97965 10.7373 7.92888 10.6154C7.87811 10.4936 7.80372 10.383 7.70999 10.29L5.40999 8H15C15.2652 8 15.5196 8.10536 15.7071 8.2929C15.8946 8.48043 16 8.73479 16 9V18.59L13.71 16.29C13.6167 16.1968 13.5061 16.1228 13.3842 16.0723C13.2624 16.0219 13.1318 15.9959 13 15.9959C12.8681 15.9959 12.7376 16.0219 12.6157 16.0723C12.4939 16.1228 12.3832 16.1968 12.29 16.29C12.1967 16.3832 12.1228 16.4939 12.0723 16.6158C12.0219 16.7376 11.9959 16.8681 11.9959 17C11.9959 17.1319 12.0219 17.2624 12.0723 17.3843C12.1228 17.5061 12.1967 17.6168 12.29 17.71L16.29 21.71C16.3851 21.801 16.4972 21.8724 16.62 21.92C16.7397 21.9729 16.8691 22.0002 17 22.0002C17.1309 22.0002 17.2603 21.9729 17.38 21.92C17.5027 21.8724 17.6149 21.801 17.71 21.71L21.71 17.71C21.8037 17.617 21.8781 17.5064 21.9289 17.3846C21.9796 17.2627 22.0058 17.132 22.0058 17C22.0058 16.868 21.9796 16.7373 21.9289 16.6154C21.8781 16.4936 21.8037 16.383 21.71 16.29Z" fill={props.color}/>
</svg>
  );
}
