import React from 'react';
import { IconProps } from "../styles";

export function RightBorder(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 7C4.30222 7 4.10888 7.05865 3.94443 7.16853C3.77998 7.27841 3.65181 7.43459 3.57612 7.61732C3.50043 7.80004 3.48063 8.00111 3.51922 8.19509C3.5578 8.38907 3.65304 8.56725 3.79289 8.70711C3.93275 8.84696 4.11093 8.9422 4.30491 8.98079C4.49889 9.01937 4.69996 8.99957 4.88268 8.92388C5.06541 8.84819 5.22159 8.72002 5.33147 8.55557C5.44135 8.39112 5.5 8.19778 5.5 8C5.5 7.73478 5.39464 7.48043 5.20711 7.29289C5.01957 7.10536 4.76522 7 4.5 7ZM4.5 3C4.30222 3 4.10888 3.05865 3.94443 3.16853C3.77998 3.27841 3.65181 3.43459 3.57612 3.61732C3.50043 3.80004 3.48063 4.00111 3.51922 4.19509C3.5578 4.38907 3.65304 4.56725 3.79289 4.70711C3.93275 4.84696 4.11093 4.9422 4.30491 4.98079C4.49889 5.01937 4.69996 4.99957 4.88268 4.92388C5.06541 4.84819 5.22159 4.72002 5.33147 4.55557C5.44135 4.39112 5.5 4.19778 5.5 4C5.5 3.73478 5.39464 3.48043 5.20711 3.29289C5.01957 3.10536 4.76522 3 4.5 3ZM8.5 19C8.30222 19 8.10888 19.0586 7.94443 19.1685C7.77998 19.2784 7.65181 19.4346 7.57612 19.6173C7.50043 19.8 7.48063 20.0011 7.51922 20.1951C7.5578 20.3891 7.65304 20.5673 7.79289 20.7071C7.93275 20.847 8.11093 20.9422 8.30491 20.9808C8.49889 21.0194 8.69996 20.9996 8.88268 20.9239C9.06541 20.8482 9.22159 20.72 9.33147 20.5556C9.44135 20.3911 9.5 20.1978 9.5 20C9.5 19.7348 9.39464 19.4804 9.20711 19.2929C9.01957 19.1054 8.76522 19 8.5 19ZM4.5 19C4.30222 19 4.10888 19.0586 3.94443 19.1685C3.77998 19.2784 3.65181 19.4346 3.57612 19.6173C3.50043 19.8 3.48063 20.0011 3.51922 20.1951C3.5578 20.3891 3.65304 20.5673 3.79289 20.7071C3.93275 20.847 4.11093 20.9422 4.30491 20.9808C4.49889 21.0194 4.69996 20.9996 4.88268 20.9239C5.06541 20.8482 5.22159 20.72 5.33147 20.5556C5.44135 20.3911 5.5 20.1978 5.5 20C5.5 19.7348 5.39464 19.4804 5.20711 19.2929C5.01957 19.1054 4.76522 19 4.5 19ZM8.5 11C8.30222 11 8.10888 11.0586 7.94443 11.1685C7.77998 11.2784 7.65181 11.4346 7.57612 11.6173C7.50043 11.8 7.48063 12.0011 7.51922 12.1951C7.5578 12.3891 7.65304 12.5673 7.79289 12.7071C7.93275 12.847 8.11093 12.9422 8.30491 12.9808C8.49889 13.0194 8.69996 12.9996 8.88268 12.9239C9.06541 12.8482 9.22159 12.72 9.33147 12.5556C9.44135 12.3911 9.5 12.1978 9.5 12C9.5 11.7348 9.39464 11.4804 9.20711 11.2929C9.01957 11.1054 8.76522 11 8.5 11ZM8.5 3C8.30222 3 8.10888 3.05865 7.94443 3.16853C7.77998 3.27841 7.65181 3.43459 7.57612 3.61732C7.50043 3.80004 7.48063 4.00111 7.51922 4.19509C7.5578 4.38907 7.65304 4.56725 7.79289 4.70711C7.93275 4.84696 8.11093 4.9422 8.30491 4.98079C8.49889 5.01937 8.69996 4.99957 8.88268 4.92388C9.06541 4.84819 9.22159 4.72002 9.33147 4.55557C9.44135 4.39112 9.5 4.19778 9.5 4C9.5 3.73478 9.39464 3.48043 9.20711 3.29289C9.01957 3.10536 8.76522 3 8.5 3ZM4.5 11C4.30222 11 4.10888 11.0586 3.94443 11.1685C3.77998 11.2784 3.65181 11.4346 3.57612 11.6173C3.50043 11.8 3.48063 12.0011 3.51922 12.1951C3.5578 12.3891 3.65304 12.5673 3.79289 12.7071C3.93275 12.847 4.11093 12.9422 4.30491 12.9808C4.49889 13.0194 4.69996 12.9996 4.88268 12.9239C5.06541 12.8482 5.22159 12.72 5.33147 12.5556C5.44135 12.3911 5.5 12.1978 5.5 12C5.5 11.7348 5.39464 11.4804 5.20711 11.2929C5.01957 11.1054 4.76522 11 4.5 11ZM4.5 15C4.30222 15 4.10888 15.0586 3.94443 15.1685C3.77998 15.2784 3.65181 15.4346 3.57612 15.6173C3.50043 15.8 3.48063 16.0011 3.51922 16.1951C3.5578 16.3891 3.65304 16.5673 3.79289 16.7071C3.93275 16.847 4.11093 16.9422 4.30491 16.9808C4.49889 17.0194 4.69996 16.9996 4.88268 16.9239C5.06541 16.8482 5.22159 16.72 5.33147 16.5556C5.44135 16.3911 5.5 16.1978 5.5 16C5.5 15.7348 5.39464 15.4804 5.20711 15.2929C5.01957 15.1054 4.76522 15 4.5 15ZM16.5 3C16.3022 3 16.1089 3.05865 15.9444 3.16853C15.78 3.27841 15.6518 3.43459 15.5761 3.61732C15.5004 3.80004 15.4806 4.00111 15.5192 4.19509C15.5578 4.38907 15.653 4.56725 15.7929 4.70711C15.9327 4.84696 16.1109 4.9422 16.3049 4.98079C16.4989 5.01937 16.7 4.99957 16.8827 4.92388C17.0654 4.84819 17.2216 4.72002 17.3315 4.55557C17.4414 4.39112 17.5 4.19778 17.5 4C17.5 3.73478 17.3946 3.48043 17.2071 3.29289C17.0196 3.10536 16.7652 3 16.5 3ZM16.5 11C16.3022 11 16.1089 11.0586 15.9444 11.1685C15.78 11.2784 15.6518 11.4346 15.5761 11.6173C15.5004 11.8 15.4806 12.0011 15.5192 12.1951C15.5578 12.3891 15.653 12.5673 15.7929 12.7071C15.9327 12.847 16.1109 12.9422 16.3049 12.9808C16.4989 13.0194 16.7 12.9996 16.8827 12.9239C17.0654 12.8482 17.2216 12.72 17.3315 12.5556C17.4414 12.3911 17.5 12.1978 17.5 12C17.5 11.7348 17.3946 11.4804 17.2071 11.2929C17.0196 11.1054 16.7652 11 16.5 11ZM12.5 19C12.3022 19 12.1089 19.0586 11.9444 19.1685C11.78 19.2784 11.6518 19.4346 11.5761 19.6173C11.5004 19.8 11.4806 20.0011 11.5192 20.1951C11.5578 20.3891 11.653 20.5673 11.7929 20.7071C11.9327 20.847 12.1109 20.9422 12.3049 20.9808C12.4989 21.0194 12.7 20.9996 12.8827 20.9239C13.0654 20.8482 13.2216 20.72 13.3315 20.5556C13.4414 20.3911 13.5 20.1978 13.5 20C13.5 19.7348 13.3946 19.4804 13.2071 19.2929C13.0196 19.1054 12.7652 19 12.5 19ZM12.5 3C12.3022 3 12.1089 3.05865 11.9444 3.16853C11.78 3.27841 11.6518 3.43459 11.5761 3.61732C11.5004 3.80004 11.4806 4.00111 11.5192 4.19509C11.5578 4.38907 11.653 4.56725 11.7929 4.70711C11.9327 4.84696 12.1109 4.9422 12.3049 4.98079C12.4989 5.01937 12.7 4.99957 12.8827 4.92388C13.0654 4.84819 13.2216 4.72002 13.3315 4.55557C13.4414 4.39112 13.5 4.19778 13.5 4C13.5 3.73478 13.3946 3.48043 13.2071 3.29289C13.0196 3.10536 12.7652 3 12.5 3ZM20.5 3C20.2348 3 19.9804 3.10536 19.7929 3.29289C19.6054 3.48043 19.5 3.73478 19.5 4V20C19.5 20.2652 19.6054 20.5196 19.7929 20.7071C19.9804 20.8946 20.2348 21 20.5 21C20.7652 21 21.0196 20.8946 21.2071 20.7071C21.3946 20.5196 21.5 20.2652 21.5 20V4C21.5 3.73478 21.3946 3.48043 21.2071 3.29289C21.0196 3.10536 20.7652 3 20.5 3ZM16.5 19C16.3022 19 16.1089 19.0586 15.9444 19.1685C15.78 19.2784 15.6518 19.4346 15.5761 19.6173C15.5004 19.8 15.4806 20.0011 15.5192 20.1951C15.5578 20.3891 15.653 20.5673 15.7929 20.7071C15.9327 20.847 16.1109 20.9422 16.3049 20.9808C16.4989 21.0194 16.7 20.9996 16.8827 20.9239C17.0654 20.8482 17.2216 20.72 17.3315 20.5556C17.4414 20.3911 17.5 20.1978 17.5 20C17.5 19.7348 17.3946 19.4804 17.2071 19.2929C17.0196 19.1054 16.7652 19 16.5 19ZM12.5 7C12.3022 7 12.1089 7.05865 11.9444 7.16853C11.78 7.27841 11.6518 7.43459 11.5761 7.61732C11.5004 7.80004 11.4806 8.00111 11.5192 8.19509C11.5578 8.38907 11.653 8.56725 11.7929 8.70711C11.9327 8.84696 12.1109 8.9422 12.3049 8.98079C12.4989 9.01937 12.7 8.99957 12.8827 8.92388C13.0654 8.84819 13.2216 8.72002 13.3315 8.55557C13.4414 8.39112 13.5 8.19778 13.5 8C13.5 7.73478 13.3946 7.48043 13.2071 7.29289C13.0196 7.10536 12.7652 7 12.5 7ZM12.5 15C12.3022 15 12.1089 15.0586 11.9444 15.1685C11.78 15.2784 11.6518 15.4346 11.5761 15.6173C11.5004 15.8 11.4806 16.0011 11.5192 16.1951C11.5578 16.3891 11.653 16.5673 11.7929 16.7071C11.9327 16.847 12.1109 16.9422 12.3049 16.9808C12.4989 17.0194 12.7 16.9996 12.8827 16.9239C13.0654 16.8482 13.2216 16.72 13.3315 16.5556C13.4414 16.3911 13.5 16.1978 13.5 16C13.5 15.7348 13.3946 15.4804 13.2071 15.2929C13.0196 15.1054 12.7652 15 12.5 15ZM12.5 11C12.3022 11 12.1089 11.0586 11.9444 11.1685C11.78 11.2784 11.6518 11.4346 11.5761 11.6173C11.5004 11.8 11.4806 12.0011 11.5192 12.1951C11.5578 12.3891 11.653 12.5673 11.7929 12.7071C11.9327 12.847 12.1109 12.9422 12.3049 12.9808C12.4989 13.0194 12.7 12.9996 12.8827 12.9239C13.0654 12.8482 13.2216 12.72 13.3315 12.5556C13.4414 12.3911 13.5 12.1978 13.5 12C13.5 11.7348 13.3946 11.4804 13.2071 11.2929C13.0196 11.1054 12.7652 11 12.5 11Z" fill={props.color}/>
</svg>
  );
}
