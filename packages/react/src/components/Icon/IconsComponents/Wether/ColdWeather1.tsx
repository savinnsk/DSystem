import React from 'react';
import { IconProps } from "../styles";

export function ColdWeather1(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 15.9201H13.73L14.12 15.2501C14.2526 15.0193 14.2881 14.7453 14.2187 14.4884C14.1493 14.2315 13.9807 14.0127 13.75 13.8801C13.5193 13.7474 13.2453 13.7119 12.9884 13.7813C12.7314 13.8507 12.5126 14.0193 12.38 14.2501L12 14.9201L11.62 14.2501C11.4874 14.0193 11.2686 13.8507 11.0116 13.7813C10.7547 13.7119 10.4807 13.7474 10.25 13.8801C10.0193 14.0127 9.85065 14.2315 9.78126 14.4884C9.71187 14.7453 9.74739 15.0193 9.88 15.2501L10.27 15.9201H9.5C9.23478 15.9201 8.98043 16.0254 8.79289 16.2129C8.60536 16.4005 8.5 16.6548 8.5 16.9201C8.5 17.1853 8.60536 17.4396 8.79289 17.6272C8.98043 17.8147 9.23478 17.9201 9.5 17.9201H10.27L9.88 18.5801C9.74739 18.8108 9.71187 19.0848 9.78126 19.3417C9.85065 19.5986 10.0193 19.8174 10.25 19.9501C10.4807 20.0827 10.7547 20.1182 11.0116 20.0488C11.2686 19.9794 11.4874 19.8108 11.62 19.5801L12 18.9201L12.38 19.5801C12.5126 19.8108 12.7314 19.9794 12.9884 20.0488C13.2453 20.1182 13.5193 20.0827 13.75 19.9501C13.9807 19.8174 14.1493 19.5986 14.2187 19.3417C14.2881 19.0848 14.2526 18.8108 14.12 18.5801L13.73 17.9201H14.5C14.7652 17.9201 15.0196 17.8147 15.2071 17.6272C15.3946 17.4396 15.5 17.1853 15.5 16.9201C15.5 16.6548 15.3946 16.4005 15.2071 16.2129C15.0196 16.0254 14.7652 15.9201 14.5 15.9201ZM18.42 8.13005C17.8104 6.72643 16.7576 5.56126 15.4227 4.81288C14.0879 4.06451 12.5446 3.77416 11.0291 3.98629C9.5136 4.19842 8.10935 4.90133 7.0313 5.98743C5.95326 7.07354 5.26083 8.48299 5.06 10.0001C4.18239 10.2122 3.40237 10.715 2.8468 11.4267C2.29122 12.1385 1.99278 13.0172 2 13.9201C2.00358 14.8639 2.3408 15.776 2.95202 16.4952C3.56324 17.2144 4.40909 17.6943 5.34 17.8501H5.5C5.76521 17.8713 6.028 17.7863 6.23054 17.6137C6.43308 17.4412 6.55878 17.1953 6.58 16.9301C6.60122 16.6648 6.51621 16.4021 6.34367 16.1995C6.17114 15.997 5.92521 15.8713 5.66 15.8501C5.19041 15.7691 4.76516 15.5231 4.46082 15.1565C4.15649 14.7898 3.99307 14.3265 4 13.8501C4 13.3196 4.21071 12.8109 4.58578 12.4358C4.96086 12.0608 5.46957 11.8501 6 11.8501C6.26521 11.8501 6.51957 11.7447 6.7071 11.5572C6.89464 11.3696 7 11.1153 7 10.8501C7.00255 9.66733 7.42428 8.5238 8.19027 7.62263C8.95625 6.72146 10.0169 6.121 11.1837 5.92792C12.3506 5.73485 13.5481 5.96166 14.5636 6.56806C15.579 7.17446 16.3466 8.12119 16.73 9.24005C16.7887 9.41003 16.8921 9.56104 17.0293 9.67719C17.1666 9.79334 17.3327 9.87033 17.51 9.90005C18.1467 10.0157 18.729 10.3341 19.1699 10.8078C19.6108 11.2815 19.8867 11.8851 19.9564 12.5285C20.0262 13.1719 19.886 13.8205 19.5568 14.3777C19.2277 14.9349 18.7272 15.3707 18.13 15.6201C17.9973 15.6602 17.8745 15.7275 17.7692 15.8177C17.6639 15.9078 17.5785 16.0189 17.5185 16.1438C17.4584 16.2688 17.425 16.4048 17.4203 16.5433C17.4156 16.6819 17.4398 16.8199 17.4912 16.9486C17.5427 17.0772 17.6204 17.1938 17.7193 17.2909C17.8183 17.388 17.9363 17.4635 18.0659 17.5125C18.1956 17.5615 18.334 17.5831 18.4724 17.5758C18.6108 17.5685 18.7462 17.5325 18.87 17.47C19.8247 17.0778 20.6346 16.3998 21.1886 15.529C21.7426 14.6582 22.0135 13.6372 21.9642 12.6063C21.9149 11.5754 21.5478 10.585 20.9132 9.77102C20.2787 8.95704 19.4077 8.35938 18.42 8.06005V8.13005Z" fill={props.color}/>
</svg>
  );
}
