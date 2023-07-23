import { type IconProps } from "@/types/icon";

export const LoaderCircle = (props: IconProps) => (
  <svg
    width={`${props.size ?? 1.5}rem`}
    height={`${props.size ?? 1.5}rem`}
    viewBox="0 0 56 56"
    fill="none"
    {...props}
  >
    <path
      // stroke="#a0a0a0"
      // strokeWidth={8}
      d="M36.639 5.609a24 24 0 1 1-17.278 44.783A24 24 0 0 1 36.64 5.61Z"
    />
    <path
      stroke="#2D2D2D"
      strokeLinecap="round"
      strokeWidth={8}
      d="M36.639 5.609a24 24 0 0 1-17.277 44.783"
    />
  </svg>
);
