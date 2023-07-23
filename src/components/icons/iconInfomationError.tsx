import { type IconProps } from "@/types/icon";

export const IconIformationError = (props: IconProps) => (
  <svg
    viewBox="0 0 14 14"
    width={`${props?.size ?? 1.2}rem`}
    height={`${props?.size ?? 1.2}rem`}
    fill="none"
    {...props}
  >
    <path
      stroke="#CD3636"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.763 4.386c.683-.598 1.791-.598 2.475 0 .683.598.683 1.568 0 2.166-.12.104-.251.19-.391.257C7.412 7.02 7 7.392 7 7.875v.438M12.25 7a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0ZM7 10.063h.004v.004H7v-.005Z"
    />
  </svg>
);
