import React from 'react';
import { IconProps } from "../styles";

export function Share(props: IconProps): JSX.Element {
  return (
<svg className={props.className} {...props} fill={props.color} xmlns="http://www.w3.org/2000/svg">
<path d="M18 14.0001C17.4092 14.004 16.8266 14.1388 16.294 14.3947C15.7615 14.6506 15.2922 15.0213 14.92 15.4801L9.82003 13.1301C10.0598 12.3959 10.0598 11.6044 9.82003 10.8701L14.92 8.52011C15.5216 9.24608 16.3604 9.73619 17.2882 9.90395C18.216 10.0717 19.1732 9.90634 19.991 9.43702C20.8087 8.96769 21.4344 8.22459 21.7576 7.33886C22.0808 6.45312 22.0807 5.4817 21.7573 4.59602C21.434 3.71035 20.8082 2.96736 19.9903 2.49818C19.1725 2.02901 18.2152 1.86381 17.2875 2.03174C16.3597 2.19967 15.521 2.68993 14.9196 3.41601C14.3181 4.14208 13.9924 5.05729 14 6.00011C14.003 6.23835 14.0265 6.47588 14.07 6.71011L8.79003 9.14011C8.22711 8.58969 7.51427 8.21763 6.74083 8.07054C5.96739 7.92345 5.16775 8.00788 4.44208 8.31325C3.71641 8.61861 3.09699 9.13133 2.66143 9.78718C2.22587 10.443 1.99353 11.2128 1.99353 12.0001C1.99353 12.7874 2.22587 13.5572 2.66143 14.2131C3.09699 14.8689 3.71641 15.3816 4.44208 15.687C5.16775 15.9923 5.96739 16.0768 6.74083 15.9297C7.51427 15.7826 8.22711 15.4105 8.79003 14.8601L14.07 17.2901C14.0265 17.5243 14.003 17.7619 14 18.0001C14 18.7912 14.2346 19.5646 14.6742 20.2224C15.1137 20.8802 15.7384 21.3929 16.4693 21.6956C17.2002 21.9984 18.0045 22.0776 18.7804 21.9233C19.5563 21.7689 20.269 21.388 20.8285 20.8285C21.3879 20.2691 21.7688 19.5564 21.9232 18.7805C22.0775 18.0046 21.9983 17.2003 21.6955 16.4694C21.3928 15.7385 20.8801 15.1138 20.2223 14.6742C19.5645 14.2347 18.7912 14.0001 18 14.0001ZM18 4.00011C18.3956 4.00011 18.7823 4.11741 19.1112 4.33718C19.4401 4.55694 19.6964 4.8693 19.8478 5.23475C19.9992 5.6002 20.0388 6.00233 19.9616 6.3903C19.8844 6.77826 19.6939 7.13462 19.4142 7.41433C19.1345 7.69403 18.7782 7.88451 18.3902 7.96169C18.0022 8.03886 17.6001 7.99925 17.2347 7.84787C16.8692 7.6965 16.5569 7.44015 16.3371 7.11125C16.1173 6.78236 16 6.39568 16 6.00011C16 5.46968 16.2107 4.96097 16.5858 4.5859C16.9609 4.21083 17.4696 4.00011 18 4.00011ZM6.00003 14.0001C5.60447 14.0001 5.21779 13.8828 4.88889 13.6631C4.55999 13.4433 4.30364 13.1309 4.15227 12.7655C4.00089 12.4 3.96129 11.9979 4.03846 11.6099C4.11563 11.222 4.30611 10.8656 4.58581 10.5859C4.86552 10.3062 5.22189 10.1157 5.60985 10.0385C5.99781 9.96137 6.39994 10.001 6.7654 10.1524C7.13085 10.3037 7.4432 10.5601 7.66297 10.889C7.88273 11.2179 8.00003 11.6046 8.00003 12.0001C8.00003 12.5305 7.78931 13.0393 7.41424 13.4143C7.03917 13.7894 6.53046 14.0001 6.00003 14.0001ZM18 20.0001C17.6045 20.0001 17.2178 19.8828 16.8889 19.6631C16.56 19.4433 16.3036 19.1309 16.1523 18.7655C16.0009 18.4 15.9613 17.9979 16.0385 17.6099C16.1156 17.222 16.3061 16.8656 16.5858 16.5859C16.8655 16.3062 17.2219 16.1157 17.6098 16.0385C17.9978 15.9614 18.3999 16.001 18.7654 16.1524C19.1308 16.3037 19.4432 16.5601 19.663 16.889C19.8827 17.2179 20 17.6046 20 18.0001C20 18.5305 19.7893 19.0393 19.4142 19.4143C19.0392 19.7894 18.5305 20.0001 18 20.0001Z" fill={props.color}/>
</svg>
  );
}
