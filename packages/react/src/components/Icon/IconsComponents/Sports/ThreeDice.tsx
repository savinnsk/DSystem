import React from 'react';
import { IconProps } from "../styles";

export function ThreeDice(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M12 11C11.8022 11 11.6089 11.0586 11.4444 11.1685C11.28 11.2784 11.1518 11.4346 11.0761 11.6173C11.0004 11.8 10.9806 12.0011 11.0192 12.1951C11.0578 12.3891 11.153 12.5673 11.2929 12.7071C11.4327 12.847 11.6109 12.9422 11.8049 12.9808C11.9989 13.0194 12.2 12.9996 12.3827 12.9239C12.5654 12.8482 12.7216 12.72 12.8315 12.5556C12.9414 12.3911 13 12.1978 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM8 7C7.80222 7 7.60888 7.05865 7.44443 7.16853C7.27998 7.27841 7.15181 7.43459 7.07612 7.61732C7.00043 7.80004 6.98063 8.00111 7.01921 8.19509C7.0578 8.38907 7.15304 8.56725 7.29289 8.70711C7.43275 8.84696 7.61093 8.9422 7.80491 8.98079C7.99889 9.01937 8.19996 8.99957 8.38268 8.92388C8.56541 8.84819 8.72159 8.72002 8.83147 8.55557C8.94135 8.39112 9 8.19778 9 8C9 7.73478 8.89464 7.48043 8.70711 7.29289C8.51957 7.10536 8.26522 7 8 7ZM17 2H7C5.67392 2 4.40215 2.52678 3.46447 3.46447C2.52678 4.40215 2 5.67392 2 7V17C2 18.3261 2.52678 19.5979 3.46447 20.5355C4.40215 21.4732 5.67392 22 7 22H17C18.3261 22 19.5979 21.4732 20.5355 20.5355C21.4732 19.5979 22 18.3261 22 17V7C22 5.67392 21.4732 4.40215 20.5355 3.46447C19.5979 2.52678 18.3261 2 17 2ZM20 17C20 17.7956 19.6839 18.5587 19.1213 19.1213C18.5587 19.6839 17.7956 20 17 20H7C6.20435 20 5.44129 19.6839 4.87868 19.1213C4.31607 18.5587 4 17.7956 4 17V7C4 6.20435 4.31607 5.44129 4.87868 4.87868C5.44129 4.31607 6.20435 4 7 4H17C17.7956 4 18.5587 4.31607 19.1213 4.87868C19.6839 5.44129 20 6.20435 20 7V17ZM16 15C15.8022 15 15.6089 15.0586 15.4444 15.1685C15.28 15.2784 15.1518 15.4346 15.0761 15.6173C15.0004 15.8 14.9806 16.0011 15.0192 16.1951C15.0578 16.3891 15.153 16.5673 15.2929 16.7071C15.4327 16.847 15.6109 16.9422 15.8049 16.9808C15.9989 17.0194 16.2 16.9996 16.3827 16.9239C16.5654 16.8482 16.7216 16.72 16.8315 16.5556C16.9414 16.3911 17 16.1978 17 16C17 15.7348 16.8946 15.4804 16.7071 15.2929C16.5196 15.1054 16.2652 15 16 15Z" fill={props.color}/>
</svg>
  );
}
