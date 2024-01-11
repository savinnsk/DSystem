import React from "react";
import { IconProps } from "../styles";

export function Default3(props: IconProps): JSX.Element {
  return (
    <svg
      className={props.className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={props.color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 5.00002H19V6.00002C19 6.26524 19.1054 6.51959 19.2929 6.70713C19.4804 6.89467 19.7348 7.00002 20 7.00002C20.2652 7.00002 20.5196 6.89467 20.7071 6.70713C20.8946 6.51959 21 6.26524 21 6.00002V5.00002H22C22.2652 5.00002 22.5196 4.89467 22.7071 4.70713C22.8946 4.51959 23 4.26524 23 4.00002C23 3.73481 22.8946 3.48045 22.7071 3.29292C22.5196 3.10538 22.2652 3.00002 22 3.00002H21V2.00002C21 1.73481 20.8946 1.48045 20.7071 1.29292C20.5196 1.10538 20.2652 1.00002 20 1.00002C19.7348 1.00002 19.4804 1.10538 19.2929 1.29292C19.1054 1.48045 19 1.73481 19 2.00002V3.00002H18C17.7348 3.00002 17.4804 3.10538 17.2929 3.29292C17.1054 3.48045 17 3.73481 17 4.00002C17 4.26524 17.1054 4.51959 17.2929 4.70713C17.4804 4.89467 17.7348 5.00002 18 5.00002ZM15.5 9.00002C15.5 8.20437 15.1839 7.44131 14.6213 6.8787C14.0587 6.31609 13.2957 6.00002 12.5 6.00002H11.5C10.7044 6.00002 9.94129 6.31609 9.37868 6.8787C8.81607 7.44131 8.5 8.20437 8.5 9.00002C8.5 9.26524 8.60536 9.51959 8.7929 9.70713C8.98043 9.89467 9.23479 10 9.5 10C9.76522 10 10.0196 9.89467 10.2071 9.70713C10.3946 9.51959 10.5 9.26524 10.5 9.00002C10.5 8.73481 10.6054 8.48045 10.7929 8.29292C10.9804 8.10538 11.2348 8.00002 11.5 8.00002H12.5C12.7652 8.00002 13.0196 8.10538 13.2071 8.29292C13.3946 8.48045 13.5 8.73481 13.5 9.00002V10C13.5 10.2652 13.3946 10.5196 13.2071 10.7071C13.0196 10.8947 12.7652 11 12.5 11H12C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4805 11 11.7348 11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8947 11.7348 13 12 13H12.5C12.7652 13 13.0196 13.1054 13.2071 13.2929C13.3946 13.4805 13.5 13.7348 13.5 14V15C13.5 15.2652 13.3946 15.5196 13.2071 15.7071C13.0196 15.8947 12.7652 16 12.5 16H11.5C11.2348 16 10.9804 15.8947 10.7929 15.7071C10.6054 15.5196 10.5 15.2652 10.5 15C10.5 14.7348 10.3946 14.4805 10.2071 14.2929C10.0196 14.1054 9.76522 14 9.5 14C9.23479 14 8.98043 14.1054 8.7929 14.2929C8.60536 14.4805 8.5 14.7348 8.5 15C8.5 15.7957 8.81607 16.5587 9.37868 17.1213C9.94129 17.684 10.7044 18 11.5 18H12.5C13.2957 18 14.0587 17.684 14.6213 17.1213C15.1839 16.5587 15.5 15.7957 15.5 15V14C15.4956 13.26 15.2178 12.5477 14.72 12C15.2178 11.4524 15.4956 10.7401 15.5 10V9.00002ZM21.6 9.00002C21.4713 9.02626 21.349 9.0776 21.2402 9.15111C21.1313 9.22462 21.038 9.31886 20.9656 9.42843C20.8931 9.53801 20.843 9.66079 20.818 9.78975C20.793 9.91871 20.7937 10.0513 20.82 10.18C21.2104 12.0762 20.979 14.0478 20.1601 15.8021C19.3412 17.5563 17.9785 18.9997 16.2741 19.9181C14.5698 20.8364 12.6148 21.1807 10.6993 20.8999C8.78381 20.619 7.00992 19.728 5.64097 18.3591C4.27202 16.9901 3.38099 15.2162 3.10014 13.3007C2.81929 11.3852 3.16359 9.4302 4.08194 7.72589C5.00028 6.02158 6.44372 4.65882 8.19798 3.83991C9.95224 3.021 11.9238 2.78958 13.82 3.18002C14.0852 3.23307 14.3606 3.17858 14.5857 3.02855C14.8107 2.87852 14.967 2.64524 15.02 2.38002C15.073 2.11481 15.0186 1.83938 14.8685 1.61434C14.7185 1.38929 14.4852 1.23307 14.22 1.18002C13.4882 1.04367 12.7442 0.983353 12 1.00002C9.82441 1.00002 7.69767 1.64516 5.88873 2.85386C4.07979 4.06255 2.66989 5.78052 1.83733 7.7905C1.00477 9.80049 0.786929 12.0122 1.21137 14.146C1.6358 16.2798 2.68345 18.2398 4.22183 19.7782C5.76021 21.3166 7.72022 22.3642 9.85401 22.7887C11.9878 23.2131 14.1995 22.9953 16.2095 22.1627C18.2195 21.3301 19.9375 19.9202 21.1462 18.1113C22.3549 16.3024 23 14.1756 23 12C23.0021 11.2611 22.9284 10.5239 22.78 9.80002C22.7561 9.66952 22.7064 9.54508 22.6338 9.43397C22.5613 9.32286 22.4674 9.22729 22.3576 9.15283C22.2478 9.07838 22.1242 9.02652 21.9942 9.00028C21.8641 8.97405 21.7301 8.97396 21.6 9.00002Z"
        fill={props.color}
      />
    </svg>
  );
}
