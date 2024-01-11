import React from 'react';
import { IconProps } from "../styles";

export function Bug(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M19 14H21C21.2652 14 21.5196 13.8946 21.7071 13.7071C21.8946 13.5196 22 13.2652 22 13C22 12.7348 21.8946 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12H19V11C18.9912 10.5393 18.9205 10.0819 18.79 9.64C19.73 9.27962 20.5393 8.64391 21.112 7.81603C21.6847 6.98815 21.9942 6.00667 22 5C22 4.73478 21.8946 4.48043 21.7071 4.29289C21.5196 4.10536 21.2652 4 21 4C20.7348 4 20.4804 4.10536 20.2929 4.29289C20.1054 4.48043 20 4.73478 20 5C19.9991 5.64484 19.7905 6.27224 19.405 6.7892C19.0196 7.30615 18.4778 7.68514 17.86 7.87C17.3668 7.23797 16.7289 6.7338 16 6.4C16.0104 6.26687 16.0104 6.13313 16 6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6C7.98965 6.13313 7.98965 6.26687 8 6.4C7.25662 6.72831 6.60446 7.23288 6.1 7.87C5.48968 7.67807 4.9567 7.29604 4.5789 6.77971C4.2011 6.26338 3.99826 5.63979 4 5C4 4.73478 3.89464 4.48043 3.70711 4.29289C3.51957 4.10536 3.26522 4 3 4C2.73478 4 2.48043 4.10536 2.29289 4.29289C2.10536 4.48043 2 4.73478 2 5C2.00577 6.00667 2.31526 6.98815 2.888 7.81603C3.46074 8.64391 4.27003 9.27962 5.21 9.64C5.07948 10.0819 5.00885 10.5393 5 11V12H3C2.73478 12 2.48043 12.1054 2.29289 12.2929C2.10536 12.4804 2 12.7348 2 13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H5V15C5.00086 15.4635 5.04776 15.9258 5.14 16.38C4.21628 16.7502 3.42404 17.3876 2.86466 18.2106C2.30528 19.0336 2.00422 20.0049 2 21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22C3.26522 22 3.51957 21.8946 3.70711 21.7071C3.89464 21.5196 4 21.2652 4 21C4.0027 20.4168 4.17535 19.847 4.49681 19.3604C4.81828 18.8737 5.27462 18.4913 5.81 18.26C6.40471 19.3862 7.29541 20.3289 8.38616 20.9864C9.47692 21.6439 10.7264 21.9914 12 21.9914C13.2736 21.9914 14.5231 21.6439 15.6138 20.9864C16.7046 20.3289 17.5953 19.3862 18.19 18.26C18.7254 18.4913 19.1817 18.8737 19.5032 19.3604C19.8247 19.847 19.9973 20.4168 20 21C20 21.2652 20.1054 21.5196 20.2929 21.7071C20.4804 21.8946 20.7348 22 21 22C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21C21.9958 20.0049 21.6947 19.0336 21.1353 18.2106C20.576 17.3876 19.7837 16.7502 18.86 16.38C18.9522 15.9258 18.9991 15.4635 19 15V14ZM11 19.9C9.87064 19.6695 8.8556 19.0558 8.12669 18.1629C7.39778 17.27 6.99976 16.1527 7 15V11C7 10.2044 7.31607 9.44129 7.87868 8.87868C8.44129 8.31607 9.20435 8 10 8H11V19.9ZM10 6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4C12.5304 4 13.0391 4.21071 13.4142 4.58579C13.7893 4.96086 14 5.46957 14 6H10ZM17 15C17.0002 16.1527 16.6022 17.27 15.8733 18.1629C15.1444 19.0558 14.1294 19.6695 13 19.9V8H14C14.7956 8 15.5587 8.31607 16.1213 8.87868C16.6839 9.44129 17 10.2044 17 11V15Z" fill={props.color}/>
</svg>
  );
}
