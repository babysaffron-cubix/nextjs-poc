import { FC } from "react";

const Export: FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 10V4c0-.6-.4-1-1-1h-8a1 1 0 0 0-.8.3l-4 4a1 1 0 0 0-.2.6V20c0 .6.4 1 1 1h12c.6 0 1-.4 1-1v-2M10 3v4c0 .6-.4 1-1 1H5m5 6h9m0 0-2-2m2 2-2 2"
    />
  </svg>
);

export default Export;
