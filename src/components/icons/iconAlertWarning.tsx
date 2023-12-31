import { type IconProps } from "@/interfaces/icon";

export const IconAlertWarning = (props: IconProps) => (
  <svg
    width={`${props?.size ?? 1.2}rem`}
    height={`${props?.size ?? 1.2}rem`}
    fill="currentColor"
    style={{
      alignSelf: "flex-start",
    }}
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M236.8 188.09 149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19 23.51 23.51 0 0 0 .02-23.72Zm-13.87 15.71a8.5 8.5 0 0 1-7.48 4.2H40.55a8.5 8.5 0 0 1-7.48-4.2 7.59 7.59 0 0 1 0-7.72l87.45-151.87a8.75 8.75 0 0 1 15 0l87.45 151.87a7.59 7.59 0 0 1-.04 7.72ZM120 144v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0Zm20 36a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
  </svg>

);
