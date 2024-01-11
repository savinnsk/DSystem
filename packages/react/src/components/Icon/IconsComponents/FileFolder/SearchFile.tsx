import React from 'react';
import { IconProps } from "../styles";

export function SearchFile(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M12 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H10V7C10 7.79565 10.3161 8.55871 10.8787 9.12132C11.4413 9.68393 12.2044 10 13 10H16V11C16 11.2652 16.1054 11.5196 16.2929 11.7071C16.4804 11.8946 16.7348 12 17 12C17.2652 12 17.5196 11.8946 17.7071 11.7071C17.8946 11.5196 18 11.2652 18 11V9C18 9 18 9 18 8.94C17.9896 8.84813 17.9695 8.75763 17.94 8.67V8.58C17.8919 8.47718 17.8278 8.38267 17.75 8.3L11.75 2.3C11.6673 2.22222 11.5728 2.15808 11.47 2.11C11.4402 2.10576 11.4099 2.10576 11.38 2.11C11.2784 2.05174 11.1662 2.01434 11.05 2H5C4.20435 2 3.44129 2.31607 2.87868 2.87868C2.31607 3.44129 2 4.20435 2 5V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H12C12.2652 22 12.5196 21.8946 12.7071 21.7071C12.8946 21.5196 13 21.2652 13 21C13 20.7348 12.8946 20.4804 12.7071 20.2929C12.5196 20.1054 12.2652 20 12 20ZM12 5.41L14.59 8H13C12.7348 8 12.4804 7.89464 12.2929 7.70711C12.1054 7.51957 12 7.26522 12 7V5.41ZM7 8C6.73478 8 6.48043 8.10536 6.29289 8.29289C6.10536 8.48043 6 8.73478 6 9C6 9.26522 6.10536 9.51957 6.29289 9.70711C6.48043 9.89464 6.73478 10 7 10H8C8.26522 10 8.51957 9.89464 8.70711 9.70711C8.89464 9.51957 9 9.26522 9 9C9 8.73478 8.89464 8.48043 8.70711 8.29289C8.51957 8.10536 8.26522 8 8 8H7ZM21.71 20.29L20.54 19.13C20.914 18.4773 21.0636 17.7199 20.9661 16.974C20.8686 16.2281 20.5292 15.5347 20 15C19.513 14.4957 18.8854 14.1497 18.199 14.0071C17.5126 13.8646 16.7992 13.9321 16.1517 14.2008C15.5041 14.4695 14.9526 14.927 14.5688 15.5137C14.185 16.1004 13.9868 16.7891 14 17.49C13.9966 18.0932 14.1509 18.6868 14.4476 19.2119C14.7444 19.7371 15.1733 20.1755 15.6917 20.4838C16.2102 20.7921 16.8003 20.9594 17.4034 20.9693C18.0065 20.9791 18.6017 20.8311 19.13 20.54L20.29 21.71C20.383 21.8037 20.4936 21.8781 20.6154 21.9289C20.7373 21.9797 20.868 22.0058 21 22.0058C21.132 22.0058 21.2627 21.9797 21.3846 21.9289C21.5064 21.8781 21.617 21.8037 21.71 21.71C21.8037 21.617 21.8781 21.5064 21.9289 21.3846C21.9797 21.2627 22.0058 21.132 22.0058 21C22.0058 20.868 21.9797 20.7373 21.9289 20.6154C21.8781 20.4936 21.8037 20.383 21.71 20.29ZM18.54 18.54C18.2544 18.8086 17.8771 18.9581 17.485 18.9581C17.0929 18.9581 16.7156 18.8086 16.43 18.54C16.1547 18.2598 16.0003 17.8828 16 17.49C15.9979 17.2928 16.0359 17.0971 16.1115 16.915C16.1871 16.7328 16.2989 16.5678 16.44 16.43C16.7066 16.1648 17.0641 16.0111 17.44 16C17.6422 15.9876 17.8447 16.0171 18.035 16.0866C18.2252 16.1562 18.399 16.2643 18.5455 16.4042C18.692 16.5441 18.808 16.7128 18.8862 16.8996C18.9644 17.0865 19.0031 17.2875 19 17.49C18.9917 17.8871 18.8263 18.2647 18.54 18.54ZM13 12H7C6.73478 12 6.48043 12.1054 6.29289 12.2929C6.10536 12.4804 6 12.7348 6 13C6 13.2652 6.10536 13.5196 6.29289 13.7071C6.48043 13.8946 6.73478 14 7 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13C14 12.7348 13.8946 12.4804 13.7071 12.2929C13.5196 12.1054 13.2652 12 13 12ZM11 18C11.2652 18 11.5196 17.8946 11.7071 17.7071C11.8946 17.5196 12 17.2652 12 17C12 16.7348 11.8946 16.4804 11.7071 16.2929C11.5196 16.1054 11.2652 16 11 16H7C6.73478 16 6.48043 16.1054 6.29289 16.2929C6.10536 16.4804 6 16.7348 6 17C6 17.2652 6.10536 17.5196 6.29289 17.7071C6.48043 17.8946 6.73478 18 7 18H11Z" fill={props.color}/>
</svg>
  );
}
