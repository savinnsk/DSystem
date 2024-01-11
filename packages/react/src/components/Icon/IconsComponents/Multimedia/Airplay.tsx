import React from 'react';
import { IconProps } from "../styles";

export function Airplay(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M12.83 13.45C12.7385 13.3139 12.615 13.2023 12.4702 13.1252C12.3255 13.0481 12.164 13.0078 12 13.0078C11.836 13.0078 11.6745 13.0481 11.5298 13.1252C11.385 13.2023 11.2615 13.3139 11.17 13.45L7.17 19.45C7.08223 19.602 7.03603 19.7745 7.03603 19.95C7.03603 20.1255 7.08223 20.298 7.17 20.45C7.24825 20.6062 7.36606 20.7391 7.51168 20.8356C7.6573 20.9321 7.82566 20.9888 8 21H16C16.1809 20.9995 16.3583 20.95 16.5133 20.8566C16.6682 20.7633 16.795 20.6297 16.88 20.47C16.9603 20.3136 16.9979 20.1389 16.9892 19.9633C16.9804 19.7877 16.9255 19.6176 16.83 19.47L12.83 13.45ZM9.87 19L12 15.8L14.13 19H9.87ZM19 3H5C4.20435 3 3.44129 3.31607 2.87868 3.87868C2.31607 4.44129 2 5.20435 2 6V15C2 15.7956 2.31607 16.5587 2.87868 17.1213C3.44129 17.6839 4.20435 18 5 18H5.85C6.11522 18 6.36957 17.8946 6.55711 17.7071C6.74464 17.5196 6.85 17.2652 6.85 17C6.85 16.7348 6.74464 16.4804 6.55711 16.2929C6.36957 16.1054 6.11522 16 5.85 16H5C4.73478 16 4.48043 15.8946 4.29289 15.7071C4.10536 15.5196 4 15.2652 4 15V6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5H19C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6V15C20 15.2652 19.8946 15.5196 19.7071 15.7071C19.5196 15.8946 19.2652 16 19 16H18.15C17.8848 16 17.6304 16.1054 17.4429 16.2929C17.2554 16.4804 17.15 16.7348 17.15 17C17.15 17.2652 17.2554 17.5196 17.4429 17.7071C17.6304 17.8946 17.8848 18 18.15 18H19C19.7956 18 20.5587 17.6839 21.1213 17.1213C21.6839 16.5587 22 15.7956 22 15V6C22 5.20435 21.6839 4.44129 21.1213 3.87868C20.5587 3.31607 19.7956 3 19 3Z" fill={props.color}/>
</svg>
  );
}
