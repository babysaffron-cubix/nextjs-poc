import { FC } from "react";

const ForgotPassword: FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
    width="24"
    height="24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M7 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h1m4-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7.4 1.6a2 2 0 0 1 0 2.7l-6 6-3.4.7.7-3.4 6-6a2 2 0 0 1 2.7 0Z"
    />
  </svg>
);

export default ForgotPassword;
