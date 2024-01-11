import React from 'react';
import { IconProps } from "../styles";

export function VerticalBorder(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M3 3C2.80222 3 2.60888 3.05865 2.44443 3.16853C2.27998 3.27841 2.15181 3.43459 2.07612 3.61732C2.00043 3.80004 1.98063 4.00111 2.01922 4.19509C2.0578 4.38907 2.15304 4.56725 2.29289 4.70711C2.43275 4.84696 2.61093 4.9422 2.80491 4.98079C2.99889 5.01937 3.19996 4.99957 3.38268 4.92388C3.56541 4.84819 3.72159 4.72002 3.83147 4.55557C3.94135 4.39112 4 4.19778 4 4C4 3.73478 3.89464 3.48043 3.70711 3.29289C3.51957 3.10536 3.26522 3 3 3ZM3 7C2.80222 7 2.60888 7.05865 2.44443 7.16853C2.27998 7.27841 2.15181 7.43459 2.07612 7.61732C2.00043 7.80004 1.98063 8.00111 2.01922 8.19509C2.0578 8.38907 2.15304 8.56725 2.29289 8.70711C2.43275 8.84696 2.61093 8.9422 2.80491 8.98079C2.99889 9.01937 3.19996 8.99957 3.38268 8.92388C3.56541 8.84819 3.72159 8.72002 3.83147 8.55557C3.94135 8.39112 4 8.19778 4 8C4 7.73478 3.89464 7.48043 3.70711 7.29289C3.51957 7.10536 3.26522 7 3 7ZM19 5C19.1978 5 19.3911 4.94135 19.5556 4.83147C19.72 4.72159 19.8482 4.56541 19.9239 4.38268C19.9996 4.19996 20.0194 3.99889 19.9808 3.80491C19.9422 3.61093 19.847 3.43275 19.7071 3.29289C19.5673 3.15304 19.3891 3.0578 19.1951 3.01922C19.0011 2.98063 18.8 3.00043 18.6173 3.07612C18.4346 3.15181 18.2784 3.27998 18.1685 3.44443C18.0586 3.60888 18 3.80222 18 4C18 4.26522 18.1054 4.51957 18.2929 4.70711C18.4804 4.89464 18.7348 5 19 5ZM7 11C6.80222 11 6.60888 11.0587 6.44443 11.1685C6.27998 11.2784 6.15181 11.4346 6.07612 11.6173C6.00043 11.8 5.98063 12.0011 6.01922 12.1951C6.0578 12.3891 6.15304 12.5673 6.29289 12.7071C6.43275 12.847 6.61093 12.9422 6.80491 12.9808C6.99889 13.0194 7.19996 12.9996 7.38268 12.9239C7.56541 12.8482 7.72159 12.72 7.83147 12.5556C7.94135 12.3911 8 12.1978 8 12C8 11.7348 7.89464 11.4804 7.70711 11.2929C7.51957 11.1054 7.26522 11 7 11ZM7 19C6.80222 19 6.60888 19.0586 6.44443 19.1685C6.27998 19.2784 6.15181 19.4346 6.07612 19.6173C6.00043 19.8 5.98063 20.0011 6.01922 20.1951C6.0578 20.3891 6.15304 20.5673 6.29289 20.7071C6.43275 20.847 6.61093 20.9422 6.80491 20.9808C6.99889 21.0194 7.19996 20.9996 7.38268 20.9239C7.56541 20.8482 7.72159 20.72 7.83147 20.5556C7.94135 20.3911 8 20.1978 8 20C8 19.7348 7.89464 19.4804 7.70711 19.2929C7.51957 19.1054 7.26522 19 7 19ZM7 3C6.80222 3 6.60888 3.05865 6.44443 3.16853C6.27998 3.27841 6.15181 3.43459 6.07612 3.61732C6.00043 3.80004 5.98063 4.00111 6.01922 4.19509C6.0578 4.38907 6.15304 4.56725 6.29289 4.70711C6.43275 4.84696 6.61093 4.9422 6.80491 4.98079C6.99889 5.01937 7.19996 4.99957 7.38268 4.92388C7.56541 4.84819 7.72159 4.72002 7.83147 4.55557C7.94135 4.39112 8 4.19778 8 4C8 3.73478 7.89464 3.48043 7.70711 3.29289C7.51957 3.10536 7.26522 3 7 3ZM3 15C2.80222 15 2.60888 15.0587 2.44443 15.1685C2.27998 15.2784 2.15181 15.4346 2.07612 15.6173C2.00043 15.8 1.98063 16.0011 2.01922 16.1951C2.0578 16.3891 2.15304 16.5673 2.29289 16.7071C2.43275 16.847 2.61093 16.9422 2.80491 16.9808C2.99889 17.0194 3.19996 16.9996 3.38268 16.9239C3.56541 16.8482 3.72159 16.72 3.83147 16.5556C3.94135 16.3911 4 16.1978 4 16C4 15.7348 3.89464 15.4804 3.70711 15.2929C3.51957 15.1054 3.26522 15 3 15ZM3 11C2.80222 11 2.60888 11.0587 2.44443 11.1685C2.27998 11.2784 2.15181 11.4346 2.07612 11.6173C2.00043 11.8 1.98063 12.0011 2.01922 12.1951C2.0578 12.3891 2.15304 12.5673 2.29289 12.7071C2.43275 12.847 2.61093 12.9422 2.80491 12.9808C2.99889 13.0194 3.19996 12.9996 3.38268 12.9239C3.56541 12.8482 3.72159 12.72 3.83147 12.5556C3.94135 12.3911 4 12.1978 4 12C4 11.7348 3.89464 11.4804 3.70711 11.2929C3.51957 11.1054 3.26522 11 3 11ZM3 19C2.80222 19 2.60888 19.0586 2.44443 19.1685C2.27998 19.2784 2.15181 19.4346 2.07612 19.6173C2.00043 19.8 1.98063 20.0011 2.01922 20.1951C2.0578 20.3891 2.15304 20.5673 2.29289 20.7071C2.43275 20.847 2.61093 20.9422 2.80491 20.9808C2.99889 21.0194 3.19996 20.9996 3.38268 20.9239C3.56541 20.8482 3.72159 20.72 3.83147 20.5556C3.94135 20.3911 4 20.1978 4 20C4 19.7348 3.89464 19.4804 3.70711 19.2929C3.51957 19.1054 3.26522 19 3 19ZM19 15C18.8022 15 18.6089 15.0587 18.4444 15.1685C18.28 15.2784 18.1518 15.4346 18.0761 15.6173C18.0004 15.8 17.9806 16.0011 18.0192 16.1951C18.0578 16.3891 18.153 16.5673 18.2929 16.7071C18.4327 16.847 18.6109 16.9422 18.8049 16.9808C18.9989 17.0194 19.2 16.9996 19.3827 16.9239C19.5654 16.8482 19.7216 16.72 19.8315 16.5556C19.9414 16.3911 20 16.1978 20 16C20 15.7348 19.8946 15.4804 19.7071 15.2929C19.5196 15.1054 19.2652 15 19 15ZM19 11C18.8022 11 18.6089 11.0587 18.4444 11.1685C18.28 11.2784 18.1518 11.4346 18.0761 11.6173C18.0004 11.8 17.9806 12.0011 18.0192 12.1951C18.0578 12.3891 18.153 12.5673 18.2929 12.7071C18.4327 12.847 18.6109 12.9422 18.8049 12.9808C18.9989 13.0194 19.2 12.9996 19.3827 12.9239C19.5654 12.8482 19.7216 12.72 19.8315 12.5556C19.9414 12.3911 20 12.1978 20 12C20 11.7348 19.8946 11.4804 19.7071 11.2929C19.5196 11.1054 19.2652 11 19 11ZM19 19C18.8022 19 18.6089 19.0586 18.4444 19.1685C18.28 19.2784 18.1518 19.4346 18.0761 19.6173C18.0004 19.8 17.9806 20.0011 18.0192 20.1951C18.0578 20.3891 18.153 20.5673 18.2929 20.7071C18.4327 20.847 18.6109 20.9422 18.8049 20.9808C18.9989 21.0194 19.2 20.9996 19.3827 20.9239C19.5654 20.8482 19.7216 20.72 19.8315 20.5556C19.9414 20.3911 20 20.1978 20 20C20 19.7348 19.8946 19.4804 19.7071 19.2929C19.5196 19.1054 19.2652 19 19 19ZM19 7C18.8022 7 18.6089 7.05865 18.4444 7.16853C18.28 7.27841 18.1518 7.43459 18.0761 7.61732C18.0004 7.80004 17.9806 8.00111 18.0192 8.19509C18.0578 8.38907 18.153 8.56725 18.2929 8.70711C18.4327 8.84696 18.6109 8.9422 18.8049 8.98079C18.9989 9.01937 19.2 8.99957 19.3827 8.92388C19.5654 8.84819 19.7216 8.72002 19.8315 8.55557C19.9414 8.39112 20 8.19778 20 8C20 7.73478 19.8946 7.48043 19.7071 7.29289C19.5196 7.10536 19.2652 7 19 7ZM15 3C14.8022 3 14.6089 3.05865 14.4444 3.16853C14.28 3.27841 14.1518 3.43459 14.0761 3.61732C14.0004 3.80004 13.9806 4.00111 14.0192 4.19509C14.0578 4.38907 14.153 4.56725 14.2929 4.70711C14.4327 4.84696 14.6109 4.9422 14.8049 4.98079C14.9989 5.01937 15.2 4.99957 15.3827 4.92388C15.5654 4.84819 15.7216 4.72002 15.8315 4.55557C15.9414 4.39112 16 4.19778 16 4C16 3.73478 15.8946 3.48043 15.7071 3.29289C15.5196 3.10536 15.2652 3 15 3ZM11 3C10.7348 3 10.4804 3.10536 10.2929 3.29289C10.1054 3.48043 10 3.73478 10 4V20C10 20.2652 10.1054 20.5196 10.2929 20.7071C10.4804 20.8946 10.7348 21 11 21C11.2652 21 11.5196 20.8946 11.7071 20.7071C11.8946 20.5196 12 20.2652 12 20V4C12 3.73478 11.8946 3.48043 11.7071 3.29289C11.5196 3.10536 11.2652 3 11 3ZM15 19C14.8022 19 14.6089 19.0586 14.4444 19.1685C14.28 19.2784 14.1518 19.4346 14.0761 19.6173C14.0004 19.8 13.9806 20.0011 14.0192 20.1951C14.0578 20.3891 14.153 20.5673 14.2929 20.7071C14.4327 20.847 14.6109 20.9422 14.8049 20.9808C14.9989 21.0194 15.2 20.9996 15.3827 20.9239C15.5654 20.8482 15.7216 20.72 15.8315 20.5556C15.9414 20.3911 16 20.1978 16 20C16 19.7348 15.8946 19.4804 15.7071 19.2929C15.5196 19.1054 15.2652 19 15 19ZM15 11C14.8022 11 14.6089 11.0587 14.4444 11.1685C14.28 11.2784 14.1518 11.4346 14.0761 11.6173C14.0004 11.8 13.9806 12.0011 14.0192 12.1951C14.0578 12.3891 14.153 12.5673 14.2929 12.7071C14.4327 12.847 14.6109 12.9422 14.8049 12.9808C14.9989 13.0194 15.2 12.9996 15.3827 12.9239C15.5654 12.8482 15.7216 12.72 15.8315 12.5556C15.9414 12.3911 16 12.1978 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11Z" fill={props.color}/>
</svg>
  );
}
