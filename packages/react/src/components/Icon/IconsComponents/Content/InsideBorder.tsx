import React from 'react';
import { IconProps } from "../styles";

export function InsideBorder(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M8 5C8.19778 5 8.39112 4.94135 8.55557 4.83147C8.72002 4.72159 8.84819 4.56541 8.92388 4.38268C8.99957 4.19996 9.01937 3.99889 8.98079 3.80491C8.9422 3.61093 8.84696 3.43275 8.70711 3.29289C8.56725 3.15304 8.38907 3.0578 8.19509 3.01922C8.00111 2.98063 7.80004 3.00043 7.61732 3.07612C7.43459 3.15181 7.27841 3.27998 7.16853 3.44443C7.05865 3.60888 7 3.80222 7 4C7 4.26522 7.10536 4.51957 7.29289 4.70711C7.48043 4.89464 7.73478 5 8 5ZM4 9C4.19778 9 4.39112 8.94135 4.55557 8.83147C4.72002 8.72159 4.84819 8.56541 4.92388 8.38268C4.99957 8.19996 5.01937 7.99889 4.98079 7.80491C4.9422 7.61093 4.84696 7.43275 4.70711 7.29289C4.56725 7.15304 4.38907 7.0578 4.19509 7.01922C4.00111 6.98063 3.80004 7.00043 3.61732 7.07612C3.43459 7.15181 3.27841 7.27998 3.16853 7.44443C3.05865 7.60888 3 7.80222 3 8C3 8.26522 3.10536 8.51957 3.29289 8.70711C3.48043 8.89464 3.73478 9 4 9ZM4 5C4.19778 5 4.39112 4.94135 4.55557 4.83147C4.72002 4.72159 4.84819 4.56541 4.92388 4.38268C4.99957 4.19996 5.01937 3.99889 4.98079 3.80491C4.9422 3.61093 4.84696 3.43275 4.70711 3.29289C4.56725 3.15304 4.38907 3.0578 4.19509 3.01922C4.00111 2.98063 3.80004 3.00043 3.61732 3.07612C3.43459 3.15181 3.27841 3.27998 3.16853 3.44443C3.05865 3.60888 3 3.80222 3 4C3 4.26522 3.10536 4.51957 3.29289 4.70711C3.48043 4.89464 3.73478 5 4 5ZM4 19C3.80222 19 3.60888 19.0586 3.44443 19.1685C3.27998 19.2784 3.15181 19.4346 3.07612 19.6173C3.00043 19.8 2.98063 20.0011 3.01922 20.1951C3.0578 20.3891 3.15304 20.5673 3.29289 20.7071C3.43275 20.847 3.61093 20.9422 3.80491 20.9808C3.99889 21.0194 4.19996 20.9996 4.38268 20.9239C4.56541 20.8482 4.72159 20.72 4.83147 20.5556C4.94135 20.3911 5 20.1978 5 20C5 19.7348 4.89464 19.4804 4.70711 19.2929C4.51957 19.1054 4.26522 19 4 19ZM20 5C20.1978 5 20.3911 4.94135 20.5556 4.83147C20.72 4.72159 20.8482 4.56541 20.9239 4.38268C20.9996 4.19996 21.0194 3.99889 20.9808 3.80491C20.9422 3.61093 20.847 3.43275 20.7071 3.29289C20.5673 3.15304 20.3891 3.0578 20.1951 3.01922C20.0011 2.98063 19.8 3.00043 19.6173 3.07612C19.4346 3.15181 19.2784 3.27998 19.1685 3.44443C19.0586 3.60888 19 3.80222 19 4C19 4.26522 19.1054 4.51957 19.2929 4.70711C19.4804 4.89464 19.7348 5 20 5ZM20 9C20.1978 9 20.3911 8.94135 20.5556 8.83147C20.72 8.72159 20.8482 8.56541 20.9239 8.38268C20.9996 8.19996 21.0194 7.99889 20.9808 7.80491C20.9422 7.61093 20.847 7.43275 20.7071 7.29289C20.5673 7.15304 20.3891 7.0578 20.1951 7.01922C20.0011 6.98063 19.8 7.00043 19.6173 7.07612C19.4346 7.15181 19.2784 7.27998 19.1685 7.44443C19.0586 7.60888 19 7.80222 19 8C19 8.26522 19.1054 8.51957 19.2929 8.70711C19.4804 8.89464 19.7348 9 20 9ZM16 5C16.1978 5 16.3911 4.94135 16.5556 4.83147C16.72 4.72159 16.8482 4.56541 16.9239 4.38268C16.9996 4.19996 17.0194 3.99889 16.9808 3.80491C16.9422 3.61093 16.847 3.43275 16.7071 3.29289C16.5673 3.15304 16.3891 3.0578 16.1951 3.01922C16.0011 2.98063 15.8 3.00043 15.6173 3.07612C15.4346 3.15181 15.2784 3.27998 15.1685 3.44443C15.0587 3.60888 15 3.80222 15 4C15 4.26522 15.1054 4.51957 15.2929 4.70711C15.4804 4.89464 15.7348 5 16 5ZM20 19C19.8022 19 19.6089 19.0586 19.4444 19.1685C19.28 19.2784 19.1518 19.4346 19.0761 19.6173C19.0004 19.8 18.9806 20.0011 19.0192 20.1951C19.0578 20.3891 19.153 20.5673 19.2929 20.7071C19.4327 20.847 19.6109 20.9422 19.8049 20.9808C19.9989 21.0194 20.2 20.9996 20.3827 20.9239C20.5654 20.8482 20.7216 20.72 20.8315 20.5556C20.9414 20.3911 21 20.1978 21 20C21 19.7348 20.8946 19.4804 20.7071 19.2929C20.5196 19.1054 20.2652 19 20 19ZM4 15C3.80222 15 3.60888 15.0587 3.44443 15.1685C3.27998 15.2784 3.15181 15.4346 3.07612 15.6173C3.00043 15.8 2.98063 16.0011 3.01922 16.1951C3.0578 16.3891 3.15304 16.5673 3.29289 16.7071C3.43275 16.847 3.61093 16.9422 3.80491 16.9808C3.99889 17.0194 4.19996 16.9996 4.38268 16.9239C4.56541 16.8482 4.72159 16.72 4.83147 16.5556C4.94135 16.3911 5 16.1978 5 16C5 15.7348 4.89464 15.4804 4.70711 15.2929C4.51957 15.1054 4.26522 15 4 15ZM20 15C19.8022 15 19.6089 15.0587 19.4444 15.1685C19.28 15.2784 19.1518 15.4346 19.0761 15.6173C19.0004 15.8 18.9806 16.0011 19.0192 16.1951C19.0578 16.3891 19.153 16.5673 19.2929 16.7071C19.4327 16.847 19.6109 16.9422 19.8049 16.9808C19.9989 17.0194 20.2 16.9996 20.3827 16.9239C20.5654 16.8482 20.7216 16.72 20.8315 16.5556C20.9414 16.3911 21 16.1978 21 16C21 15.7348 20.8946 15.4804 20.7071 15.2929C20.5196 15.1054 20.2652 15 20 15ZM16 19C15.8022 19 15.6089 19.0586 15.4444 19.1685C15.28 19.2784 15.1518 19.4346 15.0761 19.6173C15.0004 19.8 14.9806 20.0011 15.0192 20.1951C15.0578 20.3891 15.153 20.5673 15.2929 20.7071C15.4327 20.847 15.6109 20.9422 15.8049 20.9808C15.9989 21.0194 16.2 20.9996 16.3827 20.9239C16.5654 20.8482 16.7216 20.72 16.8315 20.5556C16.9414 20.3911 17 20.1978 17 20C17 19.7348 16.8946 19.4804 16.7071 19.2929C16.5196 19.1054 16.2652 19 16 19ZM21 12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11H13V4C13 3.73478 12.8946 3.48043 12.7071 3.29289C12.5196 3.10536 12.2652 3 12 3C11.7348 3 11.4804 3.10536 11.2929 3.29289C11.1054 3.48043 11 3.73478 11 4V11H4C3.73478 11 3.48043 11.1054 3.29289 11.2929C3.10536 11.4804 3 11.7348 3 12C3 12.2652 3.10536 12.5196 3.29289 12.7071C3.48043 12.8946 3.73478 13 4 13H11V20C11 20.2652 11.1054 20.5196 11.2929 20.7071C11.4804 20.8946 11.7348 21 12 21C12.2652 21 12.5196 20.8946 12.7071 20.7071C12.8946 20.5196 13 20.2652 13 20V13H20C20.2652 13 20.5196 12.8946 20.7071 12.7071C20.8946 12.5196 21 12.2652 21 12ZM8 19C7.80222 19 7.60888 19.0586 7.44443 19.1685C7.27998 19.2784 7.15181 19.4346 7.07612 19.6173C7.00043 19.8 6.98063 20.0011 7.01922 20.1951C7.0578 20.3891 7.15304 20.5673 7.29289 20.7071C7.43275 20.847 7.61093 20.9422 7.80491 20.9808C7.99889 21.0194 8.19996 20.9996 8.38268 20.9239C8.56541 20.8482 8.72159 20.72 8.83147 20.5556C8.94135 20.3911 9 20.1978 9 20C9 19.7348 8.89464 19.4804 8.70711 19.2929C8.51957 19.1054 8.26522 19 8 19Z" fill={props.color}/>
</svg>
  );
}
