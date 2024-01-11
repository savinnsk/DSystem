import React from 'react';
import { IconProps } from "../styles";

export function SunWithWind(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M11 4.5C11.1313 4.50007 11.2614 4.47426 11.3828 4.42403C11.5041 4.3738 11.6144 4.30015 11.7073 4.20727C11.8001 4.1144 11.8738 4.00413 11.924 3.88277C11.9743 3.76141 12.0001 3.63134 12 3.5V2.5C12 2.23478 11.8946 1.98043 11.7071 1.79289C11.5196 1.60536 11.2652 1.5 11 1.5C10.7348 1.5 10.4804 1.60536 10.2929 1.79289C10.1054 1.98043 10 2.23478 10 2.5V3.5C9.99992 3.63134 10.0257 3.76141 10.076 3.88277C10.1262 4.00413 10.1999 4.1144 10.2927 4.20727C10.3856 4.30015 10.4959 4.3738 10.6172 4.42403C10.7386 4.47426 10.8687 4.50007 11 4.5ZM4 11.5C4.00007 11.3687 3.97426 11.2386 3.92403 11.1172C3.8738 10.9959 3.80015 10.8856 3.70727 10.7927C3.6144 10.6999 3.50413 10.6262 3.38277 10.576C3.26141 10.5257 3.13134 10.4999 3 10.5H2C1.73478 10.5 1.48043 10.6054 1.29289 10.7929C1.10536 10.9804 1 11.2348 1 11.5C1 11.7652 1.10536 12.0196 1.29289 12.2071C1.48043 12.3946 1.73478 12.5 2 12.5H3C3.13134 12.5001 3.26141 12.4743 3.38277 12.424C3.50413 12.3738 3.6144 12.3001 3.70727 12.2073C3.80015 12.1144 3.8738 12.0041 3.92403 11.8828C3.97426 11.7614 4.00007 11.6313 4 11.5ZM4.63574 16.4502L3.92874 17.1572C3.74122 17.3447 3.63588 17.599 3.63588 17.8642C3.63588 18.1294 3.74122 18.3837 3.92874 18.5713C4.11626 18.7588 4.37058 18.8641 4.63577 18.8641C4.90096 18.8641 5.15528 18.7588 5.3428 18.5713L6.0498 17.8643C6.23732 17.6767 6.34266 17.4224 6.34266 17.1572C6.34266 16.892 6.23732 16.6377 6.0498 16.4502C5.86228 16.2627 5.60796 16.1573 5.34277 16.1573C5.07758 16.1573 4.82326 16.2627 4.63574 16.4502ZM4.63574 6.5498C4.72859 6.64265 4.83882 6.7163 4.96013 6.76655C5.08144 6.8168 5.21146 6.84266 5.34277 6.84266C5.47408 6.84266 5.6041 6.8168 5.72541 6.76655C5.84672 6.7163 5.95695 6.64265 6.0498 6.5498C6.14265 6.45695 6.2163 6.34672 6.26655 6.22541C6.3168 6.1041 6.34266 5.97408 6.34266 5.84277C6.34266 5.71146 6.3168 5.58144 6.26655 5.46013C6.2163 5.33882 6.14265 5.22859 6.0498 5.13574L5.3428 4.42874C5.15529 4.24122 4.90096 4.13587 4.63578 4.13586C4.37059 4.13586 4.11626 4.2412 3.92874 4.42871C3.74122 4.61622 3.63587 4.87055 3.63586 5.13573C3.63586 5.40092 3.7412 5.65525 3.92871 5.84277L4.63574 6.5498ZM16.6572 6.8428C16.7886 6.84295 16.9186 6.81714 17.04 6.76686C17.1613 6.71658 17.2715 6.64281 17.3642 6.5498L18.0712 5.8428C18.2587 5.65528 18.3641 5.40096 18.3641 5.13577C18.3641 4.87058 18.2587 4.61626 18.0712 4.42874C17.8837 4.24122 17.6294 4.13588 17.3642 4.13588C17.099 4.13588 16.8447 4.24122 16.6572 4.42874L15.9502 5.13574C15.8104 5.27559 15.7152 5.45376 15.6766 5.64771C15.638 5.84166 15.6578 6.0427 15.7335 6.22539C15.8092 6.40809 15.9373 6.56426 16.1017 6.67414C16.2661 6.78403 16.4594 6.8427 16.6572 6.84274L16.6572 6.8428ZM13 12C12.9999 12.1313 13.0257 12.2614 13.076 12.3828C13.1262 12.5041 13.1999 12.6144 13.2927 12.7073C13.3856 12.8001 13.4959 12.8738 13.6172 12.924C13.7386 12.9743 13.8687 13.0001 14 13H19C19.7954 12.9991 20.5579 12.6828 21.1204 12.1204C21.6828 11.5579 21.9991 10.7954 22 10C22 9.73478 21.8946 9.48043 21.7071 9.29289C21.5196 9.10536 21.2652 9 21 9C20.7348 9 20.4804 9.10536 20.2929 9.29289C20.1054 9.48043 20 9.73478 20 10C19.9965 10.2641 19.89 10.5165 19.7032 10.7032C19.5165 10.89 19.2641 10.9965 19 11H14C13.8687 10.9999 13.7386 11.0257 13.6172 11.076C13.4959 11.1262 13.3856 11.1999 13.2927 11.2927C13.1999 11.3856 13.1262 11.4959 13.076 11.6172C13.0257 11.7386 12.9999 11.8687 13 12ZM20 15H15C14.7348 15 14.4804 15.1054 14.2929 15.2929C14.1054 15.4804 14 15.7348 14 16C14 16.2652 14.1054 16.5196 14.2929 16.7071C14.4804 16.8946 14.7348 17 15 17H20C20.2652 17 20.5196 17.1054 20.7071 17.2929C20.8946 17.4804 21 17.7348 21 18C21 18.2652 20.8946 18.5196 20.7071 18.7071C20.5196 18.8946 20.2652 19 20 19C19.7348 19 19.4804 19.1054 19.2929 19.2929C19.1054 19.4804 19 19.7348 19 20C19 20.2652 19.1054 20.5196 19.2929 20.7071C19.4804 20.8946 19.7348 21 20 21C20.7956 21 21.5587 20.6839 22.1213 20.1213C22.6839 19.5587 23 18.7956 23 18C23 17.2044 22.6839 16.4413 22.1213 15.8787C21.5587 15.3161 20.7956 15 20 15ZM9 19C8.80222 19 8.60888 19.0586 8.44443 19.1685C8.27998 19.2784 8.15181 19.4346 8.07612 19.6173C8.00043 19.8 7.98063 20.0011 8.01921 20.1951C8.0578 20.3891 8.15304 20.5673 8.29289 20.7071C8.43275 20.847 8.61093 20.9422 8.80491 20.9808C8.99889 21.0194 9.19996 20.9996 9.38268 20.9239C9.56541 20.8482 9.72159 20.72 9.83147 20.5556C9.94135 20.3911 10 20.1978 10 20C10 19.7348 9.89464 19.4804 9.70711 19.2929C9.51957 19.1054 9.26522 19 9 19ZM15 19H13C12.7348 19 12.4804 19.1054 12.2929 19.2929C12.1054 19.4804 12 19.7348 12 20C12 20.2652 12.1054 20.5196 12.2929 20.7071C12.4804 20.8946 12.7348 21 13 21H15C15.2641 21.0035 15.5165 21.11 15.7032 21.2968C15.89 21.4835 15.9965 21.7359 16 22C16 22.2652 16.1054 22.5196 16.2929 22.7071C16.4804 22.8946 16.7348 23 17 23C17.2652 23 17.5196 22.8946 17.7071 22.7071C17.8946 22.5196 18 22.2652 18 22C17.9991 21.2046 17.6828 20.4421 17.1204 19.8796C16.5579 19.3172 15.7954 19.0009 15 19ZM11 15C10.0717 15 9.1815 14.6313 8.52513 13.9749C7.86875 13.3185 7.5 12.4283 7.5 11.5C7.5 10.5717 7.86875 9.6815 8.52513 9.02513C9.1815 8.36875 10.0717 8 11 8C11.7972 7.99492 12.5711 8.26888 13.1875 8.77441C13.2892 8.85764 13.4063 8.92001 13.5321 8.95797C13.6579 8.99592 13.7899 9.00871 13.9207 8.99561C14.0514 8.98251 14.1783 8.94377 14.2941 8.88161C14.4098 8.81944 14.5122 8.73508 14.5954 8.63333C14.6785 8.53158 14.7408 8.41444 14.7786 8.28861C14.8165 8.16278 14.8292 8.03072 14.816 7.89998C14.8027 7.76925 14.7639 7.6424 14.7016 7.52668C14.6394 7.41097 14.5549 7.30865 14.4531 7.22559C13.4804 6.4266 12.2588 5.99303 11 6C9.54131 6 8.14236 6.57946 7.11091 7.61091C6.07946 8.64236 5.5 10.0413 5.5 11.5C5.5 12.9587 6.07946 14.3576 7.11091 15.3891C8.14236 16.4205 9.54131 17 11 17C11.2652 17 11.5196 16.8946 11.7071 16.7071C11.8946 16.5196 12 16.2652 12 16C12 15.7348 11.8946 15.4804 11.7071 15.2929C11.5196 15.1054 11.2652 15 11 15Z" fill={props.color}/>
</svg>
  );
}
