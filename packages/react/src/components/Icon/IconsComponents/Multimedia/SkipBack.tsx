import React from 'react';
import { IconProps } from "../styles";

export function SkipBack(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M19 3C18.2044 3 17.4413 3.31607 16.8787 3.87868C16.3161 4.44129 16 5.20435 16 6V18C16 18.7956 16.3161 19.5587 16.8787 20.1213C17.4413 20.6839 18.2044 21 19 21C19.7957 21 20.5587 20.6839 21.1213 20.1213C21.6839 19.5587 22 18.7956 22 18V6C22 5.20435 21.6839 4.44129 21.1213 3.87868C20.5587 3.31607 19.7957 3 19 3ZM20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8946 19.2652 19 19 19C18.7348 19 18.4804 18.8946 18.2929 18.7071C18.1054 18.5196 18 18.2652 18 18V6C18 5.73478 18.1054 5.48043 18.2929 5.29289C18.4804 5.10536 18.7348 5 19 5C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6V18ZM12.63 5.63C12.23 5.3943 11.7743 5.27 11.31 5.27C10.8458 5.27 10.39 5.3943 9.99001 5.63L3.32001 9.63C2.91647 9.87526 2.58288 10.2203 2.35139 10.6319C2.11989 11.0435 1.99829 11.5078 1.99829 11.98C1.99829 12.4522 2.11989 12.9165 2.35139 13.3281C2.58288 13.7397 2.91647 14.0847 3.32001 14.33L9.99001 18.33C10.3889 18.5688 10.8451 18.6949 11.31 18.6949C11.7749 18.6949 12.2311 18.5688 12.63 18.33C13.0403 18.0932 13.3822 17.7541 13.6223 17.3457C13.8624 16.9373 13.9926 16.4737 14 16V8C13.9995 7.51952 13.8726 7.04763 13.6322 6.63165C13.3917 6.21567 13.0461 5.87024 12.63 5.63ZM12 16C12.0029 16.1292 11.9711 16.2567 11.9077 16.3693C11.8444 16.4819 11.7519 16.5754 11.64 16.64C11.5449 16.6973 11.436 16.7276 11.325 16.7276C11.214 16.7276 11.1051 16.6973 11.01 16.64L4.35001 12.64C4.24265 12.5712 4.15432 12.4766 4.09313 12.3648C4.03195 12.2529 3.99988 12.1275 3.99988 12C3.99988 11.8725 4.03195 11.7471 4.09313 11.6352C4.15432 11.5234 4.24265 11.4288 4.35001 11.36L11.01 7.36C11.1067 7.30189 11.2172 7.27081 11.33 7.27C11.4384 7.26997 11.5451 7.2975 11.64 7.35C11.7534 7.41538 11.8469 7.51044 11.9103 7.62497C11.9738 7.7395 12.0048 7.86916 12 8V16Z" fill={props.color}/>
</svg>
  );
}
