import React from 'react';
import { IconProps } from "../styles";

export function TurnLeftDown(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M21 4.31002H11.63C10.3039 4.31002 9.03215 4.8368 8.09447 5.77449C7.15678 6.71217 6.63 7.98394 6.63 9.31002V16.31L3.71 13.35C3.61704 13.2563 3.50644 13.1819 3.38458 13.1311C3.26272 13.0804 3.13201 13.0542 3 13.0542C2.86799 13.0542 2.73728 13.0804 2.61542 13.1311C2.49356 13.1819 2.38296 13.2563 2.29 13.35C2.10375 13.5374 1.99921 13.7908 1.99921 14.055C1.99921 14.3192 2.10375 14.5727 2.29 14.76L6.92 19.39C7.01421 19.4846 7.12641 19.5595 7.25 19.61C7.3697 19.6629 7.49913 19.6903 7.63 19.6903C7.76087 19.6903 7.8903 19.6629 8.01 19.61C8.13153 19.5557 8.24308 19.4813 8.34 19.39L13 14.76C13.1638 14.5687 13.2494 14.3226 13.2397 14.071C13.23 13.8193 13.1257 13.5806 12.9476 13.4025C12.7695 13.2244 12.5307 13.12 12.2791 13.1103C12.0274 13.1006 11.7813 13.1862 11.59 13.35L8.63 16.27V9.27002C8.63 8.47437 8.94607 7.71131 9.50868 7.1487C10.0713 6.58609 10.8343 6.27002 11.63 6.27002H21C21.2652 6.27002 21.5196 6.16466 21.7071 5.97713C21.8946 5.78959 22 5.53524 22 5.27002C22 5.0048 21.8946 4.75045 21.7071 4.56291C21.5196 4.37538 21.2652 4.27002 21 4.27002V4.31002Z" fill={props.color}/>
</svg>
  );
}
