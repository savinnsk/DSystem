import React from 'react';
import { IconProps } from "../styles";

export function Vuejs(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M18.0308 2.4429V2.44284L17.8763 2.4429L17.0308 2.44284L17.0307 2.44308L14.3875 2.44363L12.0132 6.39957L9.62961 2.44363L6.98367 2.44263L6.98343 2.44226H2.2717V2.44281L0.832306 2.44272L12.029 21.5578L23.1677 2.44306L18.0308 2.4429ZM12.025 17.593L4.322 4.44229H7.14566L12.0313 12.8494L16.8781 4.44229H19.6875L12.025 17.593Z" fill={props.color}/>
</svg>
  );
}
